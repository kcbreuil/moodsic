const mongoose = require('mongoose');

const URI = process.env.ATLAS_URI;

// tells your Mongoose library where your database lives and avoids
// deprecation warning errors
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// accesses the .connection method within the Mongoose library to
// make a connection to your database
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
