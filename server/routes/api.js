var middleware = require("./../middleware");

module.exports = function(app){

  app.route("/api/getTodo")
    .get(middleware.loginCheck, middleware.api.getTodo);

  app.route("/api/addTodo")
    .post(middleware.loginCheck, middleware.api.addTodo);

  app.route("/api/deleteTodo")
    .post(middleware.loginCheck, middleware.api.deleteTodo, middleware.api.getTodo);

  app.route("/api/updateTodo")
    .post(middleware.loginCheck, function(req, res, next){
      console.log(req.body);
      next();
    }, middleware.api.getTodo);
}
