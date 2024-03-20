const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  address: {type: String},
  pointOfContact: {type: String},
  pointOfContactNumber: {type: String},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
