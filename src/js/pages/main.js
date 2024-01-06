import $ from 'jquery';
//reverse button click
$('.layer__content-bottom-reverse').on('click', function () {
    const frontSide = $('.layer__content-problems.--front');
    const backSide = $('.layer__content-problems.--behind');

    frontSide.toggleClass('--active');
    backSide.toggleClass('--active', !frontSide.hasClass('--active'));

    $(this).toggleClass('--active');

    resetActiveClasses();

    $('.neutral__wrapper').addClass('--active');
});

//face or body side
$('.layer__content-bottom-view').each(function (index, view) {
    $(view).on('click', function () {
        const face = $('.layer__content-wrapper.--face');
        const body = $('.layer__content-wrapper.--body');

        const isFace = $(view).data('view') === 'face';

        face.toggleClass('--active', isFace);
        body.toggleClass('--active', !isFace);

        resetActiveClasses();

        $('.neutral__wrapper').addClass('--active');
    });
});

//problem item click and show problem dots
$('.layer__content-problems-item').each(function (index, problem) {
    $(problem).on('click', function () {
        const dots = $(this).parent().find('.layer__content-problems-dots');
        const neutralWrapper = $('.neutral__wrapper');

        neutralWrapper.attr('class', 'neutral__wrapper');

        if ($(dots).hasClass('--active')) {
            neutralWrapper.addClass('--active');
        } else {
            $('.layer__content-problems-dots').each(function () {
                if ($(this).hasClass('--active')) {
                    $(this).removeClass('--active');
                }
            });
        }
        dots.toggleClass('--active');
    });
});

//reset dots classes
function resetActiveClasses() {
    $('.layer__content-problems-dots').each(function (index, dot) {
        $(dot).removeClass('--active');
    });

    $('.neutral__wrapper').removeClass('--active');
}
