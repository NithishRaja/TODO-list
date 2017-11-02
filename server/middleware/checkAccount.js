var mongo = require("mongodb");

module.exports = function(req, res, next){
  var collection = mongo.DB.collection("USER");
  // get user account corresponding to the given facebookId
  collection.findOne({ "facebookId": parseInt(req.session.user.facebookId, 10) }, {}, function(err, result){
    if(err===null){
      // if account doesn't exist, then create new account
      if(result===null){
        var newDocument = {
          "email": req.session.user.email,
          "facebookId": parseInt(req.session.user.facebookId, 10),
          "todo": [
            {
              "id": 1,
              "title": "first step towards getting organized",
              "desc": "make your first todo before the time ends",
              "tags": ["important"],
              "time": {
                "start": null,
                "end": null
              },
              "status": "pending"
            }
          ]
        }
        collection.insertOne(newDocument);
      }
      res.status(200).json({"redirect" : "/"});
    }else{
      res.sendStatus(500);
    }
  });
}
