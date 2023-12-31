import {GameBoard} from '../factories/GameBoard.js';
import {Ship} from '../factories/Ship.js';


test("placeShip() : place the ship on the board", () => {
  const playerBoard = new GameBoard();
  const carrier = new Ship(3, "carrier");

  playerBoard.placeShip([2, 3], carrier);
  const ship = playerBoard.gameBoard[2][3];
  expect(ship).toEqual(carrier);
});

test("placeShip() : cannot place ship on illegal coords",()=>{
  const playerBoard = new GameBoard();
  const carrier = new Ship(3,"carrier");

  const ship = playerBoard.gameBoard[4][10];
  expect(ship).toBe(undefined);

  playerBoard.placeShip([2,3],carrier);
  expect(()=>{playerBoard.placeShip([4,10],carrier)}).toThrow("Invalid Coordinates");
})

test("receiveAttack() : hit the correct ship or add to missed", () => {
  const playerBoard = new GameBoard();
  const boat = new Ship(3, "Carrier");
  playerBoard.placeShip([1, 2], boat);
  
  playerBoard.receiveAttack([1, 2]); // Hit the ship
  playerBoard.receiveAttack([3, 4]); // Missed attack
  
  expect(boat.no_of_hits).toBe(1);

  const missedAttacks = playerBoard.missedAttacks;
  expect(missedAttacks).toStrictEqual([[3, 4]]);
});


test("All the ships sunk?", () => {
  const playerBoard = new GameBoard();
  const carrier = new Ship(3, "carrier");
  const rift = new Ship(2, "rift");
  playerBoard.placeShip([1, 2], carrier);
  playerBoard.placeShip([3, 4], rift);

  playerBoard.receiveAttack([1, 2]); // Hit carrier
  playerBoard.receiveAttack([1, 3]); // Hit carrier
  playerBoard.receiveAttack([1, 4]); // Hit carrier
  
  playerBoard.receiveAttack([3, 4]); // Hit rift
  playerBoard.receiveAttack([3, 5]); // Hit rift
  expect(playerBoard.allShipsSunk()).toBe(true);
});

