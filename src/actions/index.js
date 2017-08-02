const PLAYER_PICK = "PLAYER_PICK";


export function playerPick(choice) {
  return {
    type: PLAYER_PICK,
    payload: choice
  };
}

