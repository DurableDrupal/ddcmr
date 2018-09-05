const passport = require('passport');
const passportStrategies = require('./passport-strategies');
var requireAuth = passport.authenticate('jwt', { session: false });
var requireSignin = passport.authenticate('local', { session: false });
var requireAdmin = require('./require-admin')

module.exports = {requireAuth, requireSignin, requireAdmin}