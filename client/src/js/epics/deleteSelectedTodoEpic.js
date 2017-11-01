import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("DELETE_SELECTED_TODO")
    .mergeMap(action => {
      // send POST request to server to delete Todo with Todo id inside body
      return Rx.Observable.ajax({url:"api/deleteTodo", method:"POST", body:{id:action.payload}, responseType:"json"});
    })
    .pluck("response")
    .map(response => {
      // update Todo reducer with Todo list returned from server
      return {type:"START_TODO_UPDATE", payload:response};
    });
}
