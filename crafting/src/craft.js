class Craft {
  constructor(craft) {
    this.name = craft.type;
    this.materials = craft.materials;
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }
  calculateProjectTotal() {
    var cost = []
    var totCost = 0;
    for (var i = 0; i < this.materials.length; i++) {
      cost.push(this.materials[i].price * this.materials[i].amount);
    }
    for (var i = 0; i < cost.length; i++) {
      totCost += cost[i];
    }
    return totCost;
  }
}

module.exports = Craft;
