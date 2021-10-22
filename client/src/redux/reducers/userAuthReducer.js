const defaultState = {
  user: ''
}

export const userAuthReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return state
    default:
      return state
  }
}
