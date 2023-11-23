(function($) {

    "use strict";

    /*-------------------------------*/
    /* Preloader
    /*-------------------------------*/

    $("#preloader").delay(1500).fadeOut("slow");


    /*-------------------------------*/
    /* Facts Number Count
    /*-------------------------------*/

    $('.progress-bar-number').appear(function(){
        setTimeout(function(){
            $('.progress-bar-number .num').countTo();
        },1000);
    });


    /*-------------------------------*/
    /* WOW Initialize
    /*-------------------------------*/

    new WOW().init();


    /*-------------------------------*/
    /* Popup Vedio
    /*-------------------------------*/

    $('.popup-vedio').magnificPopup({
        type: 'iframe',
        src: 'https://www.youtube.com/watch?v=JH0RMBG41y0',
        preload: [0, 0],

        gallery: {
            enabled: false,
        }
    });


    /*-------------------------------*/
    /* Menu hide/show on scroll
    /*-------------------------------*/

    var ost = 0;
    $(window).scroll(function() {

        var cOst = $(this).scrollTop();

        if (cOst > 150) {
            $('nav').addClass('theme-bg-gradient');

        } else {
            $('nav').removeClass('theme-bg-gradient');
        }

        if (cOst == 0) {
            $('.navbar').addClass('top-nav-collapse');

        } else if (cOst > ost) {
            $('.navbar').addClass('top-nav-collapse').removeClass('default');
        } else {
            $('.navbar').addClass('default').removeClass('top-nav-collapse');
        }
        ost = cOst;
    });


    /*-----------------------------*/
    /*  Target menu section
    /*-----------------------------*/

    $("nav").find("a").on('click', function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 600);
        if ($('.navbar-toggle').css('display') != 'none') {
            $(this).parents('.container').find(".navbar-toggle").trigger("click");
        }
        return false;

    });


    /*-----------------------------*/
    /*  Newsletter Subscribe
    /*-----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'https://xyz.us15.list-manage.com/subscribe/post?u=a26d8d38db8b11ffd3352f889&amp;id=d60b8b0444'
        /* Replace Your AjaxChimp Subscription Link */
    });


    /*-------------------------------*/
    /* Start type writing 
    /*-------------------------------*/

    var area = document.getElementById('area'),
        list = [
            'Landing Page',
            'Frinedly',
            'Attitude'
        ],
        count_li = 0,
        count = 0,
        speed = 200;


    function rewrite() {
        var type = list[count_li].substring(0, count);
        document.getElementById('area').textContent = type;
        count++;
        var timer = setTimeout(rewrite, speed);
        if (count > list[count_li].length) {
            count = 0;
            count_li++;
            clearTimeout(timer);
            setTimeout(rewrite, 2500);
        }

        if (count_li === list.length) {
            count_li = 0;
        }
    }

    rewrite();

    var flag = true;

    function flashing() {
        if (flag) {
            document.getElementById('cursor').style.opacity = 1;
        } else {
            document.getElementById('cursor').style.opacity = 0;
        }
        flag = !flag
        setTimeout(flashing, 500);
    }

    flashing();
    // End type writing


    /*-------------------------------*/
    /* testimonials Slider 
    /*-------------------------------*/

    $('.testimonials-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        draggable: true,
        dots: true,
        respondTo: 'window',
        autoplay: false
    });


    /*-----------------------------*/
    /*  Teachers carousel
    /*-----------------------------*/

    var owl = $(".meet-teachers-carousel");
    owl.owlCarousel({
        loop: true,
        responsiveClass: true,
        navigation: true,
        smartSpeed: 2000,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        center: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            760: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });


    /*----------------------------------------------------*/
    /* courses Tabs
    /*----------------------------------------------------*/

    $('.nav-tabs a').on('click', function() {
        $(this).tab('show');
    });

    function coursesliderSlick(selector) {
        if (!selector.hasClass('slick-initialized')) {
            selector.slick({
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                draggable: true,
                respondTo: 'slider'
            });
        }
    }

    var tabContent = $('.tab-content');

    coursesliderSlick(tabContent.find('.active .course-slider'));

    $('.nav-tabs a').on('shown.bs.tab', function(event) {
        coursesliderSlick(tabContent.find('.active .course-slider'));
    });


    /*----------------------------------------------------*/
    /*  Animated Scroll To Top
    /*----------------------------------------------------*/
    var toTop = $('#toTop');
    toTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() != 0) {
            toTop.fadeIn();
        } else {
            toTop.fadeOut();
        }
    });


}(jQuery));