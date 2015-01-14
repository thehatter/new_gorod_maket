
(function ($) {
  $(document).ready(function(){
    // $("body").click( function () {
    //     $('body').hide();
    // });

      $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });


      // ============================ catalog_expand ============================


      $( ".catalog_menu_bar .catalog_menu_bar_title" ).click(function() {

        var catalog_menu_parent = $(this).parent();
        var catalog_menu_items = catalog_menu_parent.find('.catalog_menu_bar_items')
        if (catalog_menu_parent.hasClass( "expand" )) {
          catalog_menu_parent.removeClass( "expand" );
        }
        else {
          catalog_menu_parent.addClass( "expand" );
        }
        catalog_menu_items.slideToggle( "slow", function() {
        // Animation complete.
        });
      });





      // var bar_title = $( ".catalog_menu_bar.main_catalog" );
      // bar_title.click(function() {
      //   if (bar_title.hasClass( "expand" )) {
      //     bar_title.removeClass( "expand" );
      //   }
      //   else {
      //     bar_title.addClass( "expand" );
      //   }
      //   $( ".main_catalog .catalog_menu_bar_items" ).slideToggle( "slow", function() {
      //   // Animation complete.
      //   });
      // });

      // var bar_title_2 = $( ".catalog_menu_bar.editional" );
      // bar_title_2.click(function() {
      //   if (bar_title_2.hasClass( "expand" )) {
      //     bar_title_2.removeClass( "expand" );
      //   }
      //   else {
      //     bar_title_2.addClass( "expand" );
      //   }
      //   $( ".editional .catalog_menu_bar_items" ).slideToggle( "slow", function() {
      //   // Animation complete.
      //   });
      // });


      $( ".catalog_menu_bar.min" ).mouseleave(function() {
        if ($(this).hasClass( "expand" )) {
          $(this).removeClass( "expand" );
          $(this).find('.catalog_menu_bar_items').slideToggle( "fast", function() {
          // Animation complete.
          });
        }
      });

      // ========================================================================



    $(".firm_right_bar").affix({
        offset: { 
            top: 200
        }
    });




  });
})(jQuery);
