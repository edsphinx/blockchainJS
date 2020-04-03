import { combineReducers } from "redux";
import fetch from "./fetchReducers";

const rootReducer = combineReducers({
  fetch: fetch
});

export default rootReducer;
