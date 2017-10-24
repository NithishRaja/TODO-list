import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("DELETE_SELECTED_TODO")
    .mergeMap(action => {
      // replace GET request with POST request
      console.log(action.payload);
      return Rx.Observable.ajax({url:"api/todo.json", method:"GET", responseType:"json"});
    })
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_TODO", payload:response};
    });
}
