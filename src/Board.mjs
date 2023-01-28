export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let strings = "";

    for (let row = 0; row < this.width; row++) {
      for (let col = 0; col < this.height; col++) {
        strings += ".";
      }
      strings += "\n";
    }
    return strings;
  }
}
