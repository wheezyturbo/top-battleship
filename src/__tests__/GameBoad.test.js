import {GameBoard} from '../components/GameBoard.js';
import {Ship} from '../components/Ship.js';


test("placeShip() : place the ship on the board",()=>{
  const playerBoard = new GameBoard();
  const carrier = new Ship(3,"carrier");

  playerBoard.placeShip([2,3],carrier);
  const ship = playerBoard.shipAt([2,3]);
  expect(ship).toEqual(carrier);
})

test("receiveAttack() : hit the correct ship or add to missed",()=>{
  const playerBoard = new GameBoard();
  const boat = new Ship(3,"Carrier");
  playerBoard.placeShip([1,2],boat);
  playerBoard.receiveAttack([1,2]);
  playerBoard.receiveAttack([3,4]);
  expect(playerBoard.missedAttacks).toStrictEqual([[3,4]]);
})

test("All the ships sunk?",()=>{
  const playerBoard = new GameBoard();
  const carrier = new Ship(3,"carrier");
  const rift = new Ship(2,"rift");
  playerBoard.placeShip([1,2],carrier);
  playerBoard.placeShip([3,4],rift);
  expect(playerBoard.allShipsSunk()).toBe(false);
  playerBoard.receiveAttack([1,2]);
  playerBoard.receiveAttack([1,2]);
  playerBoard.receiveAttack([1,2]);
  expect(playerBoard.allShipsSunk()).toBe(false);
  playerBoard.receiveAttack([3,4]);
  playerBoard.receiveAttack([3,4]);
  expect(playerBoard.allShipsSunk()).toBe(true);
})
