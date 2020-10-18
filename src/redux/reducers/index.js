import footballersReducer from "./footballers.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  footballersReducer
});

export default rootReducer;
