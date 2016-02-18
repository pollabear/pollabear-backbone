var PB = PB || {};

(function ($) {
	'use strict';

	PB.CreateView = Backbone.View.extend({

		className: 'container-create',

		events: {
			'click #submitPollButton': 'submitPoll',
			'keydown textarea' : 'preventEnter',
			'input textarea' : 'dynamicInput',
			'click #addChoiceInputButton' : 'addChoiceInput',
			'click .removeChoiceInputButton' : 'removeChoiceInput',
			'click .create-section-category-block' : 'selectCategory'
		},

		initialize: function () {
			this.$el.html(JST["public/src/modules/CreateModule/templates/create.hbs"]());

			this.$choiceSection = this.$('.create-choices');
			this.$newChoiceInputButton = this.$('#addChoiceInputButton');

			this.$submitButton = this.$('#submitPollButton');

			// cache the choice-input html string
			this.choiceInputHtml = JST["public/src/modules/CreateModule/templates/choice-input.hbs"]();

			// populate with originally 2 choices
			this.$choiceSection.append($(this.choiceInputHtml),$(this.choiceInputHtml));
			this.choiceFormCount = 2;

			this.errorCount = 4;

		},

		setError: function(val) {
			this.errorCount += val;

			console.log(this.errorCount);

			if (this.errorCount == 0) {
				this.$submitButton.prop("disabled",false);
			} else {
				this.$submitButton.prop("disabled",true);
			}
		},

		preventEnter: function(e) {
   			if(e.which == 13) {
   				e.preventDefault();
   			}
		},

		dynamicInput: function(e) {
			var $currentTextArea = $(e.currentTarget)

			// stuff with height
		    $currentTextArea.height(1);

		    var totalHeight = $currentTextArea.prop('scrollHeight') - 
		    					parseInt($currentTextArea.css('padding-top')) - 
		    					parseInt($currentTextArea.css('padding-bottom'));

		    $currentTextArea.height(totalHeight);

		    // ------------ update character count ------------

		    var currentCharCount = $currentTextArea.val().length;

		    var $charCount = $currentTextArea.siblings('.textarea-char-count');
		    var maxCharCount = $charCount.data('max-char');

		    // update char count
			$charCount.html(currentCharCount + ' / ' + maxCharCount);

			var lastErrorStatus = $charCount.data('error');

			// apply char count errors
			if (!lastErrorStatus && ((currentCharCount > maxCharCount) || (currentCharCount <= 0))) {
				console.log('char count error');
				$charCount.addClass('char-count-error');
				$charCount.data('error', true);
				this.setError(1);
			} 

			else if (lastErrorStatus && ((currentCharCount <= maxCharCount) || (currentCharCount > 0))) {
				console.log('remove char count error');
				$charCount.removeClass('char-count-error');
				$charCount.data('error', false);
				this.setError(-1);
			}

		},

		addChoiceInput: function(e) {
			console.log('addChoice');
			var $newChoiceInput = $(this.choiceInputHtml).hide()
			this.$choiceSection.append($newChoiceInput);
			$newChoiceInput.show(300);

			this.setError(1);

			this.choiceFormCount++;
			if(this.choiceFormCount >= 6) {
				this.$newChoiceInputButton.prop("disabled",true);
			}
		},

		removeChoiceInput: function(e) {
			console.log('removeChoice');

			var $currentChoiceInput = $(e.currentTarget).parents('.poll-form-choice');

			// if we have 2 choices than simply clear the text from this choice
			if (this.choiceFormCount == 2) {
				var $currentChoiceTextarea = $currentChoiceInput.children('.choiceTextInput');
			
				if ($currentChoiceTextarea .val().length != 0) {
					$currentChoiceTextarea.val('');

					var $charCount = $currentChoiceInput.children('.textarea-char-count');

					this.setError(1);
					$charCount.data('error', true);

		    		var maxCharCount = $charCount.data('max-char')
					$charCount.html('0 / ' + maxCharCount);
					$charCount.removeClass('char-count-error');
				}

			} else {
				var $charCount = $currentChoiceInput.children('.textarea-char-count');
				if ($charCount.data('error')) {
					this.setError(-1);
				}

				$currentChoiceInput.hide(300, function () {
					$currentChoiceInput.remove();
				});

				this.choiceFormCount--;
				if(this.choiceFormCount < 6) {
					this.$newChoiceInputButton.prop("disabled",false);
				}
			}

		},

		selectCategory: function(e) {

			if (this.$currentCategory && (this.$currentCategory.get(0) == e.currentTarget)) {

				this.$currentCategory.removeClass('create-category-selected');
				this.$currentCategory = null;
				this.setError(1);

			} else {

				if (this.$currentCategory) {
					this.$currentCategory.removeClass('create-category-selected');
				} else {
					this.setError(-1);
				}

				this.$currentCategory = $(e.currentTarget);
				this.$currentCategory.addClass('create-category-selected');

			}
		},

		submitPoll: function() {
			console.log('submitPoll');
			// check poll text

			// check choice elements number and choice text

			// ensure category is selected

			// if a check fails, show a banner that explains why

			// if all checks successful, make api call with data

			// after API call, trigger a state transition to that poll page

		},

		destroy: function () {
			this.remove();
		}
	});

})(jQuery);