var PB = PB || {};

(function () {
	'use strict';

	PB.Poll = Backbone.Model.extend({

		// defaults: {

		// },


		// overide if need to change response JSON
		// parse: function(response) {

		// }

		// url used for REST
		// url: 'https://api.pollabear.com/poll',

		// built in REST handling
		// CREATE poll
		// Retrieve poll
		
		// add own functions for 
			// voting on poll
			// tracking a poll
			// retrieving additional demographic data regarding poll
			
			// commenting on poll?

	});

	PB.PollCollection = Backbone.Collection.extend({

		model: PB.Poll,

		// url: 'https://api.pollabear.com/polls',

	});

	// app.gridPolls = new gridPolls();
})();



// {
// 	id: 1, 
// 	text: "This is a much longer question than usual, but still quite important!?",
// 	votes: 6000,
// 	category: "Social",
// 	choices: [
// 		{text: "Choice text", id: "1", votes: 2000},
// 		{text: "Choice text", id: "2", votes: 3000},
// 		{text: "Choice text", id: "3", votes: 1000}
// 	],
// 	tags: ["tag1","tag2"]
// }

/*

for each choice {
	get id

	animate choice overlay width to appropriate percentage value
	
	if id matches id of answered choice, send answer REST API call for that choice



}


*/