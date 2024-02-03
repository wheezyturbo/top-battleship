/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/GameBoard.js":
/*!************************************!*\
  !*** ./src/factories/GameBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/factories/Ship.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var GameBoard = /*#__PURE__*/function () {
  function GameBoard() {
    _classCallCheck(this, GameBoard);
    this.boardSize = 10;
    this.board = this.initializeBoard();
    this.ships = [new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(5, "Carrier"), new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4, "Battleship"), new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3, "Cruiser"), new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3, "Submarine"), new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2, "Destroyer")];
    this.placeShips();
    this.gameOver = false;
  }
  _createClass(GameBoard, [{
    key: "initializeBoard",
    value: function initializeBoard() {
      var board = [];
      for (var i = 0; i < this.boardSize; i++) {
        var row = [];
        for (var j = 0; j < this.boardSize; j++) {
          row.push({
            status: "hidden",
            ship: null
          });
        }
        board.push(row);
      }
      return board;
    }
  }, {
    key: "placeShips",
    value: function placeShips() {
      var _iterator = _createForOfIteratorHelper(this.ships),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ship = _step.value;
          var placed = false;
          while (!placed) {
            var _this$placeShipRandom = this.placeShipRandom(),
              x = _this$placeShipRandom.x,
              y = _this$placeShipRandom.y,
              isVertical = _this$placeShipRandom.isVertical;
            placed = this.tryPlaceShip(x, y, isVertical, ship);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "placeShipRandom",
    value: function placeShipRandom() {
      var x, y, isVertical;
      do {
        x = Math.floor(Math.random() * this.boardSize);
        y = Math.floor(Math.random() * this.boardSize);
        isVertical = Math.random() < 0.5;
      } while (!this.isShipValid(x, y, isVertical));
      return {
        x: x,
        y: y,
        isVertical: isVertical
      };
    }
  }, {
    key: "isCordsValid",
    value: function isCordsValid(_ref) {
      var x = _ref.x,
        y = _ref.y;
      return x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize;
    }
  }, {
    key: "isShipPlaceable",
    value: function isShipPlaceable(start, end, isVertical) {
      for (var i = start.x; i <= end.x; i++) {
        for (var j = start.y; j <= end.y; j++) {
          if (!this.isCordsValid({
            x: i,
            y: j
          }) || this.board[i][j].ship !== null) {
            return false;
          }
        }
      }
      return true;
    }
  }, {
    key: "isShipValid",
    value: function isShipValid(x, y, isVertical) {
      var ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1, "Temp");
      var startPoint = {
        x: x,
        y: y
      };
      var endPoint = isVertical ? {
        x: x,
        y: y + ship.getLength() - 1
      } : {
        x: x + ship.getLength() - 1,
        y: y
      };
      return this.isCordsValid(endPoint) && this.isShipPlaceable(startPoint, endPoint, isVertical);
    }
  }, {
    key: "tryPlaceShip",
    value: function tryPlaceShip(x, y, isVertical, ship) {
      var startPoint = {
        x: x,
        y: y
      };
      var endPoint = isVertical ? {
        x: x,
        y: y + ship.getLength() - 1
      } : {
        x: x + ship.getLength() - 1,
        y: y
      };
      if (this.isShipPlaceable(startPoint, endPoint, isVertical)) {
        for (var i = 0; i < ship.getLength(); i++) {
          this.board[isVertical ? x : x + i][isVertical ? y + i : y] = {
            status: "hidden",
            ship: ship,
            part: i
          };
        }
        return true;
      }
      return false;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      var cell = this.board[x][y];
      // Check if there's a ship in the cell
      if (cell.ship) {
        cell.status = "hit";
        cell.ship.hit();
      } else {
        cell.status = "miss";
      }
    }
  }, {
    key: "checkAllSunk",
    value: function checkAllSunk(ship) {
      return ship && ship.hits.every(function (hit) {
        return hit === true;
      });
    }
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      return this.ships.every(function (ship) {
        return ship.isSunk;
      });
    }
  }]);
  return GameBoard;
}();

/***/ }),

/***/ "./src/factories/GameLoop.js":
/*!***********************************!*\
  !*** ./src/factories/GameLoop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameLoop)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/factories/GameBoard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var GameLoop = /*#__PURE__*/function () {
  function GameLoop() {
    _classCallCheck(this, GameLoop);
    this.playerBoardElement = document.getElementById("player-board");
    this.enemyBoardElement = document.getElementById("enemy-board");
    this.playerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard();
    this.computerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard();
    this.createBoard(this.playerBoard.board, this.playerBoardElement, true);
    this.createBoard(this.computerBoard.board, this.enemyBoardElement, false);
  }
  _createClass(GameLoop, [{
    key: "createBoard",
    value: function createBoard(board, element, isPlayerBoard) {
      var _this = this;
      element.innerHTML = "";
      var _loop = function _loop(i) {
        var _loop2 = function _loop2(j) {
          var cell = document.createElement("div");
          cell.className = "cell";
          if (isPlayerBoard) {
            if (board[i][j].status === "hit") {
              cell.classList.add("hit");
            } else if (board[i][j].status === "miss") {
              cell.classList.add("miss");
            } else if (board[i][j].status === "hidden" && board[i][j].ship !== null) {
              cell.classList.add("ship-".concat(board[i][j].ship.type));
            }
          } else {
            if (board[i][j].status === "hit") {
              cell.classList.add("hit");
            } else if (board[i][j].status === "miss") {
              cell.classList.add("miss");
            }
            cell.addEventListener("click", function () {
              return _this.handlePlayerClick(_this.playerBoard, _this.computerBoard, i, j);
            });
          }
          element.appendChild(cell);
        };
        for (var j = 0; j < board[i].length; j++) {
          _loop2(j);
        }
      };
      for (var i = 0; i < board.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "handlePlayerClick",
    value: function handlePlayerClick(playerBoard, computerBoard, x, y) {
      var _this2 = this;
      if (!this.computerBoard.gameOver && this.computerBoard.board[x][y].status === "hidden") {
        this.computerBoard.receiveAttack(x, y);
        this.createBoard(this.computerBoard.board, this.enemyBoardElement, false);
        if (this.computerBoard.allShipsSunk()) {
          console.log("You win!");
          this.showVictory("You Win!"); //newly added

          this.gameOver();
        } else {
          setTimeout(function () {
            return _this2.handleComputerTurn(_this2.playerBoard, _this2.computerBoard);
          }, 500);
        }
      }
    }
  }, {
    key: "handleComputerTurn",
    value: function handleComputerTurn(playerBoard, computerBoard) {
      if (!this.playerBoard.gameOver) {
        var x, y;
        do {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        } while (this.playerBoard.board[x][y].status !== "hidden");
        this.playerBoard.receiveAttack(x, y);
        this.createBoard(this.playerBoard.board, this.playerBoardElement, true);
        if (this.playerBoard.allShipsSunk()) {
          console.log("Computer wins!");
          this.showVictory("Computer Wins!"); // newly added
          this.gameOver();
        }
      } else {
        console.log("You win");
        this.showVictory("You Win!"); //newly added;
        this.gameOver();
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.playerBoard.gameOver = true;
      this.computerBoard.gameOver = true;
      console.log("Game Over!");
    }
  }, {
    key: "showVictory",
    value: function showVictory(msg) {
      var h1 = document.createElement("h1");
      h1.textContent = "Game Over!";
      var h2 = document.createElement("h2");
      h2.textContent = msg;
      document.body.innerHTML = "\n      <div style='width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:black;color:white;'>\n        <h1>".concat(msg, "</h1>\n        <h2>Game Over!</h2>\n      </div>\n    ");
    }
  }]);
  return GameLoop;
}();


/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ship = /*#__PURE__*/function () {
  function Ship(length, type) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.type = type;
    this.hits = new Array(length).fill(false); // Initialize hits array
    this.isSunk = false; // Add a property to track if the ship is sunk
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      // Find the first index in hits array with false value and mark it as hit
      var index = this.hits.indexOf(false);
      if (index !== -1) {
        this.hits[index] = true;
        if (this.hits.every(function (hit) {
          return hit;
        })) {
          this.isSunk = true; // Mark the ship as sunk when all parts are hit
          console.log("Ship ".concat(this.type, " has been sunk!"));
        }
      }
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.length;
    }
  }]);
  return Ship;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_GameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/GameLoop */ "./src/factories/GameLoop.js");

var gameLoop = new _factories_GameLoop__WEBPACK_IMPORTED_MODULE_0__["default"]();
console.log(gameLoop);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7UUFDakQ7TUFDRjtJQUNGO0VBQUM7SUFBQWhFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrQyxVQUFBLEVBQVk7TUFDVixPQUFPLElBQUksQ0FBQ2lDLE1BQU07SUFDcEI7RUFBQztFQUFBLE9BQUE5RSxJQUFBO0FBQUE7Ozs7OztVQ3RCSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDO0FBRTVDLElBQU0rRixRQUFRLEdBQUcsSUFBSXhDLDJEQUFRLENBQUMsQ0FBQztBQUMvQnlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxRQUFRLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL0dhbWVMb29wLmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXAuanNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmRTaXplID0gMTA7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuaW5pdGlhbGl6ZUJvYXJkKCk7XG4gICAgdGhpcy5zaGlwcyA9IFtcbiAgICAgIG5ldyBTaGlwKDUsIFwiQ2FycmllclwiKSxcbiAgICAgIG5ldyBTaGlwKDQsIFwiQmF0dGxlc2hpcFwiKSxcbiAgICAgIG5ldyBTaGlwKDMsIFwiQ3J1aXNlclwiKSxcbiAgICAgIG5ldyBTaGlwKDMsIFwiU3VibWFyaW5lXCIpLFxuICAgICAgbmV3IFNoaXAoMiwgXCJEZXN0cm95ZXJcIiksXG4gICAgXTtcbiAgICB0aGlzLnBsYWNlU2hpcHMoKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gIH1cblxuICBpbml0aWFsaXplQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmRTaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgIHJvdy5wdXNoKHsgc3RhdHVzOiBcImhpZGRlblwiLCBzaGlwOiBudWxsIH0pO1xuICAgICAgfVxuICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICBwbGFjZVNoaXBzKCkge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICBjb25zdCB7IHgsIHksIGlzVmVydGljYWwgfSA9IHRoaXMucGxhY2VTaGlwUmFuZG9tKCk7XG4gICAgICAgIHBsYWNlZCA9IHRoaXMudHJ5UGxhY2VTaGlwKHgsIHksIGlzVmVydGljYWwsIHNoaXApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcFJhbmRvbSgpIHtcbiAgICBsZXQgeCwgeSwgaXNWZXJ0aWNhbDtcbiAgICBkbyB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ib2FyZFNpemUpO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYm9hcmRTaXplKTtcbiAgICAgIGlzVmVydGljYWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgIH0gd2hpbGUgKCF0aGlzLmlzU2hpcFZhbGlkKHgsIHksIGlzVmVydGljYWwpKTtcblxuICAgIHJldHVybiB7IHgsIHksIGlzVmVydGljYWwgfTtcbiAgfVxuXG4gIGlzQ29yZHNWYWxpZCh7IHgsIHkgfSkge1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuYm9hcmRTaXplICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5ib2FyZFNpemU7XG4gIH1cblxuICBpc1NoaXBQbGFjZWFibGUoc3RhcnQsIGVuZCwgaXNWZXJ0aWNhbCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydC54OyBpIDw9IGVuZC54OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBzdGFydC55OyBqIDw9IGVuZC55OyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLmlzQ29yZHNWYWxpZCh7IHg6IGksIHk6IGogfSkgfHxcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnNoaXAgIT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNTaGlwVmFsaWQoeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCgxLCBcIlRlbXBcIik7XG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IHsgeCwgeSB9O1xuICAgIGNvbnN0IGVuZFBvaW50ID0gaXNWZXJ0aWNhbFxuICAgICAgPyB7IHgsIHk6IHkgKyBzaGlwLmdldExlbmd0aCgpIC0gMSB9XG4gICAgICA6IHsgeDogeCArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxLCB5IH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pc0NvcmRzVmFsaWQoZW5kUG9pbnQpICYmXG4gICAgICB0aGlzLmlzU2hpcFBsYWNlYWJsZShzdGFydFBvaW50LCBlbmRQb2ludCwgaXNWZXJ0aWNhbClcbiAgICApO1xuICB9XG5cbiAgdHJ5UGxhY2VTaGlwKHgsIHksIGlzVmVydGljYWwsIHNoaXApIHtcbiAgICBjb25zdCBzdGFydFBvaW50ID0geyB4LCB5IH07XG4gICAgY29uc3QgZW5kUG9pbnQgPSBpc1ZlcnRpY2FsXG4gICAgICA/IHsgeCwgeTogeSArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxIH1cbiAgICAgIDogeyB4OiB4ICsgc2hpcC5nZXRMZW5ndGgoKSAtIDEsIHkgfTtcblxuICAgIGlmICh0aGlzLmlzU2hpcFBsYWNlYWJsZShzdGFydFBvaW50LCBlbmRQb2ludCwgaXNWZXJ0aWNhbCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaXNWZXJ0aWNhbCA/IHggOiB4ICsgaV1baXNWZXJ0aWNhbCA/IHkgKyBpIDogeV0gPSB7XG4gICAgICAgICAgc3RhdHVzOiBcImhpZGRlblwiLFxuICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgcGFydDogaSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgIC8vIENoZWNrIGlmIHRoZXJlJ3MgYSBzaGlwIGluIHRoZSBjZWxsXG4gICAgaWYgKGNlbGwuc2hpcCkge1xuICAgICAgY2VsbC5zdGF0dXMgPSBcImhpdFwiO1xuICAgICAgY2VsbC5zaGlwLmhpdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLnN0YXR1cyA9IFwibWlzc1wiO1xuICAgIH1cbiAgfVxuICBjaGVja0FsbFN1bmsoc2hpcCkge1xuICAgIHJldHVybiBzaGlwICYmIHNoaXAuaGl0cy5ldmVyeSgoaGl0KSA9PiBoaXQgPT09IHRydWUpO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3Vuayk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL0dhbWVCb2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9vcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyQm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItYm9hcmRcIik7XG4gICAgdGhpcy5lbmVteUJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5lbXktYm9hcmRcIik7XG5cbiAgICB0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcblxuICAgIHRoaXMuY3JlYXRlQm9hcmQodGhpcy5wbGF5ZXJCb2FyZC5ib2FyZCwgdGhpcy5wbGF5ZXJCb2FyZEVsZW1lbnQsIHRydWUpO1xuICAgIHRoaXMuY3JlYXRlQm9hcmQodGhpcy5jb21wdXRlckJvYXJkLmJvYXJkLCB0aGlzLmVuZW15Qm9hcmRFbGVtZW50LCBmYWxzZSk7XG4gIH1cblxuICBjcmVhdGVCb2FyZChib2FyZCwgZWxlbWVudCwgaXNQbGF5ZXJCb2FyZCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsXCI7XG5cbiAgICAgICAgaWYgKGlzUGxheWVyQm9hcmQpIHtcbiAgICAgICAgICBpZiAoYm9hcmRbaV1bal0uc3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChib2FyZFtpXVtqXS5zdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBib2FyZFtpXVtqXS5zdGF0dXMgPT09IFwiaGlkZGVuXCIgJiZcbiAgICAgICAgICAgIGJvYXJkW2ldW2pdLnNoaXAgIT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgc2hpcC0ke2JvYXJkW2ldW2pdLnNoaXAudHlwZX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvYXJkW2ldW2pdLnN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0uc3RhdHVzID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGxheWVyQ2xpY2sodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5jb21wdXRlckJvYXJkLCBpLCBqKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBsYXllckNsaWNrKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCB4LCB5KSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuY29tcHV0ZXJCb2FyZC5nYW1lT3ZlciAmJlxuICAgICAgdGhpcy5jb21wdXRlckJvYXJkLmJvYXJkW3hdW3ldLnN0YXR1cyA9PT0gXCJoaWRkZW5cIlxuICAgICkge1xuICAgICAgdGhpcy5jb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICB0aGlzLmNyZWF0ZUJvYXJkKHRoaXMuY29tcHV0ZXJCb2FyZC5ib2FyZCwgdGhpcy5lbmVteUJvYXJkRWxlbWVudCwgZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IHdpbiFcIik7XG4gICAgICAgIHRoaXMuc2hvd1ZpY3RvcnkoXCJZb3UgV2luIVwiKTsgIC8vbmV3bHkgYWRkZWRcblxuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGFuZGxlQ29tcHV0ZXJUdXJuKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuY29tcHV0ZXJCb2FyZCksIDUwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ29tcHV0ZXJUdXJuKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKSB7XG4gICAgaWYgKCF0aGlzLnBsYXllckJvYXJkLmdhbWVPdmVyKSB7XG4gICAgICBsZXQgeCwgeTtcbiAgICAgIGRvIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMucGxheWVyQm9hcmQuYm9hcmRbeF1beV0uc3RhdHVzICE9PSBcImhpZGRlblwiKTtcblxuICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgdGhpcy5jcmVhdGVCb2FyZCh0aGlzLnBsYXllckJvYXJkLmJvYXJkLCB0aGlzLnBsYXllckJvYXJkRWxlbWVudCwgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgd2lucyFcIik7XG4gICAgICAgIHRoaXMuc2hvd1ZpY3RvcnkoXCJDb21wdXRlciBXaW5zIVwiKTsgIC8vIG5ld2x5IGFkZGVkXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJZb3Ugd2luXCIpO1xuICAgICAgdGhpcy5zaG93VmljdG9yeShcIllvdSBXaW4hXCIpOyAvL25ld2x5IGFkZGVkO1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVPdmVyKCkge1xuICAgIHRoaXMucGxheWVyQm9hcmQuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZC5nYW1lT3ZlciA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJHYW1lIE92ZXIhXCIpO1xuICB9XG4gIHNob3dWaWN0b3J5KG1zZyl7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkdhbWUgT3ZlciFcIjtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLnRleHRDb250ZW50ID0gbXNnO1xuXG5cblxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBzdHlsZT0nd2lkdGg6MTAwdnc7aGVpZ2h0OjEwMHZoO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDpibGFjaztjb2xvcjp3aGl0ZTsnPlxuICAgICAgICA8aDE+JHttc2d9PC9oMT5cbiAgICAgICAgPGgyPkdhbWUgT3ZlciE8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICB9XG4gIFxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIHR5cGUpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaGl0cyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpOyAvLyBJbml0aWFsaXplIGhpdHMgYXJyYXlcbiAgICB0aGlzLmlzU3VuayA9IGZhbHNlOyAvLyBBZGQgYSBwcm9wZXJ0eSB0byB0cmFjayBpZiB0aGUgc2hpcCBpcyBzdW5rXG4gIH1cblxuICBoaXQoKSB7XG4gICAgLy8gRmluZCB0aGUgZmlyc3QgaW5kZXggaW4gaGl0cyBhcnJheSB3aXRoIGZhbHNlIHZhbHVlIGFuZCBtYXJrIGl0IGFzIGhpdFxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oaXRzLmluZGV4T2YoZmFsc2UpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuaGl0c1tpbmRleF0gPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuaGl0cy5ldmVyeSgoaGl0KSA9PiBoaXQpKSB7XG4gICAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTsgLy8gTWFyayB0aGUgc2hpcCBhcyBzdW5rIHdoZW4gYWxsIHBhcnRzIGFyZSBoaXRcbiAgICAgICAgY29uc29sZS5sb2coYFNoaXAgJHt0aGlzLnR5cGV9IGhhcyBiZWVuIHN1bmshYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVMb29wIGZyb20gXCIuL2ZhY3Rvcmllcy9HYW1lTG9vcFwiO1xuXG5jb25zdCBnYW1lTG9vcCA9IG5ldyBHYW1lTG9vcCgpO1xuY29uc29sZS5sb2coZ2FtZUxvb3ApIl0sIm5hbWVzIjpbIlNoaXAiLCJHYW1lQm9hcmQiLCJfY2xhc3NDYWxsQ2hlY2siLCJib2FyZFNpemUiLCJib2FyZCIsImluaXRpYWxpemVCb2FyZCIsInNoaXBzIiwicGxhY2VTaGlwcyIsImdhbWVPdmVyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpIiwicm93IiwiaiIsInB1c2giLCJzdGF0dXMiLCJzaGlwIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInBsYWNlZCIsIl90aGlzJHBsYWNlU2hpcFJhbmRvbSIsInBsYWNlU2hpcFJhbmRvbSIsIngiLCJ5IiwiaXNWZXJ0aWNhbCIsInRyeVBsYWNlU2hpcCIsImVyciIsImUiLCJmIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaXNTaGlwVmFsaWQiLCJpc0NvcmRzVmFsaWQiLCJfcmVmIiwiaXNTaGlwUGxhY2VhYmxlIiwic3RhcnQiLCJlbmQiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJnZXRMZW5ndGgiLCJwYXJ0IiwicmVjZWl2ZUF0dGFjayIsImNlbGwiLCJoaXQiLCJjaGVja0FsbFN1bmsiLCJoaXRzIiwiZXZlcnkiLCJhbGxTaGlwc1N1bmsiLCJpc1N1bmsiLCJHYW1lTG9vcCIsInBsYXllckJvYXJkRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbmVteUJvYXJkRWxlbWVudCIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsImNyZWF0ZUJvYXJkIiwiZWxlbWVudCIsImlzUGxheWVyQm9hcmQiLCJfdGhpcyIsImlubmVySFRNTCIsIl9sb29wIiwiX2xvb3AyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImNvbmNhdCIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGxheWVyQ2xpY2siLCJhcHBlbmRDaGlsZCIsImxlbmd0aCIsIl90aGlzMiIsImNvbnNvbGUiLCJsb2ciLCJzaG93VmljdG9yeSIsInNldFRpbWVvdXQiLCJoYW5kbGVDb21wdXRlclR1cm4iLCJtc2ciLCJoMSIsInRleHRDb250ZW50IiwiaDIiLCJib2R5IiwiZGVmYXVsdCIsIkFycmF5IiwiZmlsbCIsImluZGV4IiwiaW5kZXhPZiIsImdhbWVMb29wIl0sInNvdXJjZVJvb3QiOiIifQ==