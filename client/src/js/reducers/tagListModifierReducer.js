
export default function(state={type:"NONE",payload:[]}, action){

  switch(action.type){
    case "UPDATE_TAG_LIST_MODIFIER":
      return action.payload;
    case "RESET_TAG_LIST_MODIFIER":
      return {type:"NONE", payload:[]};
    default:
      return state;
  }
}
