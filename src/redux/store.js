import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/";

let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware());
}

export default store;
