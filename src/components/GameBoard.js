import {Ship} from './Ship.js';
export class GameBoard{
  gameBoard = []
  constructor(){
    this.ships = [];
    this.missedAttacks = [];
  }
  placeShip(coordinates,ship){
    this.ships.push({coordinates,ship});
  }
  getBoard(){
    return this.gameBoard;
  }
  shipAt(coord){
    for(let i = 0;i<this.ships.length;i++){
      const [x,y] = coord;
      const [shipX,shipY] = this.ships[i].coordinates;
      if(x == shipX && y == shipY)return this.ships[i].ship;
    }
    return null;
  }
  receiveAttack(coords){
    const ship = this.shipAt(coords);
    if(/*isValidSquare(coords)*/this.shipAt(coords)){
      ship.hit();
    }
    else{
      this.missedAttacks.push(coords);
    }
     
  }
  allShipsSunk(){
    return this.ships.every(shipInfo=>shipInfo.ship.isSunk());
  }
}
