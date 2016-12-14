
(function(){
	'use strict';

	Handlebars.registerHelper('upperCase', function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	});

	Handlebars.registerHelper('pollPercentage', function(totalPollVotes,choicePollVotes) {
		// console.log(totalPollVotes, choicePollVotes);
		// console.log(Math.round((choicePollVotes / totalPollVotes) * 10000) / 100);
		return (Math.round((choicePollVotes / totalPollVotes) * 10000) / 100) + '%'
	});

})();
