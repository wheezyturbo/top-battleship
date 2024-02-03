export class Ship {
  constructor(length, type) {
    this.length = length;
    this.type = type;
    this.hits = new Array(length).fill(false); // Initialize hits array
    this.isSunk = false; // Add a property to track if the ship is sunk
  }

  hit() {
    // Find the first index in hits array with false value and mark it as hit
    const index = this.hits.indexOf(false);
    if (index !== -1) {
      this.hits[index] = true;
      if (this.hits.every((hit) => hit)) {
        this.isSunk = true; // Mark the ship as sunk when all parts are hit
        console.log(`Ship ${this.type} has been sunk!`);
      }
    }
  }

  getLength() {
    return this.length;
  }
}