
(function ($) {
  $(document).ready(function(){
  var screansize_1;
      $('.top_bar_2015 .logo').click(function(e) {
        var screansize_1 = $( window ).width()
        if (screansize_1 < 1095) {
          e.preventDefault();
          $('.top_bar_2015 .menu_ul').slideToggle('slow', function() {
          // Animation complete.
          });
        }
      });

      $('.top_bar_2015 li.cont').click(function() {
        var screansize_1 = $( window ).width()
        if (screansize_1 < 1095) {
          $('.top_bar_2015 ul ul').slideToggle('slow', function() {
          // Animation complete.
          });
        }
      });



  });
})(jQuery);

