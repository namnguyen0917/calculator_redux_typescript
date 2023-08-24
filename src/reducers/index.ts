import { combineReducers } from "redux";

import counter from "./counter";
// import operator from "./operator";

export const allReducers = combineReducers({
  counter,
  // operator,
  // add more reducers here
});