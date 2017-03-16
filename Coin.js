function Coin(_x, _y) {
  this.acceleration = createVector(0, 0.01);
  this.gravity = createVector(0, 0.2);
  this.velocity = p5.Vector.fromAngle(radians(random(-80, -100))).mult(random(1, 5));
  this.pos = createVector(_x + 25 - 10, _y); // 25 is half enemy size, 10 is half coin size
  this.size = 20;
  this.alive = true;
  this.isHighValue = random(20) < 1;
  this.coinVal = 1;
  this.color = color(248, 240, 80, 255);
  this.initTrigger = false;

  this.applyForce = function(force) {
    this.acceleration.add(force);
  }

  this.changeValue = function() {
    if(this.isHighValue & !this.initTrigger) {
      var coinProb = random(10);
      if(coinProb > 10) {
        this.coinVal = 40;
        this.color = color(0, 219, 255, 255);
      } else if (coinProb > 7.5) {
        this.coinVal = 20;
        this.color = color(141, 11, 59, 255);
      } else {
        this.coinVal = 10;
        this.color = color(144, 31, 219, 255);
      }
    }
    this.initTrigger = true;
  }

  this.move = function() {
    this.velocity.add(this.acceleration);
    this.pos.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.applyForces = function() {
    this.applyForce(this.gravity);
  }

  this.show = function() {
    push();
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.size, this.size);
    pop();
  }

  this.remove = function() {
    if(this.alive) {
      this.color = color(0, 0);
      this.alive = false;
      game.increaseScore(this.coinVal);
    }
  }

  this.draw = function() {
    this.changeValue();
    this.move();
    this.applyForces();
    this.show();
  }
}