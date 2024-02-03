import { Ship } from './Ship.js';

export class GameBoard {
  constructor() {
    this.boardSize = 10;
    this.playerBoard = this.initializeBoard();
    this.computerBoard = this.initializeBoard();
    this.ships = [
      new Ship(5, "Carrier"),
      new Ship(4, "Battleship"),
      new Ship(3, "Cruiser"),
      new Ship(3, "Submarine"),
      new Ship(2, "Destroyer"),
    ];
    this.placeShips(this.playerBoard);
    this.placeShips(this.computerBoard);
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

  placeShips(board) {
    for (const ship of this.ships) {
      let placed = false;
      while (!placed) {
        const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
        const x = Math.floor(Math.random() * this.boardSize);
        const y = Math.floor(Math.random() * this.boardSize);
        placed = this.tryPlaceShip(board, x, y, orientation, ship);
      }
    }
  }

  tryPlaceShip(board, x, y, orientation, ship) {
    const boardSize = this.boardSize;

    const isCellOccupied = (row, col) => {
        return board[row][col].status !== "hidden";
    };

    const isValidPlacement = (row, col, length, orientation) => {
        const isAdjacentCellOccupied = (r, c) => {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const newRow = r + i;
                    const newCol = c + j;
                    if (
                        newRow >= 0 &&
                        newRow < boardSize &&
                        newCol >= 0 &&
                        newCol < boardSize
                    ) {
                        if (isCellOccupied(newRow, newCol)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };

        if (orientation === "horizontal") {
            for (let i = 0; i < length; i++) {
                const newCol = col + i;
                if (
                    newCol < 0 ||
                    newCol >= boardSize ||
                    isCellOccupied(row, newCol) ||
                    isAdjacentCellOccupied(row, newCol)
                ) {
                    return false;
                }
            }
        } else if (orientation === "vertical") {
            for (let i = 0; i < length; i++) {
                const newRow = row + i;
                if (
                    newRow < 0 ||
                    newRow >= boardSize ||
                    isCellOccupied(newRow, col) ||
                    isAdjacentCellOccupied(newRow, col)
                ) {
                    return false;
                }
            }
        }
        return true;
    };

    if (orientation === "horizontal" && y + ship.length <= boardSize) {
        if (isValidPlacement(x, y, ship.length, orientation)) {
            for (let i = 0; i < ship.length; i++) {
                board[x][y + i] = { status: "hidden", ship, part: i };
            }
            return true;
        }
    } else if (orientation === "vertical" && x + ship.length <= boardSize) {
        if (isValidPlacement(x, y, ship.length, orientation)) {
            for (let i = 0; i < ship.length; i++) {
                board[x + i][y] = { status: "hidden", ship, part: i };
            }
            return true;
        }
    }

    return false;
}



  receiveAttack(x, y, targetBoard) {
    const cell = targetBoard[x][y];

    if (cell.status === "hidden") {
      if (cell.ship !== null) {
        const { ship } = cell;
        ship.hit(); // Update the hits array when the ship is hit

        if (ship.isSunk()) {
          console.log(`${ship.type} sunk!`);
        }

        cell.status = "hit";
      } else {
        cell.status = "miss";
      }
    }
  }

  checkAllSunk(ship) {
    return ship && ship.isSunk();
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  getNotSunkShips() {
    return this.ships.filter((ship) => !ship.isSunk());
  }
}