import { GameBoard } from "./GameBoard";

export default class GameLoop {
  constructor() {
    this.playerBoardElement = document.getElementById("player-board");
    this.enemyBoardElement = document.getElementById("enemy-board");

    this.playerBoard = new GameBoard();
    this.computerBoard = new GameBoard();

    this.createBoard(this.playerBoard.board, this.playerBoardElement, true);
    this.createBoard(this.computerBoard.board, this.enemyBoardElement, false);
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
      this.computerBoard.board[x][y].status === "hidden"
    ) {
      this.computerBoard.receiveAttack(x, y);
      this.createBoard(this.computerBoard.board, this.enemyBoardElement, false);

      if (this.computerBoard.allShipsSunk()) {
        console.log("You win!");
        this.showVictory("You Win!");  //newly added

        this.gameOver();
      } else {
        setTimeout(() => this.handleComputerTurn(this.playerBoard, this.computerBoard), 500);
      }
    }
  }

  handleComputerTurn(playerBoard, computerBoard) {
    if (!this.playerBoard.gameOver) {
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (this.playerBoard.board[x][y].status !== "hidden");

      this.playerBoard.receiveAttack(x, y);
      this.createBoard(this.playerBoard.board, this.playerBoardElement, true);

      if (this.playerBoard.allShipsSunk()) {
        console.log("Computer wins!");
        this.showVictory("Computer Wins!");  // newly added
        this.gameOver();
      }
    } else {
      console.log("You win");
      this.showVictory("You Win!"); //newly added;
      this.gameOver();
    }
  }

  gameOver() {
    this.playerBoard.gameOver = true;
    this.computerBoard.gameOver = true;
    console.log("Game Over!");
  }
  showVictory(msg){
    const h1 = document.createElement("h1");
    h1.textContent = "Game Over!";

    const h2 = document.createElement("h2");
    h2.textContent = msg;



    document.body.innerHTML = `
      <div style='width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:black;color:white;'>
        <h1>${msg}</h1>
        <h2>Game Over!</h2>
      </div>
    `;

  }
  
}
