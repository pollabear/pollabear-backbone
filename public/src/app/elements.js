
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

    elements.activateOverlay = function (view, options) {
    	console.log('activateOverlay');

        // make body unscrollable
        $('body').addClass('noscroll');
        // make overlay visible with animation
        this.overlay.$el.removeClass('hidden');
        
        var self = this

        setTimeout(function() {

	    	self.overlay.active = true;

	        self.overlay.view = new view(options);
			self.overlay.$content.html(self.overlay.view.$el);
			self.overlay.view.render();

	        // ADD ANIMATION
	        self.overlay.$el.velocity({opacity : 1}, 180);

        }, 100);

    };


    elements.deactivateOverlay = function () {
    	var self = this;

		this.overlay.$el.velocity({opacity : 0, padding: 0}, 200, function () {
			self.overlay.$el.addClass('hidden');
			$('body').removeClass('noscroll');
			self.overlay.active = false;
			self.overlay.view.destroy();
		});
    };

    elements.transitionMain = function (view, options) {

		if (this.overlay.active) {
			this.deactivateOverlay();
		}

		if (this.main.state != Backbone.history.getFragment()) {
			// if there is something in main container, destroy it and remove it
			if (this.main.active) {
				this.main.view.destroy();
			}
			// create a home view to put in the main container
			this.main.view = new view(options);
			this.main.$el.html(this.main.view.$el);
			this.main.view.render();

			// main container is now active
			this.main.active = true;
		}

		this.main.state = Backbone.history.getFragment();

	};	

	elements.transitionMainOrOverlay = function (view, options) {
		if (!this.main.active) {
			this.transitionMain(view, options);
			// add active class to navbar category tab

		} else {
			if (this.main.state != Backbone.history.getFragment()) {
				this.activateOverlay(view, options);
			} else {
				this.deactivateOverlay();
			}
		}
	};

    PB.elements = elements;

})(jQuery);
