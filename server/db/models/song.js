const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SongSchema = new Schema(
  {
    title: {
      type: String
    },
    artist: {
      type: String
    },
    youtubeUrl: {
      type: String
    },
    runtime: {
      type: Number
    }
  },
  { timestamps: true }
);

const Song = mongoose.model('Song', SongSchema);
module.exports = { Song };
