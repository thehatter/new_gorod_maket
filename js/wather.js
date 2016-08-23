(function ($) {
  $(document).ready(function(){

    // create array to hold day 
    var weekday = new Array();
      weekday[0]=  "Воскресенье";
      weekday[1] = "Понедельник";
      weekday[2] = "Вторник";
      weekday[3] = "Среда";
      weekday[4] = "Четверг";
      weekday[5] = "Пятница";
      weekday[6] = "Cуббота";

    var WGen = {
      // format temperature
      FormatT: function (t) {
        var intT = parseInt(t);
        if (intT > 0){
          return '+' + t;
        }
        else { return t}
      },
      // create html img icon from code
      genIcon: function(i) {
        return '<img src="https://www.gismeteo.ru/static/images/icons/new/'+ i +'.png">';
      },

      toDate: function(dateStr) {
        var parts = dateStr.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2]);
      },



      // createSmallWidget get place (target string with selector) and parsed xml
      // then crete mini widget with icon and temperature
      createSmallWidget: function (place, xml) {
        //var currentTime = new Date();

        //if day 0 forecast exist - get 0 index forecast values
        if ($(xml).find('day:eq(0) forecast:eq(0) values').attr('icon')){
          var currentIcon = $(xml).find('day:eq(0) forecast:eq(0) values').attr('icon');
          var currentTemperature = $(xml).find('day:eq(0) forecast:eq(0) values').attr('t');

        }
        else { // else get next day values
          var currentIcon = $(xml).find('day:eq(1) forecast:eq(0) values').attr('icon');
          var currentTemperature = $(xml).find('day:eq(1) forecast:eq(0) values').attr('t');

        }

        var formatedTemperature = WGen.FormatT(currentTemperature);

        var widgetBody = ' \
          <div class="img">'+ WGen.genIcon(currentIcon) +'</div> \
          <div class="temperature ">'+ formatedTemperature +'</div> \
        '
        
        $(place).append(widgetBody);
      },



      createBigWidget: function (place, xml) {
        
        var weekDays = $(xml).find('day');
        var weekdaysHolder = ''
        var daytimeNumber = new Array();
        daytimeNumber[0] = "Ночь";
        daytimeNumber[1] = "Утро";
        daytimeNumber[2] = "День";
        daytimeNumber[3] = "Вечер";


        


        $(weekDays).each(function(index) {
          var forecasts = $(this).find('forecast');

          var dayDate = WGen.toDate($(this).attr('date'));
          var dayDateName = weekday[dayDate.getDay()];
          var dayDateNumber = dayDate.getDate();

          var dayHolder = ''


          $(forecasts).each(function(index) {
            var forecastTod = $(this).attr('tod')
            var forecastTimeName = daytimeNumber[forecastTod]
            var forecastIcon = $(this).find('values').attr('icon');
            var forecastTemperature = $(this).find('values').attr('t');
            var forecastDescr = $(this).find('values').attr('descr');


            var forecastBody = ' \
              <div class="weekday_h  clearfix tod_'+ forecastTod +'"> \
                <div class="title"> '+ forecastTimeName +': </div> \
                <div class="icon">'+ WGen.genIcon(forecastIcon) +'</div> \
                <div class="temperature">'+ WGen.FormatT(forecastTemperature) +'</div> \
                <div class="descr"><div class="cell">'+ forecastDescr +'</div></div> \
              </div> \
              ';
            dayHolder = dayHolder + forecastBody;

          });

          
          var dayBody = ' \
            <div class="weekday clearfix"> \
              <div class="date_cont"> \
                <div class="date"> '+ dayDateNumber +' </div> \
                <div class="dayname"> '+ dayDateName +' </div> \
              </div> \
              '+ dayHolder +' \
            </div> \
          ';
          weekdaysHolder = weekdaysHolder + dayBody;


        });



        var ForecastBody = ' \
          <div class="forecast"> \
            '+ weekdaysHolder +'\
          </div> \
        ';

        $(place).append(ForecastBody);


        
      }

    }


    $.get( "wather.xml", function( data ) {
      WGen.createSmallWidget('.wather_widget a', data);
      WGen.createBigWidget('.big_wather_widget_container', data);

      $( ".weekday" ).click(function() {
        $( this ).toggleClass( "open" );
      });
    });

    


  });
})(jQuery);

