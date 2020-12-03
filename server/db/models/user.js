const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

userSchema.virtual('fullName').get(function () {
  return this.firstName + '' + this.lastName;
});

module.exports = { User };
