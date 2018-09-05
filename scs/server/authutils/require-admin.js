/*
module.exports = function (req, res, next) {
  
  if(req.user.role === 'admin'){
    next();
  }
  else {
    res.send({ message: 'Unauthorized!' });
  }
};
*/

module.exports = function (req, res, next) {
  if(typeof req.user.roles.find(findAdmin) !== 'undefined') {
	next();
  }
  else {
	res.send({message: 'Unauthorized!'})
  }
};

function findAdmin(role) { 
    return role.roleSlug === 'admin';
}
