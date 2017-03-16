function Player() {
  this.size = 50;
  this.onepole = new maximEx.onePole();
  this.x = (width / 2) - 25;
  this.y = height - (this.size * 2);
  this.xSmoothed = 0;
  this.color = "#89E894";

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

  this.hitEdge = function() {
    this.xSmoothed = constrain(this.xSmoothed, 0, width - this.size);
  }

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

  this.show = function() {
    push();
    fill(this.color);
    rect(this.xSmoothed, this.y, this.size, this.size);
    pop();
  }

  this.draw = function() {
    this.move();
    this.hitEdge();
    this.grabCoin();
    this.show();
  }
}