var game,
    player,
    enemies = [],
    coins = [];

function setup() {
  createCanvas(windowHeight / 1.6, windowHeight);
  noStroke();
  game = new Game();
  player = new Player();
}

function draw() {
  background(0);
  game.draw();
  for(var i = 0; i < enemies.length; i++) {
    for(var j = 0; j < enemies[i].length; j++) {
      enemies[i][j].draw();
    }
  }

  for(var i = 0; i < coins.length; i++) {
    coins[i].draw();
  }

  player.draw();

  game.enemyManagement();

}