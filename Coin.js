function Coin(_x, _y) {
  this.x = _x + 25 - 10; // 25 is half enemy size, 10 is half coin size
  this.y = _y;
  this.acc = 0.1;
  this.vel = 0;

  this.move = function() {
    this.y += this.vel;
    this.vel += this.acc;
  }

  this.show = function() {
    push();
    fill("#F8F050");
    rect(this.x, this.y, 20, 20);
    pop();
  }

  this.draw = function() {
    this.move();
    this.show();
  }
}