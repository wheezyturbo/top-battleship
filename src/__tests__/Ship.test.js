// GameBoard.test.js

import { GameBoard } from "../factories/GameBoard";
import { Ship } from "../factories/Ship";

test("allShipsSunk() : should return true if all ships are sunk", () => {
  const gameBoard = new GameBoard();
  
  for (const ship of gameBoard.ships) {
    for (let i = 0; i < ship.length; i++) {
      ship.hit();
    }
  }

  expect(gameBoard.allShipsSunk()).toBe(true);
});

test("receiveAttack() : should hit the correct ship or add to missed", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship(3, "Carrier");
  const battleship = new Ship(4, "Battleship");
  
  gameBoard.placeShips();
  
  // Receive attacks to sink Carrier
  for (let i = 0; i < carrier.length; i++) {
    gameBoard.receiveAttack(i, 0);
  }

  // Receive attacks to sink Battleship
  for (let i = 0; i < battleship.length; i++) {
    gameBoard.receiveAttack(i, 1);
  }

  expect(carrier.isSunk).toBe(true);
  expect(battleship.isSunk).toBe(true);
});