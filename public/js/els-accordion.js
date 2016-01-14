function questionsAccordion() {
    'use strict';
    $("dl[data-accordion] dd a.question").on("click", function () {
        var target = $(this);
          // $("dl[data-accordion] dd a.question.active").toggleClass('active');
          // $('.accordion.faq').toggleClass('active');
          // $(target).toggleClass('active');

          // $('.accordion.faq').toggleClass('active');
          // $(target).toggleClass('active');
          // $(target).parent().toggleClass('active');
          // $(target).siblings('div[id^="panel"]').toggleClass('active');
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

function desktopAccordion() {
    'use strict';
    $(document).foundation({
        accordion: {
            content_class: 'content',
            active_class: 'active',
            multi_expand: true,
            toggleable: false
        }
    });
    $(document).foundation({
        accordion: {
            content_class: 'question-content',
            active_class: 'active',
            multi_expand: true,
            toggleable: true
        }
    });
    $('.content.section').addClass('active');
    $('.accordion.accordion-section').toggleClass('active');
    $('.accordion-navigation').toggleClass('active');
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
