// The player constructor function
function Player() {
  this.size = 50;
  this.onepole = new maximEx.onePole();
  this.x = (width / 2) - 25;
  this.y = height - (this.size * 2);
  this.xSmoothed = 0;
  this.color = "#89E894";

  // We use maximEx.onePole() to smooth the xValue
  // Player can be moved through arrows, or clicking/dragging
  this.move = function() {
    this.onepole.setTime(0.25, 60);
    this.onepole.process(this.x);
    if(keyIsPressed) {
      keyCode == LEFT_ARROW ? this.x -= 10 : "";
      keyCode == RIGHT_ARROW ? this.x += 10 : "";
    }
    if(mouseIsPressed) this.x = mouseX;
    this.xSmoothed = this.onepole.process(this.x);
  }

  // If this.xSmoothed will so out of bounds, we constrain it
  this.hitEdge = function() {
    this.xSmoothed = constrain(this.xSmoothed, 0, width - this.size);
  }

  // Using a while loop to iterate through the coins array and determine if any coins are colliding with the player
  this.grabCoin = function() {
    var i = 0;
    while(i < coins.length) {
      if(coins[i].pos.x > this.x - coins[i].size && coins[i].pos.x < this.x + this.size) {
        if(coins[i].pos.y > this.y - coins[i].size && coins[i].pos.y < this.y) {
          coins[i].remove();
        }
      }
      i++;
    }
  }

  // For each enemy, we're passing the hitByPlayer function. If it's true, we make the player red. 
  this.die = function() {
    for(var i=0; i<enemies.length; i++) {
      for(var j=0; j<enemies[i].length; j++) {
        if(enemies[i][j].hitByPlayer()) {
          this.color = "red";
        }
      }
    }
  }

  // Draws the player
  this.show = function() {
    push();
    fill(this.color);
    rect(this.xSmoothed, this.y, this.size/2, this.size/2);
    image(ship, this.xSmoothed, this.y, this.size/2, this.size/2);
    pop();
  }

  // Shorthand function
  this.draw = function() {
    this.move();
    this.hitEdge();
    this.grabCoin();
    this.show();
    this.die();
  }
}