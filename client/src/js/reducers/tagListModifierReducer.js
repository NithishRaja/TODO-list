
export default function(state={type:"NONE",payload:[]}, action){

  switch(action.type){
    case "UPDATE_TAG_LIST_MODIFIER":
      return action.payload;
    case "REFRESH_TAG_LIST_MODIFIER":
      return {type:"PUSH",payload:[]};
    case "RESET_TAG_LIST_MODIFIER":
      return action.payload;
    default:
      return state;
  }
}
