import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Add from "./../components/add";
import updateTagList from "./../actions/updateTagList";

const mapStateToProps = (state) => {
  return {
    tagList: state.tagList
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTagList}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Add);
