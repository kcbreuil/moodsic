const { User } = require('../db/models/user');

const createUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.staus(500).json(err));
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.status(204).send(user))
    .catch((err) => res.status(500).json('Error ' + err));
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['firstName', 'lastName', 'email', 'password'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).json({ message: 'Invalid updates' });
  }
  try {
    const user = await User.findOne({
      _id: req.params.id
    });
    if (!user) return res.status(404).json({ message: 'user not found' });
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUsers = (req, res) => {
  User.find()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json('Error: ' + err));
};

module.exports = { createUser, deleteUser, getUsers, updateUser };
