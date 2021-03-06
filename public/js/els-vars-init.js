/*global $*/

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
