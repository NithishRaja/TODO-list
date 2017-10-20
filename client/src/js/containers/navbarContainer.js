import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Navbar from "./../components/navbar";
import updateTodoFilter from "./../actions/updateTodoFilter";

const mapStateToProps = (state) => {
  return {
    todoFilter: state.todoFilter
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTodoFilter}, dispatch);
}
