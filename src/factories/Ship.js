export class Ship {
  constructor(length, type) {
    this.length = length;
    this.noOfHits = 0;
    this.type = type;
    this.sunk = false;
  }

  hit() {
    this.noOfHits++;
    this.sunk = this.noOfHits >= this.length;
  }

  isSunk() {
    return this.sunk;
  }
}
