class Golyo {
   constructor(meret) {
      this.r = meret;                              // a golyó sugara
      this.x = random(SCREEN_W);                   // a golyó kezdeti X pozíciója
      this.y = random(SCREEN_H);                   // a golyó kezdeti Y pocíciója
      this.sebesseg = random(SPEED);               // a golyó mozgási sebességének nagysága
      this.irany = random(TWO_PI);                 // egy 0-360°-os véletlenszerű irány
      this.dX = this.sebesseg * cos(this.irany);   // X irányú elmozdulás nagysága
      this.dY = this.sebesseg * sin(this.irany);   // Y irányú elmozdulás nagysága
   }

   // golyó kirajzolása
   display() {
      ellipse(this.x, this.y, this.r, this.r);
   }

   // golyó mozgatása 
   move() {
      this.x += this.dX;
      this.y += this.dY;
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

   collision(ss) {
      this.sebesseg = ss;
      this.irany = random(TWO_PI);     
      this.dX = this.sebesseg * cos(this.irany);
      this.dY = this.sebesseg * sin(this.irany);
   }
}