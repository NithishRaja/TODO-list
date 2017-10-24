import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("ADD_NEW_TODO")
    .debounceTime(500)
    .mergeMap(action => {
      // replace GET with POST request
      return Rx.Observable.ajax({url:"/api/todo.json", method:"GET", responseType:"json"});
    })
    .pluck("response")
    .map(response => {
      console.log(response);
      // clear tagListModifierReducer
      return {type:"UPDATE_TODO", payload: response};
    });
}
