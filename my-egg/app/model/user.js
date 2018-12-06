const UserSchema = require('../schemas/user')

module.exports = app => {
  const mongoose = app.mongoose;
  return mongoose.model('User', UserSchema(mongoose), 'user');
}