export class Board {
  width;
  height;
  fallingBlock;
  EMPTY = ".";
  fallingBlockRow = 0;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let board = "";

    for (let row = 0; row < this.width; row++) {
      for (let col = 0; col < this.height; col++) {
        board += this.hasFallingAt(row, col) ? this.fallingBlock : this.EMPTY;
      }
      board += "\n";
    }
    return board;
  }

  hasFallingAt(row, col) {
    return this.hasFalling() && row === this.fallingBlockRow && col === 1;
  }

  hasFalling() {
    return this.fallingBlock !== undefined;
  }

  drop(block) {
    if (this.hasFalling()) {
      throw Error("already falling");
    }
    this.fallingBlock = block.color;
  }

  tick() {
    if (this.fallingBlockRow === this.width - 1) {
      this.fallingBlock = null;
    } else {
      this.fallingBlockRow++;
    }
  }
}
