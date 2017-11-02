
module.exports = function(req, res, next){
  req.session.isLoggedIn = true;
  req.session.user  = {
    email: req.body.email,
    facebookId: req.body.facebookId
  };
  next();
};
