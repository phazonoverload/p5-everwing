function Game() {
  this.score = 0;
  this.speed = 2;
  this.kills = 0;

  this.increaseScore = function() {
    if(frameCount % 10 == 0) {
      this.score++;
    }
  }

  this.showScore = function() {
    push();
    fill(255);
    text("Score " + this.score, 20, 20);
    text("Kills " + this.kills, 20, 50);
    pop();
  }

  this.draw = function() {
    this.increaseScore();
    this.showScore();
  }
}