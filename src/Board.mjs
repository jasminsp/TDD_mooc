export class Board {
  width;
  height;
  board;
  tickCount;
  blockCanMove;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = "...\n...\n...\n";
    this.tickCount = 0;
    this.blockCanMove = true;
  }

  drop() {
    if (this.board === ".X.\n...\n...\n") {
      throw Error("already falling");
    }

    this.board = ".X.\n...\n...\n";
  }

  tick() {
    this.tickCount += 1;

    if (this.tickCount === 1) {
      this.board = "...\n.X.\n...\n";
    } else if (this.tickCount === 2) {
      this.board = "...\n...\n.X.\n";
    }
  }

  hasFalling() {
    if (this.board === "...\n...\n.X.\n") {
      return true;
    }
  }

  toString() {
    return this.board;
  }
}
