
var screenWidth = 800;
var screenHeight = 600;
var tombhossz = 100;
var speed = 5;
var r = new Array([tombhossz]);
var x = new Array([tombhossz]);
var y = new Array([tombhossz]);
var dX = new Array([tombhossz]);
var dY = new Array([tombhossz]);
var step = new Array([tombhossz]);

function setup() {
  createCanvas(screenWidth, screenHeight);
  for (i = 0; i < tombhossz; i++){
    r[i] = parseInt(random(20,20));
    x[i] = 0 + random(screenWidth - (r[i] / 2));
    y[i] = 0 + random(screenHeight - (r[i] / 2));
    dX[i] = random(-speed, speed);
    dY[i] = random(-speed, speed);
    step[i] = parseInt(random(50));
  }
}

function draw() {
  background(50);
  fill(255);
  stroke(100);
  for(j = 0; j < 2; j++){
    for(i = 0; i < tombhossz; i++) {
      ellipse(x[i], y[i], r[i], r[i]);
      x[i] = x[i] + dX[i];
      y[i] = y[i] + dY[i];
      
      if (step[i] > 0) {
        step[i]--;
      }
      else {
        step[i] = parseInt(random(30,50));
        dX[i] = random(-speed, speed);
        dY[i] = random(-speed, speed);
      }
      
      if (x[i] < (r[i] / 2)) {
        x[i] = r[i] / 2;
        dX[i] = -1 * dX[i];
      }
      else if (x[i] > (screenWidth - r[i] / 2)) {
        x[i] = screenWidth - r[i] / 2;
        dX[i] = -1 * dX[i];
      }
      
      if (y[i] < (r[i] / 2)) {
        y[i] = r[i] / 2;
        dY[i] = -1 * dY[i];
      }
      else if (y[i] > (screenHeight - r[i] / 2)) {
        y[i] = screenHeight - r[i] / 2;
        dY[i] = -1 * dY[i];
      }
    }
  }
}