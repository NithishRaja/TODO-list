import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("DELETE_SELECTED_TODO")
    .mergeMap(action => {
      console.log(action.payload);
      return Rx.Observable.ajax({url:"api/deleteTodo", method:"POST", body:{id:action.payload}, responseType:"json"});
    })
    .pluck("response")
    .map(response => {
      return {type:"START_TODO_UPDATE", payload:response};
    });
}
