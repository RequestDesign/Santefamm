import $ from 'jquery';
//reverse button click
$('.layer__content-bottom-reverse').on('click', function () {
    const frontSide = $('.layer__content-problems.--front');
    const backSide = $('.layer__content-problems.--behind');

    frontSide.toggleClass('--active');
    backSide.toggleClass('--active', !frontSide.hasClass('--active'));

    $(this).toggleClass('--active');

    resetActiveClasses();
    resetDotsActiveClasses();
    resetCounterActiveClasses();
    resetDotActiveClasses();
    resetDotSliderActiveClasses();

    $('.neutral__wrapper').addClass('--active');
    $('.neutral__service').addClass('--active');
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
        resetDotsActiveClasses();
        resetDotActiveClasses();
        resetCounterActiveClasses();
        resetDotSliderActiveClasses();

        $('.neutral__wrapper').addClass('--active');
        $('.neutral__service').addClass('--active');
    });
});

//problem item click and show problem dots
$('.layer__content-problems-item').each(function (index, problem) {
    $(problem).on('click', function () {
        const dots = $(this).parent().find('.layer__content-problems-dots');
        const neutralWrapper = $('.neutral__wrapper');
        const neutralService = $('.neutral__service');

        neutralWrapper.attr('class', 'neutral__wrapper');

        if ($(dots).hasClass('--active')) {
            neutralWrapper.addClass('--active');
            $(this).find('.layer__content-problems-item-counter').removeClass('--active');
            resetDotActiveClasses();
            resetDotSliderActiveClasses();
        } else {
            resetDotsActiveClasses();
            resetCounterActiveClasses();
            $(this).find('.layer__content-problems-item-counter').addClass('--active');
        }

        neutralService.addClass('--active');
        dots.toggleClass('--active');
    });
});

//reset dots classes
function resetActiveClasses() {
    $('.layer__content-problems-dots').each(function (index, dot) {
        $(dot).removeClass('--active');
    });

    $('.neutral__wrapper').removeClass('--active');
    $('.neutral__service').removeClass('--active');
}

//show slider on click to dot

$('.layer__content-problems-dot').each(function (index, dot) {
    $(dot).on('click', function () {
        const neutralService = $('.neutral__service');

        neutralService.attr('class', 'neutral__service');

        $('.layer__content-problems-dot').each(function () {
            if ($(this).hasClass('--active')) {
                $(this).removeClass('--active');
                $(this).find('.layer__content-problems-dot-slider').removeClass('--active');
            }
        });

        $(dot).find('.layer__content-problems-dot-slider').addClass('--active');
        $(dot).addClass('--active');
    });
});

function resetCounterActiveClasses() {
    $('.layer__content-problems-item-counter').each(function () {
        if ($(this).hasClass('--active')) {
            $(this).removeClass('--active');
            $('.neutral__service').addClass('--active');
        }
    });
}

function resetDotsActiveClasses() {
    $('.layer__content-problems-dots').each(function () {
        $(this).removeClass('--active');
    });
}

function resetDotActiveClasses() {
    $('.layer__content-problems-dot').each(function () {
        $(this).removeClass('--active');
    });
}

function resetDotSliderActiveClasses() {
    $('.layer__content-problems-dot-slider').each(function () {
        $(this).removeClass('--active');
    });
}
