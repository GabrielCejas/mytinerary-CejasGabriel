import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  citiesReducer,
  userReducer,
});

export default rootReducer;
