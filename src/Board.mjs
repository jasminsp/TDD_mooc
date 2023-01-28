export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    const drop = false;
    const count = 1;
    const maxCount = 3;
  }

  drop() {
    this.drop = true;
  }

  toString() {
    if (this.drop === true) {
      return ".X.\n...\n...\n";
    } else {
      return "...\n...\n...\n";
    }
  }
}
