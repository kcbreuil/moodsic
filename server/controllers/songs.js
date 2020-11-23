const { Song } = require('../db/models/song');

const getSongs = (req, res) => {
  Song.find()
    .then((song) => res.status(200).json(song))
    .catch((err) => res.status(500).json('Error ' + err));
};

const makeSong = async (req, res) => {
  const { title, artist, runtime, youtubeUrl } = req.body;
  try {
    const song = await new Song({
      title,
      artist,
      runtime,
      youtubeUrl
    });
    await song.save();
    res.status(201).json(song);
  } catch (err) {
    console.log(err.toString());
  }
};

const getSingleSong = (req, res) => {
  const _id = req.params.id;
  Song.findById(_id)
    .then((song) => res.status(200).json(song))
    .catch((err) => res.status(500).json('Error' + err));
};

const deleteSong = (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then((song) => {
      if (!song) {
        return res.status(404).json('Song not found');
      }
      res.status(204).send();
    })
    .catch((err) => res.status(500).json('Error ' + err));
};

module.exports = { makeSong, getSingleSong, getSongs, deleteSong };
