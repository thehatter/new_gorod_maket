(function ($) {
  $(document).ready(function(){

    //
    //$( ".big_rates_widget_container" ).load( "/bank_converted.html #cours_obl_tbl" );

    // iconv -f WINDOWS-1251 -t UTF-8 bank.html > bank_converted.html 
    // ^ on server to change encoding ^
    jQuery.ajax({
            url: "/bank_converted.html",
            dataType: "html",
            type: "GET",
            success: function(data) {
              var table = $(data).find('#cours_obl_tbl');
               $('.big_rates_widget_container').append(table);
            },
        });

  });
})(jQuery);
