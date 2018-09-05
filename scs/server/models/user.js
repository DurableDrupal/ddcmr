var mongoose = require('./db')
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  idLegacy: Number,
  gender: String,
  dob: Date,
  name: {
    title: String,
    first: String,
    last: String,
  },
  language: String,
  location: {
    street: String,
    city: String,
    state: String,
    postcode: Number,
    country: String,
    timezone: String,
  },
  homephone: String,
  workphone: String,
  cellphone: String,
  login: {
    username: String,
    password: String
  },
  email: String,
  roles: [{
    roleSlug: String,
    roleName: String
  }],
  created: Date,
  lastAccess: Date,
  lastLogin: Date,
  status: String,
  avatar: String,
  createdOn: Date,
  modifiedOn: Date
})

// Before saving a model, encrypt the password
userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this;

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.login.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.login.password = hash;
      next();
    });
  });
});


//to be used in passport.js
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.login.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}

exports.User = mongoose.model('User', userSchema)
