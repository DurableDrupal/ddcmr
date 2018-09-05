var authentication = require('../../authutils/authentication');
var pass = require('../../authutils/passinit.js')
var router = require('express').Router()

// using requireAuth passport middleware w/ jwt strategy to protect route
router.get('/protected_content', pass.requireAuth, function(req, res) {
  res.send({ message: 'server response:  this GET request has been authorized for a user' });
});

// using requireAuth passport middleware w/ jwt strategy as well as requireAdmin custom express middleware to protect route
// must be an admin to access admin area
router.get('/admin_area', pass.requireAuth, pass.requireAdmin, function(req, res, next) {
  res.send({ message: 'server response:  this GET request has been authorized for an admin' });
});

// using requireSignin passport middleware to authenticate for protected route using local (email/password) strategy)
// authentication.signin sends back JWT token to authenticated user
router.post('/signin', pass.requireSignin, authentication.signin);

// route for signing up user
router.post('/signup', authentication.signup);

// using requireAuth passport middleware using jwt strategy as well as requireAdmin custom express middleware to protect route
// must be an admin to activate another admin
router.post('/admin_activation', pass.requireAuth, pass.requireAdmin, authentication.admin_activation);

module.exports = router