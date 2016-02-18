var PB = PB || {};

(function () {
	'use strict';

	var API_DEV = {};

	API_DEV.getFullPoll = function () {

		var fullPoll = {
			id: 1, 
			isAnswered: Boolean(Math.floor(Math.random() * 2)),
			text: "This is a much longer question than usual, but still quite important!?",
			votes: 6000,
			category: "Social",
		    choices: [
		    	{text: "Choice text", id: "1", votes: 2000, 
		    // 		demographics: {
		    // 			sex: {
						// 	Male: 0,
						// 	Female: 0,
						// 	Other: 0
						// },
						// age: {
						//     Under 12 years old: 0,
						//     12-17 years old: 0,
						//     18-24 years old: 0,
						//     25-34 years old: 0,
						//     35-44 years old: 0,
						//     45-54 years old: 0,
						//     55-64 years old: 0,
						//     65 years or older: 0
						// },
						// sexual_orientation: {
						//     heterosexual: 0,
						//     homosexual: 0,
						//     bisexual: 0,
						//     other: 0
						// },
						// party_affiliation: {
						// 	Republican
						// 	Democrat
						// 	Independent 
						//     Other
						//     None
						// },
						// education: {
						//     High School or less
						//     Some College
						//     College Graduate
						//     Post-Graduate Degree
						//     Other
						// },
						// religion: {
						// 	Christianity
						// 	No religion
						// 	Judaism
						// 	Islam
						// 	Hinduism
						// 	Other
						// },
						// employment: {
						//     Employed
						//     Unemployed
						//     Student
						//     Retired
						//     Military
						//     Other
						// },
						// ethnicity: {
						//     Asian
						//     Black
						//     Latino
						//     Native American
						//     White
						//     Other
						// },
						// relationship: {
						//     Single
						//     Dating
						//     Married
						//     Other
						//  },
						//  residence: {
						//  	urban
						//  	rural
						//  	suburb
						//  },
		    // 		}
		    	},
		    	{text: "Choice text", id: "2", votes: 3000},
		    	{text: "Choice text", id: "3", votes: 1000}
		    ],
		    tags: ["tag1","tag2"]
	  	}
	  	return fullPoll;
	};

	API_DEV.getPolls = function (pageNum) {
		
		if (pageNum == 1) {
		return [
		  {id:1, 
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "This is a much longer question than usual, but still quite important!?",votes: 5000,category: "Social",
		    choices: [
		      {text: "Choice text", id: "1", votes: 3000},
		      {text: "Choice text", id: "2", votes: 2000}
		    ],
		    tags: ["tag1","tag2"]
		  },
		  {id:2,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 7004,category: "Social",
		    choices: [
		      {text: "Some longer choice text might go righhhhhht here. This is huge!", _id: "1", votes: 1501},
		      {text: "Some equally long choice text will go here!", _id: "2", votes: 501},
		      {text: "Choice text Choice text Choice text", _id: "3", votes: 3001},
		      {text: "Choice text Choice text Choice text Choice text", _id: "4", votes: 2001}
		    ],
		    tags: ["tag1","tag2"]
		  },
		  {id:3,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 5005,category: "Sports",
		    choices: [
		      {text: "Choice text"},
		      {text: "Choice text"},
		      {text: "Choice text"}
		    ],
		    tags: ["tag1","tag2"]
		  },
		  {id:4,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 5005,category: "Funny",
		    choices: [
		      {text: "Choice text"},
		      {text: "Choice text"},
		      {text: "Choice text"},
		      {text: "Choice text"},
		      {text: "Choice text"}
		    ],
		    tags: ["tag1","tag2"]
		  },
		  {id:5,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 5005,category: "Politics",
		    choices: [
		      {text: "Choice text", _id: "1", votes: 3005},
		      {text: "Choice text", _id: "2", votes: 2000}
		    ],
		    tags: ["tag1","tag2"]
		  }];
		}
		else {
		  return [
		  {id:6,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 7004,category: "Politics",
		    choices: [
		      {text: "Some longer choice text might go righhhhhht here. This is huge!", _id: "1", votes: 1501},
		      {text: "Some equally long choice text will go here!", _id: "2", votes: 501},
		      {text: "Choice text Choice text Choice text", _id: "3", votes: 3001},
		      {text: "Choice text Choice text Choice text Choice text", _id: "4", votes: 2001}
		    ],
		    tags: ["tag1","tag2"]
		  },
		  {id:7,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 5005,category: "Funny",
		    choices: [
		      {text: "Choice text", _id: "1", votes: 3005},
		      {text: "Choice text", _id: "2", votes: 2000}
		    ],
		    tags: ["tag1","tag2"]
		  },
		  {id:8,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 5005,category: "Social",
		    choices: [
		      {text: "Choice text"},
		      {text: "Choice text"},
		      {text: "Choice text"}
		    ],
		    tags: ["tag1","tag2"]
		  },
		  {id:9,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 5005,category: "Sports",
		    choices: [
		      {text: "Choice text", _id: "1", votes: 3005},
		      {text: "Choice text", _id: "2", votes: 2000}
		    ],
		    tags: ["tag1","tag2"]
		  },
		  {id:10,
		  	isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  	text: "Some poll text",votes: 7004,category: "Funny",
		    choices: [
		      {text: "Some longer choice text might go righhhhhht here. This is huge!", _id: "1", votes: 1501},
		      {text: "Some equally long choice text will go here!", _id: "2", votes: 501},
		      {text: "Choice text Choice text Choice text", _id: "3", votes: 3001},
		      {text: "Choice text Choice text Choice text Choice text", _id: "4", votes: 2001}
		    ],
		    tags: ["tag1","tag2"]
		  }
		];
		}
	};

	API_DEV.getRandomPolls = function (pollNum) {
		var polls = [];

		for (var i = 0; i < pollNum; i++) {

			// Math.floor(Math.random()*(max-min+1)+min)

			var poll = {
				id: Math.floor(Math.random()*(10000)),
		  		isAnswered: Boolean(Math.floor(Math.random() * 2)),
		  		text: this.pollTexts[Math.floor(Math.random()*(this.pollTexts.length))],
		  		votes: Math.floor(Math.random()*(10000)),
		  		category: this.categories[Math.floor(Math.random()*(this.categories.length))],
		  		choices: []
		    	// tags: ["tag1","tag2"]
		  	};

		  	var votesLeft = poll.votes;
		  	
		  	// now choose a random number of choices from 2 to 8
		  	var choiceCount = Math.floor(Math.random()*5+2);

		  	// console.log(choiceCount);
		  	console.log("POLL: " + poll.id);

		  	var choiceAnswered = false;

		 	// for each choice take a random amount of remaining votes, unless last choice takes all votesLeft
		 	for (var j = 0; j < choiceCount; j++) {
				var choiceVotes;
				var isAnswered = false;
		 		if (j == (choiceCount-1)) {
		 			choiceVotes = votesLeft;

		 			if (poll.isAnswered && !choiceAnswered) {
		 				isAnswered = true;
		 			}

		 		} else {
		 			choiceVotes = Math.floor(Math.random()*(votesLeft + 1));
		 			votesLeft = votesLeft - choiceVotes;

		 			if (poll.isAnswered && !choiceAnswered) {
		 				var bool = Boolean(Math.floor(Math.random() * 2));
		 				isAnswered = bool;
		 				choiceAnswered = bool;
		 			}

		 		}

		 		// console.log(choiceVotes);
		 		
		 		var choice = {
		 			isAnswered: isAnswered,
		 			id: Math.floor(Math.random()*(10000)),
		 			text: this.choiceTexts[Math.floor(Math.random()*(this.choiceTexts.length))],
		 			votes: choiceVotes
		 		}

		 		console.log(poll.isAnswered, choice.isAnswered);

		 		poll.choices.push(choice);

		 	};

			polls.push(poll);
		};

		return polls;
	};

	API_DEV.categories = [
		"Social",
		"Politics",
		"Funny",
		"Sports",
		"Food",
		"Games",
		"Music",
		"Travel"
	];

	API_DEV.pollTexts = [
		"Some poll text",
		// "This is a much longer question than usual, but still quite important!?l, but still quite important!?"
	];

	API_DEV.choiceTexts = [
		// "Some longer choice text might go righhhhhht here. This is huge!Some longer choic", //e text might go righhhhhht here. This is huge!",
		// "Some longer choice text might go righhhhhht here. This is huge!",
		"Choice text",
		"Something else here! should take 2 lines"
	]


	PB.API = API_DEV;

})();

/*

sex
	Male
	Female
	Other

age
    Under 12 years old
    12-17 years old
    18-24 years old
    25-34 years old
    35-44 years old
    45-54 years old
    55-64 years old
    65 years or older

sexual_orientation
    heterosexuality 
    homosexuality
    bisexuality
    other

party_affiliation
	Republican
	Democrat
	Independent 
    Other
    None
    
education
    High School or less
    Some College
    College Graduate
    Post-Graduate Degree
    Other

religion
	Christianity
	No religion
	Judaism
	Islam
	Hinduism
	Other

employment
    Employed
    Unemployed
    Student
    Retired
    Military
    Other

ethnicity 
    Asian
    Black
    Latino
    Native American
    White
    Other

relationship 
    Single
    Dating
    Married
    Other

 residence
 	urban
 	rural
 	suburb

*/



