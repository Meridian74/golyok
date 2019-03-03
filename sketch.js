SCREEN_W = 600;
SCREEN_H = 400;
MENNYI = 30;             // a golyók mennyisége
SPEED = 5;              // a X/Y irányú maximális elmozdulási érték
ATMERO = 20;            // a golyók átmérője
var golyok = new Array(MENNYI);
var i;
var j;
var tX;
var tY;
var tempCsere;


function setup() {
   createCanvas(SCREEN_W, SCREEN_H);
   for (i = 0; i < MENNYI; i++) {
      golyok[i] = new Golyo(ATMERO, i + 100);
   }
}


function draw() {
   background(50);

   // ütközés detekálás és ennek okán mozgási irányváltás
   for (i = 0; i < MENNYI - 1; i++) {
      for (j = i + 1; j < MENNYI; j++) {
         // a 2 golyó közötti távolságot megvizsgáljuk,
         // és ha a távolság kisebb, mint a golyó átmérője akkor a két golyó ütközik!
         tavolsag = dist(golyok[i].x, golyok[i].y, golyok[j].x, golyok[j].y);
         if (tavolsag <= ATMERO) {
            tX = golyok[i].dX - golyok[j].dX;
            tY = golyok[i].dY - golyok[j].dY;
            if (tX > tY) {
               tempCsere = golyok[i].dX;
               golyok[i].dX = golyok[j].dX;
               golyok[j].dX = tempCsere;
            }
            else {
               tempCsere = golyok[i].dY;
               golyok[i].dY = golyok[j].dY;
               golyok[j].dY = tempCsere;
            }
         }
      }
   }

   // a golyók mozgatás a következő pozicióba
   for (i = 0; i < MENNYI; i++) {
      golyok[i].move();
   }

   // képernyő szélén túl van-e, ha igen mozgási irányváltás - majd a golyó megjelenítése
   for (i = 0; i < MENNYI; i++) {
      golyok[i].checkBorder();
      golyok[i].display();
   }
}
