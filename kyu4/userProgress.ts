// Kata - Codewars style ranking system
// Link - https://www.codewars.com/kata/51fda2d95d6efda45e00004e/javascript
class User {
  privateRank;
  privateProgress;

  constructor() {
    this.privateRank = -8;
    this.privateProgress = 0;
  }

  get rank() {
    return this.privateRank;
  }

  get progress() {
    return this.privateProgress;
  }

  incProgress(rankNum) {
    if (rankNum >= -8 && rankNum <= 8 && rankNum != 0) {
      if (
        rankNum > 0 &&
        this.privateRank < 0 &&
        rankNum <= this.privateRank - 3
      ) {
        return;
      } else if (
        ((rankNum > 0 && this.privateRank > 0) ||
          (rankNum < 0 && this.privateRank < 0)) &&
        rankNum <= this.privateRank - 2
      ) {
        return;
      }
      let rankDiff = 0;
      if (rankNum < this.privateRank) {
        this.privateProgress += 1;
      } else if (rankNum == this.privateRank) {
        this.privateProgress += 3;
      } else {
        if (rankNum > 0 && this.privateRank < 0) {
          rankDiff = rankNum - this.privateRank - 1;
        } else {
          rankDiff = rankNum - this.privateRank;
        }
        this.privateProgress += 10 * rankDiff * rankDiff;
      }
      if (this.privateProgress >= 100 || this.privateRank == 8) {
        const newProgress = this.privateProgress % 100;
        let newRank =
          this.privateRank + (this.privateProgress - newProgress) / 100;
        console.log(newProgress, newRank);
        if (newRank >= 8) {
          this.privateRank = 8;
          this.privateProgress = 0;
        } else if (newRank == 0) {
          this.privateRank = newRank + 1;
          this.privateProgress = newProgress;
        } else if (newRank > 0 && this.privateRank < 0) {
          this.privateRank = newRank + 1;
          this.privateProgress = newProgress;
        } else {
          this.privateRank = newRank;
          this.privateProgress = newProgress;
        }
      }
    } else {
      throw Error;
    }
  }
}
