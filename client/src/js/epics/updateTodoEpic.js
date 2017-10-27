import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_TODO_UPDATE")
    .mergeMap((action) => {
      if(action.payload){
        return Rx.Observable.of({response: action.payload});
      }else{
        return Rx.Observable.ajax({url:"/api/todo.json", method:"GET", responseType:"json"});
      }
    })
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_TODO", payload:response};
    });
}
