
module.exports = function(req, res){
  req.session.isLoggedIn = true;
  req.session.user  = {
    email: req.body.email,
    facebookId: req.body.facebookId
  };
  res.status(200).json({"redirect" : "/"});
};
