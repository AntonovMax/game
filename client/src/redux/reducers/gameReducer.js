const defaultState = {
  game: []
}

export const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INIT_GAME":
      return {...state, game: [...state.game, action.payload]}
    default:
      return state
  }
}
