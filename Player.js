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
    if(mouseIsPressed) {
      this.x = mouseX;
    }
  }

  this.hitEdge = function() {
    this.x = constrain(this.x, 0, width - this.size);
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
    this.show();
  }
}