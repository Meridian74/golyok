class Golyo {
   constructor(meret) {
      this.r = meret;                              // a golyó sugara
      this.x = random(SCREEN_W);                   // a golyó kezdeti X pozíciója
      this.y = random(SCREEN_H);                   // a golyó kezdeti Y pocíciója
      this.sebesseg = random(SPEED);               // a golyó mozgási sebességének nagysága
      this.irany = random(-PI, PI);                 // egy 0-360°-os véletlenszerű irány
      this.dX = this.sebesseg * cos(this.irany);   // X irányú elmozdulás nagysága
      this.dY = this.sebesseg *-sin(this.irany);   // Y irányú elmozdulás nagysága
   }

   // golyó kirajzolása
   display() {
      stroke(100);
      fill(255);
      ellipse(this.x, this.y, this.r);
   }

   // golyó mozgatása 
   move() {
      this.x = this.x + this.dX;
      this.y = this.y + this.dY;
   }

   // képernyő határával való találkozás vizsgálata
   checkBorder() {
      if (this.x < this.r / 2) {
         this.x = this.r / 2;
         this.dX = -this.dX;
         this.irany = createVector(this.dX, this.dY).heading();
         this.iranySzepites();
      }
      else if (this.x > SCREEN_W - this.r / 2) {
         this.x = SCREEN_W - this.r / 2;
         this.dX = -this.dX;
         this.irany = createVector(this.dX, this.dY).heading();
         this.iranySzepites();
      }
         
      if (this.y < this.r / 2) {
         this.y = this.r / 2;
         this.dY = -this.dY;
         this.irany = createVector(this.dX, this.dY).heading();
         this.iranySzepites();
      }
      else if (this.y > SCREEN_H - this.r / 2) {
         this.y = SCREEN_H - this.r/2;
         this.dY = -this.dY;
         this.irany = createVector(this.dX, this.dY).heading();
         this.iranySzepites();
      }
   }

   // A irányszög korrigálása 0 és 2PI közé
   iranySzepites() {
      if (this.irany > PI) {
         this.irany = this.irany - TWO_PI;
      }
      else if (this.irany < -PI) {
         this.irany = this.irany + TWO_PI;
      }
   }
}