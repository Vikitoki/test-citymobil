import { combineReducers } from "redux";
import { searchMainReducer } from "./searchMain/reducer";

export const rootReducer = combineReducers({
  searchMain: searchMainReducer,
});
