import Rx from "rxjs/Rx";

export default function(action$){

  var todo = [
    {
      "id": 1,
      "title":"todo1",
      "desc":"do this",
      "tags":["important", "do not forget"],
      "time":{
        "start": "2017-10-20T08:14:33.911Z",
        "end": "2017-10-22T08:14:33.911Z"
      },
      "status": "pending"
    },
    {
      "id": 2,
      "title":"todo2",
      "desc":"and do this",
      "tags":["not important", "do not forget"],
      "time":{
        "start": "2017-10-13T08:14:33.911Z",
        "end": "2017-10-14T08:14:33.911Z"
      },
      "status": "pending"
    },
    {
      "id": 3,
      "title":"todo3",
      "desc":"finally do this",
      "tags":["important"],
      "time":{
        "start": "2017-10-20T08:14:33.911Z",
        "end": "2017-10-21T08:14:33.911Z"
      },
      "status": "completed"
    }
  ];

  return action$.ofType("START_TODO_UPDATE")
    .debounceTime(3000)
    .map(action => {
      return {type:"UPDATE_TODO", payload:todo};
    });
}
