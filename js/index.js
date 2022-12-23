// Initialize
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 768;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.onload = () => {
  animate();
};
image.src = "./assets/Map.png";

const placementTiles = [];
const mouse = {
  x: undefined,
  y: undefined,
};
const characters = [];
const enemiesA = [];
const enemiesB = [];
const explosions = [];
let activeTile = undefined;
let initialEnemies = 3;
let hearts = 5;
let points = 50;
let frames = 0;

// Placement Tiles
const placementTileData2D = [];
for (let i = 0; i < placementTileData.length; i += 20) {
  placementTileData2D.push(placementTileData.slice(i, i + 20));
}

placementTileData2D.forEach((row, y) => {
  // y = index of each row of array
  row.forEach((symbol, x) => {
    // x = index of each column of Row
    if (symbol === 48) {
      // add Character placement here
      placementTiles.push(
        new PlacementTile({
          position: {
            x: x * 64,
            y: y * 64,
          },
        })
      );
    }
  });
});

spawnEnemiesA(initialEnemies);
spawnEnemiesB(initialEnemies);

// Animation
function animate() {
  if (frames % 100 === 0) {
    if (points <= 99) {
      points += 1;
      updatePointsUI(points);
    }
  }
  frames++;

  const animationId = requestAnimationFrame(animate);

  c.drawImage(image, 0, 0);

  placementTiles.forEach((tile) => {
    tile.update(mouse);
  });

  // Enemy Wave A
  for (let i = enemiesA.length - 1; i >= 0; i--) {
    const enemy = enemiesA[i];
    enemy.switchSprite("run");
    enemy.update();

    const validBlocks = getValidBlocks(enemy, characters);

    validBlocks.forEach((character) => {
      // if enemy is not already blocked and character is not maxBlocked
      if (
        !enemy.blocked &&
        character.blocking.length < character.stats.maxBlock
      ) {
        enemy.setBlocked(character);
        character.setBlocking(enemy);
      }
    });

    checkBlockStatus(enemy, characters, placementTiles);

    // When enemy reaches the other side, take 1 damage
    if (enemy.position.x < 0) {
      hearts -= 1;
      enemiesA.splice(i, 1);
      updateLivesUI(hearts);

      if (hearts === 0) {
        console.log("Game Over");
        cancelAnimationFrame(animationId);
      }
    }
  }

  // Enemy Wave B
  for (let i = enemiesB.length - 1; i >= 0; i--) {
    const enemy = enemiesB[i];
    enemy.switchSprite("run");
    enemy.update();

    const validBlocks = getValidBlocks(enemy, characters);

    validBlocks.forEach((character) => {
      // if enemy is not already blocked and character is not maxBlocked
      if (
        !enemy.blocked &&
        character.blocking.length < character.stats.maxBlock
      ) {
        enemy.setBlocked(character);
        character.setBlocking(enemy);
      }
    });

    checkBlockStatus(enemy, characters, placementTiles);

    // When enemy reaches the other side, take 1 damage
    if (enemy.position.x < 0) {
      hearts -= 1;
      enemiesB.splice(i, 1);
      updateLivesUI(hearts);

      if (hearts === 0) {
        console.log("Game Over");
        cancelAnimationFrame(animationId);
      }
    }
  }

  // Draw and remove Explosion frames
  for (let i = explosions.length - 1; i >= 0; i--) {
    const explosion = explosions[i];
    explosion.draw();
    explosion.animateFrames();

    if (explosion.frames.current >= explosion.frames.max - 1) {
      explosions.splice(i, 1);
    }
  }

  // Spawn more enemies
  if (enemiesA.length === 0) {
    const random = Math.floor(Math.random() * 3) + 1;
    spawnEnemiesA(random);
  }

  // Spawn more enemies
  if (enemiesB.length === 0) {
    const random = Math.floor(Math.random() * 3) + 1;
    spawnEnemiesB(random);
  }

  // Characters
  characters.forEach((character) => {
    character.switchSprite("idle");
    character.update();

    character.target = null;

    removeBlocking(character, enemiesA, enemiesB);

    // Determine valid targets within character hitbox
    const waveA = getValidTargets(enemiesA, character);
    const waveB = getValidTargets(enemiesB, character);
    const validTargets = waveA.concat(waveB);

    validTargets.sort((a, b) => {
      let posA = a.center.x;
      let posB = b.center.x;

      if (posA > posB) {
        return 1;
      }
      if (posA < posB) {
        return -1;
      }
      return 0;
    });

    if (character.isHealer) {
      // Find target with current lowest HP
      const validHealing = getValidTargets(characters, character);
      validHealing.sort((a, b) => a.health - b.health);

      character.target = validHealing[0];
    } else {
      character.target = validTargets[0];
    }

    if (character.isRanged && character.target) {
      // Determine projectile/explosion/damage for ranged characters
      for (let i = character.projectiles.length - 1; i >= 0; i--) {
        const projectile = character.projectiles[i];

        projectile.update();

        const xDifference = projectile.target.center.x - projectile.position.x;
        const yDifference = projectile.target.center.y - projectile.position.y;
        const distance = Math.hypot(xDifference, yDifference);

        // Remove projectile when it hits enemy
        if (distance < projectile.target.radius + projectile.radius) {
          // damage enemy health
          if (character.isHealer) {
            const heal = character.getPower();
            projectile.target.heal(heal);

            // if target still exist, generate an explosion animation
            if (character.target && projectile.target === character.target) {
              const data = getSpell(character.name);
              explosions.push(
                new Sprite({
                  position: {
                    x: projectile.target.position.x,
                    y: projectile.target.position.y - 48,
                  },
                  ...data.explosion,
                })
              );
            }
            character.projectiles.splice(i, 1);
          } else {
            const damage =
              character.getPower() - projectile.target.getDefence();
            projectile.target.hit(damage);

            if (projectile.target.health <= 0) {
              // Determine which wave the target belonged to and remove it from there
              switch (projectile.target.wave) {
                case "A":
                  {
                    handleEnemyDeath(projectile.target, enemiesA);
                    if (points <= 99) {
                      points += 3;
                      updatePointsUI(points);
                    }
                  }
                  break;
                case "B":
                  {
                    handleEnemyDeath(projectile.target, enemiesB);
                    if (points <= 99) {
                      points += 3;
                      updatePointsUI(points);
                    }
                  }
                  break;
                default:
                  console.log("Error in projectile Switch condition...");
                  break;
              }
            }
            // if target still exist, generate an explosion animation
            if (character.target && projectile.target === character.target) {
              const data = getSpell(character.name);
              explosions.push(
                new Sprite({
                  position: {
                    x: projectile.target.position.x,
                    y: projectile.target.position.y - 48,
                  },
                  ...data.explosion,
                })
              );
            }

            character.projectiles.splice(i, 1);
          }
        }
      }
    } else {
      // Determine if melee character defeated enemy target(if still exist) and remove it
      if (character.target && character.target.health <= 0) {
        // Determine which wave the target belonged to and remove it from there
        switch (character.target.wave) {
          case "A":
            {
              if (character.target && character.target.health <= 0) {
                handleEnemyDeath(character.target, enemiesA);
                if (points <= 99) {
                  points += 3;
                  updatePointsUI(points);
                }
              }
            }
            break;
          case "B":
            {
              if (character.target && character.target.health <= 0) {
                handleEnemyDeath(character.target, enemiesB);
                if (points <= 99) {
                  points += 3;
                  updatePointsUI(points);
                }
              }
            }
            break;
          default:
            console.log("Error in Melee character Switch condition...");
            break;
        }
      }
    }
  });
}

// Event Listeners
canvas.addEventListener("click", (event) => {
  // place character on activeTile if available
  if (activeTile && !activeTile.isOccupied) {
    const pos = {
      x: activeTile.position.x,
      y: activeTile.position.y,
    };

    const unit = createCharacter(pos);
    if (unit !== null && points >= unit.getDeployCost()) {
      points -= unit.getDeployCost();
      updatePointsUI(points);
      characters.push(unit);

      activeTile.isOccupied = true;
      activeTile.character = unit;

      characters.sort((char1, char2) => {
        return char1.position.y - char2.position.y;
      });
    }
  }
});

canvas.addEventListener("mousemove", (event) => {
  // Account for Canvas not starting at (0,0) on the Window. PlacementTile is based on Canvas background image
  const offsetX = (window.innerWidth - canvas.width) / 2;
  const offsetY = (window.innerHeight - canvas.height) / 2;

  mouse.x = event.clientX - offsetX;
  mouse.y = event.clientY - offsetY;

  // Determine which tile mouse is hovered over
  for (let i = 0; i < placementTiles.length; i++) {
    const tile = placementTiles[i];

    activeTile = null;
    if (
      mouse.x > tile.position.x &&
      mouse.x < tile.position.x + tile.size &&
      mouse.y > tile.position.y &&
      mouse.y < tile.position.y + tile.size
    ) {
      activeTile = tile;
      break;
    }
  }
});
