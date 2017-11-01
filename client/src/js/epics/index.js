import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateTodoEpic from "./updateTodoEpic";
import deleteSelectedTodoEpic from "./deleteSelectedTodoEpic";
import newTodoEpic from "./newTodoEpic";
import resetTagListModifierEpic from "./resetTagListModifierEpic";
import resetFormValidationEpic from "./resetFormValidationEpic";
import updateTodoStatusEpic from "./updateTodoStatusEpic";

const allEpics = combineEpics(
  updateTodoEpic,
  newTodoEpic,
  deleteSelectedTodoEpic,
  resetTagListModifierEpic,
  resetFormValidationEpic,
  updateTodoStatusEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
