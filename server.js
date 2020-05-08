// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// YOUR CODE HERE
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("./public"))
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// YOUR CODE HERE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './public/home.html'));
});

app.get("/api/reserve.html", (req, res) => {
  res.sendFile(path.join(__dirname, './routes/apiRoutes.js'));
});
app.get("/api/tables.html", (req, res) => {
  res.sendFile(path.join(__dirname, './routes/apiRoutes.js'));
});
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
