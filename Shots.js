// The shot constructor function is very simple. 
// The starting this.x value is where the player currently is
// Every frame it moves up relative to the game.speed
function Shot(_id) {
  this.id = _id;
  this.x = (player.xSmoothed + player.size / 4) - 5;
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