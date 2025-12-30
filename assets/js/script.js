$(function () {

    $(document).ready(function () {
        // hero slider
        $('#hero-slider').slick({
            fade:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover:false,
            speed:500,
            draggable: false,
            swipe:false,
            infinite:true,
            arrows: false,
            prevArrow: "<button type='button' class='custom-prev'><i class='fa fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='custom-next'><i class='fa fa-angle-right'></i></button>",
        });

        // card slider
        $('#card .slick').slick({
            fade:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            pauseOnHover:false,
            speed:500,
            draggable: false,
            swipe:true,
            infinite:true,
            arrows: true,
            prevArrow: "<button type='button' class='custom-prev'><i class='fa fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='custom-next'><i class='fa fa-angle-right'></i></button>",
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
        });


        // hero button animation
        $('.hero-btn').click(function() {
          const $btn = $(this);
          $btn.addClass('clicked');
        
          var scrollHeight = $("#card").offset().top;
          $('html, body').animate(
            { scrollTop: scrollHeight }, 
            2000,
            function() {
              $btn.removeClass('clicked');
            }
          );
        });
     
        // Aos Initialize
        AOS.init({
          duration: 1000,
        });
      
      
    

      
    })// document ready
})
