
module.exports = function(req, res){
  req.session.isLoggedIn = false;
  req.session.user = null;
  res.status(200).json({"redirect": "/login"});
};
