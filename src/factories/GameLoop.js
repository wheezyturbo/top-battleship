import { GameBoard } from "./GameBoard";

export default class GameLoop {
  constructor() {
    this.playerBoardElement = document.getElementById("player-board");
    this.enemyBoardElement = document.getElementById("enemy-board");

    this.playerBoard = new GameBoard();
    this.computerBoard = new GameBoard();

    this.createBoard(this.playerBoard.playerBoard, this.playerBoardElement, true);
    this.createBoard(this.computerBoard.computerBoard, this.enemyBoardElement, false);
  }
  createBoard(board, element, isPlayerBoard) {
    element.innerHTML = "";

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";

        if (isPlayerBoard) {
          if (board[i][j].status === "hit") {
            cell.classList.add("hit");
          } else if (board[i][j].status === "miss") {
            cell.classList.add("miss");
          } else if (
            board[i][j].status === "hidden" &&
            board[i][j].ship !== null
          ) {
            cell.classList.add(`ship-${board[i][j].ship.type}`);
          }
        } else {
          if (board[i][j].status === "hit") {
            cell.classList.add("hit");
          } else if (board[i][j].status === "miss") {
            cell.classList.add("miss");
          }
          cell.addEventListener("click", () =>
            this.handlePlayerClick(this.playerBoard, this.computerBoard, i, j)
          );
        }

        element.appendChild(cell);
      }
    }
  }

  handlePlayerClick(playerBoard, computerBoard, x, y) {
    if (
      !this.computerBoard.gameOver &&
      this.computerBoard.computerBoard[x][y].status === "hidden"
    ) {
      this.computerBoard.receiveAttack(x, y, this.computerBoard.computerBoard);
      this.createBoard(this.computerBoard.computerBoard, this.enemyBoardElement, false);

      if (this.computerBoard.allShipsSunk()) {
        console.log("You win!");
        this.gameOver();
      } else {
        setTimeout(() => this.handleComputerTurn(this.playerBoard, this.computerBoard), 500);
      }
    }
  }

  handleComputerTurn(playerBoard, computerBoard) {
    if (!playerBoard.gameOver) {
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (this.playerBoard.playerBoard[x][y].status !== "hidden");

      this.playerBoard.receiveAttack(x, y, this.playerBoard.playerBoard);
      this.createBoard(this.playerBoard.playerBoard, this.playerBoardElement, true);

      if (this.playerBoard.allShipsSunk()) {
        console.log("Computer wins!");
        this.gameOver();
      }
    } else {
      console.log("Player's ships already sunk. Computer wins!");
      this.gameOver();
    }
  }

  gameOver() {
    this.playerBoard.gameOver = true;
    this.computerBoard.gameOver = true;
    console.log("Game Over!");
  }
}
