let sqSize;
let lineWidth;

function setup() {
  createCanvas(500, 700);
  // sqSize = random(10, 150);
  // lineWidth = random(2, 10);
  background(100);
}

function draw() {
  // background(100);

  sqSize = random(5, 200);
  lineWidth = random(2, 10);

  
  stroke(0, 0, 255, 10);
  strokeWeight(lineWidth);

  rectMode(CENTER);
  fill(0, 255, 0, 10);
  rect(width/2, height/2, sqSize, sqSize);
  
}