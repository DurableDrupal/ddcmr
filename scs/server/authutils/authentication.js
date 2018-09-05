const jwt = require('jwt-simple');
const User = require('../models/user').User;

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp, role: user.role }, process.env.AUTH_SECRET);
}

exports.signin = function(req, res, next) {
  // User has been authenticated, send back token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  // Create user record from parameters received
  var user = new User(req.body)
  
  /*
  console.log('user login: ', user.login)
  console.log('user login password: ', user.login.password)
  console.log("email", user.email)
  console.log('user: ', user)
  */

  if (!user.email || !user.login.password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // See if a user with the given email exists
  User.findOne({ email: user.email }, function(err, existingUser) {
    if (err) { return next(err); }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, save user record
    user.save(function(err) {
      if (err) { return next(err); }

      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
}

exports.admin_activation = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // See if an user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // If an user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save record for admin
    const user = new User({
      email: email,
      password: password,
      role: 'admin'
    });

    user.save(function(err) {
      if (err) { return next(err); }

      // Repond to request indicating the admin was created
      // res.send({});
    });
  });
}
