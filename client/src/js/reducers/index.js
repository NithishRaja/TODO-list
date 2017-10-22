import {combineReducers} from "redux";
import todoFilter from "./todoFilterReducer";
import todo from "./todoReducer";
import tagList from "./tagListReducer";

const allReducers = combineReducers({
  todoFilter,
  tagList,
  todo
});

export default allReducers;
