import $ from 'jquery';
$('.navigation__dropdown-button').on('mouseenter', function () {
    $('.navigation__dropdown-item').each(function () {
        $(this).show('0');
    });
});

$('.navigation__dropdown-button').on('mouseleave', function () {
    $('.navigation__dropdown-item').each(function () {
        $(this).hide('0');
    });
});
