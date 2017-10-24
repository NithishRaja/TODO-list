import {combineReducers} from "redux";
import todoFilter from "./todoFilterReducer";
import todo from "./todoReducer";
import tagListModifier from "./tagListModifierReducer";

const allReducers = combineReducers({
  todoFilter,
  tagListModifier,
  todo
});

export default allReducers;
