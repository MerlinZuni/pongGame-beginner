
let y:

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(24, 77, 81);
  y = height / 2;
}

function draw() {
  // Background
  background(2, 3, 5);
  
  // Line that moves
  line(0, y, width, y);
  y = y - 2;
  if (y < 0) {
    y = height;
  }
}