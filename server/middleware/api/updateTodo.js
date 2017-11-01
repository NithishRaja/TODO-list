var mongo = require("mongodb");

module.exports =  function(req, res, next){

  var collection = mongo.DB.collection("USER");
  // getting Todo list from database
  collection.findOne({ "facebookId": parseInt(req.session.user.facebookId, 10) }, {}, function(err, result){
    // updating TOdo list with new status
    result.todo.filter(function(todo){
      return todo.id===parseInt(req.body.id, 10);
    }).map(function(todo){
      todo.status = req.body.status;
    });
    var options = {
      upsert: true,
      returnOriginal: false
    };
    // updating Todo list in database
    collection.findOneAndUpdate({ "facebookId": parseInt(req.session.user.facebookId, 10) }, result, options, function(error, response){
      if(err===null){
        // return Todo list to client
        res.json(response.value.todo);
      }else{
        res.sendStatus(500);
      }
    });
  });
}
