var screenWidth = 640;
var screenHeight = 400;
var r = 0;
var x = 0;
var y = 0;
var dX = 0;
var dY = 0;
var step = 0;

function setup() {
  createCanvas(screenWidth, screenHeight);
  background(50);
  var x = 0.0 + random(screenWidth - r/2);
  var y = 0.0 + random(screenHeight - r/2);
  dX = random(-8,8);
  dY = random(-8,8);
  step = parseInt(random(20));
  r = 20;
}

function draw() {
  

  fill(255);
  ellipse(x, y, r, r);

  x = x + dX;
  y = y + dY;
  if (step > 0) {
    step = step - 1;
  }
  else {
    step = parseInt(random(20));
    dX = random(-8,8);
    dY = random(-8,8);
  }

  if (x < (r/2)) {
    x = r/2 - 1;
    dX = dX * -1;
  }
  else if (x > (screenWidth - r/2)) {
    x = screenWidth - r/2;
    dX = dX * -1;
  }

  if (y < (r/2)) {
    y = r/2;
    dY = dY * -1;
  }
  else if (y > (screenHeight - r/2)) {
    y = screenHeight - r/2;
    dY = dY * -1;
  }
  
}

