import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateTodoEpic from "./updateTodoEpic";

const allEpics = combineEpics(
  updateTodoEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
