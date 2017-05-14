// This constructor function holds all of the general game logic
function Game() {
  this.score = 0;
  this.speed = 2;
  this.kills = 0;

  // This function is only run when player.grabCoin() triggers it 
  this.increaseScore = function(value) {
    var newScore = function() {
      return game.score + value;
    }
    this.score = newScore();
  }

  // Draw the score and kills info on the canvas
  this.showScore = function() {
    push();
    fill(255);
    text("Score " + this.score, 20, 20);
    text("Kills " + this.kills, 20, 50);
    pop();
  }

  // Create new shot every 10 frames
  this.createShots = function() {
    if(frameCount % 10 == 0) {
      shots.push(new Shot());
    }
  }

  // Create a new row of enemies every 75 frames
  this.createEnemies = function() {
    if(frameCount % 75 == 0) { 
      enemies.push([]);
      for(var i = 0; i < 5; i++) {
        enemies[enemies.length - 1].push(new Enemy(frameCount, i));
      }
    }
  }

  // Remove all shots, enemies and coins which have fallen off the screen
  this.removeOffscreenEntities = function() {
    if(shots.length > 0 && shots[0].y < 0) shots.shift();
    if(enemies.length > 0 && enemies[0][0].y > height) enemies.shift();
    if(coins.length > 0 && coins[0].y > height) coins.shift();
  }

  // Run all of these functions (except this.increaseScore()) every frame 
  this.draw = function() {
    this.showScore();
    this.createShots();
    this.createEnemies();
    this.removeOffscreenEntities();
  }
}