function Enemy(_frame, _i) {
  this.batch = _frame;
  this.size = 50;
  this.x = 12.5 + (width / 7) + (width / 7) * _i;
  this.y = -this.size;
  this.color = 255;
  this.alive = true;

  this.move = function() {
    this.y += game.speed;
  }

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

  this.hitByPlayer = function() {
    if(player.y > this.y && player.y < this.y + this.size) {
      if(player.xSmoothed > this.x && player.xSmoothed < this.x + this.size) {
        if(this.alive) {
          player.color = "red";
        }
      }
    }
  }

  this.kill = function() {
    this.alive = false;
    this.color = 0;
    game.kills++;
    this.spawnCoin();
  }

  this.spawnCoin = function() {
    coins.push(new Coin(this.x, this.y));
  }

  this.show = function() {
    push();
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    pop();
  }

  this.draw = function() {
    this.move();
    this.show();
    this.hitByShot();
    this.hitByPlayer();
  }
}