var x = window.matchMedia("(max-width: 992px)");

    $(function() {
        if(x.matches){
        $(".load__element").slice(0, 1).show();
        $('.load__element:not(:lt(1))').fadeOut();
        $("#loadMore").on('click', function(e) {
          e.preventDefault();
          $(".load__element:hidden").slice(0, 1).slideDown();
          if ($(".load__element:hidden").length == 0) {
            $("#loadLess").fadeIn('slow');
            $("#loadMore").hide();
            // $("#loadMore").text('Load only the first 4');
          }
          $('html,body').animate({
            scrollTop: $(this).offset().top
          }, 1500);
        });
      
        $("#loadLess").on('click', function(e) {
          e.preventDefault();
          $('.load__element:not(:lt(1))').fadeOut();
          $("#loadMore").fadeIn('slow');
          $("#loadLess").hide();
      
          desiredHeight = $(window).height();
      
          $('html,body').animate({
            scrollTop: $(this).offset().top + desiredHeight
          }, 1500);
        });
    }
      });