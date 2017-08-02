import { combineReducers } from "redux";
let player = 0;

let initalState = [];
let playerOne = [];
let playerTwo = [];

const GamePlay = (state = initalState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "PLAYER_PICK":
      let square = action.payload;
      if (player === 0) {
        player = 1;
        let selectedSquare = document.getElementById(square);
        selectedSquare.innerHTML = "X";
        initalState.push({ currentPlayer: 1, marker: "X", square: square });
        playerOne.push(square);
        console.log(playerOne);        
        console.log(initalState);        
        return { currentPlayer: 0, marker: "X", square: square };
      } else if (player === 1) {
        let selectedSquare = document.getElementById(square);
        selectedSquare.innerHTML = "O";
        player = 0;
        initalState.push({ currentPlayer: 0, marker: "O", square: square });
        console.log(initalState);
        return { currentPlayer: 1, marker: "O", square: square };
      }

      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Choice: GamePlay
});

export default rootReducer;
