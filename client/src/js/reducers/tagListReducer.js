
export default function(state=[], action){

  switch(action.type){
    case "UPDATE_TAG_LIST":
      return action.payload;
    default:
      return state;
  }
}
