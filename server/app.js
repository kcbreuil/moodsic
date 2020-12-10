require('./db/config');
// Loads our database connection

const express = require('express'),
  morgan = require('morgan'),
  path = require('path');

// Declares variables that import the Express
// and Morgan libraries so that we can work with them

const app = express();
// Declares a variable called app,
// equal to the Express library.
// This will give us access to all of the functions
// and methods that are built into the Express library,
// so long as they are prefaced with our app variable.

// **** routes will go here **** //
const songRouter = require('./routes/songs');
const userRouter = require('./routes/users.js');

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

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use('/api/songs', songRouter);
app.use('/api/users', userRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
//  give our app access to our song
// and playlist routes with the
// .use middleware function.

module.exports = app;
