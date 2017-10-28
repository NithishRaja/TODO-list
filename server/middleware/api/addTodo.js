
module.exports = function(req, res, next){
  var newTodo = {
    title: req.body.title,
    desc: req.body.desc,
    status: req.body.status,
    tags: JSON.parse(req.body.tags),
    time: JSON.parse(req.body.time)
  };
  console.log(newTodo);
  next();
};
