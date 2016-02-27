var PB = PB || {};

(function($){
	'use strict';

	PB.PollDetail = Backbone.View.extend({
		// separate reasoning and comment views

		// events 
			// answering unanswered
			// adjusting data

		events: {},

		initialize: function (options) {
			this.$el.html(JST["public/src/modules/PollDetailModule/templates/pollpage.hbs"]());

			this.$bear = this.$('.pollpage-bear');
			this.$poll = this.$('.pollpage-section--poll');
			this.$graph = this.$('.pollpage-section--graphs');
			this.$reasonings = this.$('.pollpage-section--reasonings');
			this.$comments = this.$('.pollpage-section--comments');

			this.pollID = options.pollID;


			if (PB.retrievedPolls) {
				this.model = PB.retrievedPolls.get(this.pollID);
			} 

			if (!this.model) {

				var self = this;

				setTimeout(function() { 
					self.model = new PB.Poll(PB.API.getRandomPolls(1,'all')[0]);

					self.listenTo(self.model, 'change', self.render);
					self.pollView = new PB.PollView({ model: self.model });
					self.$poll.html(self.pollView.el);

					// console.log(self.model);

				}, 900);
			} else {
				this.listenTo(this.model, 'change', this.render);
				this.pollView = new PB.PollView({ model: this.model });
				this.$poll.html(this.pollView.el);

				// console.log(this.model);
			}

			// console.log(this.model);

		},

		render: function () {
			// if (!this.model.get('unanswered')) {
			// 	// this.activateChart();





			// }
		},

		destroy: function () {
			console.log('destroying PollDetail');
			// this.model.trigger('destroy', this.model, this.model.collection);
			this.pollView.remove();
			this.remove();


		},

		activateChart: function () {
			this.$graph.removeClass('hidden');
			var ctx = this.$graph.children('#DemographicChart').get(0).getContext("2d");


var data = {
    labels: ["This is a reallllllly ", "choice2", "choice3", "choice4"],
    datasets: [
        {
            label: "white",
            fillColor: "rgba(200,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [35, 20, 80, 81]
        },
        {
            label: "asian",
            fillColor: "rgba(151,187,255,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [18, 22, 40, 19]
        },
        {
            label: "black",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [5, 35, 80, 81]
        },
        {
            label: "latino/hispanic",
            fillColor: "rgba(11,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [22, 5, 40, 19]
        },
        {
            label: "other",
            fillColor: "rgba(220,220,20,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [20, 18, 80, 81]
        }
    ]
};





			this.$chart = new Chart(ctx).Bar(data, {
				responsive: false, 
				labelLength : 10, 
				multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>%",
				scaleOverride: true,

			    // ** Required if scaleOverride is true **
			    // Number - The number of steps in a hard coded scale
			    scaleSteps: 5,
			    // Number - The value jump in the hard coded scale
			    scaleStepWidth: 20,
			    // Number - The scale starting value
			    scaleStartValue: 0,
			    barDatasetSpacing : 0,
			    barValueSpacing : 20,
			    // scaleFontSize: 0

			});
		}

	});

})(jQuery);