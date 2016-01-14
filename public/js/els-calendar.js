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
            $('.events-list').append("<event id="+ eventList[i].eventDate +" data-order='"+ eventList.indexOf('eventList[i]') +"' data-date='"+ eventList[i].eventDate +"'><container-row><event-date><day>" + eventList[i].dayName + "</day><date>" + eventList[i].day + "</date><time>" + eventList[i].eventTime + "</time></event-date><event-description><event-description-content><h4>" + eventList[i].eventTitle + "</h4><p>" + eventList[i].eventDescription + "</p></event-description-content></event-description></container-row></event>");
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


function calendarClick(){
    var daySelector = $('.day.this-month.have-event'),
        eventsList = [],
        eventDayCount = $('.day.this-month.have-event > .event-single').length;


    daySelector.each(function(){
        var thisDate = $(this).attr('data-date');
        eventsList.push(this);
        $(this).wrap('<a href="#'+ thisDate +'"></a>');
    });

  }

function equalizerOverride() {
  if (windowWidth < breakingPoints.xLarge) {
      $('#events-calender').removeAttr('data-equalizer-watch');
      $('#location').removeAttr('data-equalizer-watch');
  }
}

function scrollManagment() {

}
