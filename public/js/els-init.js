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

equalizerOverride();
$(document).foundation({
  equalizer : {
    equalize_on_stack: true,
    act_on_hidden_el: true
  }
});
$(document).ready(function() {
    uiCommon();
    uiMobile();
    uiTablet();
    desktopAccordionInit();
    uiDesktop();
    calendarEventsInit();
    calendarClick();
    scrollManagment();
});
