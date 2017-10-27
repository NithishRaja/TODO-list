import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("ADD_NEW_TODO")
    .mergeMap(action => {
      // replace GET with POST request
      return Rx.Observable.ajax({url:"/api/todo.json", method:"GET", responseType:"json"});
    })
    .pluck("response")
    .map(response => {
      return {type:"START_TODO_UPDATE", payload: response};
    });
}
