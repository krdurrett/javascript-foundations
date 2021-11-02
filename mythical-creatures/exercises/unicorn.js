class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }
  isWhite() {
    return false;
  }
  says(phrase) {
    return `**;* ${phrase} *;**`;
  }
}

module.exports = Unicorn;
