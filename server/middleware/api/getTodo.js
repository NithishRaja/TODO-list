var mongo = require("mongodb");

module.exports = function(req, res){

  var collection = mongo.DB.collection("USER");
  collection.findOne({ "facebookId": parseInt(req.session.user.facebookId, 10) }, { _id:false, todo: true }, function(err, result){
    if(err===null){
      res.json(result.todo);
    }else{
      res.sendStatus(500);
    }
  })
}
