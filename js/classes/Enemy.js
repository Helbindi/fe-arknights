class Enemy extends Sprite {
  constructor(
    {
      position,
      imageSrc,
      sprites,
      frames = { max: 1 },
      offset = { x: 0, y: 0 },
      name = "",
      isRanged = false,
      stats = {
        health: 100,
        power: 10,
        defence: 10,
      },
      wave,
    },
    scale = 1
  ) {
    super({
      position,
      imageSrc,
      frames,
      scale,
      offset,
    });
    this.width = 64;
    this.height = 64;
    this.wave = wave;
    this.waypointIndex = 0;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.radius = 32;
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.frames = {
      max: 1,
      current: 0,
      elapsed: 0,
      hold: 17,
    };

    this.blocked;

    this.name = name;
    this.isRanged = isRanged;
    this.stats = stats;
    this.health = 100;
    this.sprites = sprites;

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  draw() {
    super.draw();

    // health bar
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y - 7, this.width, 5);

    c.fillStyle = "purple";
    c.fillRect(
      this.position.x,
      this.position.y - 7,
      (this.width * this.health) / 100,
      5
    );

    // enemy sprite
    // c.fillStyle = "rgba(0, 250, 0, 0.2)";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.animateFrames();

    if (this.blocked) {
      if (this.frames.elapsed % this.frames.hold === 0) {
        this.attack();
      }
      this.velocity.x = 0;
      this.velocity.y = 0;
    } else {
      switch (this.wave) {
        case "A":
          this.calcMovementA();
          break;
        case "B":
          this.calcMovementB();
          break;
        default:
          console.log("Error in Enemy Class with Switch statement...");
          break;
      }
    }
  }

  attack() {
    this.switchSprite("attack");
    if (this.frames.current === 4) {
      const damage = this.getPower() - this.blocked.getDefence();
      this.blocked.hit(damage);
    }
  }

  hit(damage) {
    if (damage < 0) {
      damage = 0;
    }
    this.health -= damage;
  }

  setBlocked(character) {
    this.blocked = character;
  }

  getWave() {
    return this.wave;
  }

  getPower() {
    return this.stats.power;
  }

  getDefence() {
    return this.stats.defence;
  }

  calcMovementA() {
    const waypoint = waypointA[this.waypointIndex];
    const yDistance = waypoint.y - this.position.y;
    const xDistance = waypoint.x - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);

    const speed = 1.5;
    this.velocity.x = Math.cos(angle) * speed;
    this.velocity.y = Math.sin(angle) * speed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.abs(Math.round(this.position.x) - Math.round(waypoint.x)) <
        Math.abs(this.velocity.x) &&
      Math.abs(Math.round(this.position.y) - Math.round(waypoint.y)) <
        Math.abs(this.velocity.y) &&
      this.waypointIndex < waypointA.length - 1
    ) {
      this.waypointIndex++;
    }
  }
  calcMovementB() {
    const waypoint = waypointB[this.waypointIndex];
    const yDistance = waypoint.y - this.position.y;
    const xDistance = waypoint.x - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);

    const speed = 1.5;
    this.velocity.x = Math.cos(angle) * speed;
    this.velocity.y = Math.sin(angle) * speed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.abs(Math.round(this.position.x) - Math.round(waypoint.x)) <
        Math.abs(this.velocity.x) &&
      Math.abs(Math.round(this.position.y) - Math.round(waypoint.y)) <
        Math.abs(this.velocity.y) &&
      this.waypointIndex < waypointB.length - 1
    ) {
      this.waypointIndex++;
    }
  }

  switchSprite(sprite) {
    // override all other animations with attack animation
    if (
      this.blocked &&
      this.image === this.sprites.attack.image &&
      this.frames.current < this.sprites.attack.framesMax - 1
    )
      return;

    switch (sprite) {
      case "idle":
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.frames.max = this.sprites.idle.framesMax;
          this.frames.current = 0;
        }
        break;
      case "run":
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.frames.max = this.sprites.run.framesMax;
          this.frames.current = 0;
        }
        break;
      case "attack":
        if (this.image !== this.sprites.attack.image) {
          this.image = this.sprites.attack.image;
          this.frames.max = this.sprites.attack.framesMax;
          this.frames.current = 0;
        }
        break;
    }
  }
}
