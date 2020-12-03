const router = require('express').Router();

const {
  createUser,
  deleteUser,
  updateUser,
  getUsers,
  loginUser
} = require('../controllers/users');

router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/', getUsers);
router.post('/:id', loginUser);

module.exports = router;
