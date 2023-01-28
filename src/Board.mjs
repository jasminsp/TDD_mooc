export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = "...\n...\n...\n";
  }

  drop() {
    if (this.board === ".X.\n...\n...\n") {
      throw Error("already falling");
    }

    this.board = ".X.\n...\n...\n";
  }

  tick() {
    for (let i = 0; i < 2; i += 1) {
      if (i === 1) {
        this.board = "...\n.X.\n...\n";
      }
    }
  }

  toString() {
    return this.board;
  }
}
