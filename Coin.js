// This is a constructor function. 
// It takes two arguments - it's initial x and y position.
function Coin(_x, _y) {
  // The acceleration and gravity vectors are applied to velocity in order to move the coin with semi-realisitc physics.
  this.acceleration = createVector(0, 0.01);
  this.gravity = createVector(0, 0.2);
  this.velocity = p5.Vector.fromAngle(radians(random(-80, -100))).mult(random(1, 5));

  // This vector is used to store the coin's x and y position
  this.pos = createVector(_x + 25 - 10, _y); // 25 is half enemy size, 10 is half coin size
  this.size = 20;

  // this.alive is made false once the coin has been touched by the player
  this.alive = true;

  // this.isHighValue has a 1 in 20 change of being true
  // this.initTrigger is used in this.changeValue() to change the value and oclor of a coin once if this.isHighvalue is true
  this.isHighValue = random(20) < 1;
  this.initTrigger = false;
  this.coinVal = 1;
  this.color = color(248, 240, 80, 255);

  // A small function which adds the gravity vector to the acceleration
  this.applyGravity = function() {
    this.acceleration.add(this.gravity);
  }

  // This function only runs once due to the this.initTrigger boolean 
  // All high value coins will be at least 10 points
  // There's a 50% chance that it will be worth 20, and a 10% chance it will be worth 40
  this.changeValue = function() {
    if(this.isHighValue & !this.initTrigger) {
      var coinProb = random(10);
      if(coinProb > 9) {
        this.coinVal = 40;
        this.color = color(0, 219, 255, 255);
      } else if (coinProb > 5) {
        this.coinVal = 20;
        this.color = color(141, 11, 59, 255);
      } else {
        this.coinVal = 10;
        this.color = color(144, 31, 219, 255);
      }
    }
    this.initTrigger = true;
  }

  // This function adds the acceleration to the velocity, and the velocity to the position
  // We the nmultiply the acceleration vector by 0 so we don't exponentially add values quicker than expected
  this.move = function() {
    this.velocity.add(this.acceleration);
    this.pos.add(this.velocity);
    this.acceleration.mult(0);
  }

  // This function simply draws the coin
  this.show = function() {
    push();
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.size, this.size);
    pop();
  }

  // This function is run when player.grabCoin() determines that the player has collided with the coin.
  // We hide the coin, stop it being counted by making this.alive false and then increase the game score.
  this.remove = function() {
    if(this.alive) {
      this.color = color(0, 0);
      this.alive = false;
      game.increaseScore(this.coinVal);
    }
  }

  // This function runs all of the one-a-frame functions 
  this.draw = function() {
    this.changeValue();
    this.move();
    this.applyGravity();
    this.show();
  }
}