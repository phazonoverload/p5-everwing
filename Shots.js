function Shot(_id) {
  this.id = _id;
  this.x = (player.xSmoothed + player.size / 2) - 5;
  this.y = player.y;
  this.size = 10;

  this.update = function() {
    this.y -= game.speed * 3;
  }

  this.show = function() {
    push();
    fill("#FE017E");
    rect(this.x, this.y, this.size, this.size);
    pop();
  }

  this.draw = function() {
    this.update();
    this.show();
  }
}