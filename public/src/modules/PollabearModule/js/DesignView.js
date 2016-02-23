var PB = PB || {};

(function ($) {
	'use strict';

	// Our overall **AppView** is the top-level piece of UI.
	PB.DesignView = Backbone.View.extend({

		// template: JST["public/js/templates/home.hbs"](),
		// id: 'home-container',

		initialize: function () {

			this.$el.html(JST["public/src/modules/PollabearModule/templates/design.hbs"]());


			// this.render()
		},

		// some way to change category by adjusting this view (and its grid)

		render: function () {

		},

		destroy: function () {
			this.remove();
		}

	});
})(jQuery);