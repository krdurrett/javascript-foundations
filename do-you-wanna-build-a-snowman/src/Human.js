var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {snowballs: 0,
                      coal: 0,
                      buttons: 0,
                      carrots: 0,
    }
  }
  gatherMaterials(type, number) {
    if (type === "snowballs") {
      this.materials.snowballs += number;
    } else if (type === "coal") {
      this.materials.coal += number;
    } else if (type === "buttons") {
      this.materials.buttons += number;
    } else {
      this.materials.carrots += number;
    }
  }
  buildASnowman() {
    var snowman = new Snowman(this.materials);
    return snowman;
  }
  placeMagicHat() {
    var snowman = new Snowman(this.materials);
    snowman.canWearMagicHat();
    if (snowman.magicHat) {
      return 'Woah, this snowman is coming to life!';
    } else {
      return 'I guess I didn\'t build it correctly.'
    }
  }
}

module.exports = Human;
