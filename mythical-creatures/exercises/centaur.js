class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.activityCount = 0;
    this.layingDown = false;
  }
  shootBow() {
    this.activityCount += 1;
    if (this.activityCount >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Twang!!!';
    }
  }
  run() {
    this.activityCount += 1;
    if (this.activityCount >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    }
    return 'Clop clop clop clop!!!';
  }
  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      this.cranky = false;
      return 'ZZZZ';
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.activityCount = 0;
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;






























// class Centaur {
//   constructor({name, type}) {
//     this.name = name;
//     this.breed = type;
//     this.cranky = false;
//     this.standing = true;
//     this.activity = 0;
//     this.layingDown = false;
//   }
//   shootBow() {
//     if (this.activity < 2 && this.layingDown === false) {
//       this.activity +=1;
//       return 'Twang!!!';
//     } else {
//       this.cranky = true;
//       return 'NO!';
//     }
//   }
//   run() {
//     if (this.activity < 2 && this.layingDown === false) {
//       this.activity +=1;
//       return 'Clop clop clop clop!!!'
//     } else {
//       this.cranky = true;
//       return 'NO!';
//     }
//   }
//   sleep() {
//     if (this.standing === true) {
//       return 'NO!';
//     } else {
//       this.cranky = false;
//       this.activity = 0;
//       return 'ZZZZ';
//     }
//   }
//   layDown() {
//     this.standing = false;
//     this.layingDown = true;
//   }
//   standUp() {
//     this.standing = true;
//     this.layingDown = false;
//   }
//   drinkPotion() {
//     if (this.standing === true) {
//       this.cranky = false;
//     } else {
//       return 'Not while I\'m laying down!';
//     }
//   }
// }
//
//
// module.exports =
// Centaur
