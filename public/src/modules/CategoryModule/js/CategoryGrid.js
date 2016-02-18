var PB = PB || {};

(function ($) {
	'use strict';

	PB.CategoryView = Backbone.View.extend({

		className: 'category-grid',

		initialize: function () {
			// set up overlay content
			this.$el.html(JST["public/src/modules/CategoryModule/templates/category-grid.hbs"]());



			// initialize a masonry grid
			// this.$categoryGrid = this.$('.category-grid');
			// var masonryOptions = {
			// 	columnWidth: 150,
			// 	isFitWidth: true,
			// 	itemSelector: '.category-grid-element',
			// 	gutter: 40,
			// 	transitionDuration: '0s'
			// 	// resize: false
			// 	// isAnimated: false
			// 	// initLayout: false
			// };
			// this.$categoryGrid.masonry(masonryOptions);

		},
		destroy: function () {
			// this.$categoryGrid.masonry('destroy');
			// this.$el.html('');
			this.remove();
		}
	});

})(jQuery);