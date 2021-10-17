var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Background
  background(2, 3, 5);
  fill(255);
  
  // Score
  fill(45, 100, 105)
  textSize(48);
  text("SCORE: " + score, 20, 55);

  let c = color(255, 204, 0);
  fill(c);
  rect(mouseX, windowHeight-10, 90, 35);
  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 
  // Make the bar follow the mouse on the x-axis. 

  xBall += xSpeed;
  fill(73, 162, 178);
  ellipse(windowHeight/2, xBall, 20, 20);
  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?
  // Can you make the ball move freely?

  if(xBall>windowWidth-10){
    xSpeed *= -1;
    if(xBall>windowWidth+10){
      xSpeed *= +1;
    }  
  } 
  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)
  // Bounce the ball off the edges of the page (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren

}
