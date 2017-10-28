import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("DELETE_SELECTED_TODO")
    .mergeMap(action => {
      // replace GET request with POST request
      return Rx.Observable.ajax({url:"api/todo", method:"GET", responseType:"json"});
    })
    .pluck("response")
    .map(response => {
      return {type:"START_TODO_UPDATE", payload:response};
    });
}
