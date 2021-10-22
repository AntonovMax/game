const defaultState = {
  user: {}
}

export const userAuthReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {...state, user: {...state.user, ...action.payload}}
      case "UPDATE_SCORE":
        return {...state, user: {...state.user, score: action.payload}}
    default:
      return state
  }
}
