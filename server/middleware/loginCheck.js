
module.exports = function(req, res, next){
  if(req.session.isLoggedIn === true){
    next();
  }else{
    req.session.isLoggedIn = false;
    res.redirect(303, "/login");
  }
};
