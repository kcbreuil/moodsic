const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SongSchema = new Schema({
  title: {
    type: String
  },
  artist: {
    type: String
  }
});

const Song = mongoose.model('Song', SongSchema);
module.exports = { Song };
