function createShots() {
  if (frameCount % 10 == 0) {
    player.shots.push({
      x: (player.x + player.size / 2) - 5,
      y: player.y
    });
  }
}

function updateShots() {
  for (var i = 0; i < player.shots.length; i++) {
    player.shots[i].y -= game.speed * 3;
  }
}

function removeOffscreenShots() {
  if (player.shots.length > 0 && player.shots[0].y < 0) {
    player.shots.shift();
  }
}

function drawShots() {
  for (var i = 0; i < player.shots.length; i++) {
    push();
    fill("#FE017E");
    rect(player.shots[i].x, player.shots[i].y, 10, 10);
    pop();
  }
}

function createEnemies() {
  if (frameCount % 75 == 0) {
    enemies.push([]);
    for (var i = 0; i < 5; i++) {
      enemies[enemies.length - 1].push(new Enemy(i));
    }
  }
}

function removeOffscreenEnemies() {
  if (enemies.length > 0 && enemies[0][0].y > height) {
    enemies.shift();
  }
}

function removeOffscreenCoins() {
  if (coins.length > 0 && coins[0].y > height) {
    coins.shift();
  }
}

function entityManagement() {
  createShots();
  updateShots();
  removeOffscreenShots();
  drawShots();
  createEnemies();
  removeOffscreenEnemies();
  removeOffscreenCoins();
}