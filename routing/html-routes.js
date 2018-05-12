// Dependencies
var path = require('path');

// Routing
module.exports = function(app) {

  // GET - display the survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../app/public/survey.html'));
  });

  // USE - display the home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../app/public/home.html'));

  });
};
