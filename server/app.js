require('./db/config');
// Loads our database connection

const express = require('express'),
  morgan = require('morgan');
// Declares variables that import the Express
// and Morgan libraries so that we can work with them

const app = express();
// Declares a variable called app,
// equal to the Express library.
// This will give us access to all of the functions
// and methods that are built into the Express library,
// so long as they are prefaced with our app variable.

// **** routes will go here **** //
const songRouters = require('./routes/songs');

app.use(morgan('dev'));
// Calls our middleware function .use(),
// which is built into the Express library
// and will call morgan.

app.use(express.json());
// Declares a variable called app,
// equal to the Express library.
// This will give us access to all of the functions
// and methods that are built into the Express library,
// so long as they are prefaced with our app variable
app.use('/api/songs', songRouters);

module.exports = app;

//  give our app access to our song
// and playlist routes with the
// .use middleware function.
