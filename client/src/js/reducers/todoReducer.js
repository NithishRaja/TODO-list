
export default function(state=null, action){

  switch(action.type){
    case "UPDATE_TODO":
      return action.payload;
    default:
      return state;
  }
}
