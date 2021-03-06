var PB = PB || {};

(function($){
	'use strict';

	PB.PollGrid = Backbone.View.extend({

		events: {
			// 'mouseenter .unanswered .choice' : 'toggleChoiceHighlight',
			// 'mouseleave .unanswered .choice' : 'toggleChoiceHighlight',
			// 'mouseenter .poll .poll-footer-more .icon-more' : 'toggleIconBrightness',
			// 'mouseleave .poll .poll-footer-more .icon-more' : 'toggleIconBrightness'
		},

		// className: 'pollgrid-wrapper',

		// el: $('<div class="poll-wrapper></div>'),

		initialize: function (options) {
			console.log("Creating PollGrid");

			this.options = options;
			// this.$spinner = $spinner;

			this.scrollTolerance = 600;

			this.category = this.options.category || 'all';
			this.paginationURL = this.options.paginationURL;

			// this.polls = PB.API.getPolls();
			this.currentPage = 0;
			this.loading = false;
			this.$newPolls = [];

			this.$spinner = $('#spinner');

			this.polls = new PB.PollCollection();
			PB.retrievedPolls = this.polls;

			// On collection change - add new polls
			this.listenTo(this.polls, 'add', this.addPoll);
			this.listenTo(this.polls, 'update', this.newPolls);
			
			var self = this;
			$(window).scroll(function() {
			   if($(window).scrollTop() + $(window).height() > $(document).height() - self.scrollTolerance) {
			       if (!self.loading) {
		        		self.getPolls();
		        	}
			   }
			});

			var masonryOptions = {
				// resizeable: true,
				columnWidth: 275,
				isFitWidth: true,
				itemSelector: '.poll-wrapper',
				transitionDuration: 0,
				// hiddenStyle: { opacity: 0 },
				// stamp: '.stamp-banner',
				gutter: 20
				// containerStyle: null
			};

			this.$el.masonry(masonryOptions);

			// this.$el.css({'background-color':'grey', 'height':'400px'});

		},

		render: function () {

			this.getPolls();

			return this;
		},
		
		addPoll : function(poll) {
			// console.log('activated');
			var pollView = new PB.PollView({model: poll, isGridPoll: true});
			this.$newPolls.push(pollView.$el);



			// var newPollViews = [];
			// for (var i = newPolls.length - 1; i >= 0; i--) {
			// 	newPollViews[i] = JST["public/src/modules/PollModule/templates/text_poll.hbs"]({poll : newPolls[i]}); 
			// };
				
			// var $items = $(newPollViews.join(''));

			// // trigger masonry 
			// this.$el.append($items).masonry( 'appended', $items );
		},

		newPolls : function() {
			// console.log(this.$newPolls);

			// var $items = $(newPollViews.join(''));

			// // trigger masonry 
			// this.$el.append($items).masonry( 'appended', $items );

			for (var i = this.$newPolls.length - 1; i >= 0; i--) {
				this.$el
					.append(this.$newPolls[i])
					.masonry( 'appended', this.$newPolls[i] );

				this.$newPolls[i].css({ 'height': this.$newPolls[i].height() });

				this.$newPolls[i].velocity("fadeIn", { duration: 300 });
			};

			// this.$el
			// .append(this.$newPolls)
			// .masonry( 'appended', this.$newPolls );
			// this.$el.masonry();
			this.$newPolls = [];
		},

		getPolls : function(){
		    this.loading = true;
		    this.$spinner.show();
			
			// increment page
			this.currentPage = this.currentPage + 1;

			// show spinner
			// this.$spinner.show();

			var self = this;

			// get new polls from API
			setTimeout(function() {
				// add new polls to collection
				self.polls.add(PB.API.getRandomPolls(40, self.category));
				
				if (self.currentPage < 20) {
					self.loading = false;
				}

				self.$spinner.hide();

				console.log("Polls loaded");
			}, 400);

		},

		toggleIconBrightness : function (e) {
			$(e.currentTarget).toggleClass('icon-darkgrey');
		},

		// toggleChoiceHighlight : function (e) {
		// 	$(e.currentTarget).toggleClass("choice-highlight");
		// },

		destroy : function() {
			console.log("Destroying PollGrid");

			var model;
			while (model = this.polls.first()) {
			  model.trigger('destroy', model, model.collection);
			}

			// console.log(this.polls);

			// this.$el.masonry('destroy'); 
			$(window).off('scroll');
			this.remove();
		}

	});

})(jQuery);
