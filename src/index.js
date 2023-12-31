import Player from './factories/Player.js';
import {Ship} from './factories/Ship.js';
import {GameBoard} from './factories/GameBoard.js';

  const user = new Player("player");
  const computer = new Player("computer");
  const ship = new Ship("carrier",3); 
  computer.gameBoard.placeShip([3,4],ship)
  
  user.attack(computer,[3,4]);
  user.attack(computer,[4,4]);
  //user.attack(computer,[5,4]);
  console.log(computer.gameBoard.gameBoard[3]);
  console.log(computer.gameBoard.gameBoard);
console.log(computer.gameBoard.ships);
