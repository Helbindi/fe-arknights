class PlacementTile {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.size = 64;
    this.color = "rgba(255,255,255,0.4)";
    this.isOccupied = false;
    this.character = {};
  }
  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.size, this.size);
    c.strokeStyle = "limegreen";
    c.lineWidth = 5;
  }

  update(mouse) {
    this.draw();

    if (
      mouse.x > this.position.x &&
      mouse.x < this.position.x + this.size &&
      mouse.y > this.position.y &&
      mouse.y < this.position.y + this.size &&
      !this.isOccupied
    ) {
      this.color = "white";
      c.strokeRect(this.position.x, this.position.y, this.size, this.size);
    } else {
      this.color = "rgba(255,255,255,0.4)";
    }
  }
}
