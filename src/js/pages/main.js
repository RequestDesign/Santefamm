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

        if ($(window).innerWidth() <= 768) {
            $('body').addClass('blocked');
            $(problem).siblings('.layer__content-problems-dots-wrapper').addClass('--active');
        }

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

        if ($(window).innerWidth() > 768) {
            $(dot).addClass('--active');
        } else {
            $(dot).find('.layer__content-problems-dot-detailed').addClass('--active');
        }
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

//close 3-rd stage mobile menu on back click
$('.layer__content-problems-dots-button').on('click', function () {
    $(this).parent().removeClass('--active');
    $('body').removeClass('blocked');
});

//close 4-th stage mobile menu on back click
$('.layer__content-problems-dot-detailed').on('click', function (event) {
    event.stopPropagation();
});

$('.layer__content-problems-dot-detailed-heading button').on('click', function () {
    $(this).parent().parent().removeClass('--active');
});

//set active stage element on category click

// $('.layer__content-problems-dot-category').on('click', function() {
//     $(this).closest('.layer__content-problems-dot-detailed').removeClass('--active');
// })

$('.layer__content-problems-dot-detailed').each(function () {
    $(this)
        .find('.layer__content-problems-dot-category')
        .each(function (index, category) {
            $(category).on('click', function () {
                const detailed = this.closest('.layer__content-problems-dot-detailed');

                $(detailed).removeClass('--active');

                setTimeout(() => {
                    $(detailed)
                        .closest('.layer__content-problems-dots')
                        .find('.layer__content-problems-dot')
                        .eq(index)
                        .find('.layer__content-problems-dot-detailed')
                        .addClass('--active');
                }, 300)
            });
        });
});
