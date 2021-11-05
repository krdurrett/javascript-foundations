class Skater {
  constructor(skater) {
    this.name = skater.name;
    this.skill = skater.skill;
    this.tricks = skater.tricks;
    this.money = skater.cash;
    this.frustration = 0;
    this.attempts = 0;
  }
  practice(trick){
    this.attempts += 1;
    if (!this.tricks.kickflip && trick === 'kickflip'){
      if (this.frustration < 2) {
        this.frustration +=1;
      } else {
        this.frustration = 0;
        this.tricks.kickflip = true;
        return `I just learned to ${trick}!!!`
      }
    } else if (!this.tricks.treflip && trick === 'treflip'){
      if (this.frustration < 2) {
        this.frustration +=1;
      } else {
        this.frustration = 0;
        this.tricks.treflip = true;
        return `I just learned to ${trick}!!!`
      }
    } else if (!this.tricks.bigSpin && trick === 'bigSpin') {
      if (this.frustration < 2) {
        this.frustration +=1;
      } else {
        this.frustration = 0;
        this.tricks.bigSpin = true;
        return `I just learned to ${trick}!!!`
      }
    }
  }
}


module.exports = Skater;
