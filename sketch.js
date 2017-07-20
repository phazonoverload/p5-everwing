// Global variables to be filled with tasty objects
var game,
    player,
    enemies = [],
    coins = [],
    shots = [],
    ship;

// Set up the canvas, create a new game and player object and store them globally
function setup() {
  createCanvas(windowHeight / 1.6, windowHeight);
  noStroke();
  game = new Game();
  player = new Player();
  ship = loadImage("ship.svg"); 
}

function draw() {
  background(0);

  // Draw basic game elements
  game.draw();

  // Draw each enemey inside the 2D array
  for(var i = 0; i < enemies.length; i++) {
    for(var j = 0; j < enemies[i].length; j++) {
      enemies[i][j].draw();
    }
  }

  // Draw each coin in the coins array
  for(var i = 0; i < coins.length; i++) {
    coins[i].draw();
  }

  // Draw the player
  player.draw();

  // Draw each shot
  for(var i = 0; i < shots.length; i++) {
    shots[i].draw();
  }

}