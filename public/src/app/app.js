var PB = PB || {};

$(function () {
    'use strict';

    PB.router = new PB.PollabearRouter();
    // PB.retrievedPolls = null;


  // $(document).on('show.bs.dropdown', '.dropup', function(e){
  //   $(this).find('.dropdown-menu').first().stop(true, true).show(200);
  // });

  // // ADD SLIDEUP ANIMATION TO DROPDOWN //
  // $(document).on('hide.bs.dropdown', '.dropup', function(e){
  //   $(this).find('.dropdown-menu').first().stop(true, true).hide(200);
  // });

  // $('[data-toggle="tooltip"]').tooltip();

    // clicking on overlay OR on X button in overlay should bring focus back to main container
    // $(document).on("click", "#overlay, #exitoverlay", 
    $('#overlay').click( function(e) {
        // e.preventDefault();

        // console.log(e.target == e.currentTarget);
        // console.log(e.target);
        // console.log(e.currentTarget);

        // window.history.back();
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
