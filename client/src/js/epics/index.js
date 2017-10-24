import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateTodoEpic from "./updateTodoEpic";

import newTodoEpic from "./newTodoEpic";
const allEpics = combineEpics(
  updateTodoEpic,
  newTodoEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
