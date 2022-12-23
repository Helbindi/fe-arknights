class Character extends Sprite {
  constructor({
    position,
    imageSrc,
    sprites,
    frames = { max: 1 },
    offset = { x: 0, y: 0 },
    name = "",
    scale = 1,
    isHealer = false,
    isRanged = false,
    stats = {
      health: 100,
      power: 10,
      defence: 10,
      maxBlock: 1,
    },
  }) {
    super({
      position,
      imageSrc,
      frames,
      offset,
      scale,
    });
    this.width = 64;
    this.height = 64;
    this.radius = 32;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.projectiles = [];
    this.hitbox = {
      ranged: {
        width: 320,
        height: 192,
        adjust: 64,
      },
      melee: {
        width: 128,
        height: 64,
        adjust: 0,
      },
    };
    this.target;

    this.frames = {
      max: 1,
      current: 0,
      elapsed: 0,
      hold: 10,
    };

    this.blocking = [];

    this.name = name;
    this.isHealer = isHealer;
    this.isRanged = isRanged;
    this.isAttacking = false;
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
    c.fillRect(this.position.x, this.position.y - 30, this.width, 6);

    c.fillStyle = "green";
    c.fillRect(
      this.position.x,
      this.position.y - 30,
      (this.width * this.health) / 100,
      6
    );

    // hitbox
    // c.fillStyle = "rgba(250, 0, 0, 0.2)";
    // if (this.isRanged) {
    //   c.fillRect(
    //     this.position.x,
    //     this.position.y - this.hitbox.ranged.adjust,
    //     this.hitbox.ranged.width,
    //     this.hitbox.ranged.height
    //   );
    // } else {
    //   c.fillRect(
    //     this.position.x,
    //     this.position.y - this.hitbox.melee.adjust,
    //     this.hitbox.melee.width,
    //     this.hitbox.melee.height
    //   );
    // }

    // character sprite
    // c.fillStyle = "rgba(0, 250, 0, 0.2)";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.animateFrames();

    if (this.target && this.frames.elapsed % this.frames.hold === 0) {
      this.switchSprite("attack");
      if (this.frames.current === 4) {
        if (this.isRanged) {
          // Ranged characters damage enemy when the Projectile collids with enemy
          this.shoot();
        } else {
          // Melee characters damage enemy during their 5th frame attack animation AND target within hitbox
          const damage = this.getPower() - this.target.getDefence();
          this.target.hit(damage);
        }
      }
    }
  }

  shoot() {
    const data = getSpell(this.name);

    this.projectiles.push(
      new Projectile({
        position: {
          x: this.center.x,
          y: this.position.y,
        },
        target: this.target,
        ...data.projectile,
      })
    );
  }

  hit(damage) {
    if (damage < 0) {
      damage = 0;
    }
    this.health -= damage;
  }

  heal(value) {
    const newHealth = this.health + value;
    if (newHealth > 100) {
      this.health = 100;
    } else {
      this.health = newHealth;
    }
  }

  setBlocking(enemy) {
    this.blocking.push(enemy);
  }

  getBlocking() {
    return this.blocking;
  }

  getPower() {
    return this.stats.power;
  }

  getDefence() {
    return this.stats.defence;
  }

  getDeployCost() {
    return this.stats.cost;
  }

  switchSprite(sprite) {
    // override all other animations with attack animation
    if (
      this.image === this.sprites.attack.image &&
      this.frames.current < this.sprites.attack.framesMax - 1
    )
      return;

    switch (sprite) {
      case "idle":
        if (this.image !== this.sprites.idle.image) {
          this.isAttacking = false;
          this.image = this.sprites.idle.image;
          this.frames.max = this.sprites.idle.framesMax;
          this.frames.current = 0;
        }
        break;
      case "attack":
        if (this.image !== this.sprites.attack.image) {
          this.isAttacking = true;
          this.image = this.sprites.attack.image;
          this.frames.max = this.sprites.attack.framesMax;
          this.frames.current = 0;
        }
        break;
    }
  }
}
