
module.exports = function(req, res){
  res.locals = { "email": req.session.user.email };
  res.render("home");
};
