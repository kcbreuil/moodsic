const router = require('express').Router();

const {
  createUser,
  deleteUser,
  updateUser,
  getUsers
} = require('../controllers/users');

router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/', getUsers);

module.exports = router;
