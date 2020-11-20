const router = require('express').Router();
const {
  makeSong,
  getSongs,
  deleteSong,
  getSingleSong
} = require('../controllers/song');

router.get('/', getSongs);

router.post('/', makeSong);

router.get('/:id', getSingleSong);

router.delete('/:id', deleteSong);

module.exports = router;
