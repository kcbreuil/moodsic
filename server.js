require('dotenv').config();

// Imports the dotenv package into your file and gives you access
// to credentials stored in variables in your .env file

const app = require('./server/app.js');
// Declares a variable called app that imports the contents of
// your app.js file in your server directory

// Declares a variable called port that defaults to 5000 unless
// otherwise specified in your .env file
const port = process.env.PORT || 5000;

// Logs a message to the console when your server is up and running
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
