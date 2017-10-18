var path = require("path");
var apiMiddleware = require("./api");

exports.renderHome = function(req, res){
  console.log(req.session);
  res.locals = { "email": req.session.user.email };
  console.log(res.locals);
  res.render("home");
};

exports.loginCheck = function(req, res, next){
  if(req.session.isLoggedIn === true){
    next();
  }else{
    req.session.isLoggedIn = false;
    res.redirect(303, "/login");
  }
};

exports.renderLogin = function(req, res){
  res.render("login");
};

exports.authenticate = function(req, res){
  req.session.isLoggedIn = true;
  req.session.user  = {
    email: req.body.email,
    id: req.body.id
  };
  res.status(200).json({"redirect" : "/"});
};

// exporting middleware for api routes
exports.api = apiMiddleware;
