var PB = PB || {};

(function ($) {
	'use strict';

	PB.ProfileView = Backbone.View.extend({

		className: 'container-profile',

		events: {

		},

		initialize: function () {
			this.$el.html(JST["public/src/modules/ProfileModule/templates/profile.hbs"]());

		},

		destroy: function () {
			this.remove();
		}
	});

})(jQuery);