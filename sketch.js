SCREEN_W = 800;
SCREEN_H = 600;
MENNYI = 100;           // a golyók mennyisége
SPEED = 10;              // a X/Y irányú maximális elmozdulási érték
ATMERO = 20;            // a golyók átmérője
var golyok = new Array(MENNYI);
var ujSebesseg;

function setup() {
   createCanvas(SCREEN_W, SCREEN_H);
   for (i = 0; i < MENNYI; i++) {
      golyok[i] = new Golyo(ATMERO);
   }
}


function draw() {
   background(50);
   fill(255);
   stroke(100);
   for (i = 0; i < MENNYI; i++) {
      golyok[i].display();
      golyok[i].move();
      golyok[i].checkBorder();
   }
   for (i = 0; i < MENNYI - 1; i++) {
      for (j = 1; j < MENNYI; j++) {
         tavolsag = dist(golyok[i].x, golyok[i].y, golyok[j].x, golyok[j].y);
         
         if (tavolsag <= ATMERO * 2) {
            ujSebesseg = (golyok[i].sebesseg + golyok[j].sebesseg) / 2;
            golyok[i].collision(ujSebesseg);
            golyok[j].collision(ujSebesseg);
         }
      }
   }
}