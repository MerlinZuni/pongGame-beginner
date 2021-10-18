var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 300) + 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0
//size ball
var d = 50

let pingpong

function setup() {
  createCanvas(windowWidth, windowHeight);

// ball moves random
xBall = random(0, width);
yBall = random(0, height);
}
function draw() {
  // Background
  background(2, 3, 5);
  fill(255);
  
  // Score
  fill(45, 100, 105)
  textSize(48);
  text("SCORE: " + score, 20, 55);

  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 
  // I Made the bar follow the mouse on the x-axis.
  let c = color(255, 204, 0);
  
  fill(c);
  rect(mouseX, windowHeight-15, 120, 15);

  // I've created a second paddle on the top
  let b = color(0, 204, 255);
  fill(b);
  rect(0 , 0, 120, 15);


  xBall += xSpeed;
  fill(73, 162, 178);
 
  pingpong = ellipse(xBall, yBall, d);
  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?
  // Can you make the ball move freely?

  xBall = xBall + xSpeed;
  yBall = yBall + ySpeed;

  if(xBall > windowWidth - d/2 || xBall < d/2 ){
    xSpeed = -xSpeed;
    if(yBall > windowWidth - d/2 || yBall < d/2 ){
      ySpeed = -ySpeed;
    }  
  } 
  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)
  // Bounce the ball off the edges of the page (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren
  // 1 if statements on our own how to calculate
}
