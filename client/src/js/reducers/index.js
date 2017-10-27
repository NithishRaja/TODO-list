import {combineReducers} from "redux";
import todoFilter from "./todoFilterReducer";
import todo from "./todoReducer";
import tagListModifier from "./tagListModifierReducer";
import formValidation from "./formValidationReducer";
import activeTodo from "./activeTodoReducer";

const allReducers = combineReducers({
  todoFilter,
  tagListModifier,
  todo,
  formValidation,
  activeTodo
});

export default allReducers;
