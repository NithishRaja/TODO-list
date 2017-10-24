
export default function(state={type:"PUSH",payload:[]}, action){

  switch(action.type){
    case "UPDATE_TAG_LIST_MODIFIER":
      return action.payload;
    case "REFRESH_TAG_LIST_MODIFIER":
      return {type:"PUSH",payload:[]};
    default:
      return state;
  }
}
