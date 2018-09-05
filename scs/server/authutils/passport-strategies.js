const passport = require('passport');
const User = require('../models/user').User;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy using email as the username

// we are actually sending 'username' in the post from vue
// const localOptions = { usernameField: 'email' };
// we specify anyway even though it's default
const localOptions = { usernameField: 'username' };

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }

    // compare passwords - is `password` equal to user.password?
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }


      // if credentials are valid, invoke done() to supply Passport with the
      // user that authenticated.
      return done(null, user);
    });
  });
});

// Create JWT Strategy

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.AUTH_SECRET
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object
    // payload.sub is the user ID used to create the token
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);
