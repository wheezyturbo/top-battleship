// dom.js

export const createBoard = (boardElement, rows, cols, clickHandler) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const button = document.createElement('button');
      button.setAttribute('data-coordinates', `${i},${j}`);
      button.addEventListener('click', clickHandler);
      boardElement.appendChild(button);
    }
  }
};

export const updateBoard = (boardElement, gameBoard) => {
  // Clear the board
  boardElement.innerHTML = '';

  // Update the board based on the game state
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      const button = document.createElement('button');
      button.setAttribute('data-coordinates', `${i},${j}`);

      // Customize the appearance based on the game state (hit, miss, ship, etc.)
      const cellValue = gameBoard[i][j];
      if (cellValue === 'hit') {
        button.classList.add('hit');
      } else if (cellValue === 'miss') {
        button.classList.add('miss');
      } else if (cellValue instanceof Ship) {
        button.textContent = cellValue.type; // Display ship name
      }

      boardElement.appendChild(button);
    }
  }
};

