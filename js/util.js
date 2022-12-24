/**
 * Utility functions for Sprites
 */
function getSpriteData(name) {
  switch (name.toLowerCase()) {
    case "natasha":
      return characterSprites.natasha;
    case "lilina":
      return characterSprites.lilina;
    case "sophia":
      return characterSprites.sophia;
    case "myrrh":
      return characterSprites.myrrh;
    case "melady":
      return characterSprites.melady;
    case "ephraim":
      return characterSprites.ephraim;
    case "eirika":
      return characterSprites.eirika;
    case "roy":
      return characterSprites.roy;
    case "nino":
      return characterSprites.nino;
    case "hector":
      return characterSprites.hector;
    case "lyn":
      return characterSprites.lyn;
    case "bonesword":
      return characterSprites.bonesword;
    case "bonespear":
      return characterSprites.bonespear;
    case "zombie":
      return characterSprites.zombie;
    case "mogall":
      return characterSprites.mogall;
    default:
      try {
        throw new Error(`${name} does not exist...`);
      } catch (e) {
        console.error(`${e.name}: ${e.message}`);
      }
  }
}

function getSpell(name) {
  switch (name.toLowerCase()) {
    case "natasha":
      return characterSprites.natasha.sprites.spell;
    case "lilina":
      return characterSprites.lilina.sprites.spell;
    case "sophia":
      return characterSprites.sophia.sprites.spell;
    case "nino":
      return characterSprites.nino.sprites.spell;
    default:
      try {
        throw new Error(`${name} does not exist...`);
      } catch (e) {
        console.error(`${e.name}: ${e.message}`);
      }
  }
}

/**
 * Utility functions for Characters
 */
function getRandomCharacter() {
  const index = Math.floor(Math.random() * 1);
  const arr = ["nino"];
  return arr[index];
}

function createCharacter(position) {
  const name = getSelectedCharacter();
  // const name = getRandomCharacter();
  if (name) {
    const data = getSpriteData(name);
    const unit = { position, ...data };
    const result = new Character(unit);
    return result;
  } else {
    console.log("Error occured in createCharacter()");
    return null;
  }
}

function getValidTargets(targets, character) {
  const result = targets.filter((target) => {
    // calculate distance between character and enemy
    const xDifference = target.center.x - character.center.x;
    const yDifference = target.center.y - character.center.y;
    const distance = Math.hypot(xDifference, yDifference);

    // target within character hitbox
    if (target.position.x >= character.position.x) {
      if (character.isRanged) {
        return distance < target.radius + character.hitbox.ranged.width;
      } else {
        const targetX = target.center.x - target.radius;
        const charMaxX = character.center.x + character.hitbox.melee.width;
        const targetY = target.center.y;
        const charMinY = character.position.y;
        const charMaxY = charMinY + character.hitbox.melee.height;

        if (targetX < charMaxX && targetY > charMinY && targetY < charMaxY) {
          return distance < target.radius + character.hitbox.melee.width;
        } else {
          return false;
        }
      }
    }
  });

  return result;
}

function removeBlocking(character, enemiesA, enemiesB) {
  const blocking = character.getBlocking();
  if (blocking.length > 0) {
    blocking.forEach((target, index) => {
      const targetWave = target.getWave();
      if (targetWave === "A") {
        const enemyIndex = enemiesA.findIndex((enemy) => {
          return target === enemy;
        });

        if (enemyIndex === -1) {
          blocking.splice(index, 1);
        }
      }

      if (targetWave === "B") {
        const enemyIndex = enemiesB.findIndex((enemy) => {
          return target === enemy;
        });

        if (enemyIndex === -1) {
          blocking.splice(index, 1);
        }
      }
    });
  }
}

/**
 * Utility functions for Enemies
 */
function generateRandomEnemy() {
  const index = Math.floor(Math.random() * 4);
  const arr = ["bonesword", "bonespear", "zombie", "mogall"];
  return arr[index];
}

function createEnemy(position) {
  const name = generateRandomEnemy();
  const data = getSpriteData(name);
  const unit = { position, ...data };

  const result = new Enemy(unit);
  return result;
}

function spawnEnemiesA(spawnCount) {
  for (let i = 0; i < spawnCount; i++) {
    const xOffset = i * 200;
    const position = {
      x: waypointA[0].x + xOffset,
      y: waypointA[0].y,
    };
    const enemy = createEnemy(position);

    // Determine which wave to spawn in
    const newEnemy = { ...enemy, wave: "A" };
    const result = new Enemy(newEnemy);

    enemiesA.push(result);
  }

  enemiesA.sort((enemy1, enemy2) => {
    return enemy1.position.y - enemy2.position.y;
  });
}

function spawnEnemiesB(spawnCount) {
  for (let i = 0; i < spawnCount; i++) {
    const xOffset = i * 200;
    const position = {
      x: waypointB[0].x + xOffset,
      y: waypointB[0].y,
    };
    const enemy = createEnemy(position);

    // Determine which wave to spawn in
    const newEnemy = { ...enemy, wave: "B" };
    const result = new Enemy(newEnemy);

    enemiesB.push(result);
  }

  enemiesB.sort((enemy1, enemy2) => {
    return enemy1.position.y - enemy2.position.y;
  });
}

function getValidBlocks(enemy, characters) {
  const result = characters.filter((character) => {
    // enemy enters character hitbox
    if (enemy.position.x >= character.position.x) {
      const enemyX = enemy.center.x - enemy.radius;
      const charMaxX = character.center.x + 48;
      const enemyY = enemy.center.y;
      const charMinY = character.position.y;
      const charMaxY = charMinY + character.height;

      if (enemyX < charMaxX && enemyY > charMinY && enemyY < charMaxY) {
        return true;
      } else {
        return false;
      }
    }
  });

  return result;
}

function checkBlockStatus(enemy, characters, placementTiles) {
  // check if blocking character is dead
  if (enemy.blocked && enemy.blocked.health <= 0) {
    const characterIndex = characters.findIndex((character) => {
      return enemy.blocked === character;
    });

    const tileIndex = placementTiles.findIndex((tile) => {
      return enemy.blocked === tile.character;
    });

    // remove character from canvas and placement tile if dead
    if (characterIndex > -1) {
      placementTiles[tileIndex].isOccupied = false;
      placementTiles[tileIndex].character = {};
      characters.splice(characterIndex, 1);
    } else {
      enemy.setBlocked(null);
    }
  }
}

// On enemy death, remove from Canvas and check if a character was blocking it
function handleEnemyDeath(target, enemies) {
  const enemyIndex = enemies.findIndex((enemy) => {
    return target === enemy;
  });

  // remove enemy from canvas if death detected
  if (enemyIndex > -1) {
    enemies.splice(enemyIndex, 1);
  }
}

/**
 * Update/Initialize UI components
 */
function updateLivesUI(value) {
  const ui = document.getElementById("lives-remaining");
  const image = document.createElement("img");
  const text = document.createElement("p");

  if (value <= 0) {
    value = 0;
    image.src = "https://cdn.betterttv.net/emote/5c4e0570d3608d75429cc06a/3x";
  } else if (value <= 3) {
    image.src = "https://cdn.frankerfacez.com/emoticon/649654/2";
  } else {
    image.src = "https://cdn.frankerfacez.com/emoticon/220000/2";
  }

  text.textContent = value;

  ui.childNodes.forEach((child) => {
    switch (child.nodeName) {
      case "IMG":
        {
          if (child.src === image.src) {
            break;
          }

          ui.replaceChild(image, child);
        }
        break;
      case "P":
        {
          ui.replaceChild(text, child);
        }
        break;

      default:
        break;
    }
  });
}

function updatePointsUI(value) {
  if (value > 99) {
    value = 99;
  }
  const ui = document.getElementById("deployment-points");
  const text = document.createElement("p");

  text.textContent = value;

  ui.childNodes.forEach((child) => {
    if (child.nodeName === "P") {
      ui.replaceChild(text, child);
    }
  });
}

function initialLivesUI(value) {
  const ui = document.getElementById("lives-remaining");
  const image = document.createElement("img");
  const text = document.createElement("p");

  image.src = "https://cdn.frankerfacez.com/emoticon/220000/2";
  text.textContent = value;

  ui.append(image);
  ui.append(text);
}

function initialPointsUI(value) {
  const ui = document.getElementById("deployment-points");
  const image = document.createElement("img");
  const text = document.createElement("p");

  image.src = "https://cdn.betterttv.net/emote/5e8ba3a109989e5cdff54f3f/2x";
  text.textContent = value;

  ui.append(text);
  ui.append(image);
}

function initialCharacters() {
  const section = document.getElementById("character-selection");

  for (const [key, value] of Object.entries(characterInfo)) {
    const card = createCard(key, value);
    section.append(card);
  }
}

function createCard(name, values) {
  const card = document.createElement("article");
  const info = document.createElement("div");
  card.className = "character-card";
  card.id = "character-card";
  info.className = "card-info";
  card.setAttribute("character", name);
  card.setAttribute("aria-selected", false);

  const infoImg = document.createElement("img");
  infoImg.className = "icon-img info";
  infoImg.id = "info";
  infoImg.ariaExpanded = false;
  const weaponImg = document.createElement("img");
  weaponImg.className = "icon-img weapon";
  const deployCost = document.createElement("p");
  deployCost.className = "deploy-cost";
  const portraitImg = document.createElement("img");
  portraitImg.className = "portrait-img";

  infoImg.src =
    "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FWeapons%2Fmagnify-icon.png?alt=media";
  weaponImg.src = values.weaponSrc;
  deployCost.textContent = values.stats.cost;
  portraitImg.src = values.portraitSrc;

  info.append(infoImg);
  info.append(weaponImg);
  info.append(deployCost);
  card.append(info);
  card.append(portraitImg);

  return card;
}

function createDetailedInfo(name) {
  // check if a detailed info window of a previous character exists, remove it
  const detailedInfo = document.getElementsByClassName("detailed-info")[0];
  if (detailedInfo) {
    detailedInfo.remove();
  }

  const character = characterInfo[name];
  console.log(character);

  const ui = document.getElementById("game-window");
  const section = document.createElement("section");
  const portrait = document.createElement("img");

  const nameInfo = document.createElement("div");
  const weapon = document.createElement("img");
  const characterName = document.createElement("p");
  const series = document.createElement("img");

  const statsInfo = document.createElement("div");
  const health = document.createElement("p");
  const power = document.createElement("p");
  const defence = document.createElement("p");
  const block = document.createElement("p");

  const attackRange = document.createElement("img");

  const close = document.createElement("button");
  close.className = "close-btn";
  close.textContent = "x";
  close.addEventListener("click", () => {
    section.remove();
  });

  section.className = "detailed-info";
  section.setAttribute("character", name);
  portrait.className = "detailed-portrait";

  nameInfo.className = "name-info";
  weapon.className = "icon-img";
  characterName.className = "character-name";
  series.className = "series-img img";

  statsInfo.className = "stats-info";

  attackRange.className = "atk-range-img";

  portrait.src = character.portraitSrc;
  attackRange.src = character.attackRangeSrc;
  weapon.src = character.weaponSrc;
  series.src = character.seriesSrc;

  characterName.textContent = character.name;
  health.textContent = `Health: ${character.stats.health}`;
  power.textContent = `Power: ${character.stats.power}`;
  defence.textContent = `Defence: ${character.stats.defence}`;
  block.textContent = `Block: ${character.stats.maxBlock}`;

  nameInfo.append(weapon);
  nameInfo.append(characterName);
  nameInfo.append(series);

  statsInfo.append(health);
  statsInfo.append(power);
  statsInfo.append(defence);
  statsInfo.append(block);

  section.append(close);
  section.append(portrait);
  section.append(nameInfo);
  section.append(statsInfo);
  section.append(attackRange);

  ui.append(section);
}

function getSelectedCharacter() {
  let name = "";
  section.childNodes.forEach((card) => {
    if (card.ariaSelected === "true") {
      name = card.getAttribute("character");
    }
  });

  return name;
}

initialLivesUI(5);
initialPointsUI(0);
initialCharacters();

// Toggle aria-selected for character cards
const section = document.getElementById("character-selection");
section.childNodes.forEach((card) => {
  card.addEventListener("click", (event) => {
    card.setAttribute("aria-selected", true);

    // reset aria-selected for all other cards
    section.childNodes.forEach((sibling) => {
      if (sibling !== card && sibling.ariaSelected === "true")
        sibling.setAttribute("aria-selected", false);
    });
  });
});

// Toggle aria-expanded for detailed character screen
const infoDetails = document.getElementsByClassName("info");
for (const info of infoDetails) {
  info.addEventListener("click", (event) => {
    info.setAttribute("aria-expanded", true);
    // find character name
    const name = info.parentNode.parentNode.getAttribute("character");
    createDetailedInfo(name);

    // reset aria-expoanded for all other infos
    for (const other of infoDetails) {
      if (other !== info && other.ariaExpanded === "true") {
        other.setAttribute("aria-expanded", false);
      }
    }
  });
}

const detailedInfo = document.getElementsByClassName("detailed-info")[0];
if (detailedInfo) {
  detailedInfo.childNodes[0].addEventListener("click", () => {
    detailedInfo.remove();
  });
}
