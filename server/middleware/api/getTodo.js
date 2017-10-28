
module.exports = function(req, res){
  var todo = [
    {
      "id": 1,
      "title":"todo1",
      "desc":"do this",
      "tags":["important", "do not forget"],
      "time":{
        "start": "Fri Oct 20 2017 17:58:40 GMT+0530 (India Standard Time)",
        "end": "Sat Oct 21 2017 17:58:40 GMT+0530 (India Standard Time)"
      },
      "status": "pending"
    },
    {
      "id": 2,
      "title":"todo2",
      "desc":"and do this",
      "tags":["not important", "do not forget"],
      "time":{
        "start": "Fri Oct 13 2017 17:58:40 GMT+0530 (India Standard Time)",
        "end": "Sat Oct 14 2017 17:58:40 GMT+0530 (India Standard Time)"
      },
      "status": "pending"
    },
    {
      "id": 3,
      "title":"todo3",
      "desc":"finally do this",
      "tags":["important"],
      "time":{
        "start": "Fri Oct 6 2017 17:58:40 GMT+0530 (India Standard Time)",
        "end": "Sat Oct 7 2017 17:58:40 GMT+0530 (India Standard Time)"
      },
      "status": "completed"
    }
  ];

  res.json(todo);
}
