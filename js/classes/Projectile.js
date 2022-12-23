class Projectile extends Sprite {
  constructor({
    position = { x: 0, y: 0 },
    imageSrc,
    target,
    scale = 1,
    frames = { max: 1 },
    offset = {
      x: 0,
      y: 0,
    },
  }) {
    super({ position, imageSrc, scale, frames, offset });
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.target = target;
    this.radius = 32;
  }

  update() {
    this.draw();

    const angle = Math.atan2(
      this.target.center.y - this.position.y,
      this.target.center.x - this.position.x
    );

    const power = 3;
    this.velocity.x = Math.cos(angle) * power;
    this.velocity.y = Math.sin(angle) * power;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
