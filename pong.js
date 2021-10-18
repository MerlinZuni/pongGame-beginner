// from Vera
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 300) + 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);

//size ball diameter
var d = 50;

// score variables
var score = 0;
var scoreFed = 0;
var scoreMe = 0;

//  paddle variables
let myPaddle;
let fedX = 0;
let fedW = 120;
let fedH = 10;
let federer;
let tempo = 24;

// start canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  fedX = width / 2;
}

// ball moves random
xBall = random(0, width);
yBall = random(0, height);

// draw what we see
function draw() {
  // Background
  background(2, 3, 5); // almost black
  //fill(255);
  
  // Score Blue Federer
  fill(45, 100, 105); // color blue
  textSize(48);
  text("Roger Federer: " + scoreFed, 20, 55);

  // Score yellow My score
  fill(255, 204, 0); // color yellow
  textSize(48);
  text("My Score: " + scoreMe, windowWidth-300, 55);

  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 
  // I Made the bar follow the mouse on the x-axis.

  let c = color(255, 204, 0); // canary yellow
  fill(c);
  let myPaddle = rect(mouseX, windowHeight-15, fedW, fedH);

  // I've created a second paddle on the top
  let b = color(0, 204, 255); // color blue
  fill(b);
  federer = rect(fedX , 0, fedW, fedH);
  // this moves the paddle back and forth.
  fedX = fedX + tempo;
  if (fedX < 0 || fedX > width) {
    tempo = -tempo;
  } 

// this moves the ball on the x-axis
  xBall += xSpeed;
  fill(73, 162, 178); // this makes the ball blue
  let pingpong = ellipse(xBall, yBall, d);

  // TO DO 2:  Can you make the ball move freely?
  // this makes the ball moves around
  xBall = xBall + xSpeed;
  yBall = yBall + ySpeed;


  if(xBall > windowWidth - d/2 || xBall < d/2 ){
    // reverse direction of ball on the x axis
    xSpeed = -xSpeed;
  }  
  if(yBall > windowHeight - d/2 || yBall < d/2 ){
    // reverse direction of the ball on the y axis
    ySpeed = -ySpeed;
   
  } 
  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)
  // Bounce the ball off the edges of the page (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren
  // 1 if statements on our own how to calculate

  // Add a point for Roger Federer
  if (yBall > windowHeight - d/2) {
    scoreFed = scoreFed +1 ;
  }
  // Add a point for Me
  if (yBall < d/2) {
    scoreMe = scoreMe+1;
  }
}  