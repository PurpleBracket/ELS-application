function offCanvasNav() {
    'use strict';
    navIcon.on('click', function () {
        if (nav.hasClass('hidden')) {
            navIcon.toggleClass('open');
            nav.toggleClass('fade-in');
            nav.toggleClass('collapsed');
            setTimeout(function () {
                nav.toggleClass('hidden');
                nav.removeClass('fade-in');
            }, 500);
        } else {
            nav.toggleClass('fade-out');
            nav.toggleClass('hidden');
            nav.toggleClass('collapsed');
            nav.removeClass('fade-out');
            navIcon.toggleClass("open");
        }
    });
    $('a.nav-link').on('click', function () {
        nav.toggleClass('fade-out');
        nav.toggleClass('hidden');
        nav.toggleClass('collapsed');
        nav.removeClass('fade-out');
        navIcon.toggleClass("open");
    });
}

function tabletDesktopNav() {
    if (windowWidth > breakingPoints.medium) {
        $('#off-canvas-nav').removeClass('hidden').removeClass('collapsed');
    }
}

function scrollNav() {
    'use strict';
    $(document).on("scrollstop", function() {
        var scroll = $(document).scrollTop();
        if (scroll >= (windowHeight * 0.75)) {
          $("nav#topbar").addClass("active");
          setTimeout(function () {
              $("nav#topbar").addClass("in");
          }, 400);
        } else {
          $("nav#topbar").removeClass("active");
          setTimeout(function () {
              $("nav#topbar").removeClass("in");
          }, 400);
        }
    });
}

function searchBar() {
    'use strict';
    searchIconDesktop.on('click', function () {
        searchElemDesktop.toggleClass("search-active");
        $('.search-input').val('');
    });
    searchIconMobile.on('click', function () {
        searchElemMobile.toggleClass("search-active");
        $('.search-input').val('');
    });
}

function modernTickerInit() {
  setTimeout(function() {
    jQuery(".modern-ticker").modernTicker({
        effect: "scroll",
        scrollType: "continuous",
        scrollStart: "inside",
        scrollInterval: 20,
        transitionTime: 750,
        linksEnabled: true,
        pauseOnHover: true,
        autoplay: true
    });
  }, 4000);
  $('.mt-play').on('click', function () {
      $(this).children().toggleClass('icon-play').toggleClass('icon-pause');
  });
}

function alphabeticalNav(){
  function genCharArray(charA, charZ) {
      var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
      for (; i <= j; ++i) {
          a.push(String.fromCharCode(i));
      }
      return a;
  }
  var lettersArray = genCharArray('a', 'z'),
      alphabeticalNavList = $('#alphabetical-nav--list'),
      lettersCount = lettersArray.length,
      navItems = $('.alphabetical-nav--item');
      function generateListItems() {
          var i = 0;
          for (; i < lettersCount; ++i) {
            var currentLetter = lettersArray[i],
                navItemsMarkup = '<li class="alphabetical-nav--item"><a href="#'+ currentLetter +'">'+ currentLetter +'</a></li>';
            alphabeticalNavList.append(navItemsMarkup);
          }
      }

      generateListItems();
      // var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});
      // // build scenes
      // new ScrollMagic.Scene({triggerElement: "#sec1"})
      //         .setClassToggle("#high1", "active") // add class toggle
      //         .addIndicators() // add indicators (requires plugin)
      //         .addTo(controller);
      // new ScrollMagic.Scene({triggerElement: "#sec2"})
      //         .setClassToggle("#high2", "active") // add class toggle
      //         .addIndicators() // add indicators (requires plugin)
      //         .addTo(controller);
      // new ScrollMagic.Scene({triggerElement: "#sec3"})
      //         .setClassToggle("#high3", "active") // add class toggle
      //         .addIndicators() // add indicators (requires plugin)
      //         .addTo(controller);
      // new ScrollMagic.Scene({triggerElement: "#sec4"})
      //         .setClassToggle("#high4", "active") // add class toggle
      //         .addIndicators() // add indicators (requires plugin)
      //         .addTo(controller);
}
