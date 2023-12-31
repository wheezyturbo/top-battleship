import Player from '../factories/Player.js';
import {Ship} from '../factories/Ship.js';

test("Players can take turns playing the game by Attacking the enemy GameBoard",()=>{
  const user = new Player("player");
  const computer = new Player("computer");
  
  const ship = new Ship(3,"carrier");
  
  computer.gameBoard.placeShip([3,4],ship);
 
  const computerShip = computer.gameBoard.gameBoard[3][4];
  expect(computerShip).toEqual(ship);
  user.attack(computer,[3,4]);
  computer.attack(user,[3,4]);
  expect(computer.gameBoard.allShipsSunk()).toBe(false);
  expect(computer.gameBoard.gameBoard[3][4]).toBe('hit');
  expect(user.gameBoard.gameBoard[3][4]).toBe('hit');
  computer.attack(user,[4,4]);
  expect(computer.randomAttack(user)).toBe("hit");
})

