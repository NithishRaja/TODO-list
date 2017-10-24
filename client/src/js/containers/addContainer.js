import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Add from "./../components/add";
import updateTagList from "./../actions/updateTagList";
import addNewTodo from "./../actions/addNewTodo";

const mapStateToProps = (state) => {
  return {
    tagListModifier: state.tagListModifier
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTagList, addNewTodo}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Add);
