var PB = PB || {};

(function ($) {
	'use strict';
	PB.facebook = {};

	$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
		FB.init({
			appId: '1750824855143201',
			version: 'v2.7' // or v2.0, v2.1, v2.2, v2.3
		});     
	});

	PB.facebook.share = function(url) {
		// body...
		FB.ui({
			method: 'share',
			href: url,
		}, function(response){
			console.log(response);
		});
	};

	PB.facebook.login = function() {
		FB.login(function(response){
  		// Handle the response object, like in statusChangeCallback() in our demo
  		// code.
  			console.log(response);
		});
	};

})(jQuery);