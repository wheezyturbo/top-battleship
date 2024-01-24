// index.js
import Player from './factories/Player.js';
import GameBoard from './factories/GameBoard.js';
import { Ship } from './factories/Ship.js';

const playerBoardElement = document.getElementById('player-board');
const enemyBoardElement = document.getElementById('enemy-board');

const player = new Player('human');
const computer = new Player('computer');

player.gameBoard.placeShip([0, 0], new Ship(3, 'Submarine'), 'horizontal');
player.gameBoard.placeShip([2, 3], new Ship(4, 'Battleship'), 'vertical');
player.gameBoard.placeShip([5, 6], new Ship(2, 'Destroyer'), 'horizontal');

computer.gameBoard.placeShip([1, 1], new Ship(3, 'Submarine'), 'vertical');
computer.gameBoard.placeShip([4, 2], new Ship(4, 'Battleship'), 'horizontal');
computer.gameBoard.placeShip([7, 5], new Ship(2, 'Destroyer'), 'vertical');

function createBoard(board, element, isPlayerBoard) {
  element.innerHTML = '';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement('div');
      cell.className = isPlayerBoard ? 'board-cell' : 'board-cell-opponent';

      if (isPlayerBoard) {
        if (board[i][j] === 'hit') {
          cell.classList.add('hit');
        } else if (board[i][j] === 'miss') {
          cell.classList.add('miss');
        } else if (board[i][j] === null) {
          cell.classList.add('empty');
        } else {
          cell.classList.add('ship');
        }
      } else {
        cell.addEventListener('click', () => handlePlayerClick(player, computer, [i, j]));
        cell.classList.add('empty');
      }

      element.appendChild(cell);
    }
  }
}

function handlePlayerClick(player, opponent, coords) {
  if (player.type === 'human') {
    player.attack(opponent, coords);
    createBoard(opponent.gameBoard.gameBoard, enemyBoardElement, false);
    createBoard(player.gameBoard.gameBoard, playerBoardElement, true);
    handleComputerTurn(computer, player);
  }
}

function handleComputerTurn(player, opponent) {
  if (player.type === 'computer') {
    player.randomAttack(opponent);
    createBoard(opponent.gameBoard.gameBoard, enemyBoardElement, false);
  }
}

// Initialize the boards
createBoard(player.gameBoard.gameBoard, playerBoardElement, true);
createBoard(computer.gameBoard.gameBoard, enemyBoardElement, false);

function gameLoop() {
  // Check for a win
  if (player.gameBoard.allShipsSunk()) {
    console.log(`${player.type} wins!`);
  } else if (computer.gameBoard.allShipsSunk()) {
    console.log(`${computer.type} wins!`);
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

