var path = require("path");

var apiMiddleware = require("./api");
var renderHome = require("./renderHome");
var loginCheck = require("./loginCheck");
var renderLogin = require("./renderLogin");
var authenticate = require("./authenticate");
var logout = require("./logout");

module.exports = {
  api: apiMiddleware,
  renderHome: renderHome,
  loginCheck: loginCheck,
  renderLogin: renderLogin,
  authenticate: authenticate,
  logout: logout
}
