/*global $*/

// Foundation JavaScript
$(document).foundation({
  equalizer : {
    equalize_on_stack: true,
    act_on_hidden_el: true
  }
});


// vars
var nav = $('#off-canvas-nav'),
    navIcon = $('.nav-icon'),
    breakingPoints = {
        small: 340,
        medium: 737.6,
        large: 1024,
        xLarge: 1136,
        ipad: 768
    },
    windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    htmlEl = $('html'),
    searchIconMobile = $('.search-icon'),
    searchIconDesktop = $(".searchbar-icon"),
    searchElemMobile = $('nav-bar'),
    searchElemDesktop = $('announcments-container'),
    navbarHeight = $('nav').height(),
    navbar = $('nav'),
    scrollAmount = $(window).scrollTop(),
    windowHeight = $(window).height(),
    scrollPercent = (scrollAmount / windowHeight) * 100,
    roundScroll = Math.round(scrollPercent),
    carouselControlLeft = $('.carousel-control.left[href="#newsletter-slider"]'),
    carouselControlRight = $('.carousel-control.right[href="#newsletter-slider"]'),
    reviewsCarousel = $('#newsletter-slider'),
    totalNewsletterItems = $('.newsletter-item').length,
    bp1 = windowWidth < breakingPoints.ipad && htmlEl.hasClass('touch'),
    bp2 = windowWidth >= breakingPoints.xLarge,
    bp3 = windowWidth > breakingPoints.xLarge,
    bp4 = windowWidth >= breakingPoints.ipad && windowWidth <= breakingPoints.large,
    bp5 = windowWidth > breakingPoints.large,
    eventList= [];

// helpers
function once(fn, context) {
	var result;

	return function() {
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

//ui
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

function questionsAccordion() {
    'use strict';
    $("dl[data-accordion] dd a.question").on("click", function () {
        var target = $(this);
          // $("dl[data-accordion] dd a.question.active").toggleClass('active');
          // $('.accordion.faq').toggleClass('active');
          // $(target).toggleClass('active');

          $('.accordion.faq').toggleClass('active');
          $(target).toggleClass('active');
          $(target).parent().toggleClass('active');
    });
}

function sectionAccordion() {
    'use strict';
    $("dl[data-accordion] dd a.section").on("click", function () {
        var target = $(this);
        $('.accordion.accordion-section').toggleClass('active');
        $(target).toggleClass('active');
        $(target).parent().toggleClass('active');
        $('dd#contact-footer-container').toggleClass('accordion-active');
        $('#intro-slider').toggleClass('accordion-active');
        $('nav#topbar').toggleClass('accordion-active');
        if ($(target).hasClass('active')) {
            $('#intro-slider').carousel('pause');
        } else {
            $('#intro-slider').carousel('cycle');
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

// function contactFooter() {
//     'use strict';
//     $('.accordion-navigation#contact-footer-container').on("click", function () {
//         $('dd#contact-footer-container').toggleClass('hidden');
//     });
// }

function desktopAccordion() {
    'use strict';
    $(document).foundation({
        accordion: {
            content_class: 'content',
            active_class: 'active',
            multi_expand: true,
            toggleable: true
        }
    });
    $('.content.section').addClass('active');
    $('.accordion.accordion-section').toggleClass('active');
    $('.accordion-navigation').toggleClass('active');
}

function scrollNav() {
    'use strict';
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log('meow');
        if (scroll > (windowHeight * 0.85)) {
            $("nav#topbar").addClass("active");
            $('container').addClass("drop-nav--active");
            setTimeout(function () {
                $("nav#topbar").addClass("in");
            }, 400);
        } else if (scroll < (windowHeight * 0.85)) {
            $("nav#topbar").removeClass("active");
            $('container').removeClass("drop-nav--active");
            setTimeout(function () {
                $("nav#topbar").removeClass("in");
            }, 400);
        }
    });
}

function carouselInit() {
    'use strict';
    $('#newsletter-slider').carousel({
        interval: 4000
    });
    $('.carousel#newsletter-slider').carousel('pause');

    $('#intro-slider').carousel({
        interval: 3500
    });

    $('#events-slider').carousel({
        interval: 3500
    });

    $('#intro-slider').swiperight(function() {
        $(this).carousel('prev');
    });
    $('#intro-slider').swiperight(function() {
        $(this).carousel('next');
    });
}


function carouselMobileUI() {
    'use strict';
    if (windowWidth < breakingPoints.ipad) {
        carouselControlLeft.on("click", function () {
            reviewsCarousel.carousel('prev');
        });
        carouselControlRight.on("click", function () {
            reviewsCarousel.carousel('next');
        });
    }
}

function carouselTabletUI() {
    'use strict';
    carouselControlLeft.on("click", function () {
        var currentIndex = $('.newsletter-item.active').index(),
            prevIndex = currentIndex - 2;
        if (prevIndex < 0) {
            prevIndex = totalNewsletterItems - 2;
        }
        reviewsCarousel.carousel(prevIndex);
    });
    carouselControlRight.on("click", function () {
        var currentIndex = $('.newsletter-item.active').index(),
            nextIndex = currentIndex + 2;
        if (nextIndex >= totalNewsletterItems) {
            nextIndex = 0;
        }
        reviewsCarousel.carousel(nextIndex);
    });
    $('.newsletter-item').each(function () {
        var next = $(this).next(), i;
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (i = 0; i < 0; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
}

function carouselDesktopUI() {
    'use strict';
    carouselControlLeft.on("click", function () {
        var currentIndex = $('.newsletter-item.active').index(),
            prevIndex = currentIndex - 4;
        if (prevIndex < 0) {
            prevIndex = totalNewsletterItems - 4;
        }
        reviewsCarousel.carousel(prevIndex);
    });
    carouselControlRight.on("click", function () {
        var currentIndex = $('.newsletter-item.active').index(),
            nextIndex = currentIndex + 4;
        if (nextIndex >= totalNewsletterItems) {
            nextIndex = 0;
        }
        reviewsCarousel.carousel(nextIndex);
    });
    $('.newsletter-item').each(function () {
        var next = $(this).next(), i;
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
}

function tabbedLists() {
    'use strict';
    $('#supplies-select').on('change', function (e) {
        $('#supplies-list li a').eq($(this).val()).tab('show');
    });
    $('#reading-select').on('change', function (e) {
        $('#reading-list li a').eq($(this).val()).tab('show');
    });
    $('#class-select').on('change', function (e) {
        $('#class-list li a').eq($(this).val()).tab('show');
    });
    $('#class-list>li>a').on('click', function (e) {
        $(this).eq($(this).val()).tab('show');
    });
}

function modernTickerInit() {
  setTimeout(function() {
    jQuery(".modern-ticker").modernTicker({
        effect: "scroll",
        scrollType: "continuous",
        scrollStart: "inside",
        scrollInterval: 20,
        transitionTime: 500,
        linksEnabled: true,
        pauseOnHover: true,
        autoplay: true
    });
  }, 4000);
  $('.mt-play').on('click', function () {
      $(this).children().toggleClass('icon-play').toggleClass('icon-pause');
  });
}

function calendarEventsInit() {
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var eventItem = $('.added-event'),
        Class = function(methods) {
        var klass = function() {
            this.initialize.apply(this, arguments);
        };
        for (var property in methods) {
           klass.prototype[property] = methods[property];
        }
        if (!klass.prototype.initialize) klass.prototype.initialize = function(){};
        return klass;
    },
    eventElem = Class({
        initialize: function(selector, eventDate, eventTime, eventTitle, eventOrder, day) {
            this.eventDate = $(selector).attr('data-date'),
            this.eventTime = $(selector).attr('data-time'),
            this.eventTitle = $(selector).attr('data-title'),
            this.eventDescription = $(selector).attr('data-description'),
            this.order = 0,
            this.day = parseInt(this.eventDate.substr(3,3)),
            this.month = parseInt(this.eventDate.substr(0,2)),
            this.dayName = weekday[new Date(this.eventDate).getDay()];
        }
    }),
    currentMonth = $('.days').attr('data-month');
    function compare(a,b) {
      if (a.day < b.day)
        return -1;
      if (a.day > b.day)
        return 1;
      return 0;
    }
    eventItem.each(function() {
        var obj = new eventElem(this);
        eventList.push(obj);
    });
    eventList.sort(compare);
    var arrayLength = eventList.length;
    for (var i = 0; i < arrayLength; i++) {
        var  objDay = eventList[i].eventDate;
        if (eventList[i].month == currentMonth) {
            $('.events-list').append("<event data-order='"+ eventList.indexOf('eventList[i]') +"' data-date='"+ eventList[i].eventDate +"'><container-row><event-date><day>" + eventList[i].dayName + "</day><date>" + eventList[i].day + "</date><time>" + eventList[i].eventTime + "</time></event-date><event-description><event-description-content><h4>" + eventList[i].eventTitle + "</h4><p>" + eventList[i].eventDescription + "</p></event-description-content></event-description></container-row></event>");
        }
    }
}
function calendarInit() {
    $('#myCalendar').jalendar({
        color: '#2575B5',
        color2: '#114779',
        lang: 'EN',
        dateType: 'mm-dd-yyyy'
    });
    $('a.nxt-m').on('click', function() {
        $('event').remove();
        // calendarEventsInit();
    });
    $('a.prv-m').on('click', function() {
        $('event').remove();
        // calendarEventsInit();
    });
}
//
// function selectTab() {
//   $('#mySelect').on('change', function (e) {
//       $('#myTab li a').eq($(this).val()).tab('show');
//   });
// }

function commentsUi(){
    var messageContainerElem = $('#message-board'),
        messageItemElem = $('message-container#Opost'),
        commentsModal = $('#comments-modal'),
        commentItems = $('message-container.comment'),
        newCommentItem = $('message-container.new-comment'),
        inputForm = $('textarea#message');
    function activeState() {
      $(this).toggleClass('active');
      newCommentItem.toggleClass('active');
      $(this).parent().toggleClass('new-comment--active');
      messageItemElem.toggleClass('hidden');
      commentItems.toggleClass('hidden');
    }
    function passiveState() {
      $(this).toggleClass('active');
      newCommentItem.toggleClass('active');
      $(this).parent().toggleClass('new-comment--active');
      messageItemElem.toggleClass('hidden');
      commentItems.toggleClass('hidden');
    }

    inputForm.focus(function() {
      activeState();
      $(this).attr('rows',6);
    }).blur(function() {
      passiveState();
      $(this).attr('rows',2);
    });
}

function loginBlock() {
  var target = $('dd.accordion-navigation#login-block > .content.section');

  $('dd.accordion-navigation#login-block > .content.section').addClass('active');
  $('dd.accordion-navigation#login-block > .accordion.accordion-section').addClass('active');
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
}


function uiCommon() {
    'use strict';
    questionsAccordion();
    searchBar();
    tabbedLists();
    carouselInit();
    modernTickerInit();
    calendarInit();
    commentsUi();
    loginBlock();

    alphabeticalNav();
}
function uiMobile() {
    'use strict';
    if (bp1) {
        offCanvasNav();
        carouselMobileUI();
        sectionAccordion();
    }
}

function uiTablet() {
    'use strict';
    if (windowWidth >= breakingPoints.medium && windowWidth < breakingPoints.xlarge && htmlEl.hasClass('touch')) {
      sectionAccordion();
    }

    if (bp4) {
        carouselTabletUI();
        scrollNav();
        tabletDesktopNav();
        desktopAccordion();
        if (windowWidth > windowHeight) {
          carouselDesktopUI();
        }
    }
}
function desktopAccordionInit() {
    'use strict';
    if (bp2) {
        desktopAccordion();
    }
}
function uiDesktop() {
    'use strict';
    if (bp5) {
        carouselDesktopUI();
        scrollNav();
        tabletDesktopNav();
    }
}



$(document).ready(function() {
    uiCommon();
    uiMobile();
    uiTablet();
    desktopAccordionInit();
    uiDesktop();
    calendarEventsInit();

});
