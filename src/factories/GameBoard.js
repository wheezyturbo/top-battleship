import { Ship } from './Ship.js';

export class GameBoard {
  constructor() {
    this.boardSize = 10; // Adjust as needed for game board size
    this.gameBoard = this.initializeBoard();
    this.ships = [];
    this.missedAttacks = [];
  }

  initializeBoard() {
    const board = [];
    for (let i = 0; i < this.boardSize; i++) {
      const row = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(null); // Use null or a custom value to denote empty spaces
      }
      board.push(row);
    }
    return board;
  }

placeShip(coordinates, ship, orientation = 'vertical') {
  const [x, y] = coordinates;
  if(x >9 || y>9){
      throw new Error("Invalid Coordinates");
    }
  const shipLength = ship.length;
  const [dx, dy] = orientation === 'horizontal' ? [1, 0] : [0, 1];

  let canPlaceShip = true;
  for (let i = 0; i < shipLength; i++) {
    if (this.gameBoard[x + i * dx][y + i * dy] !== null) {
      canPlaceShip = false;
      break;
    }
  }

  if (canPlaceShip) {
    this.ships.push({ coordinates, ship });

    // Place the ship on the board
    for (let i = 0; i < shipLength; i++) {
      this.gameBoard[x + i * dx][y + i * dy] = ship; // Mark ship position on the board
    }
  }else{
      return null;
    }
}

  receiveAttack(coords) {
    const [x, y] = coords;
    const target = this.gameBoard[x][y];
  
    if (target === null) {
      this.missedAttacks.push(coords);
      this.gameBoard[x][y] = 'hit';
    } else if (target !== 'hit') {
      if (target instanceof Ship) {
        target.hit(); // Mark ship as hit
        this.gameBoard[x][y] = 'hit';
      }
    } else {
      this.missedAttacks.push(coords);
    }
  }
  

  allShipsSunk() {
    return this.ships.every(shipInfo => shipInfo.ship.isSunk());
  }
}

