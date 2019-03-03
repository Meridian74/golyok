class Golyo {
   constructor(meret) {
      this.r = meret;                              // a golyó sugara
      this.x = random(SCREEN_W);                   // a golyó kezdeti X pozíciója
      this.y = random(SCREEN_H);                   // a golyó kezdeti Y pocíciója
      this.sebesseg = random(SPEED);               // a golyó mozgási sebességének nagysága
      this.irany = random(-PI, PI);                // egy -180 - 180° közötti véletlenszerű irány
      this.dX = this.sebesseg * cos(this.irany);   // X irányú elmozdulás nagysága
      this.dY = this.sebesseg *-sin(this.irany);   // Y irányú elmozdulás nagysága
      // this.R = random(255);
      // this.G = random(255);
      // this.B = random(255);

   }

   // golyó kirajzolása
   display() {
      stroke(100);
      fill(250);
      // fill(this.R, this.G, this.B);
      ellipse(this.x, this.y, this.r);
   }

   // golyó mozgatása 
   move(oszto) {
      this.x = this.x + (this.dX / oszto);
      this.y = this.y + (this.dY / oszto);
   }

   // képernyő határával való találkozás vizsgálata
   checkBorder() {
      if (this.x < this.r / 2) {
         this.x = this.r / 2;
         this.dX = -this.dX;
      }
      else if (this.x > SCREEN_W - this.r / 2) {
         this.x = SCREEN_W - this.r / 2;
         this.dX = -this.dX;
      }
         
      if (this.y < this.r / 2) {
         this.y = this.r / 2;
         this.dY = -this.dY;
      }
      else if (this.y > SCREEN_H - this.r / 2) {
         this.y = SCREEN_H - this.r/2;
         this.dY = -this.dY;
      }
   }

   // sebSzamolo() {
   //    this.sebesseg = createVector(this.dX, this.dY).mag();
   //    console.log("seb: " + this.sebesseg);
   // }
}