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
			PB.elements.transitionMain(PB.HomeView);
		},

		categories: function () {
			console.log("categories");
			PB.elements.transitionMainOrOverlay(PB.CategoryView);
		},

		category: function (categoryName) {
			// PB.elements.transitionMain(PB.HomeView);
			console.log("category/"+categoryName);
			// Same as main but with extra option for category filter

			// if we are on home state already, simply refresh with new category filter
		},

		create: function () {
			console.log("create");
			// PB.elements.transitionMain(PB.CreateView);
			PB.elements.transitionMainOrOverlay(PB.CreateView);
		},

		profile: function () {
			console.log("profile");
			PB.elements.transitionMain(PB.ProfileView);
		},

		poll: function (pollID) {
			console.log("poll/"+pollID);
			// PB.PollView.prototype.url = "poll/"+pollID;
			PB.elements.transitionMainOrOverlay(PB.PollDetail);
		}

		// search: function (queryString) {
		// 	console.log("search/"+queryString);
		// }
	});

	// PB.router = new PollabearRouter();
	// Backbone.history.start();
	// Backbone.history.start({pushState: true, root: '/'});
})();