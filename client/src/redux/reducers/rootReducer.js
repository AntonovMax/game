import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { userAuthReducer } from "./userAuthReducer"


export const rootReducer = combineReducers({
  gameReducer,
  userAuthReducer,
})
