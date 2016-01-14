
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
