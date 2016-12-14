var PB = PB || {};

(function () {
	'use strict';

	PB.PollabearRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
			'categories': 'categories',
			'category/:category': 'category',
			'create': 'create',
			'profile': 'profile', 
			'poll/:id': 'poll',
			'login': 'login'
			// 'search(?*querystring)': 'search'
		},

		parseQueryString : function(queryString) {
			var params = {}, queries, temp, i, l;

			if (!queryString) return params;

			// Split into key/value pairs
			queries = queryString.split("&");
			// Convert the array of strings into an object
			for ( i = 0, l = queries.length; i < l; i++ ) {
				temp = queries[i].split('=');
				params[temp[0]] = temp[1];
			}
			return params;
		},

		execute: function (callback, args, name) {
			var needsAuth = (Backbone.history.getFragment() != 'login');
			var isAuth = true;
			PB.elements.nav.$el.show();
			if (needsAuth && !isAuth) {
				Backbone.history.navigate('login', { trigger : true });
				return false;
			} else if (!needsAuth && isAuth) {
				Backbone.history.navigate('', { trigger : true });
				return false;
			} else {
				args.push(this.parseQueryString(args.pop()));
				if (callback) callback.apply(this, args);
			}
		},

		home: function (params) {
			console.log("home");
			console.log(params);
			console.log(typeof params);

			PB.elements.transitionMain(PB.HomeView,{category: 'all'});
		},

		categories: function () {
			console.log("categories");
			PB.elements.transitionMainOrOverlay(PB.CategoryView, {});
		},

		category: function (categoryName) {
			// PB.elements.transitionMain(PB.HomeView);
			console.log("category/"+categoryName);
			// Same as main but with extra option for category filter

			// if we are on home state already, simply refresh with new category filter
			// console.log(PB.elements.main.state);

			// if (PB.elements.main.active && PB.elements.main.state)

			PB.elements.transitionMain(PB.HomeView,{category: categoryName});

		},

		create: function () {
			console.log("create");
			// PB.elements.transitionMain(PB.CreateView);
			PB.elements.transitionMainOrOverlay(PB.CreateView, {});
		},

		profile: function () {
			console.log("profile");
			PB.elements.transitionMain(PB.ProfileView, {});
		},

		poll: function (pollID) {
			console.log("poll/"+pollID);
			// PB.PollView.prototype.url = "poll/"+pollID;

			// PB.retrievedPolls.get(pollID)
	
			PB.elements.transitionMainOrOverlay(PB.PollDetail, {pollID: pollID});

		},

		login: function () {
			console.log("login");
			PB.elements.nav.$el.hide();
			// PB.PollView.prototype.url = "poll/"+pollID;

			// PB.retrievedPolls.get(pollID)
	
			// PB.elements.transitionMainOrOverlay(PB.PollDetail, {pollID: pollID});

		}

		// search: function (queryString) {
		// 	console.log("search/"+queryString);
		// }
	});

	// PB.router = new PollabearRouter();
	// Backbone.history.start();
	// Backbone.history.start({pushState: true, root: '/'});
})();
