import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateTodoEpic from "./updateTodoEpic";
import deleteSelectedTodoEpic from "./deleteSelectedTodoEpic";

import newTodoEpic from "./newTodoEpic";
const allEpics = combineEpics(
  updateTodoEpic,
  newTodoEpic,
  deleteSelectedTodoEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
