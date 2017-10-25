import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Add from "./../components/add";
import updateTagListModifier from "./../actions/updateTagListModifier";
import refreshTagListModifier from "./../actions/refreshTagListModifier";
import addNewTodo from "./../actions/addNewTodo";
import updateTodoFilter from "./../actions/updateTodoFilter";
import updateFormValidation from "./../actions/updateFormValidation";

const mapStateToProps = (state) => {
  return {
    tagListModifier: state.tagListModifier,
    formValidation: state.formValidation
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTagListModifier, refreshTagListModifier, addNewTodo, updateTodoFilter, updateFormValidation}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Add);
