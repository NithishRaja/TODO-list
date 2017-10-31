var mongo = require("mongodb");

module.exports = function(req, res, next){
  var collection = mongo.DB.collection("USER");
  collection.findOne({ "facebookId": parseInt(req.session.user.facebookId) }, {}, function(err, result){
    // console.log(result);
    var newTodoList = [];
    result.todo.filter(function(todo){
      return todo.id!==parseInt(req.body.id);
    }).map(function(todo){
      newTodoList.push(todo);
    });
    var options = {
      upsert: true,
      returnOriginal: false
    };
    result.todo = newTodoList;
    collection.findOneAndUpdate({ "facebookId": parseInt(req.session.user.facebookId) }, result, options, function(error, response){
      res.json(response.todo);
    });
  });
  next();
};
