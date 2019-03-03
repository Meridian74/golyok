SCREEN_W = 600;         // képernyő méret
SCREEN_H = 400;
MENNYI = 50;             // a golyók mennyisége
SPEED = 5;              // a X/Y irányú maximális elmozdulási érték
ATMERO = 20;            // a golyók átmérője
var golyok = new Array(MENNYI);
var i;
var j;
var k;
var tX;
var tY;
var csere;
var sebessegOszto = 3;


function setup() {
   createCanvas(SCREEN_W, SCREEN_H);
   for (i = 0; i < MENNYI; i++) {
      golyok[i] = new Golyo(ATMERO);
   }
}


function draw() {
   background(50);

   // x-es "pontossággal" számolás...
   for (k = 0; k < sebessegOszto; k++) {
      // ütközés detekálás és ennek okán mozgási irányváltás
      for (i = 0; i < MENNYI - 1; i++) {
         for (j = i + 1; j < MENNYI; j++) {
            // a 2 golyó közötti távolságot megvizsgáljuk,
            // és ha a távolság kisebb, mint a golyó átmérője akkor a két golyó ütközik!
            tavolsag = dist(golyok[i].x, golyok[i].y, golyok[j].x, golyok[j].y);
            if (tavolsag < ATMERO + 2) {
               tX = abs(golyok[i].dX - golyok[j].dX);
               tY = abs(golyok[i].dY - golyok[j].dY);
               if (tX >= tY) {
                  csere = golyok[i].dX;
                  golyok[i].dX = golyok[j].dX;
                  golyok[j].dX = csere;
               } 
               else {
                  csere = golyok[i].dY;
                  golyok[i].dY = golyok[j].dY;
                  golyok[j].dY = csere;
               }
            }
         }
      }

      // a golyók mozgatás a következő pozicióba, képernyő szél ellenőrzés
      for (i = 0; i < MENNYI; i++) {
         golyok[i].move(sebessegOszto);
         golyok[i].checkBorder();
      }
   } // x-es számolási ciklus vége

   for(i = 0; i < MENNYI; i++) {
      golyok[i].display();
   }
   
}
