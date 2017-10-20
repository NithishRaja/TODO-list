
export default function(state="all", action){

  switch(action.type){
    case "UPDATE_TODO_FILTER":
      return action.payload;
    default:
      return state;
  }
}
