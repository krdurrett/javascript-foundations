class Dragon {
  constructor (name, rider) {
    this.name = name;
    this.rider = rider;
    this.meals = 0;
    this.hungry = true;
  }
  greet () {
    return `Hi, ${this.rider}!`;
  }
  eat () {
    if (this.meals < 2) {
      this.meals += 1;
    } else {
      this.hungry = false;
    }
  }
}

module.exports= Dragon;



























// class Dragon {
//   constructor(name, rider, hungry, numberOfMeals){
//     this.name = name;
//     this.rider = rider;
//     this.hungry = true;
//     this.numberOfMeals = 0;
//   }
//
//   greet() {
//     return `Hi, ${this.rider}!`;
//   }
//
//   eat() {
//     this.numberOfMeals += 1;
//     if(this.numberOfMeals >= 3){
//       return this.hungry = false;
//     }
//
//   }
//
// }
//
// module.exports = Dragon;
