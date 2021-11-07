var Skier = require('./Skier');

class Lift {
  constructor(people) {
    this.inService = true;
    this.limit = people;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(name, ticket) {
    var skier = new Skier(name, ticket);
    if (this.skiers.length < this.limit && skier.hasLiftTicket) {
      this.skiers.push(skier);
    } else if (this.skiers.length >= this.limit) {
      return `Sorry, ${skier.name}. Please wait for the next lift!`
    } else {
      return `Sorry, ${skier.name}. You need a lift ticket!`
    }
  }
  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    } else if ((this.limit - this.skiers.length) === 1) {
      return `We still need 1 more skier!`;
    } else {
      return `We still need ${this.limit - this.skiers.length} more skiers!`
    }
  }
}

module.exports = Lift;
