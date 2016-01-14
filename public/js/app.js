// // Foundation JavaScript
// // Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
//
// $(document).ready(function () {
//     var nav = $('#off-canvas-nav'),
//         navIcon = $('.nav-icon'),
//         breakingPoints ={
//           small: 340,
//           medium: 737.6,
//           large: 1024,
//           xLarge: 1366,
//           ipad: 768
//         },
//         windowWidth = $(window).width(),
//         windowHeight = $(window).height(),
//         htmlEl = $('html'),
//         searchIconMobile = $('.search-icon'),
//         searchIconDesktop = $(".searchbar-icon"),
//         searchElemMobile = $('nav-bar'),
//         searchElemDesktop = $('announcments-container'),
//         navbarHeight = $('nav').height(),
//         navbar = $('nav'),
//         scrollAmount = $(window).scrollTop(),
//         windowHeight = $(window).height(),
//         scrollPercent = (scrollAmount / windowHeight) * 100,
//         roundScroll = Math.round(scrollPercent),
//         carouselControlLeft = $('.carousel-control.left[href="#newsletter-slider"]'),
//         carouselControlRight = $('.carousel-control.right[href="#newsletter-slider"]'),
//         reviewsCarousel = $('#newsletter-slider'),
//         totalNewsletterItems = $('.newsletter-item').length;
//
//
//
//     if (windowWidth <= breakingPoints.large && htmlEl.hasClass('touch')) {
//         (function offCanvasNav() {
//             navIcon.on('click', function() {
//                 if (nav.hasClass('hidden')) {
//                     navIcon.toggleClass('open');
//                     nav.toggleClass('fade-in');
//                     nav.toggleClass('collapsed');
//
//                     setTimeout(function (){
//                         nav.toggleClass('hidden');
//                         nav.removeClass('fade-in');
//                     },500);
//                 } else {
//                     nav.toggleClass('fade-out');
//                     nav.toggleClass('hidden');
//                     nav.toggleClass('collapsed');
//                     nav.removeClass('fade-out');
//                     navIcon.toggleClass("open");
//                 }
//             });
//
//             $('a.nav-link').on('click', function() {
//                 nav.toggleClass('fade-out');
//                 nav.toggleClass('hidden');
//                 nav.toggleClass('collapsed');
//                 nav.removeClass('fade-out');
//                 navIcon.toggleClass("open");
//             });
//         })();
//
//         (function questionsAccordion() {
//             $("dl[data-accordion] dd a.question").on("click",function(){
//                   var target = $(this);
//                   if ($(target).hasClass('active')){
//                       $("dl[data-accordion] dd a.question.active").removeClass('active');
//                       $('.accordion.faq').toggleClass('active');
//
//                   } else {
//                       $("dl[data-accordion] dd a.question.active").removeClass('active');
//                       $('.accordion.faq').toggleClass('active');
//                       $(target).toggleClass('active');
//                 }
//             });
//         })();
//
//         (function sectionAccordion() {
//             $("dl[data-accordion] dd a.section").on("click",function(){
//                   var target = $(this);
//                   $('.accordion.accordion-section').toggleClass('active');
//                   $(target).toggleClass('active');
//                   $(target).parent().toggleClass('active');
//                   $('dd#contact-footer-container').toggleClass('accordion-active');
//                   $('hero-block').toggleClass('accordion-active');
//                   $('nav').ScrollTo();
//             });
//         })();
//
//
//
//         (function searchBar() {
//             searchIconDesktop.on('click', function() {
//                 searchElemDesktop.toggleClass("search-active");
//             });
//             searchIconMobile.on('click', function() {
//                 searchElemMobile.toggleClass("search-active");
//             });
//         })();
//
//         (function contactFooter() {
//             $('.accordion-navigation#contact-footer-container').on("click", function(){
//                   $('dd#contact-footer-container').toggleClass('hidden');
//             });
//         })();
//
//
//     }
//
//     if (windowWidth > breakingPoints.xLarge && $('.accordion').hasClass('accordion-section')) {
//         $(document).foundation({
//             accordion: {
//                 // specify the class used for accordion panels
//                 content_class: 'content',
//                 // specify the class used for active (or open) accordion panels
//                 active_class: 'active',
//                 // allow multiple accordion panels to be active at the same time
//                 multi_expand: true,
//                 // allow accordion panels to be closed by clicking on their headers
//                 // setting to false only closes accordion panels when another is opened
//                 toggleable: false
//             }
//         });
//         $('.content.section').addClass('active');
//         $('.accordion.accordion-section').toggleClass('active');
//     }
//
//     if (windowWidth > breakingPoints.xLarge){
//         (function questionsAccordion() {
//             $("dl[data-accordion] dd a.question").on("click",function(){
//                   var target = $(this);
//                   if ($(target).hasClass('active')){
//                       $("dl[data-accordion] dd a.question.active").removeClass('active');
//                       $('.accordion.faq').toggleClass('active');
//
//                   } else {
//                       $("dl[data-accordion] dd a.question.active").removeClass('active');
//                       $('.accordion.faq').toggleClass('active');
//                       $(target).toggleClass('active');
//                 }
//             });
//         })();
//
//         (function searchBar() {
//             searchIconDesktop.on('click', function() {
//                 searchElemDesktop.toggleClass("search-active");
//             });
//             searchIconMobile.on('click', function() {
//                 searchElemMobile.toggleClass("search-active");
//             });
//         })();
//     }
//
//     (function scrollNav() {
//       $(window).scroll(function() {
//           var scroll = $(window).scrollTop();
//
//           if (scroll >= 500) {
//             $("nav#topbar").addClass("active");
//             setTimeout(function (){
//                 $("nav#topbar").addClass("in");
//             }, 400);
//           }
//           if (scroll < 500) {
//             $("nav#topbar").removeClass("active");
//             setTimeout(function (){
//                 $("nav#topbar").removeClass("in");
//             }, 400);
//           }
//       });
//     })();
//
//     // newsletter carousel
//
//     $('.carousel').carousel({
//         interval: 100
//     });
//     $('.carousel').carousel('pause');
//
//     (function carouselMobileUI() {
//         if (windowWidth < breakingPoints.ipad) {
//
//             carouselControlLeft.on("click",function(){
//                 reviewsCarousel.carousel('prev');
//             });
//
//             carouselControlRight.on("click",function(){
//                 reviewsCarousel.carousel('next');
//             });
//
//         }
//     })();
//     //
//     // (function carouselTabletUI() {
//     //     if (windowWidth >= breakingPoints.ipad && windowWidth <= breakingPoints.large) {
//     //
//     //         carouselControlLeft.on("click",function(){
//     //             var currentIndex = $('.newsletter-item.current.active').index(),
//     //                 prevIndex = currentIndex - 2;
//     //
//     //                 if (prevIndex < 0) {
//     //                     prevIndex = totalNewsletterItems - 2;
//     //                 }
//     //                 // $('nav').ScrollTo();
//     //
//     //
//     //             reviewsCarousel.carousel(prevIndex);
//     //         });
//     //
//     //         carouselControlRight.on("click",function(){
//     //             var currentIndex = $('.newsletter-item.current.active').index(),
//     //                 nextIndex = currentIndex + 2;
//     //
//     //                 if (nextIndex >= totalNewsletterItems) {
//     //                     nextIndex = 0;
//     //                 }
//     //                 // $('nav').ScrollTo();
//     //
//     //
//     //             reviewsCarousel.carousel(nextIndex);
//     //         });
//     //
//     //         $('.newsletter-item.current').each(function(){
//     //           var next = $(this).next();
//     //           if (!next.length) {
//     //             next = $(this).siblings(':first');
//     //           }
//     //           next.children(':first-child').clone().appendTo($(this));
//     //
//     //           for (var i=0;i<0;i++) {
//     //             next=next.next();
//     //             if (!next.length) {
//     //             	next = $(this).siblings(':first');
//     //           	}
//     //
//     //             next.children(':first-child').clone().appendTo($(this));
//     //           }
//     //         });
//     //
//     //     }
//     // })();
//     //
//     // (function carouselDesktopUI() {
//     //     if (windowWidth > breakingPoints.large) {
//     //
//     //         carouselControlLeft.on("click",function(){
//     //             var currentIndex = $('.newsletter-item.current.active').index(),
//     //                 prevIndex = currentIndex - 4;
//     //
//     //                 if (prevIndex < 0) {
//     //                     prevIndex = totalNewsletterItems - 4;
//     //                 }
//     //                 // $('nav').ScrollTo();
//     //
//     //
//     //             reviewsCarousel.carousel(prevIndex);
//     //         });
//     //
//     //         carouselControlRight.on("click",function(){
//     //             var currentIndex = $('.newsletter-item.current.active').index(),
//     //                 nextIndex = currentIndex + 4;
//     //
//     //                 if (nextIndex >= totalNewsletterItems) {
//     //                     nextIndex = 0;
//     //                 }
//     //                 // $('nav').ScrollTo();
//     //
//     //
//     //             reviewsCarousel.carousel(nextIndex);
//     //         });
//     //
//     //         $('.newsletter-item.current').each(function(){
//     //           var next = $(this).next();
//     //           if (!next.length) {
//     //             next = $(this).siblings(':first');
//     //           }
//     //           next.children(':first-child').clone().appendTo($(this));
//     //
//     //           for (var i=0;i<2;i++) {
//     //             next=next.next();
//     //             if (!next.length) {
//     //               next = $(this).siblings(':first');
//     //             }
//     //
//     //             next.children(':first-child').clone().appendTo($(this));
//     //           }
//     //         });
//     //
//     //     }
//     // })();
//
//     (function carouselTabletUI() {
//         if (windowWidth >= breakingPoints.ipad && windowWidth <= breakingPoints.large) {
//
//             carouselControlLeft.on("click",function(){
//                 var currentIndex = $('.newsletter-item.active').index(),
//                     prevIndex = currentIndex - 2;
//
//                     if (prevIndex < 0) {
//                         prevIndex = totalNewsletterItems - 2;
//                     }
//                     // $('nav').ScrollTo();
//
//
//                 reviewsCarousel.carousel(prevIndex);
//             });
//
//             carouselControlRight.on("click",function(){
//                 var currentIndex = $('.newsletter-item.active').index(),
//                     nextIndex = currentIndex + 2;
//
//                     if (nextIndex >= totalNewsletterItems) {
//                         nextIndex = 0;
//                     }
//                     // $('nav').ScrollTo();
//
//
//                 reviewsCarousel.carousel(nextIndex);
//             });
//
//             $('.newsletter-item').each(function(){
//               var next = $(this).next();
//               if (!next.length) {
//                 next = $(this).siblings(':first');
//               }
//               next.children(':first-child').clone().appendTo($(this));
//
//               for (var i=0;i<0;i++) {
//                 next=next.next();
//                 if (!next.length) {
//                 	next = $(this).siblings(':first');
//               	}
//
//                 next.children(':first-child').clone().appendTo($(this));
//               }
//             });
//
//         }
//     })();
//
//     (function alumniCarouselDesktopUI() {
//         if (windowWidth > breakingPoints.large) {
//
//             carouselControlLeft.on("click",function(){
//                 var currentIndex = $('.newsletter-item.active').index(),
//                     prevIndex = currentIndex - 4;
//
//                     if (prevIndex < 0) {
//                         prevIndex = totalNewsletterItems - 4;
//                     }
//                     // $('nav').ScrollTo();
//
//
//                 reviewsCarousel.carousel(prevIndex);
//             });
//
//             carouselControlRight.on("click",function(){
//                 var currentIndex = $('.newsletter-item.active').index(),
//                     nextIndex = currentIndex + 4;
//
//                     if (nextIndex >= totalNewsletterItems) {
//                         nextIndex = 0;
//                     }
//                     // $('nav').ScrollTo();
//
//
//                 reviewsCarousel.carousel(nextIndex);
//             });
//
//             $('.newsletter-item').each(function(){
//               var next = $(this).next();
//               if (!next.length) {
//                 next = $(this).siblings(':first');
//               }
//               next.children(':first-child').clone().appendTo($(this));
//
//               for (var i=0;i<2;i++) {
//                 next=next.next();
//                 if (!next.length) {
//                   next = $(this).siblings(':first');
//                 }
//
//                 next.children(':first-child').clone().appendTo($(this));
//               }
//             });
//
//         }
//     })();
//
//
//     (function tabbedLists() {
//         $('#supplies-select').on('change', function (e) {
//             $('#supplies-list li a').eq($(this).val()).tab('show');
//         });
//
//         $('#reading-select').on('change', function (e) {
//             $('#reading-list li a').eq($(this).val()).tab('show');
//         });
//     })();
//
//
//
//
// });
