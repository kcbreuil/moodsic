const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs');

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
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

userSchema.virtual('fullName').get(function () {
  return this.firstName + '' + this.lastName;
});

// creating an instance method called `findByCredentials` that finds user by email and password in our DB to login.
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password, try again.');
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
