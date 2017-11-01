import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_TODO_STATUS_UPDATE")
    .mergeMap(action => {
      return Rx.Observable.ajax({url:"/api/updateTodo", method:"POST", responseType:"json", body: action.payload });
    })
    .pluck("response")
    .map(response => {
      console.log(response);
      return {type:"START_TODO_UPDATE", payload: response};
    });
}
