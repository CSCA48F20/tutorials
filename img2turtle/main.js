let imgElement = document.getElementById('imageSrc');
let slider1 = document.getElementById('myRange');
let inputElement = document.getElementById('fileInput');

var edges = undefined;
var mat = undefined;

let THRESH1 = 128;
let MODE = 'canny';

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

function debounce(func, wait) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(null, args), wait)
  }
}

displayImage = debounce(function () {
  if (edges !== undefined) {
    edges.delete();
  }

  if (MODE == 'canny') {
    edges = new cv.Mat();
    cv.Canny(mat, edges, THRESH1, 100, 3, false);
    for (let j = 0; j < edges.rows; j++) {
      for (let i = 0; i < edges.cols; i++) {
        let idx = i + j * edges.cols;
        edges.data[idx] = 255 - edges.data[idx];
      }
    }
  } else if (MODE == 'thresh') {
    edges = mat.clone();
    for (let j = 0; j < edges.rows; j++) {
      for (let i = 0; i < edges.cols; i++) {
        let idx = i + j * edges.cols;
        edges.data[idx] = (edges.data[idx] >= THRESH1) ? 255 : 0;
      }
    }
  } else {
    edges = mat.clone();
  }

  cv.imshow('canvasOutput', edges);
}, 250);

window.onresize = displayImage;

slider1.onchange = function () {
  THRESH1 = parseFloat(this.value);
  displayImage();
}

imgElement.onload = function () {
  if (mat !== undefined) {
    mat.delete()
  }
  mat = cv.imread(imgElement);
  cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY, 0);
  displayImage();
};

function onOpenCvReady() {
  document.getElementById('status').style.display = 'none';
}

function modeSelect(event) {
  MODE = event.target.value;
  if (mat !== undefined) {
    displayImage();
  }
}

function saveClick() {
  let lines = [];
  let start = undefined;
  let startCol = undefined;
  let color = 0;

  for (let j = 0; j < edges.rows; j++) {
    for (let i = 0; i < edges.cols; i++) {
      let idx = i + j * edges.cols;
      let col = edges.data[idx];
      
      if (start === undefined && col != 255) {
        start = i;
        startCol = col;
      }
      if (start !== undefined && col !== startCol) {
        lines.push({ x1: start, y1: j, x2: i, y2: j, col: startCol })
        if (col == 255) {
          start = undefined;
        } else {
          start = i;
          startCol = col;
        }
      }
    }
    if (start !== undefined) {
      lines.push({ x1: start, y1: j, x2: edges.cols - 1, y2: j, col: startCol })
      start = undefined;
    }
  }

  let text = "";
  let mx = 0;
  let my = 0;
  let curCol = 0;

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
    if (ln.col != curCol) {
      text += "colour " + ln.col + "\n";
    }
    text += "pendown\n";
    text += "forward " + (ln.x2 - ln.x1) + "\n";
    mx = ln.x2;
  }
  download('instructions.txt', text);
}
