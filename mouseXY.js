function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  R = mouseX/2;
  // Background
  background(R, 120, 120);
  FileList(0);
  
  // change colors when pressed
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 100, 100);
  } else {
      ellipse(mouseX, mouseY, 30, 30);
  }
}