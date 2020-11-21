const { User } = require('../db/models/user');

const createUser = (req, res) => {
  res.send('This is a user');
};

const deleteUser = (req, res) => {
  res.send('Deleted the user');
};

const updateUser = (req, res) => {
  res.send('Update the user');
};

const getUsers = (req, res) => {
  res.send('get all the users');
};

module.exports = { createUser, deleteUser, getUsers, updateUser };
