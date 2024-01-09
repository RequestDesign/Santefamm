import $ from 'jquery';
$('.benefits__item').each(function (index) {
    $(this).on('click', function () {
        $('.benefits__biggest-item').eq(index).addClass('--active').parent().addClass('--active');
    });
});

$('.benefits__biggest-item').each(function (index) {
    $(this).on('click', function () {
        $(this).removeClass('--active').parent().removeClass('--active');
    });
});
