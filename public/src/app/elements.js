
var PB = PB || {};

(function ($) {
	'use strict';

	var elements = {
		nav : {
			$el : $("#nav")
		},

		main : {
			$el : $("#main"),
			active : false
		},

		overlay : {
			$el : $("#overlay"),
			$content : $("#overlay-content"),
			active : false
		}
	};

    elements.activateOverlay = function (view) {
    	console.log('activateOverlay');

        // make body unscrollable
        $('body').addClass('noscroll');
        // make overlay visible with animation
        this.overlay.$el.removeClass('hidden');
        
        this.overlay.active = true;

        this.overlay.view = new view();
		this.overlay.$content.html(this.overlay.view.$el);
		this.overlay.view.render();

        // ADD ANIMATION
        this.overlay.$el.animate({'opacity' : 1, 'top' : 0}, 200);
    };


    elements.deactivateOverlay = function () {
    	var this_temp = this;

		this.overlay.$el.animate({'opacity' : 1, 'top' : '100%'}, 200, function () {
			this_temp.overlay.$el.addClass('hidden');
			$('body').removeClass('noscroll');
			this_temp.overlay.active = false;
			this_temp.overlay.view.destroy();
		});
    };

    elements.transitionMain = function (view) {
		this.main.state = Backbone.history.getFragment();

		if (this.overlay.active) {
			this.deactivateOverlay();
		} else {
			// if there is something in main container, destroy it and remove it
			if (this.main.active) {
				this.main.view.destroy();
			}
			// create a home view to put in the main container
			this.main.view = new view();
			this.main.$el.html(this.main.view.$el);
			this.main.view.render();

			// main container is now active
			this.main.active = true;
		}
	};	

	elements.transitionMainOrOverlay = function (view) {
		if (!this.main.active) {
			this.transitionMain(view);

			// add active class to navbar category tab

		} else {
			if (PB.elements.main.state != Backbone.history.getFragment()) {
				this.activateOverlay(view);
			} else {
				this.deactivateOverlay();
			}
		}
	};

    PB.elements = elements;

})(jQuery);
