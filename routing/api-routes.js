// Dependencies 
var path = require("path");

// Load new data from friends.js
var friendsList = require('../app/data/friends.js');


module.exports = function(app){

  // GET route - displays JSON of friendsList array in friends.js
  app.get('/api/friends', function(req,res){
    res.json(friendsList);
  });

  // POST route - handles incoming survey results
  app.post('/api/friends', function(req,res){

    // Variables to store scores to compare with existing data in friendsList array
    var newFriendScores = req.body.scores;
    var scoresArr = [];
    var friendCount = 0;
    var bestMatch = 0;

    // Loop through current friendsList
    for (var i = 0; i < friendsList.length; i++) {

      // Store difference in scores
      var scoresDifference = 0;

      // Loop through scores and compare to friendsList scores
      for (var j = 0; j < newFriendScores.length; j++) {
        scoresDifference += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      // Push results from above into
      scoresArr.push(scoresDifference);
    }

    //after all friends are compared, find best match
    for (var i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestMatch]){
        bestMatch = i;
      }
    }

    // Return JSON data of best match
    var newFriend = friendsList[bestMatch];
    res.json(newFriend);

    // Push the new friend into friendsList array
    friendsList.push(req.body);
  });
};