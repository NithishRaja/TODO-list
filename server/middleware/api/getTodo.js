var mongo = require("mongodb");

module.exports = function(req, res){

  var collection = mongo.DB.collection("USER");
  // getting Todo from database
  collection.findOne({ "facebookId": parseInt(req.session.user.facebookId, 10) }, { _id:false, todo: true }, function(err, result){
    if(err===null){
      // return Todo list to client
      res.json(result.todo);
    }else{
      res.sendStatus(500);
    }
  })
}
