var mongo = require("mongodb");

module.exports = function(req, res, next){
  var collection = mongo.DB.collection("USER");
  // getting todo from database
  collection.findOne({ "facebookId": parseInt(req.session.user.facebookId, 10) }, {}, function(err, result){
    var newTodoList = [];
    // population newTodoList with Todo
    result.todo.filter(function(todo){
      return todo.id!==parseInt(req.body.id, 10);
    }).map(function(todo){
      newTodoList.push(todo);
    });
    var options = {
      upsert: true,
      returnOriginal: false
    };
    result.todo = newTodoList;
    // updating database with new Todo
    collection.findOneAndUpdate({ "facebookId": parseInt(req.session.user.facebookId) }, result, options, function(error, response){
      if(err===null){
        // return Todo list to client
        res.json(response.todo);
      }else{
        res.sendStatus(500);
      }
    });
  });
};
