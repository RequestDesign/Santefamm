import $ from 'jquery';
$('.header__burger').on('click', function () {
    $('.header__burger-menu').addClass('--active');
    $('body').addClass('locked');

    window.scrollTo({ top: 0, behavior: 'auto' });
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
