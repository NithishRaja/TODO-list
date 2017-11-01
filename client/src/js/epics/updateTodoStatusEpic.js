import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_TODO_STATUS_UPDATE")
    .mergeMap(action => {
      // ssending POST request to server with Todo id and new status as body
      return Rx.Observable.ajax({url:"/api/updateTodo", method:"POST", responseType:"json", body: action.payload });
    })
    .pluck("response")
    .map(response => {
      // update Todo reducer with Todo list returned from server
      return {type:"START_TODO_UPDATE", payload: response};
    });
}
