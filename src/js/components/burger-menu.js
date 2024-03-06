import $ from 'jquery';
$('.header__burger').on('click', function () {
    $('.header__burger-menu').addClass('--active');
    $('body').addClass('locked');

    $('html, body').animate({ scrollTop: 0 }, '100');
});

$('.header__menu-close').on('click', function () {
    $('.header__burger-menu').removeClass('--active');
    $('body').removeClass('locked');
});

$('.header__menu-item-heading').on('click', function () {
    $(this).toggleClass('--active').siblings('.header__menu-item-dropdown').toggleClass('--active');
});

$('.header__burger-menu').on('click', function (event) {
    const content = $('.header__menu-content')[0];

    if (event.target === content) return;

    $('.header__burger-menu').removeClass('--active');
    $('body').removeClass('locked');
});

$('.header__menu-content').on('click', function (event) {
    event.stopPropagation();
});
