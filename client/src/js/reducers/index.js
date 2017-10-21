import {combineReducers} from "redux";
import todoFilter from "./todoFilterReducer";
import todo from "./todoReducer";

const allReducers = combineReducers({
  todoFilter,
  todo
});

export default allReducers;
