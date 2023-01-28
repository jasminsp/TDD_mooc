export class Board {
  width;
  height;
  falling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let board = "";

    for (let row = 0; row < this.width; row++) {
      for (let col = 0; col < this.height; col++) {
        if (row === 0 && col === 1 && this.falling) {
          board += "X";
        } else {
          board += ".";
        }
      }
      board += "\n";
    }
    return board;
  }

  drop(block) {
    this.falling = true;
  }
}
