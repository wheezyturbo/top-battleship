// Player.test.js

import Player from "../factories/Player";
import { Ship } from "../factories/Ship";

test("attack() : should attack the enemy GameBoard", () => {
  const player1 = new Player("player1");
  const player2 = new Player("player2");
  const ship = new Ship(3, "carrier");

  player2.gameBoard.placeShips();
  const enemyShip = player2.gameBoard.ships[0];

  player1.attack(player2, [0, 0]); // Attack to hit the ship
  player1.attack(player2, [1, 0]); // Attack to hit the ship

  expect(enemyShip.hits.filter((hit) => hit === true).length).toBe(2);
});

test("randomAttack() : should perform a random attack on the enemy GameBoard", () => {
  const player1 = new Player("player1");
  const player2 = new Player("player2");

  player2.gameBoard.placeShips();
  const initialMissedAttacks = player2.gameBoard.missedAttacks.length;

  player1.randomAttack(player2);

  expect(player2.gameBoard.missedAttacks.length).toBeGreaterThan(initialMissedAttacks);
});