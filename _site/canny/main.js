let imgElement = document.getElementById('imageSrc');
let slider1 = document.getElementById('myRange');
let inputElement = document.getElementById('fileInput');

var edges = undefined;
var mat = undefined;

let THRESH1 = 128;
let canny = true;

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

inputElement.addEventListener('change', (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);


function displayImage() {
  if (edges !== undefined) {
    edges.delete();
  }

  if (canny) {
    edges = new cv.Mat();
    cv.Canny(mat, edges, THRESH1, 100, 3, false);
    for (let j = 0; j < edges.rows; j++) {
      for (let i = 0; i < edges.cols; i++) {
        let idx = i + j*edges.cols;
        edges.data[idx] = 255 - edges.data[idx];
      }
    }
  } else {
    edges = mat.clone();
    for (let j = 0; j < edges.rows; j++) {
      for (let i = 0; i < edges.cols; i++) {
        let idx = i + j*edges.cols;
        edges.data[idx] = (edges.data[idx] >= THRESH1) ? 255 : 0;
      }
    }
  }

  cv.imshow('canvasOutput', edges);
}

slider1.onchange = function() {
  THRESH1 = parseFloat(this.value);
  console.log('slider value:'+this.value);
  displayImage();
}

imgElement.onload = function() {
  if (mat !== undefined) {
    mat.delete()
  }
  mat = cv.imread(imgElement);
  cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY, 0);
  displayImage();
};

function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}

function edgeCheck() {
  canny = !canny;
  if (mat !== undefined) {
    displayImage();
  }
}

function saveClick() {
  let lines = [];
  let start = undefined;

  for (let j = 0; j < edges.rows; j++) {
    for (let i = 0; i < edges.cols; i++) {
      let idx = i + j*edges.cols;
      let col = edges.data[idx];

      if (start === undefined && col < 128) {
        start = i;
      }
      if (start !== undefined && col >= 128) {
        lines.push({x1: start, y1: j, x2: i, y2: j})
        start = undefined;
      }
    }
    if (start !== undefined) {
      lines.push({x1: start, y1: j, x2: edges.cols-1, y2: j})
      start = undefined;
    }
  }

  let text = "";
  let mx = 0;
  let my = 0;

  for (ln of lines) {
    text += "penup\n";
    if (my != ln.y1) {
      text += "backward 512\n";
      text += "right\n"
      text += "forward " + (ln.y1 - my) + "\n";
      text += "left\n"
      mx = 0;
      my = ln.y1;
    }
    text += "forward " + (ln.x1 - mx) + "\n";
    text += "pendown\n";
    text += "forward " + (ln.x2 - ln.x1) + "\n";
    mx = ln.x2;
  }
  let fname = document.getElementById("fileName").value;
  download(fname, text);
}
