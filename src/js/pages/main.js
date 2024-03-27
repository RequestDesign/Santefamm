import $ from 'jquery';
//reverse button click
document.addEventListener('DOMContentLoaded', () => {
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

            $('.navigation').addClass('--active');

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
            if ($(window).innerWidth() > 768) {
                const neutralService = $('.neutral__service');

                neutralService.attr('class', 'neutral__service');
            }

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
                hideProblemDotsRowButtons();
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

        showProblemDotsRowButtons();
        $('.navigation').removeClass('--active');
    });

    //close 4-th stage mobile menu on back click
    $('.layer__content-problems-dot-detailed').on('click', function (event) {
        event.stopPropagation();
    });

    $('.layer__content-problems-dot-detailed-heading button').on('click', function () {
        $(this).parent().parent().removeClass('--active');
        $(this).closest('.layer__content-problems-dot').find('p').css('opacity', 1);

        showProblemDotsRowButtons();
    });

    //set active stage element on category click
    $('.layer__content-problems-dot-detailed').each(function () {
        $(this)
            .find('.layer__content-problems-dot-category')
            .each(function (index, category) {
                $(category).on('click', function () {
                    const detailed = this.closest('.layer__content-problems-dot-detailed');

                    $(detailed).removeClass('--active');

                    showProblemDotsRowButtons();

                    setTimeout(() => {
                        $(detailed)
                            .closest('.layer__content-problems-dots')
                            .find('.layer__content-problems-dot')
                            .eq(index)
                            .find('.layer__content-problems-dot-detailed')
                            .addClass('--active');

                        hideProblemDotsRowButtons();
                    }, 300);
                });
            });
    });

    function showProblemDotsRowButtons() {
        $('.layer__content-problems-dot').each(function (_, dot) {
            const p = $(dot).find('p:first-child');
            const icon = $(dot).find('.layer__content-problems-dot-icon');

            $(p).css('opacity', 1);
            $(icon).css('opacity', 1);
            $(this).css('borderColor', 'white').css('userSelect', 'auto').css('pointerEvents', 'auto');
        });
    }

    function hideProblemDotsRowButtons() {
        $('.layer__content-problems-dot').each(function (_, dot) {
            const p = $(dot).find('p:first-child');
            const icon = $(dot).find('.layer__content-problems-dot-icon');

            $(p).css('opacity', 0);
            $(icon).css('opacity', 0);
            $(this).css('borderColor', 'transparent').css('userSelect', 'none').css('pointerEvents', 'none');
        });
    }

    //header navbar;

    Array.from(
        document.querySelectorAll('.header__menu-navbar-item:has(.header__menu-navbar-item)'),
        (item) => {
            item.addEventListener('mouseenter', () => {
                resetActiveItemClasses();

                item.classList.add('--active');

                item.querySelector('.header__menu-navbar-item').classList.add('--active');
            });
            function resetActiveItemClasses() {
                Array.from(document.querySelectorAll('.header__menu-navbar-item:has(.header__menu-navbar-item)'), (item) => {
                    item.classList.remove('--active');
                });
            }
        }
    );

    Array.from(
        document.querySelectorAll('.header__menu-navbar-item:not(:has(.header__menu-navbar-item))'),
        (item) => {
            item.addEventListener('mouseenter', () => {
                resetActiveItemClasses();

                item.classList.add('--active');
            });
            function resetActiveItemClasses() {
                Array.from(document.querySelectorAll('.header__menu-navbar-item:not(:has(.header__menu-navbar-item))'), (item) => {
                    item.classList.remove('--active');
                });
            }
        }
    );

    const navbarMenu = document.querySelector('.header__menu-navbar');

    Array.from(document.querySelectorAll('.--menu'), (item) => {
        item.addEventListener('mouseenter', () => {
            navbarMenu.classList.add('--active');
        })
    })

    navbarMenu.addEventListener('mouseleave', () => {
        navbarMenu.classList.remove('--active')
    })
});
