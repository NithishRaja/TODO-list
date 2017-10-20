import {combineReducers} from "redux";
import todoFilter from "./todoFilterReducer";

const allReducers = combineReducers({
  todoFilter
});

export default allReducers;
