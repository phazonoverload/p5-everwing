function Player() {
  this.size = 50;
  this.x = (width / 2) - 25;
  this.y = height - (this.size * 2);
  this.shots = [];

  this.move = function() {
    if(keyIsPressed) {
      keyCode == LEFT_ARROW ? this.x -= 10 : "";
      keyCode == RIGHT_ARROW ? this.x += 10 : "";
    }
  }

  this.hitEdge = function() {
    this.x = constrain(this.x, 0, width - this.size);
  }

  this.createShots = function() {
    if(frameCount % 10 == 0) {
      this.shots.push({
        x: (this.x + this.size / 2) - 5,
        y: this.y
      });
    }
  }

  this.updateShots = function() {
    for(var i = 0; i < this.shots.length; i++) {
      this.shots[i].y -= game.speed * 3;
    }
  }

  this.removeOffscreenShots = function() {
    if(this.shots.length > 0 && this.shots[0].y < 0) {
      this.shots.shift();
    }
  }

  this.drawShots = function() {
    for(var i = 0; i < this.shots.length; i++) {
      push();
      fill("#FE017E");
      rect(this.shots[i].x, this.shots[i].y, 10, 10);
      pop();
    }
  }

  this.show = function() {
    push();
    fill("#89E894");
    rect(this.x, this.y, this.size, this.size);
    pop();
  }

  this.draw = function() {
    this.move();
    this.hitEdge();
    this.createShots();
    this.updateShots();
    this.drawShots();
    this.removeOffscreenShots();
    this.show();
  }
}