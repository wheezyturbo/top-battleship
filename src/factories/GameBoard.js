import { Ship } from "./Ship.js";

export class GameBoard {
  constructor() {
    this.boardSize = 10;
    this.board = this.initializeBoard();
    this.ships = [
      new Ship(5, "Carrier"),
      new Ship(4, "Battleship"),
      new Ship(3, "Cruiser"),
      new Ship(3, "Submarine"),
      new Ship(2, "Destroyer"),
    ];
    this.placeShips();
    this.gameOver = false;
  }

  initializeBoard() {
    const board = [];
    for (let i = 0; i < this.boardSize; i++) {
      const row = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push({ status: "hidden", ship: null });
      }
      board.push(row);
    }
    return board;
  }

  placeShips() {
    for (const ship of this.ships) {
      let placed = false;
      while (!placed) {
        const { x, y, isVertical } = this.placeShipRandom();
        placed = this.tryPlaceShip(x, y, isVertical, ship);
      }
    }
  }

  placeShipRandom() {
    let x, y, isVertical;
    do {
      x = Math.floor(Math.random() * this.boardSize);
      y = Math.floor(Math.random() * this.boardSize);
      isVertical = Math.random() < 0.5;
    } while (!this.isShipValid(x, y, isVertical));

    return { x, y, isVertical };
  }

  isCordsValid({ x, y }) {
    return x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize;
  }

  isShipPlaceable(start, end, isVertical) {
    for (let i = start.x; i <= end.x; i++) {
      for (let j = start.y; j <= end.y; j++) {
        if (
          !this.isCordsValid({ x: i, y: j }) ||
          this.board[i][j].ship !== null
        ) {
          return false;
        }
      }
    }
    return true;
  }

  isShipValid(x, y, isVertical) {
    const ship = new Ship(1, "Temp");
    const startPoint = { x, y };
    const endPoint = isVertical
      ? { x, y: y + ship.getLength() - 1 }
      : { x: x + ship.getLength() - 1, y };

    return (
      this.isCordsValid(endPoint) &&
      this.isShipPlaceable(startPoint, endPoint, isVertical)
    );
  }

  tryPlaceShip(x, y, isVertical, ship) {
    const startPoint = { x, y };
    const endPoint = isVertical
      ? { x, y: y + ship.getLength() - 1 }
      : { x: x + ship.getLength() - 1, y };

    if (this.isShipPlaceable(startPoint, endPoint, isVertical)) {
      for (let i = 0; i < ship.getLength(); i++) {
        this.board[isVertical ? x : x + i][isVertical ? y + i : y] = {
          status: "hidden",
          ship,
          part: i,
        };
      }
      return true;
    }

    return false;
  }

  receiveAttack(x, y) {
    const cell = this.board[x][y];
    // Check if there's a ship in the cell
    if (cell.ship) {
      cell.status = "hit";
      cell.ship.hit();
    } else {
      cell.status = "miss";
    }
  }
  checkAllSunk(ship) {
    return ship && ship.hits.every((hit) => hit === true);
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk);
  }
}
