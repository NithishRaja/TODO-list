var middleware = require("./../middleware");

module.exports = function(app){

  app.route("/api/todo")
    .get(middleware.loginCheck, middleware.api.getTodo);

}
