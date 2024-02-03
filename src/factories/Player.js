import {GameBoard} from './GameBoard.js';

export default class Player {
  constructor(type) {
    this.type = type;
    this.gameBoard = new GameBoard();
  }

  attack(enemy, coords) {
    enemy.gameBoard.receiveAttack(coords);
  }
  
  randomAttack(user){
    const attackable = [];
    for(let i = 0;i<user.gameBoard.gameBoard.length;i++){
      for(let j = 0;j<user.gameBoard.gameBoard[i].length;j++){
        if(user.gameBoard.gameBoard[i][j] == null){
          attackable.push([i,j]);
        }
      }
    }
    let randomCoords = attackable[Math.floor(Math.random()*attackable.length)];
    user.gameBoard.receiveAttack(randomCoords);
    const [x,y] = randomCoords;
    return user.gameBoard.gameBoard[x][y];
  }

}

