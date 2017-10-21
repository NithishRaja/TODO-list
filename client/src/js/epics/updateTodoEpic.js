import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_TODO_UPDATE")
    .debounceTime(3000)
    .switchMap(() => {
      return Rx.Observable.ajax({url:"/api/todo.json", method:"GET", responseType:"json"});
    })
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_TODO", payload:response};
    });
}
