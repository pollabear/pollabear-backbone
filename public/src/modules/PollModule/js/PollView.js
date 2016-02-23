var PB = PB || {};

(function($){
	'use strict';

	PB.PollView = Backbone.View.extend({
		// separate reasoning and comment views

		// events 
			// answering unanswered
			// adjusting data

		events: {
			'click .unanswered .choice': 'answerPoll',
			'click .poll-follow': 'followPoll',
			'click .poll-like': 'likePoll',


			'change .demographic-selector': 'changeData'
		},

		className: 'poll-wrapper',

		// el: $('<div class="poll-wrapper></div>'),

		initialize: function (options) {
			this.options = options;
			this.isGridPoll = this.options.isGridPoll;

			if (this.isGridPoll) {
				this.$el.html(JST["public/src/modules/PollModule/templates/text_poll.hbs"]({poll : this.model.attributes}));
			} else {
				this.$el.html(JST["public/src/modules/PollModule/templates/poll-expanded.hbs"]({poll : this.model.attributes}));

				this.$demographicSelect = this.$('.demographic-selector');
				// this.$demographicSelect
				//   .dropdown({
				//     // you can use any ui transition
				//     transition: 'drop'
				//   });

			}

			this.listenTo(this.model, 'change:isAnswered', this.render);
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

			$(e.currentTarget).find('.textchoice-main-check').fadeTo('default',1);

			// update number of poll votes

			// update number of choice votes

			console.log($(e.currentTarget).data("choiceid"));

			this.model.set('isAnswered', true);
		},

		changeData: function () {
			// console.log(this.$demographicSelect.val());
			console.log('attempting to change data');
			var self = this;

			var demographics = {
						'male' : [ 3500, 1500, 1000 ],
						'female' : [ 2500, 1800, 1700 ],
						'single' : [ 3000, 500, 2500 ],
						'married' : [ 2300, 1700, 2000 ],
					};

			this.$el.children('.poll')
				.removeClass("unanswered")
				.find('.choice')
				.each(function( index ) {
					var choice = (self.model.get('choices'))[index];
					var percent = (Math.round((choice.votes / self.model.get('votes')) * 1000) / 10) + '%'
					// console.log($(this).children('textchoice-text-main-percent'));

					$(this).find('.choice-percent-text').fadeTo('default',1).html(percent);

					console.log(choice);

					if (choice.isAnswered) {
						$(this).find('.textchoice-main-check').fadeTo('default',1);
					}

					// get percentage values for demographic

					// var percent = (Math.round((demographics[self.$demographicSelect.val()][index] / self.model.get('votes')) * 10000) / 100) + '%'


					$(this)
						.children(".textchoice-overlay")
							// .css('width', '0px')
							.animate({'width' : percent});
				});


		}

	});

})(jQuery);