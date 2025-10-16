// -----------> jQuery
jQuery(function($) {
    "use strict";


    // -----------------------
    //  top up button area js
    // ------------------------ 
    $(window).on('scroll', function () {
        if($(this).scrollTop() > 80){
            $(".topUp-btn").fadeIn(1000);
            $(".topUp-btn2").fadeIn(1000);
            $(".topUp-btn3").fadeIn(1000);
        } else{
            $(".topUp-btn").fadeOut(1000);
            $(".topUp-btn2").fadeOut(1000);
            $(".topUp-btn3").fadeOut(1000);
        }
    });
    $('topUp-btn, topUp-btn2, topUp-btn3').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    
    // -----------------------
    //  header area here 
    // ------------------------
    // mobile menu bar 
    $(".mobile-menu").on('click', function () {
        $(".off-canvas-menu").toggleClass("off-canvas-menu-active");
        $(".body-overlay").addClass("body-overlay-active");
    });
    // off-close-menu bar
    $(".off-close-menu").on('click', function () {
        $(".off-canvas-menu").removeClass("off-canvas-menu-active");
        $(".body-overlay").removeClass("body-overlay-active");
    });
    // body-overlay here 
    $(".body-overlay").on('click', function () {
        $(".off-canvas-menu").removeClass("off-canvas-menu-active");
        $(".body-overlay").removeClass("body-overlay-active");
    });
    // off-canvas-menu link  
    $(".off-menu-link1").on('click', function () {
        $(".off-sub-menu1").toggleClass("active");
        $(".off-sub-menu2").removeClass("active");
        $(".off-sub-menu3").removeClass("active");
        $(".off-sub-menu4").removeClass("active");
        $(".off-sub-menu5").removeClass("active");
    });
    $(".off-menu-link2").on('click', function () {
        $(".off-sub-menu2").toggleClass("active");
        $(".off-sub-menu1").removeClass("active");
        $(".off-sub-menu3").removeClass("active");
        $(".off-sub-menu4").removeClass("active");
        $(".off-sub-menu5").removeClass("active");
    });
    $(".off-menu-link3").on('click', function () {
        $(".off-sub-menu3").toggleClass("active");
        $(".off-sub-menu1").removeClass("active");
        $(".off-sub-menu2").removeClass("active");
        $(".off-sub-menu4").removeClass("active");
        $(".off-sub-menu5").removeClass("active");
    });
    $(".off-menu-link4").on('click', function () {
        $(".off-sub-menu4").toggleClass("active");
        $(".off-sub-menu1").removeClass("active");
        $(".off-sub-menu2").removeClass("active");
        $(".off-sub-menu3").removeClass("active");
        $(".off-sub-menu5").removeClass("active");
    });
    $(".off-menu-link5").on('click', function () {
        $(".off-sub-menu5").toggleClass("active");
        $(".off-sub-menu1").removeClass("active");
        $(".off-sub-menu2").removeClass("active");
        $(".off-sub-menu3").removeClass("active");
        $(".off-sub-menu4").removeClass("active");
    });

    // -----------------------
    // This will create a sticky js
    // -----------------------
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $(".header-area").removeClass("sticky");
            $(".header-section2").removeClass("sticky2");
            $(".header-area3").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
            $(".header-section2").addClass("sticky2");
            $(".header-area3").addClass("sticky");
        }
    });

    // -----------------------
    // This will create a counter up js
    // -----------------------
    $('.counter span').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    // -----------------------
    //  header area here 
    // ------------------------
    // mobile menu bar 
    $(".mobile-menu-bar3").on('click', function () {
        $(".off-canvas-menu3").addClass("active");
        $(".body-overlay").addClass("body-overlay-active");
    });
    // off-close-menu bar
    $(".close-menu3").on('click', function () {
        $(".off-canvas-menu3").removeClass("active");
        $(".body-overlay").removeClass("body-overlay-active");
    });
    // body-overlay here 
    $(".body-overlay").on('click', function () {
        $(".off-canvas-menu3").removeClass("active");
        $(".body-overlay").removeClass("body-overlay-active");
    });




    // -----------------------
    // This will create a owlCarousel
    // logo carousel area here js
    // -----------------------
    $('.lcw-items').owlCarousel({
        loop: true,
        items: 5,
        margin: 130,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2,
                margin: 40
            },
            500: {
                items: 4,
                margin: 60
            },
            800: {
                items: 4,
                margin: 80
            },
            992: {
                items: 5,
                margin: 80
            }
        }
    });

    // -----------------------
    // This will create a video gallery magnific popup js
    // -----------------------
    $('.expand-video').magnificPopup({
        type: 'iframe'
    });

    // -----------------------
    // The Final Countdown js
    // -----------------------
    $('#rc-box').countdown('2022/10/10', function(event) {
        $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-count">%D<br><span>days</span></span><span class="single-count">%H<br><span>Hours</span></span><span class="single-count">%M<br><span>Minutes</span></span><span class="single-count">%S<br><span>Seconds</span></span></span>'));
    });

    // -----------------------
    // aos animate js
    // -----------------------
    AOS.init({
      duration: 1000,
      once: true
    });

    // -----------------------
    // course area here
    // check box checked
    // -----------------------
    $('.check').on('click', function () {
        $('.check').not(this).prop('checked', false);
    });

    // -----------------------
    // course area here
    // courses-filter-btn 
    // -----------------------
    $(".courses-filter-btn").on('click', function () {
        $(".courses-filter-list").toggleClass("courses-filter-list-actives");
    });



    // -----------------------
    // This will create a owlCarousel
    // index 3 logo carousel area here js
    // -----------------------
    $('.hero-carousel3').owlCarousel({
        loop: true,
        items: 4,
        margin: 48,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 3,
                margin: 40
            },
            500: {
                items: 4,
                margin: 20
            },
            992: {
                items: 4,
                margin: 48
            }
        }
    });


    // -----------------------
    // This will create a slick slider
    // index 3 clients slider area here js
    // -----------------------
    $('.clients-slider3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });


    // -----------------------
    // This will create a slick slider
    // index 3 blog slider area here js
    // -----------------------
    $('.blog-slider3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });



    // -----------------------
    // This will create a slick slider
    // index 3 blog slider area here js
    // -----------------------
    $('.clients-items4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>'
    });


    // -----------------------
    // This will create a slick slider
    // feature5 area here
    // -----------------------
    $('.feature_itemsH5').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    

}(jQuery));
/*################## 
--------------------------
- custom js area ends here
--------------------------
##################*/