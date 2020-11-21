require('../config/index');

const Song = require('../models/song'),
  mongoose = require('mongoose');

const seedDB = async () => {
  try {
    let resp = await Song.create();
    console.log(resp);
    resp.save();
  } catch (err) {
    console.log(err);
  }
};

seedDB();
