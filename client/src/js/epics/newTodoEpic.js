import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("ADD_NEW_TODO")
    .mergeMap(action => {
      // construct body to send to server
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
      // sending POST request to server to add new Todo with new todo as body
      return Rx.Observable.ajax({url:"/api/addTodo", method:"POST", responseType:"json", body});
    })
    .pluck("response")
    .map(response => {
      // update Todo reducer with Todo list returned from server
      return {type:"START_TODO_UPDATE", payload: response};
    });
}
