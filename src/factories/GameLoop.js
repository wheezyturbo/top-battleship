// GameLoop.js

import { updateUI } from './dom.js'; // Assuming you have an updateUI function

export class GameLoop {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.currentPlayerIndex = 0;
    this.gameOver = false;
  }

  switchPlayer() {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  }

  playTurn() {
    const currentPlayer = this.players[this.currentPlayerIndex];
    const otherPlayer = this.players[1 - this.currentPlayerIndex];

    // Check if the other player's ships are all sunk
    if (otherPlayer.gameBoard.allShipsSunk()) {
      this.gameOver = true;
      console.log(`${currentPlayer.type} wins!`);
      return;
    }

    // Add logic for the player's turn (placing ships or attacking)
    // You may want to differentiate between placing phase and playing phase

    // Example: Random attack for computer player
    if (currentPlayer.type === 'computer') {
      const result = currentPlayer.randomAttack(otherPlayer);
      console.log(`${currentPlayer.type} attacked: `, result);
    }

    // Switch to the other player for the next turn
    this.switchPlayer();
    updateUI(); // Update the UI after each turn
  }

  startGame() {
    while (!this.gameOver) {
      this.playTurn();
    }
  }
}

