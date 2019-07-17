
(function ($) {
  $(document).ready(function(){
    // $("body").click( function () {
    //     $('body').hide();
    // });


      // ============================ on search focus ============================
            
      $('.search_bar input').on('focus blur', toggleFocus);

      function toggleFocus(e){
          console.log(e.type)

          if( e.type == 'focus' ){ 
            $('body').addClass('serch_focus');
          }
          else{
            $('body').removeClass('serch_focus');
          }
      }
    
      // ============================ owl init ============================

      $('#oma-carusel').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          dots:true,
          autoplay: true,
          
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })
      $('#video-carusel').owlCarousel({
          loop:true,
          margin:0,
          nav:false,
          dots:true,
          autoplay: true,
          
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              }
          }
      })

      $('.afisha_calendar_header .date_slider').owlCarousel({
          loop:false,
          margin: 6,
          nav:true,
          dots:false,
          autoplay: false,
          navText: ['‹', '›'],
          
          responsive:{
              1000:{
                  items:4
              },
              1180:{
                  items:6
              },
              1400:{
                  items:7
              }
          }
      })
      // ============================ cursor to search in main ============================
      //if ($(window).scrollTop() <= 200) {
        //$("html, body").animate({ scrollTop: 0 }, 1);
        //$('.search_bar input').focus();
      //}

      // ============================ go_top ============================

      $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

      function upButtonPosition () {
        if ($(window).scrollTop() + $(window).height() >= ($(document).height() -100)) {
          $('a.top_button').addClass("on_bot_of_the_page");
        }
        else {
          $('a.top_button').removeClass("on_bot_of_the_page");
        }
      };
      $(window).scroll(function() {
        upButtonPosition();
      });
      upButtonPosition();

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

    // ============================ fix_firm_bar ============================

      $(".firm_container .firm_right_bar_container").height($(".firm_container").height());

      function firmBarPosition () {
        var BarHeight = $(".firm_right_bar").height();
        var BarWidth = $(".firm_right_bar_container").width();
        var WinHeight = $(window).height();
        var Diff = 0;

        if (BarHeight > $(window).height()) {
          var Diff = BarHeight - $(window).height();
          console.log(Diff);
        }

        $(".firm_right_bar").width(BarWidth);
        if (($(window).scrollTop() > 200) && ($(window).scrollTop() + WinHeight < ($(document).height() -100 - (Diff))))  {
          $(".firm_right_bar").addClass("bar_fixed_midle");
          $('.firm_right_bar').removeClass("bar_fixed_bottom");
        } else if ($(window).scrollTop() + WinHeight >= ($(document).height() -100 - (Diff)))  {
          if (BarHeight > (WinHeight - 100)) {
            $(".firm_right_bar").addClass("bar_fixed_bottom");
            $('.firm_right_bar').removeClass("bar_fixed_midle");
          }

        }
        else {
          $(".firm_right_bar").removeClass("bar_fixed_midle");
          $('.firm_right_bar').removeClass("bar_fixed_bottom");
        }
      };
      $(window).scroll(function() {
        firmBarPosition();
      });
      firmBarPosition();




    $("#radio").click( function () {
      msg=window.open("radio.html","msg","height=423,width=500,left=300,top=200");
    });

    // $(".firm_right_bar").affix({
    //     offset: { 
    //         top: 200,
    //         bottom: 200
    //     }
    // });


  });
})(jQuery);
