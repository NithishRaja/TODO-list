var mongo = require("mongodb");

module.exports = function(req, res, next){
  var newTodo = {
    id: Math.floor(Math.random()*10000),
    title: req.body.title,
    desc: req.body.desc,
    tags: JSON.parse(req.body.tags),
    time: JSON.parse(req.body.time),
    status: req.body.status
  };

  var collection = mongo.DB.collection("USER");
  // getting todo from database
  collection.findOne({ "facebookId": parseInt(req.session.user.facebookId, 10) }, {}, function(err, result){
    result.todo.push(newTodo);
    var options = {
      upsert: true,
      returnOriginal: false
    };
    collection.findOneAndUpdate({ "facebookId": parseInt(req.session.user.facebookId) }, result, options, function(error, response){
      res.json(response.value.todo);
    });
  });
};
