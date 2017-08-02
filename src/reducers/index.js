import { combineReducers } from "redux";

const PlayerChoice = (state = null, action) => {
  switch (action.type) {
    case "PLAYER_PICK":
      return action.payload;
    default:
      return state;
  }
};

// can never return a mutated state in reducers..must be fresh state or original
//because we dont have a selected book right off the bat, we get an error

const rootReducer = combineReducers({
  PlayerChoice: PlayerChoice
});

export default rootReducer;
