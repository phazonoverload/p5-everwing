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

  this.createEnemies = function() {
    if(frameCount % 75 == 0) {
      enemies.push([]);
      for(var i = 0; i < 5; i++) {
        enemies[enemies.length-1].push(new Enemy(i));
      }
    }
  }

  this.destroyEnemies = function() {
   for(var i = 0; i < enemies.length; i++) {
    if(enemies[0][0].y > height) {
      enemies.shift();
    }
   }
  }

  this.destroyCoins = function() {
   for(var i = 0; i < enemies.length; i++) {
    if(enemies[0][0].y > height) {
      enemies.shift();
    }
   }
  }

  this.draw = function() {
    this.increaseScore();
    this.showScore();
    this.createEnemies();
    this.destroyEnemies();
  }
}