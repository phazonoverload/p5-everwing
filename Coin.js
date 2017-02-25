function Coin(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.acc = 0.1;
  this.vel = 0;

  this.move = function() {
    this.y += this.vel;
    this.vel += this.acc;
    // this.acc++;
  }

  this.show = function() {
    push();
    fill("#F8F050");
    ellipse(this.x, this.y, 20);
    pop();
  }

  this.draw = function() {
    this.move();
    this.show();
  }
}