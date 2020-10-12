---
title: Week 6 Tutorial
sidebar: 6
sidebar-title: Week 6
---

# Assignment 1 !

---

Assignment 1 was posted last week and as we always say, it's important for you to start it early enough so we can answer any questions ahead of time. Make sure you read the handout and the starter code. A1 makes you implement a program that can read instructions and draw out images (inspired by [Logo](https://en.wikipedia.org/wiki/Logo_(programming_language))). 

The general idea is that you have a turtle that starts off at the top-left of the screen, and follows all the instructions given to move around, drawing a line along the path it takes. Let's take a simple example:

```
penup
forward 100
right
forward 100
pendown
forward 300
left
forward 300
left
forward 300
left
forward 300
left

```

What do you think this draws onto the screen? 

Of course, we're also programmers so we hate repetitive instructions! In the assignment you'll also implement support for a loop structure that lets you do something like:

```
penup
forward 100
right
forward 100
pendown
loop 4
  forward 300
  left
```


---

- Make sure you have read the assignment and come ask for help if you need it. The earlier you start, the more time you will have to fix any bugs or address questions that show up.

---

We want to show you how your program should work, so last Summer, Mustafa created a webapp where you can play around with an implemented version of the assignment and test your test cases! Visit <a href="https://turtlerunner.herokuapp.com"> Turtle Runner</a> to enter your turtle commands and run it to get the expected output. (If you find any bugs or weird behaviour, let us know!)

<a href="https://github.com/CSCA48F20/tutorials/raw/master/W6/angelas-surprise.txt" download> Here's a file </a> containing turtle instructions to Angela's favorite drawing 😃 (Right click, Save link as...) Give it a few seconds, its a LOT of instructions...

---