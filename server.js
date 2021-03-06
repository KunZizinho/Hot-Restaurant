// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require("express");
// let tableData = require("./data/tableData");
// let waitingList = require("./data/waitinglistData")

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// YOUR CODE HERE
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// YOUR CODE HERE
// app.get("/", (req, res) => {
//   res.send('<h1>Hello World</h1>');
// });
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// app.get("/api/tables", (req, res) => {
//   res.json(tableData);
// });
// app.get("/api/reserve", (req, res) => {
//   res.json(waitingList);
// });
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
