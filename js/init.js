$(function () {
    $(".tabs").tabs();

    $('.portfolio-tab').tabs();

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1
    });

    $('.menu-btn, .header-nav a').click(function () {
        $('.header-nav').toggleClass('active');
        $('.menu-btn').toggleClass('active');
    });
});