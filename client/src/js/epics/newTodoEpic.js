import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("ADD_NEW_TODO")
    .mergeMap(action => {
      var time = {
        start: action.payload.time.start.toString(),
        end: action.payload.time.end.toString()
      }
      var body = {
        title: action.payload.title,
        desc: action.payload.desc,
        status: action.payload.status,
        tags: JSON.stringify(action.payload.tags),
        time: JSON.stringify(time)
      };
      return Rx.Observable.ajax({url:"/api/addTodo", method:"POST", responseType:"json", body});
    })
    .pluck("response")
    .map(response => {
      return {type:"START_TODO_UPDATE", payload: response};
    });
}
