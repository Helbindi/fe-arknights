class Sprite {
  constructor({
    position,
    imageSrc,
    frames = { max: 1 },
    offset = { x: 0, y: 0 },
    scale = 1,
  }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;

    this.width = this.image.width;
    this.height = this.image.height;
    this.offset = offset;
    this.frames = {
      max: frames.max,
      current: 0,
      elapsed: 0,
      hold: 10,
    };

    this.scale = scale;
  }

  draw() {
    const cropWidth = this.image.width / this.frames.max;
    const crop = {
      position: {
        x: cropWidth * this.frames.current,
        y: 0,
      },
      width: cropWidth,
      height: this.image.height,
    };

    c.drawImage(
      this.image,
      crop.position.x,
      crop.position.y,
      crop.width,
      crop.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      crop.width * this.scale,
      crop.height * this.scale
    );
  }

  animateFrames() {
    // responsible for animation
    this.frames.elapsed++;
    if (this.frames.elapsed % this.frames.hold === 0) {
      this.frames.current++;
      if (this.frames.current >= this.frames.max) {
        this.frames.current = 0;
      }
    }
  }
}
