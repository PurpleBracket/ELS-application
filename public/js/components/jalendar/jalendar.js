////////////////////////////////
// Author: Bora DAN — http://codecanyon.net/user/bqra
// 26 August 2015
// E-mail: bora_dan@hotmail.com
// Twitter: @bqra
// Version: 1.2
////////////////////////////////
(function($) {
    $.fn.jalendar = function(options) {
        var settings = $.extend({
            customDay: new Date(),
            color: "#207cd1",
            color2: "",
            lang: "EN",
            type: "",
            customUrl: "#",
            dateType: "dd-mm-yyyy",
            dayColor: null,
            titleColor: null,
            weekColor: null,
            todayColor: null,
            done: null
        }, options);
        // Languages
        var dayNames = {};
        var monthNames = {};
        var lAddEvent = {};
        var lAllDay = {};
        var lTotalEvents = {};
        var lEvent = {};
        var lClose = {};
        dayNames.EN = new Array("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
        dayNames.TR = new Array("Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Pzr");
        dayNames.ES = new Array("Lun", "Mar", "Mié", "Jue", "Vie", "Såb", "Dom");
        dayNames.DE = new Array("Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son");
        monthNames.EN = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        monthNames.TR = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
        monthNames.ES = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        monthNames.DE = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");
        lAddEvent.EN = "Add New Event";
        lAddEvent.TR = "Yeni Etkinlik Ekle";
        lAddEvent.ES = "Agregar Un Nuevo Evento";
        lAddEvent.DE = "Neuen termin hinzufügen";
        lAllDay.EN = "All Day";
        lAllDay.TR = "Tüm Gün";
        lAllDay.ES = "Todo El Día";
        lAllDay.DE = "Den ganzen tag";
        lTotalEvents.EN = "Total Events in This Month: ";
        lTotalEvents.TR = "Bu Ayki Etkinlik Sayısı: ";
        lTotalEvents.ES = "Total De Eventos En Este Mes: ";
        lTotalEvents.DE = "Insgesamt Veranstaltungen in diesem Monat: ";
        lEvent.EN = "Events";
        lEvent.TR = "Etkinlik";
        lEvent.ES = "Evento(s)";
        lEvent.DE = "Tätigkeit";
        lClose.EN = "Close";
        lClose.TR = "Kapat";
        lClose.ES = "Cerrar";
        lClose.DE = "Schließen";
        var $this = $(this);
        var div = function(e, classN) {
            return $(document.createElement(e)).addClass(classN);
        };
        // HTML Tree
        var color2 = settings.color2 === "" ? settings.color : settings.color2;
        $this.append($('<input type="hidden" class="data1" /><input type="hidden" class="data2" />'), div("div", "jalendar-container").append(div("div", "jalendar-pages").append(div("div", "header").append(div("a", "prv-m").append(div("span", "icon-left")), div("h1"), div("a", "nxt-m").append(div("span", "icon-right")), div("div", "day-names")), div("div", "days"), div("div", "add-event").append(div("div", "events").append(div("h3", "").html("<span></span> " + lEvent[settings.lang]), div("div", "events-list")), div("div", "close-button").text(lClose[settings.lang]))).attr("style", "background-color:" + settings.color + "; background: -webkit-gradient(linear, left top, left bottom, from(" + settings.color + "), to(" + color2 + ")); background: -webkit-linear-gradient(top, " + settings.color + ", " + color2 + "); background : -moz-linear-gradient(top, " + settings.color + ", " + color2 + "); background: -ms-linear-gradient(top, " + settings.color + ", " + color2 + "); background: -o-linear-gradient(top, " + settings.color + ", " + color2 + ");")));
        if (settings.type == "range") {
            $this.find(".jalendar-pages").addClass("range").append(div("input", "first-range-data").attr({
                type: "hidden"
            }), div("input", "last-range-data").attr({
                type: "hidden"
            }));
        }
        // Adding day boxes
        for (var i = 0; i < 42; i++) {
            $this.find(".days").append(div("div", "day"));
        }
        // Adding day names fields
        for (var i = 0; i < 7; i++) {
            $this.find(".day-names").append(div("h2").text(dayNames[settings.lang][i]));
        }
        var d = new Date(settings.customDay);
        var year = d.getFullYear();
        var date = d.getDate();
        var month = d.getMonth();
        var isLeapYear = function(year1) {
            var f = new Date();
            f.setYear(year1);
            f.setMonth(1);
            f.setDate(29);
            return f.getDate() == 29;
        };
        var feb;
        var febCalc = function(feb) {
            if (isLeapYear(year) === true) {
                feb = 29;
            } else {
                feb = 28;
            }
            return feb;
        };
        var monthDays = new Array(31, febCalc(feb), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        var firstRangeIndex = null, lastRangeIndex = null, firstRangeMonthIndex = null, lastRangeMonthIndex = null, firstRangeYearIndex = null, lastRangeYearIndex = null;
        function calcMonth() {
            monthDays[1] = febCalc(feb);
            var weekStart = new Date();
            weekStart.setFullYear(year, month, 0);
            var startDay = weekStart.getDay();
            $this.find(".header h1").html(monthNames[settings.lang][month] + " " + year + '<div class="total-bar"></div>');
            $this.find(".day").html("&nbsp;").removeAttr("data-date").removeClass("this-month have-event");
            for (var i = 0; i < 42 - (startDay + monthDays[month]); i++) {
                $this.find(".day").eq(startDay + monthDays[month] + i).html("<span>" + (i + 1) + "</span>");
            }
            for (var i = 0; i < startDay; i++) {
                var december = monthDays[month - 1] == undefined ? monthDays[11] : monthDays[month - 1];
                $this.find(".day").eq(i).html("<span>" + (december - startDay + (i + 1)) + "</span>");
            }
            for (var i = 1; i <= monthDays[month]; i++) {
                startDay++;
                var dateTypeUse;
                if (settings.dateType == "dd-mm-yyyy") {
                    dateTypeUse = i + "-" + (month + 1) + "-" + year;
                } else if (settings.dateType == "mm-dd-yyyy") {
                    dateTypeUse = month + 1 + "-" + i + "-" + year;
                } else if (settings.dateType == "yyyy-mm-dd") {
                    dateTypeUse = year + "-" + (month + 1) + "-" + i;
                } else if (settings.dateType == "yyyy-dd-mm") {
                    dateTypeUse = year + "-" + i + "-" + (month + 1);
                }
                if (settings.type == "linker") {
                    $this.find(".day").eq(startDay - 1).addClass("this-month").attr("data-date", dateTypeUse).html('<span><a href="' + settings.customUrl + dateTypeUse + '">' + i + "</a></span>");
                } else {
                    $this.find(".day").eq(startDay - 1).addClass("this-month").attr("data-date", dateTypeUse).html("<span>" + i + "</span>");
                }
            }
            if (month == d.getMonth()) {
                $this.find(".day.this-month").removeClass("today").eq(date - 1).addClass("today");
            } else {
                $this.find(".day.this-month").removeClass("today").attr("style", "");
            }
            $this.find(".days").attr("data-month", month + 1).attr("data-year", year);
            // added event
            $this.find(".added-event").each(function(i) {
                $(this).attr("data-id", i);
                $this.find('.this-month[data-date="' + $(this).attr("data-date") + '"]').append(
                    div("div", "event-single").attr("data-id", i).append(
                        div("a", "").attr('href', $(this).attr('data-link')).attr('target', 'blank').text($(this).attr("data-title"))
                    )
                );
                $this.find(".day").has(".event-single").addClass("have-event");
            });
            calcTotalDayAgain();
            if (settings.dayColor !== null ) {
                $this.find(".day span, .day span a").css({
                    color: settings.dayColor
                });
            }
            if (settings.titleColor !== null ) {
                $this.find(".header h1, .header .prv-m, .header .nxt-m, .event-single p, h3, .close-button").css({
                    color: settings.titleColor
                });
            }
            if (settings.weekColor !== null ) {
                $this.find("h2").css({
                    color: settings.weekColor
                });
            }
            if (settings.todayColor !== null ) {
                $this.find(".day.this-month.today span, .day.this-month.today span a").css({
                    color: settings.todayColor
                });
            }
            if (settings.color == "#fff" || settings.color == "#ffffff" || settings.color == "white") {
                $this.find(".header h1, .header .prv-m, .header .nxt-m, .day.today span, h2, .event-single p, h3, .close-button").css({
                    "text-shadow": "none"
                });
            }
        }
        calcMonth();
        var arrows = new Array($this.find(".prv-m"), $this.find(".nxt-m"));
        var $close = $this.find(".jalendar .close-button");
        // Calculate total event again
        function calcTotalDayAgain() {
            var eventCount = $this.find(".this-month .event-single").length;
            if (eventCount == 0) {
                $this.find(".total-bar").hide(0);
            }
            $this.find(".total-bar").text(eventCount);
            $this.find(".events h3 span").text(eventCount);
        }
        function prevAddEvent() {
            $this.find(".day").removeClass("selected").removeAttr("style");
            // $this.find(".add-event").removeClass("selected").height(0);
        }
        function isFirstIndexNull() {
            $this.find(".day").removeClass("first-range range last-range");
            if (firstRangeIndex !== null ) {
                if ($this.find('[data-date="' + rangeFirstRange.val() + '"]').length == 0) {
                    if (firstRangeMonthIndex < $this.find(".days").attr("data-month") && firstRangeYearIndex >= $this.find(".days").attr("data-year") || firstRangeYearIndex < $this.find(".days").attr("data-year")) {
                        firstRangeIndex = 0;
                    } else if (firstRangeMonthIndex > $this.find(".days").attr("data-month") && firstRangeYearIndex <= $this.find(".days").attr("data-month") || firstRangeYearIndex > $this.find(".days").attr("data-year")) {
                        firstRangeIndex = 42;
                    }
                    if (lastRangeIndex !== null ) {
                        if (firstRangeYearIndex == lastRangeYearIndex && firstRangeMonthIndex == lastRangeMonthIndex) {
                            return false;
                        }
                        var nowYear = parseInt($this.find(".days").attr("data-year"), 10), nowMonth = parseInt($this.find(".days").attr("data-month"), 10);
                        if (firstRangeYearIndex < nowYear && lastRangeYearIndex > nowYear || lastRangeMonthIndex > nowMonth && lastRangeYearIndex >= nowYear && firstRangeYearIndex < nowYear || firstRangeMonthIndex < nowMonth && firstRangeYearIndex == nowYear && lastRangeMonthIndex > nowMonth && lastRangeYearIndex == nowYear || firstRangeMonthIndex < nowMonth && lastRangeYearIndex > nowYear && firstRangeYearIndex == nowYear || firstRangeMonthIndex < nowMonth && firstRangeYearIndex == nowYear && lastRangeMonthIndex > nowMonth && lastRangeYearIndex >= nowYear) {
                            $this.find(".day").addClass("range");
                        }
                    }
                } else {
                    firstRangeIndex = $this.find('[data-date="' + rangeFirstRange.val() + '"]').index();
                }
            }
        }
        function selectedDays() {
            $this.find('.day[data-date="' + rangeFirstRange.val() + '"]').addClass("first-range");
            $this.find('.day[data-date="' + rangeLastRange.val() + '"]').addClass("last-range");
            $this.find('.day[data-date="' + rangeFirstRange.val() + '"]').nextUntil('.day[data-date="' + rangeLastRange.val() + '"]').addClass("range");
            if ($this.find('.day[data-date="' + rangeLastRange.val() + '"]').length > 0) {
                if ($this.find(".day.first-range").length > 0) {
                    $this.find(".day.first-range").nextUntil(".day.last-range").addClass("range");
                } else {
                    $this.find(".day.last-range").prevUntil(".day:eq(0)").addClass("range");
                }
            }
        }
        var rangeFirstRange = $this.find("input.first-range-data"), rangeLastRange = $this.find("input.last-range-data");
        // next month click action
        arrows[1].on("click", function() {
            if (month >= 11) {
                month = 0;
                year++;
            } else {
                month++;
            }
            calcMonth();
            prevAddEvent();
            if (settings.type == "range") {
                isFirstIndexNull();
                selectedDays();
            }
        });
        // prev month click action
        arrows[0].on("click", function() {
            dayClick = $this.find(".this-month");
            if (month === 0) {
                month = 11;
                year--;
            } else {
                month--;
            }
            calcMonth();
            prevAddEvent();
            if (settings.type == "range") {
                isFirstIndexNull();
                selectedDays();
            }
        });
        $this.on("click", ".close-button", function(event) {
            event.preventDefault();
            // $this.find(".add-event").removeClass("selected").height(0);
            $this.find(".this-month.selected").removeClass("selected");
        });
        $this.on("click", ".this-month", function() {
            if (settings.type == "selector") {
                $this.find("input.data1").val($(this).data("date"));
                $(this).parent().find(".selected").removeClass("selected");
                $(this).addClass("selected");
                if ($this.parent().is(".jalendar-input")) {
                    $this.parent().find("input").removeClass("selected");
                    $this.parent(".jalendar-input").find("input").val($(this).data("date"));
                }
                if (settings.done !== null ) {
                    settings.done.call(this);
                }
                return false;
            }
            if (settings.type == "range") {
                var firstRange = $(this).parent().find(".first-range"), lastRange = $(this).parent().find(".last-range");
                function firstDateSelecting(that) {
                    that.parent().find(".day").removeClass("first-range").removeClass("range").removeClass("last-range");
                    that.addClass("first-range");
                    rangeFirstRange.val(that.attr("data-date"));
                    firstRangeIndex = $this.find('[data-date="' + $this.find(".first-range").attr("data-date") + '"]').index();
                    firstRangeMonthIndex = $this.find(".days").attr("data-month");
                    firstRangeYearIndex = $this.find(".days").attr("data-year");
                    lastRangeIndex = null;
                    rangeLastRange.val("");
                }
                function lastDateSelecting(that) {
                    that.addClass("last-range");
                    rangeLastRange.val(that.attr("data-date"));
                    lastRangeIndex = $this.find(".last-range").index();
                    lastRangeMonthIndex = $this.find(".days").attr("data-month");
                    lastRangeYearIndex = $this.find(".days").attr("data-year");
                }
                if (firstRangeIndex !== null ) {
                    if (lastRangeIndex !== null ) {
                        firstDateSelecting($(this));
                    } else {
                        if (firstRangeIndex > $(this).index()) {
                            firstDateSelecting($(this));
                            return false;
                        }
                        lastDateSelecting($(this));
                        $this.find("input.data1").val(rangeFirstRange.val());
                        $this.find("input.data2").val(rangeLastRange.val());
                        if ($this.parent().is(".jalendar-input")) {
                            $this.parent().find("input").removeClass("selected");
                            $this.parent(".jalendar-input").find("input").val($this.find("input.data1").val() + ", " + $this.find("input.data2").val());
                        }
                        if (settings.done !== null ) {
                            settings.done.call(this);
                        }
                    }
                } else {
                    firstDateSelecting($(this));
                }
                $this.on({
                    mouseenter: function() {
                        if (firstRangeIndex === null) {
                            return false;
                        }
                        if (rangeLastRange.val() === "") {
                            $this.find(".day").removeClass("range last-range");
                            if ($(this).index() > firstRangeIndex) {
                                if ($(this).hasClass("this-month")) {
                                    $(this).addClass("last-range");
                                    $(this).parent().find(".day:eq(" + firstRangeIndex + ")").nextUntil(".this-month.last-range").addClass("range");
                                }
                            }
                        }
                    },
                    mouseleave: function() {
                        if (rangeLastRange.val() === "") {
                            $(this).parent().find(".day").removeClass("last-range").removeClass("range");
                        }
                    }
                }, ".range .day.this-month");
                return false;
            }
            var eventSingle = $(this).find(".event-single");
            $this.find(".events .event-single").remove();
            prevAddEvent();
            if (settings.type === "") {
                // $this.find("input.data1").val($(this).data("date"));
                $(this).addClass("selected");
                // $this.find(".add-event").find(".events-list").html(eventSingle.clone());
                // if ($this.parent().is(".jalendar-input")) {
                //     $this.parent(".jalendar-input").find("input").val($(this).data("date"));
                // }
                // if ($this.find(".events .event-single").length >= 0) {
                //     $this.find(".events h3 span").html($this.find(".events .event-single").size());
                // }
                // $this.find(".add-event").addClass("selected").height($this.find(".add-event .events").height() + 59);
                // var elemId = $(this).attr('data-date'),
                //     eventHeight = $('event').height(),
                //     elemIndex = parseInt($('event[data-date =' + elemId + ']').attr('data-order')),
                //     topOffset = eventHeight * elemIndex;
                // console.log(elemId);
                // console.log(eventHeight);
                // console.log(elemIndex);
                //
                // console.log(topOffset);
            }
        });
        if ($this.parent().is(".jalendar-input")) {
            $this.parent(".jalendar-input").find('input[type="text"], .jalendar').on("click", function(event) {
                event.stopPropagation();
                $(this).addClass("selected");
            });
        }
        $("html").on("click", function() {
            $(".jalendar-input input").removeClass("selected");
        });
    };
})(jQuery);
