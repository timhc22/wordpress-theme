/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages




      // Menu
      $(document).click(function(event) {
          //jquery enhancement for menu, close if click off the menu
          if(!$(event.target).closest('.js-navigation').length) {
              if($(".js-nav-checkbox").prop('checked')) {
                  $(".js-nav-checkbox").prop('checked', false);
                  $(".js-nav-checkbox").change(); //fire the change event //todo ideally this wouldn't need to be here
              }
          }
      });


      //body overlay for when menu is open
      $('.js-nav-checkbox').on('change', function(){
          if(this.checked)
          {
              //add overlay class
              $('body').append(
                  '<div class="js-page-overlay" ' +
                  'style="position:fixed;width:100%;height:100%;top:0;left:0;color:black;opacity:0.9;background-color:black;">' +
                  '</div>'
              );
          } else {
              $('.js-page-overlay').remove();
          }
      });

      //change navbar colour when scrolling, unless the body has a class saying not to change
      if (!$('body').hasClass('js-navbar-nochange')) {
          $(window).scroll(function () {
              var scroll = $(window).scrollTop();

              if (scroll >= 100) {
                  $(".js-navigation").addClass("navigation--nav-color-two");
              } else {
                  $(".js-navigation").removeClass("navigation--nav-color-two");
              }
          });
      } else {
          $(".js-navigation").addClass("navigation--nav-color-two");
      }
      // End Menu




      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
