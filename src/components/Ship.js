export class Ship{
  constructor(length,type){
    this.length = length;
    this.no_of_hits = 0;
    this.type = type;
    this.sunk = false;
  }
  hit(){
    this.no_of_hits++;
    this.sunk = this.no_of_hits >= this.length;
  }
  isSunk(){
    return this.sunk;
  }
}
