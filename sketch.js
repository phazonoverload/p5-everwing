// Global variables to be filled with tasty objects
var game,
    player,
    enemies = [],
    coins = [],
    shots = [];

// Set up the canvas, create a new game and player object and store them globally
function setup() {
  createCanvas(windowHeight / 1.6, windowHeight);
  noStroke();
  game = new Game();
  player = new Player();
}

// This anonymous function pushes a new row of 5 enemies every 1500 milliseconds
// Note, as this is done using the time passed, it will play up if the browser struggles to render at 60FPS
setInterval(function() {
  enemies.push([]);
  for(var i = 0; i < 5; i++) {
    enemies[enemies.length - 1].push(new Enemy(frameCount, i));
  }
}, 1500)

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