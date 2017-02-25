function Enemy(i) {
  this.size = 50;
  this.x = 12.5 + (width / 7) + (width / 7) * i;
  this.y = -this.size;
  this.color = 255;
  this.alive = true;

  this.move = function() {
    this.y += game.speed;
  }

  this.hit = function() {
    for(var i = 0; i < player.shots.length; i++) {
      // NOT SOLID DETECTION
      if(player.shots[i].x > this.x && 
        player.shots[i].x < this.x + this.size && 
        player.shots[i].y > this.y &&
        player.shots[i].y < this.y + this.size &&
        this.alive) {
        this.kill();
      }
    }
  }

  this.kill = function() {
    this.alive = false;
    this.color = 50;
    game.kills++;
    game.score += 50;
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
    this.hit();
  }
}