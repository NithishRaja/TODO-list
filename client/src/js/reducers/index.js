import {combineReducers} from "redux";
import todoFilter from "./todoFilterReducer";
import todo from "./todoReducer";
import tagListModifier from "./tagListModifierReducer";
import formValidation from "./formValidationReducer";

const allReducers = combineReducers({
  todoFilter,
  tagListModifier,
  todo,
  formValidation
});

export default allReducers;
