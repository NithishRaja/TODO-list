var middleware = require("./../middleware");

module.exports = function(app){

  app.route("/api/getTodo")
    .get(middleware.loginCheck, middleware.api.getTodo);

  app.route("/api/addTodo")
    .post(middleware.loginCheck, middleware.api.addTodo, middleware.api.getTodo);

  app.route("/api/deleteTodo")
    .post(function(req, res, next){
      console.log(req.body);
      next();
    }, middleware.api.getTodo);
}
