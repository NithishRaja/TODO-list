
export default function(state=null, action){

  switch(action.type){
    case "INVALID_FORM_FIELD":
      return action.payload;
    case "RESET_FORM_VALIDATION":
      return null;
    default:
      return state;
  }
}
