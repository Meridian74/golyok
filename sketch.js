
var SCREEN_W = 800;
var SCREEN_H = 600;
var TOMBHOSSZ = 100;
var SPEED = 5;
var r = new Array([TOMBHOSSZ]);
var x = new Array([TOMBHOSSZ]);
var y = new Array([TOMBHOSSZ]);
var dX = new Array([TOMBHOSSZ]);
var dY = new Array([TOMBHOSSZ]);
var step = new Array([TOMBHOSSZ]);

function setup() {
  createCanvas(SCREEN_W, SCREEN_H);
  for (i = 0; i < TOMBHOSSZ; i++){
    r[i] = int(random(20,20));
    x[i] = 0 + random(SCREEN_W - (r[i] / 2));
    y[i] = 0 + random(SCREEN_H - (r[i] / 2));
    dX[i] = random(-SPEED, SPEED);
    dY[i] = random(-SPEED, SPEED);
    step[i] = int(random(50));
  }
}

function draw() {
  background(50);
  fill(255);
  stroke(100);
  for(j = 0; j < 2; j++){
    for(i = 0; i < TOMBHOSSZ; i++) {
      ellipse(x[i], y[i], r[i], r[i]);
      x[i] = x[i] + dX[i];
      y[i] = y[i] + dY[i];
      
      if (step[i] > 0) {
        step[i]--;
      }
      else {
        step[i] = int(random(30,50));
        dX[i] = random(-SPEED, SPEED);
        dY[i] = random(-SPEED, SPEED);
      }
      
      if (x[i] < (r[i] / 2)) {
        x[i] = r[i] / 2;
        dX[i] = -1 * dX[i];
      }
      else if (x[i] > (SCREEN_W - r[i] / 2)) {
        x[i] = SCREEN_W - r[i] / 2;
        dX[i] = -1 * dX[i];
      }
      
      if (y[i] < (r[i] / 2)) {
        y[i] = r[i] / 2;
        dY[i] = -1 * dY[i];
      }
      else if (y[i] > (SCREEN_H - r[i] / 2)) {
        y[i] = SCREEN_H - r[i] / 2;
        dY[i] = -1 * dY[i];
      }
    }
  }
}