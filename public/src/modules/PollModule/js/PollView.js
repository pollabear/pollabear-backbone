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
			'click .unanswered .choice': 'answerPoll',
			'click .poll-footer-actions-more': 'sharePoll',
			'click .poll': 'testClick',
			// 'click .poll-like': 'likePoll',


			'change .demographic-selector': 'changeData'
		},

		className: 'poll-wrapper',

		// el: $('<div class="poll-wrapper></div>'),

		initialize: function (options) {
			this.options = options;
			this.isGridPoll = this.options.isGridPoll;


			this.$el.html(JST["public/src/modules/PollModule/templates/text_poll.hbs"]({poll : this.model.attributes}));

			// this.$('.poll').addClass('hidden');
			this.$poll = this.$('.poll');

			if (!this.isGridPoll) {
				this.$el.addClass('poll-wrapper-expanded');
				this.$el.removeClass('poll-wrapper');
			} else {
				// this.$el.css({ 'height': this.$poll.height() });
				this.testClick();
			}

			// else {
			// 	this.$el.html(JST["public/src/modules/PollModule/templates/poll-expanded.hbs"]({poll : this.model.attributes}));

			// 	this.$demographicSelect = this.$('.demographic-selector');
			// 	// this.$demographicSelect
			// 	//   .dropdown({
			// 	//     // you can use any ui transition
			// 	//     transition: 'drop'
			// 	//   });

			// }

			// if (this.model.get('isAnswered')) {
			// 	this.changeData();
			// } else {
				this.listenTo(this.model, 'change:isAnswered', this.render);
			// }

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

			$(e.currentTarget).find('.textchoice-main-check').velocity("fadeIn", { duration: 350 });

			// update number of poll votes

			// update number of choice votes

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

			this.$poll
				.removeClass("unanswered")
				.find('.choice')
				.each(function( index ) {
					var choice = (self.model.get('choices'))[index];
					var percent = (Math.round((choice.votes / self.model.get('votes')) * 1000) / 10) + '%';
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
							.velocity({width : [percent, 0]}, 350);
				});


		},

		toggleChoiceHighlight : function (e) {
			$(e.currentTarget).toggleClass("choice-highlight");
		},

		sharePoll : function () {
			PB.facebook.share("http://localhost:5000/poll/" + this.model.id);
		},

		testClick : function () {


				var self = this;
				this.scrolled = false;
				this.hidden = false;

				// $(window).on('load resize scroll', function() {
				// 	if (!self.scrolled) {
				// 		self.scrolled = true;

				// 		setTimeout(function() {
				// 			var inView = isElementInViewport(self.el);

				// 			if (!inView && !self.hidden) {
				// 				// console.log("HIDE");
				// 				self.$poll.addClass('hidden');
				// 				self.hidden = true;
				// 			} 
							
				// 			if (inView && self.hidden) {
				// 				// console.log("SHOW");
				// 				self.$poll.removeClass('hidden');
				// 				self.hidden = false;
				// 			}

				// 			self.scrolled = false;
				// 		}, 250);
				// 	} 
				// });

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

			}, 300));


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