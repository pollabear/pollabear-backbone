this["JST"] = this["JST"] || {};

this["JST"]["public/src/modules/CategoryModule/templates/category-grid.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Centered grid of categories -->\n\n		<div class=\"category-grid-element category-Music--overlay\">\n			<a href=\"/category/politics\">\n			<div class=\"iconContainer\">\n				<i class=\"material-icons md-36\">poll</i>\n			</div>\n			<div class=\"textContainer\">\n				<h3 align=\"center\">Politics</h3>\n			</div>\n			</a>\n		</div>\n\n		<div class=\"category-grid-element category-Social--overlay\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element category-Funny--overlay\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element category-Sports--overlay\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element category-Food--overlay\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>	\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>	\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>\n		<div class=\"category-grid-element\">\n			<a href=\"\">\n				<!-- centered icon goes here -->\n				<i class=\"material-icons md-36\">poll</i>\n			</a>\n			<h3>category</h3>\n		</div>	\n\n\n";
},"useData":true});

this["JST"]["public/src/modules/CreateModule/templates/choice-input.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"poll-form-choice\">\n	<!-- <div class=\"poll-form-choice-container-1\"> -->\n	<textarea class=\"choiceTextInput\" name=\"choiceText\" placeholder=\"Choice text here...\"></textarea>\n	<!-- </div> -->\n\n	<div class='textarea-char-count choiceTextCount' data-error=true data-max-char=80>0 / 80</div>\n\n	<div class=\"poll-form-choice-container\">\n		<button class=\"removeChoiceInputButton\" type=\"button\">X</button>\n	</div>\n</div>";
},"useData":true});

this["JST"]["public/src/modules/CreateModule/templates/create.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<!-- <form name=\"poll-form\" novalidate> -->\n	<div class=\"create-section-poll\">\n	\n		<div class=\"create-section-question\">  \n			<textarea id=\"questionTextInput\" name=\"questionText\" placeholder=\"Question text here...\" autofocus></textarea>\n			<div class='textarea-char-count' data-error=true data-max-char=100>0 / 100</div>\n		</div>\n\n		<div class=\"create-section-choices\">\n			<div class=\"create-choices\">\n				\n			</div>\n	        <button id='addChoiceInputButton' type=\"button\">+ New Choice</button>  \n		</div>\n\n	</div>\n\n\n\n\n\n\n\n\n	</br>\n\n	<div class=\"create-section-category\">\n\n		<div class=\"create-section-category-header\">\n			<h3>Select Category</h3>\n		</div>\n\n		<div class=\"create-section-category-grid\">\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>		\n			<div class=\"create-section-category-block\" data-category=\"Politics\">\n				<i class=\"material-icons\">share</i>\n				<span>Politics</span>	\n			</div>							\n		</div>\n\n\n		\n		\n<!-- 		<div class=\"form-group\">\n            <label>Select Category</label>\n            <select type=\"text\" name=\"categorySelect\" class=\"form-control\" required>\n                <option value=\"0\">Business</option>\n                <option value=\"1\">Entertainment</option>\n  				<option value=\"2\">Fashion</option>\n  				<option value=\"3\">Food</option>\n  				<option value=\"4\">Funny</option>\n  				<option value=\"5\">Games</option>\n  				<option value=\"6\">Health</option>\n  				<option value=\"7\">Lifestyle</option>\n  				<option value=\"8\">Music</option>\n  				<option value=\"9\">Politics</option>\n  				<option value=\"10\">Science</option>\n  				<option value=\"11\">Social</option>\n  				<option value=\"12\">Sports</option>\n  				<option value=\"13\">Technology</option>\n  				<option value=\"14\">Travel</option>\n  				<option value=\"15\">Miscellaneous</option>\n            </select>\n    	</div>    --> \n\n	</div>\n    \n	</br>\n\n    <button id=\"submitPollButton\" disabled>CREATE</button>\n    \n<!-- </form> -->\n\n";
},"useData":true});

this["JST"]["public/src/modules/HomeModule/templates/home.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"grid-container\">\n    <div id=\"masonry-grid\">\n<!--         <div class=\"stamp-banner\"><span class=\"pollapoints-number\">10495</span> <span class=\"pollapoints-text\">pollapoints</span></div> -->\n    </div>\n    <img id=\"spinner\" src=\"http://www.all.biz/img/preloader.gif\">\n</div>\n\n<div id=\"grid-footer\">\n    <!-- <img id=\"spinner\" class=\"spinner-center\" src=\"http://www.all.biz/img/preloader.gif\"> -->\n</div>\n\n<!-- <div id=\"sidebar\">\n    <div class=\"sidebar-pollabear\">\n       <img class= \"user-pollabear\" src=\"http://i.istockimg.com/file_thumbview_approve/56146906/3/stock-illustration-56146906-comic-cartoon-little-polar-bear.jpg\"> \n    </div>\n    <div class=\"sidebar-pollapoints\">\n        <span class=\"pollapoints-number\">5600</span><span class=\"pollapoints-text\">pollapoints</span>\n    </div>\n    <div class=\"sidebar-more\">\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n        <div class=\"sidebar-more-element\"></div>\n    </div>\n</div> -->";
},"useData":true});

this["JST"]["public/src/modules/PollDetailModule/templates/pollpage.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n\n<div class=\"pollpage-container\">\n	\n	<!-- Asker's Bear -->\n\n	<div class=\"pollpage-bear\">\n		<!-- Put placeholder bear sillouette -->\n	</div>\n\n	<!-- Expanded Poll -->\n\n	<div class=\"pollpage-section pollpage-section--poll\">\n		<!-- <h2>Question</h2> -->\n		<div class=\"pollpage-section-content hidden\"></div>\n		<div class=\"pollpage-section-loading\"></div>\n	</div>\n\n	<!-- Poll Data Graphs -->\n\n	<div class=\"pollpage-section pollpage-section--graphs hidden\">\n		<h2>Graphs</h2>\n		<canvas id=\"DemographicChart\" width=\"900\" height=\"250\"></canvas>\n		<div class=\"pollpage-section-content hidden\"></div>\n		<div class=\"pollpage-section-loading \"></div>\n	</div>\n\n	<!-- Poll Choice Reasonings -->\n\n	<div class=\"pollpage-section pollpage-section--reasonings hidden\">\n		<h2>Reasonings</h2>\n		<div class=\"pollpage-section-content hidden\"></div>\n		<div class=\"pollpage-section-loading\"></div>\n	</div>\n\n	<!-- Poll Comments -->\n\n	<div class=\"pollpage-section pollpage-section--comments hidden\">\n		<h2>Comments</h2>\n		<div class=\"pollpage-section-content hidden\"></div>\n		<div class=\"pollpage-section-loading\"></div>\n	</div>\n\n	<div class=\"pollpage-section pollpage-section--footer\"></div>\n\n</div>\n\n";
},"useData":true});

this["JST"]["public/src/modules/PollModule/templates/photo_poll.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	    <span>#"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "&#32</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"poll\">\n	<div class=\"poll-header\">\n        <div class=\"poll-header-track\"></div>\n        <h4 class=\"poll-header-text\" align=\"center\">\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n        </h4>\n    </div>\n\n	    <!--  -->\n	    <!--  -->\n\n<!-- 	<div ng-if=\"::mypolla.choiceType == 1\" class=\"poll-body-photo\">\n		<div ng-repeat=\"mychoice in ::mypolla.choices\" \n				class=\"photochoice\" \n				ng-click=\"::choiceSelected(mychoice._id, mypolla)\"\n				ng-class=\"{'unanswered': !mypolla.answered}\">\n			<div class=\"photochoice-body\">\n                <img class=\"photochoice-body-img\" ng-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0["::mychoice"] : depth0)) != null ? stack1.imgPath : stack1), depth0))
    + "\">\n\n\n	                <div class=\"photochoice-body-overlay\" ng-if=\"mypolla.answered\"></div>\n	                <div class=\"photochoice-body-percent-overlay\"\n	                	ng-if=\"mypolla.answered\"\n	                	ng-style=\"::{ 'height' : ((mychoice.votes / mypolla.votes) * 150) + '%' }\" 	\n	            		ng-class=\"{'choice-overlay-visible': mypolla.answered}\"></div>\n	                <h1 class=\"photochoice-body-percent-text choice-percent-text\" ng-if=\"mypolla.answered\">\n	                    ::(((mychoice.votes / mypolla.votes) * 100) | number:1 )<span class=\"photochoice-body-percent-symbol\">%</span> \n	                </h1>\n\n\n            </div>\n            <div class=\"photochoice-footer\">\n\n                <h5 class=\"photochoice-footer-text\">\n                    "
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "\n                </h5>\n            </div>\n		</div>\n	</div>\n -->\n	<!--  -->\n	<!--  -->\n\n	<div class=\"poll-footer-data\">\n	    <h6 class=\"poll-footer-data-category\">\n	        "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.category : stack1), depth0))
    + "\n	    </h6>\n	    <h6 class=\"poll-footer-data-votes\">\n	        "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.votes : stack1), depth0))
    + " votes\n	    </h6>\n	</div>\n\n	<h6 class=\"poll-footer-more\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.tags : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</h6>\n\n</div>";
},"useData":true});

this["JST"]["public/src/modules/PollModule/templates/poll-expanded.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<div class=\"choice-expanded textchoice-expanded\" data-choiceid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n	        <div class=\"textchoice-expanded-overlay category-"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].poll : depths[1])) != null ? stack1.category : stack1), depth0))
    + "--overlay\"></div>\n	        <div class=\"textchoice-expanded-main\">\n	            <div class=\"textchoice-expanded-main-check\">\n	                \n	            </div>\n	            <div class=\"textchoice-expanded-main-text\">\n	                "
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "\n	            </div>\n	            <div class=\"textchoice-expanded-text-main-percent choice-percent-text\"> \n\n	            </div>\n	        </div>\n		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"poll-expanded unanswered category-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.category : stack1), depth0))
    + "--border\">\n	<div class=\"poll-expanded-header\">\n        <!-- <div class=\"poll-header-track\"></div> -->\n        <div class=\"poll-expanded-header-text\">\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n        </div>\n    </div>\n\n    <!--  -->\n    <!--  -->\n\n    <div class=\"poll-expanded-body\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.choices : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<!--  -->\n	<!--  -->\n\n	<div class=\"poll-expanded-footer-data\">\n        <span class=\"poll-expanded-footer-data-category\">\n        	<select class=\"demographic-selector\">\n				<option value=\"male\">Male voters</option>\n				<option value=\"female\">Female voters</option>\n				<option value=\"single\">Single voters</option>\n				<option value=\"married\">Married voters</option>\n			</select>\n\n<!-- 			<div class=\"demographic-selector ui inline dropdown\">\n			  <input type=\"hidden\" name=\"gender\">\n			  <div class=\"text\">Shiba Inu</div>\n			  <i class=\"dropdown icon\"></i>\n			  <div class=\"menu\">\n			    <div class=\"item\">\n			      <i class=\"dropdown icon\"></i>\n			      <span class=\"text\">Dogs</span>\n			      <div class=\"menu\">\n			        <div class=\"item\">Shiba Inu</div>\n			        <div class=\"item\">\n			          <i class=\"dropdown icon\"></i>\n			          <span class=\"text\">Poodle</span>\n			          <div class=\"menu\">\n			            <div class=\"item\">Toy</div>\n			            <div class=\"item\">Standard</div>\n			          </div>\n			        </div>\n			        <div class=\"item\">Labrador</div>\n			      </div>\n			    </div>\n			    <div class=\"item\">\n			      <i class=\"dropdown icon\"></i>\n			      <span class=\"text\">Cats</span>\n			      <div class=\"menu\">\n			        <div class=\"item\">Aegean</div>\n			        <div class=\"item\">Balinese</div>\n			        <div class=\"item\">Persian</div>\n			      </div>\n			    </div>\n			  </div>\n			</div> -->\n\n        </span>\n        <span class=\"poll-expanded-footer-data-votes\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.category : stack1), depth0))
    + " &middot; "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.votes : stack1), depth0))
    + " votes</span>\n    </div>\n\n</div>";
},"useData":true,"useDepths":true});

this["JST"]["public/src/modules/PollModule/templates/text_poll.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<div class=\"choice textchoice\" data-choiceid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n	        <div class=\"textchoice-overlay category-"
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].poll : depths[1])) != null ? stack1.category : stack1), depth0))
    + "--overlay\"></div>\n	        <div class=\"textchoice-main\">\n	            <div class=\"textchoice-main-check\">\n	                <i class=\"material-icons icon-check\">done</i>\n	            </div>\n	            <div class=\"textchoice-main-text\">\n	                "
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "\n	            </div>\n	            <div class=\"choice-percent-text\"> \n\n	            </div>\n	        </div>\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\n	        <span>#"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "&#32</span>\n	        ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"poll unanswered category-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.category : stack1), depth0))
    + "--border\">\n	<div class=\"poll-header\">\n        <!-- <div class=\"poll-header-track\"></div> -->\n        <!--  -->\n        <!-- <img class=\"poll-header-img\" src=\"http://sites.psu.edu/edkawong/wp-content/uploads/sites/15056/2015/03/Tm70k2m.jpg\"> -->\n\n        <div class=\"poll-header-text\">\n        <a href=\"/poll/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n        </a>\n        </div>\n    </div>\n\n    <!--  -->\n    <!-- "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].poll : depths[1])) != null ? stack1.category : stack1), depth0))
    + " -->\n\n    <div class=\"poll-body\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.choices : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<!--  -->\n	<!--  -->\n\n	<div class=\"poll-footer-data\">\n        <a class=\"poll-footer-data-category\" href=\"/category/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.category : stack1), depth0))
    + "\">\n            "
    + alias2((helpers.upperCase || (depth0 && depth0.upperCase) || helpers.helperMissing).call(alias3,((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.category : stack1),{"name":"upperCase","hash":{},"data":data}))
    + "\n        </a>\n        <span class=\"poll-footer-data-votes\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.votes : stack1), depth0))
    + " votes</span>\n    </div>\n\n    <div class=\"poll-footer-actions\">\n\n        <span class=\"poll-footer-actions-track\">\n            <i class=\"material-icons md-24 icon-actions icon-lightgrey\">favorite</i>\n            <span class=\"poll-footer-actions-track-number\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.trackCount : stack1), depth0))
    + "</span>\n        </span>\n\n\n        <span class=\"poll-footer-actions-comments\">\n            <i class=\"material-icons md-24 icon-actions icon-lightgrey\">comment</i>\n            <span class=\"poll-footer-actions-comments-number\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.commentCount : stack1), depth0))
    + "</span>\n        </span>\n\n        <span class=\"poll-footer-actions-more\">\n            <i class=\"material-icons md-36 icon-actions icon-lightgrey\">more_horiz</i>\n        </span>\n\n\n        <!-- <div class=\"dropup icon-more\">\n            <i class=\"material-icons md-36 icon-more icon-lightgrey\" data-toggle=\"dropdown\">poll</i>\n            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n            </ul>\n        </div> -->\n\n<!--     	<i class=\"material-icons md-36 icon-more icon-lightgrey\">poll</i>\n    	<i class=\"material-icons md-36 icon-more icon-lightgrey\">people</i>\n    	<i class=\"material-icons md-36 icon-more icon-lightgrey\">comment</i>\n    	<i class=\"material-icons md-36 icon-more icon-lightgrey\">favorite</i> -->\n\n    <!-- 	<p> -->\n	    	<!-- "
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.poll : depth0)) != null ? stack1.tags : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\n   <!--      </p> -->\n    </div>\n\n</div>";
},"useData":true,"useDepths":true});

this["JST"]["public/src/modules/PollabearModule/templates/design.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n	\n	<!-- Display container -->\n	<div>\n		\n		<!-- Relative Container for img layering -->\n		<div>\n			\n			<!-- Baseline pollabear to layer pollabear items on -->\n			<img>\n\n\n\n		</div>\n\n	</div>\n\n\n	<!-- Sections for accesory types -->\n	<div>\n		<!-- Hats -->\n		<div>\n			\n		</div>\n\n		<!-- Eyeware -->\n		<div>\n			\n		</div>\n\n		<!-- Facial Hair -->\n		<div>\n			\n		</div>\n\n		<!-- MORE! -->\n	</div>\n\n</div>\n\n\n<!-- \n		General Logic\n\n	- only one accesory of a given type can be selected at a time\n\n	- accessory types have a z-order specification to ensure proper layering\n\n	- if an accessory is selected, enable the save button\n\n	- server needs to put together image after user saves updates to customized bear by layering the images on the server-side\n		- server gathers all imgs necessary, orders everything by priority, layers and saves final img to s3, then updates s3 file location in user record\n\n	- accessory {\n		owned: bool,\n		selected: bool,\n		priority: num  // corresponds to expected z-index\n	}\n\n\n\n -->";
},"useData":true});

this["JST"]["public/src/modules/ProfileModule/templates/profile.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Profile Page</h1>";
},"useData":true});