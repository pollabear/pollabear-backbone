
(function(){

	Handlebars.registerHelper('pollPercentage', function(totalPollVotes,choicePollVotes) {
		// console.log(totalPollVotes, choicePollVotes);
		// console.log(Math.round((choicePollVotes / totalPollVotes) * 10000) / 100);

		return (Math.round((choicePollVotes / totalPollVotes) * 10000) / 100) + '%'
	});

})();