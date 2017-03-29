// The emeny constructor function takes two arguments - the frameCount at the point of creation, and it's position on the screen. This allows us to uniquely identify each enemy
function Enemy(_frame, _i) {
  this.batch = _frame;
  this.size = 50;
  this.x = 12.5 + (width / 7) + (width / 7) * _i;
  this.y = -this.size;
  this.color = 255;
  this.alive = true;

  // Move enemies towards you at the game.speed
  this.move = function() {
    this.y += game.speed;
  }

  // A backwards-looping loop with nested if statements to determine if any shot collides with the enemy
  // If the enemy was alive, we kill it and splice the shot out of the array
  this.hitByShot = function() {
    for(var i = shots.length-1; i > 0; i--) {
      if(shots[i].x > this.x - shots[i].size && shots[i].x < this.x + this.size) {
        if(shots[i].y > this.y && shots[i].y < this.y + this.size) {
          if(this.alive) {
            this.kill();
            shots.splice(i, 1);
          }
        }
      }
    }
  }

  // This function returns true if the player collides with this enemy
  this.hitByPlayer = function() {
    var collision = false;
    if(player.y > this.y && player.y < this.y + this.size) {
      if(player.xSmoothed > this.x && player.xSmoothed < this.x + this.size) {
        if(this.alive) {
          collision = true;
        }
      }
    }
    return collision;
  }

  // If an enemy is killed, make it black (hidden), upp the kill count and spawn a new coin.
  this.kill = function() {
    this.alive = false;
    this.color = 0;
    game.kills++;
    this.spawnCoin();
  }

  // This pushes a new coin into the array at the enemy's position. 
  this.spawnCoin = function() {
    coins.push(new Coin(this.x, this.y));
  }

  // Draws the enemy
  this.show = function() {
    push();
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    pop();
  }

  // Shorthand to run all one-a-frame functions
  this.draw = function() {
    this.move();
    this.show();
    this.hitByShot();
  }
}