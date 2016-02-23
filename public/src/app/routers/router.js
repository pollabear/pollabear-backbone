var PB = PB || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	PB.PollabearRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
			'categories': 'categories',
			'category/:category': 'category',
			'create': 'create',
			'profile': 'profile', 
			'poll/:id': 'poll'
			// 'search(?*querystring)': 'search'
		},

		home: function () {
			console.log("home");
			var homeView = new PB.HomeView({category: 'all'});
			PB.elements.transitionMain(homeView);
		},

		categories: function () {
			console.log("categories");
			PB.elements.transitionMainOrOverlay(new PB.CategoryView());
		},

		category: function (categoryName) {
			// PB.elements.transitionMain(PB.HomeView);
			console.log("category/"+categoryName);
			// Same as main but with extra option for category filter

			// if we are on home state already, simply refresh with new category filter
			// console.log(PB.elements.main.state);

			// if (PB.elements.main.active && PB.elements.main.state)

			var homeView = new PB.HomeView({category: categoryName});
			PB.elements.transitionMain(homeView);


		},

		create: function () {
			console.log("create");
			// PB.elements.transitionMain(PB.CreateView);
			PB.elements.transitionMainOrOverlay(new PB.CreateView());
		},

		profile: function () {
			console.log("profile");
			PB.elements.transitionMain(new PB.ProfileView());
		},

		poll: function (pollID) {
			console.log("poll/"+pollID);
			// PB.PollView.prototype.url = "poll/"+pollID;

			// PB.retrievedPolls.get(pollID)

			var model;
			if (PB.retrievedPolls) {
				model = PB.retrievedPolls.get(pollID);
				console.log(model);
			} 

			if (!model) {
				setTimeout(function() { 
					model = new PB.Poll(PB.API.getFullPoll());
					PB.elements.transitionMainOrOverlay(new PB.PollDetail({ model: model }));
				}, 900);
			} else {
				PB.elements.transitionMainOrOverlay(new PB.PollDetail({ model: model }));
			}
		}

		// search: function (queryString) {
		// 	console.log("search/"+queryString);
		// }
	});

	// PB.router = new PollabearRouter();
	// Backbone.history.start();
	// Backbone.history.start({pushState: true, root: '/'});
})();
