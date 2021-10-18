var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 300) + 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);

var score = 0
//size ball
var d = 50

var scoreFed = 0;
var scoreMe = 0;
let myPaddle;

// opponent paddle variables
let fedX = 0;
let fedW = 120;
let fedH = 10;
let federer;
let tempo = 12;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fedX = width / 2;
}

// ball moves random
xBall = random(0, width);
yBall = random(0, height);

function draw() {
  // Background
  background(2, 3, 5);
  //fill(255);
  
  // Score Blue Federer
  fill(45, 100, 105);
  textSize(48);
  text("SCORE: " + scoreFed, 20, 55);

    // Score Blue Me
    fill(255, 204, 0);
    textSize(48);
    text("SCORE: " + scoreMe, windowWidth-300, 55);

  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 
  // I Made the bar follow the mouse on the x-axis.

  let c = color(255, 204, 0);


  fill(c);
  myPaddle = rect(mouseX, windowHeight-15, fedW, fedH);

  // I've created a second paddle on the top
  let b = color(0, 204, 255); // color blue
  fill(b);
  federer = rect(fedX , 0, fedW, fedH);
  // I'm trying to get the paddle to move back and forth.
  // currently moves right to left...
  fedX = fedX - tempo;
  //push();
  if (fedX < 0) {
    fedX = width;
    //fedX += tempo;
    //pop();
  } 


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