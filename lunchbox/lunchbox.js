class LunchBox {
  constructor(lunchbox) {
    this.owner = lunchbox.owner;
    this.material = lunchbox.madeOf;
    this.shape = lunchbox.shape;
    this.color = lunchbox.color;
    this.snacks = [];
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks() {
    var snacks = this.snacks;
    var healthySnacks = [];
    for (var i = 0; i < snacks.length; i ++) {
      if (snacks[i].checkForHealthy()) {
        healthySnacks.push(snacks[i].type);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;
