var game,
    player,
    enemies = [],
    coins = [],
    shots = [];

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

  player.draw();

  for(var i = 0; i < coins.length; i++) {
    coins[i].draw();
  }

  for(var i = 0; i < shots.length; i++) {
    shots[i].draw();
  }

}