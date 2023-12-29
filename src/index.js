import {GameBoard} from './components/GameBoard.js'; 
import {Ship} from './components/Ship.js';

console.log("Hello World");

const carrier = new Ship(3,"carrier");
const test = new GameBoard();

test.placeShip([2,3],carrier);

console.log(test.shipAt([2,3]));
