var mongo = require("mongodb");

module.exports =  function(req, res, next){

  var collection = mongo.DB.collection("USER");
  collection.findOne({ "facebookId": parseInt(req.session.user.facebookId, 10) }, {}, function(err, result){
    result.todo.filter(function(todo){
      return todo.id===parseInt(req.body.id, 10);
    }).map(function(todo){
      todo.status = req.body.status;
    });
    collection.findOneAndUpdate({ "facebookId": parseInt(req.session.user.facebookId, 10) }, result, function(error, response){
      res.json(response.value.todo);
    });
  });
}
