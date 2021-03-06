import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Navbar from "./../components/navbar";
import updateTodoFilter from "./../actions/updateTodoFilter";
import resetTagListModifier from "./../actions/resetTagListModifier";

const mapStateToProps = (state) => {
  return {
    todoFilter: state.todoFilter
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTodoFilter, resetTagListModifier}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Navbar);
