const getSongs = async (req, res) => {
  res.send('NOT IMPLEMENTED: API to get all songs');
};

const makeSong = async (req, res) => {
  res.send('NOT IMPLEMENTED: API to create one song');
};

const getSingleSong = async (req, res) => {
  res.send('NOT IMPLEMENTED: API to edit one song by ID: id');
};

const deleteSong = async (req, res) => {
  res.send('NOT IMPLEMENTED: API to delete one song by ID: id');
};

module.exports = { makeSong, getSingleSong, getSongs, deleteSong };
