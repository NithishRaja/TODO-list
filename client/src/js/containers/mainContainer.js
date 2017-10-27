import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./../components/main";
import startTodoUpdate from "./../actions/startTodoUpdate";
import updateTodoFilter from "./../actions/updateTodoFilter";
import deleteSelectedTodo from "./../actions/deleteSelectedTodo";
import updateActiveTodo from "./../actions/updateActiveTodo";

const mapStateToProps = (state) => {
  return {
    todoFilter: state.todoFilter,
    todo: state.todo,
    activeTodo: state.activeTodo
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startTodoUpdate, updateTodoFilter, deleteSelectedTodo, updateActiveTodo}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Main);
