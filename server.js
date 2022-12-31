const express  = require("express"); // Import the express library
const app = express(); // Define our app as an instance of express
const port = 3000; // Define our base URL as http:\\localhost:3000

// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/'));

// index page
app.get('/', function(req, res) {
    res.render('index');
  });


app.listen(port, function () {
  console.log(`Server running on port ${port}`); // Tell yourself the port number to prevent mistakes in the future.
});
