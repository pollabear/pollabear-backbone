var PB = PB || {};

(function($){
	'use strict';

	PB.PollView = Backbone.View.extend({
		// separate reasoning and comment views

		// events 
			// answering unanswered
			// adjusting data

		events: {
			'mouseenter .unanswered .choice' : 'toggleChoiceHighlight',
			'mouseleave .unanswered .choice' : 'toggleChoiceHighlight',
			'click .unanswered .choice' : 'answerPoll',
			'click .icon-facebook' : 'sharePoll',
			'click .poll-footer-actions-more' : 'showMoreActions',
			
			// 'mouseenter .poll' : 'increaseBarHeight',
			// 'mouseleave .poll' : 'decreaseBarHeight',

			// 'click .poll': 'testClick',
			// 'click .poll-like': 'likePoll',


			'change .demographic-selector': 'changeData'
		},

		className: 'poll-wrapper',

		// el: $('<div class="poll-wrapper></div>'),

		initialize: function (options) {
			this.options = options;
			this.isGridPoll = this.options.isGridPoll;

			if (!this.isGridPoll) {
				this.$el.addClass('poll-wrapper-expanded');
				this.$el.removeClass('poll-wrapper');
				this.$el.html(JST["public/src/modules/PollModule/templates/text_poll_expanded.hbs"]({poll : this.model.attributes}));
			} else {
				// this.$el.css({ 'height': this.$poll.height() });
				this.$el.html(JST["public/src/modules/PollModule/templates/text_poll.hbs"]({poll : this.model.attributes}));
			}

			this.$poll = this.$('.poll');

			var self = this;
			this.hidden = false;

			$(window).on('resize scroll', _.throttle(function() {

				var inView = isElementInViewport(self.el);

				if (!inView && !self.hidden) {
					// console.log("HIDE");
					self.$poll.addClass('hidden');
					self.hidden = true;
				} 
				
				if (inView && self.hidden) {
					// console.log("SHOW");
					self.$poll.removeClass('hidden');
					self.hidden = false;
				}

			}, 500));
			

			this.listenTo(this.model, 'change:isAnswered', this.render);
			this.listenTo(this.model, 'change:votes', this.renderVoteCount);
			this.listenTo(this.model, 'destroy', this.remove);

			this.render();
		},

		render: function () {
			if (this.model.get('isAnswered')) {
				this.changeData();
			}

			return this;
		},

		answerPoll: function (e) {
			// e.stopPropagation();

			// Remove the highlight
			$(e.currentTarget).removeClass("choice-highlight");

			// Get the choiceID
			var choiceID = $(e.currentTarget).data('choiceid');

			// Display check;
			// $(e.currentTarget).find('.textchoice-main-check').velocity("fadeIn", { duration: 350 });

			// update number of poll votes
			var currentVotes = this.model.get('votes');
			this.model.set('votes', currentVotes + 1);

			var choiceArray = this.model.get('choices');

			// update number of choice votes and answered variable
			for (var i = choiceArray.length - 1; i >= 0; i--) {
				if (choiceArray[i].id == choiceID) {
					choiceArray[i].votes++;
					choiceArray[i].isAnswered = true;
					break;
				}
			};

			// console.log($(e.currentTarget).data("choiceid"));

			this.model.set('isAnswered', true);
		},

		changeData: function () {
			// console.log(this.$demographicSelect.val());
			// console.log('attempting to change data');
			var self = this;

			var demographics = {
						'male' : [ 3500, 1500, 1000 ],
						'female' : [ 2500, 1800, 1700 ],
						'single' : [ 3000, 500, 2500 ],
						'married' : [ 2300, 1700, 2000 ],
					};


			var accuracy;

			console.log(this.isGridPoll);

			if (this.isGridPoll) {
				accuracy = 1;
			} else {
				accuracy = 10;
			}

			this.$poll
				.removeClass("unanswered")
				.find('.choice')
				.each(function( index ) {
					var choice = (self.model.get('choices'))[index];

					var percent = (Math.round((choice.votes / self.model.get('votes')) * accuracy * 100) / (accuracy)) + '%';

					// console.log(percent);

					$(this).find('.choice-percent-text').velocity("fadeIn", { duration: 350 }).html(percent);

					// console.log(choice);

					if (choice.isAnswered) {
						$(this).find('.textchoice-main-check').velocity("fadeIn", { duration: 350 });
					}

					// get percentage values for demographic

					// var percent = (Math.round((demographics[self.$demographicSelect.val()][index] / self.model.get('votes')) * 10000) / 100) + '%'


					$(this)
						.children(".textchoice-overlay")
							// .css('width', '0px')
							.velocity({width : [(percent), 0]},[.29,.9,.53,1.23], 350);
				});


		},

		increaseBarHeight : _.debounce(function (e) {

			this.$poll
				.find('.textchoice-overlay')
				.velocity({height : '8px'},[.29,.9,.53,1.23], 350);

		}, 200),

		decreaseBarHeight : function (e) {

			this.$poll
				.find('.textchoice-overlay')
				.velocity({height : '100%'}, [.29,.9,.53,1.23], 350);
		},

		toggleChoiceHighlight : function (e) {
			$(e.currentTarget).toggleClass("choice-highlight");
		},

		showMoreActions : function (e) {
			e.stopPropagation();

			var dropdown = this.$('.poll-dropup-content');

			console.log(dropdown.attr('data-active'));

			if (dropdown.attr('data-active') == "true") {
				dropdown.attr('data-active', "false");
				dropdown.velocity({
				    /* Two-item array format. */
				    translateY: [-30, 0],
				    /* Three-item array format with a per-property easing. */
				    opacity: [ 0, 1 ]
				}, 
				{
				    complete: function (elements) {
				    	dropdown.removeClass('dropdown-content-display');
				    },
				    duration: 200
				});
			} else {
				PB.removeDropdowns();

				dropdown.attr('data-active', "true");
				// dropdown.velocity("fadeIn", { duration: 150 });
				dropdown.addClass('dropdown-content-display');

				dropdown.velocity({
				    translateY: [ 0, -30],
				    opacity: [ 1, 0 ]
				}, 200);
			}

			// dropdown.velocity("fadeIn", { duration: 150 });
				// .velocity("slideDown", { duration: 150 });

		},

		sharePoll : function (e) {
			e.stopPropagation();
			PB.facebook.share("http://localhost:5000/poll/" + this.model.id);
		},


		renderVoteCount : function () {
			this.$('.poll-footer-data-votes').html(this.model.get('votes') + " votes");

		}

	});


	// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport (el) 
    {
		var rect = el.getBoundingClientRect();
		var windowHeight = (window.innerHeight || document.documentElement.clientHeight);

		return (rect.top >= -2000) && ((rect.top + rect.height) <= (windowHeight + 2000));

    }





})(jQuery);