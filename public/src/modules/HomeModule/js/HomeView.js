var PB = PB || {};

(function ($) {
	'use strict';

	// Our overall **AppView** is the top-level piece of UI.
	PB.HomeView = Backbone.View.extend({

		// template: JST["public/js/templates/home.hbs"](),
		// id: 'home-container',

		initialize: function () {

			this.$el.html(JST["public/src/modules/HomeModule/templates/home.hbs"]());


			// this.render()
		},

		// some way to change category by adjusting this view (and its grid)

		render: function () {
			if (!this.$pollGrid) {
				this.$pollGrid = new PB.PollGrid({el: this.$('#masonry-grid')});
				this.$pollGrid.render();
			}
		},

		destroy: function () {
			this.$pollGrid.destroy();
			this.remove();
		}

	});
})(jQuery);