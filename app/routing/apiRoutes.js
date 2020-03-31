var friendsData = require('../data/friends');

module.exports = function apiRoutes(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend
	app.post('/api/friends', function(req, res) {
		// console.log("YOURE IN POST REQ")
		// Capture the user input object
		var userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.data;
		console.log('userResponses = ' + userResponses);

		// Calculate friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000;

		// Loop through existing friends in the list
		for (var i = 0; i < friendsData.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Calculate differences for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friendsData[i].name;
				matchImage = friendsData[i].photo;
			}
		}
		console.log('++++++++');
		console.log(matchImage);
		// Add new user
		//friends.push(matchImage);

		// Send appropriate response
		res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
	});
};
