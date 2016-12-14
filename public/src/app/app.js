var PB = PB || {};

$(function () {
    'use strict';

    PB.router = new PB.PollabearRouter();
  
    PB.removeDropdowns = function () {
        $('.dropdown-content[data-active="true"]').attr('data-active', "false").velocity({
            /* Two-item array format. */
            translateY: [-30, 0],
            /* Three-item array format with a per-property easing. */
            opacity: [ 0, 1 ]
        }, 
        {
            complete: function (elements) {
              $(this).removeClass('dropdown-content-display');
            },
            duration: 200
        });
    }

    $(document).click(PB.removeDropdowns);

    // clicking on overlay OR on X button in overlay should bring focus back to main container
    // $(document).on("click", "#overlay, #exitoverlay", 
    $('#overlay').click( function(e) {
        // e.preventDefault();

        // console.log(e.target == e.currentTarget);
        // console.log(e.target);
        // console.log(e.currentTarget);

        if (e.target == e.currentTarget || 
            e.target == $('#overlay-content').get(0) || 
            e.target == $('#overlay-exit').get(0) ) {
          PB.router.navigate(PB.elements.main.state, true);
        }

    });

    // // ensure <a> tags work with router
    $(document).on("click", "a[href^='/']", function(e) {
      e.preventDefault(); // This is important
      e.stopPropagation();
      var href = $(e.currentTarget).attr('href');
      // console.log(href);

      PB.router.navigate(href, true);
    });

    // start router
    Backbone.history.start({pushState: true, root: '/'});

});
