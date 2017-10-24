import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Add from "./../components/add";
import updateTagListModifier from "./../actions/updateTagListModifier";
import refreshTagListModifier from "./../actions/refreshTagListModifier";
import addNewTodo from "./../actions/addNewTodo";
import updateTodoFilter from "./../actions/updateTodoFilter";

const mapStateToProps = (state) => {
  return {
    tagListModifier: state.tagListModifier
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTagListModifier, refreshTagListModifier, addNewTodo, updateTodoFilter}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Add);
