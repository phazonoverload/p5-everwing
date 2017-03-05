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

  this.end = function() {
    background("red");
  }

  this.createShots = function() {
    if(frameCount % 10 == 0) {
      shots.push(new Shot());
    }
  }

  this.createEnemies = function() {
    if(frameCount % 75 == 0) {
      enemies.push([]);
      for(var i = 0; i < 5; i++) {
        enemies[enemies.length - 1].push(new Enemy(frameCount, i));
      }
    }
  }

  this.removeOffscreenEntities = function() {
      if(shots.length > 0 && shots[0].y < 0) shots.shift();
      if(enemies.length > 0 && enemies[0][0].y > height) enemies.shift();
      if(coins.length > 0 && coins[0].y > height) coins.shift();
  }

  this.draw = function() {
    this.increaseScore();
    this.showScore();
    this.createShots();
    this.createEnemies();
    this.removeOffscreenEntities();
  }
}