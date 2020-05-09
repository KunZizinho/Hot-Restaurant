// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // YOUR COE TO MAP AND SEND HTML FILE FOR TABLE
  app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  } );

  // YOUR COE TO MAP AND SEND HTML FILE FOR WAITING LIST
  app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/reserve.html"))
  } );

  // If no matching route is found default to home
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
