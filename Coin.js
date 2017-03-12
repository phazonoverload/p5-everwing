function Coin(_x, _y) {
  this.x = _x + 25 - 10; // 25 is half enemy size, 10 is half coin size
  this.y = _y;
  this.acc = 0.2;
  this.vel = 0;
  this.size = 20;
  this.alive = true;
  this.isHighValue = random(20) < 1;
  this.coinVal = 50;
  this.color = color(248, 240, 80, 255);
  this.initTrigger = false;

  this.changeValue = function() {
    if(this.isHighValue & !this.initTrigger) {
      var coinProb = random(10);
      if(coinProb > 10) {
        this.coinVal = 500;
        this.color = color(0, 219, 255, 255);
      } else if (coinProb > 7.5) {
        this.coinVal = 200;
        this.color = color(141, 11, 59, 255);
      } else if (coinProb > 5) {
        this.coinVal = 100;
        this.color = color(144, 31, 219, 255);
      }
    }
    this.initTrigger = true;
  }

  this.move = function() {
    this.y += this.vel;
    this.vel += this.acc;
  }

  this.show = function() {
    push();
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    pop();
  }

  this.remove = function() {
    if(this.alive) {
      this.color = color(0, 0);
      this.alive = false;
      console.log("Coin removed");
      game.increaseScore(this.coinVal);
    }
  }

  this.draw = function() {
    this.changeValue();
    this.move();
    this.show();
  }
}