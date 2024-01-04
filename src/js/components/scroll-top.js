import $ from 'jquery';
$(window).on('scroll', function (event) {
    const scrolledHeight = window.innerHeight + window.scrollY;
    const totalHeight = document.body.offsetHeight;

    const scrollPercentage = Math.floor((scrolledHeight / totalHeight) * 100);

    $('.button-up').toggleClass('visible', scrollPercentage >= 75);
});

$('.button-up').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, '100');
});
