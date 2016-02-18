var PB = PB || {};

$(function () {
    'use strict';

    PB.router = new PB.PollabearRouter();

    // clicking on overlay OR on X button in overlay should bring focus back to main container
    // $(document).on("click", "#overlay, #exitoverlay", 
    $('#overlay').click( function(e) {
        // e.preventDefault();

        // console.log(e.target == e.currentTarget);
        // console.log(e.target);
        // console.log(e.currentTarget);

        // if (e.target == e.currentTarget) {
        //   PB.router.navigate(PB.elements.main.state, true);
        // }

      // if (e.target == this) {
        // window.history.back();
        if (e.target == e.currentTarget) {
          PB.router.navigate(PB.elements.main.state, true);
        }
      // }
      // PB.router.navigate('', true);
    });

    // $('#overlay-content').click( function(e) {
    //   e.preventDefault();
      
    //   if (e.target == e.currentTarget) {
    //       PB.router.navigate(PB.elements.main.state, true);
    //   } else {
    //       e.stopPropagation();
    //   }

    //   // PB.router.navigate('', true);
    // });

    // // ensure <a> tags work with router
    $(document).on("click", "a[href^='/']", function(e) {
      e.preventDefault(); // This is important
      e.stopPropagation();
      var href = $(e.currentTarget).attr('href');
      console.log(href);


      PB.router.navigate(href, true);
    });

    // start router
    Backbone.history.start({pushState: true, root: '/'});

});
