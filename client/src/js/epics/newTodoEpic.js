import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("ADD_NEW_TODO")
    .mergeMap(action => {
      console.log(action.payload.tags);
      var body = {
        title: action.payload.title,
        desc: action.payload.desc,
        status: action.payload.status,
        tags: JSON.stringify(action.payload.tags),
        time: JSON.stringify(action.payload.time)
      };
      return Rx.Observable.ajax({url:"/api/addTodo", method:"POST", responseType:"json", body});
    })
    .pluck("response")
    .map(response => {
      return {type:"START_TODO_UPDATE", payload: response};
    });
}
