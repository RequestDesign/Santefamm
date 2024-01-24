import $ from 'jquery';
import remToPx from '../utils/rem';
import { isMobile } from '../utils/is-mobile';
$('.footer__nav-item').each(function (_, item) {
    $(item).on('click', function (event) {
        console.log($(window).innerWidth());
        if (!isMobile() || $(window).innerWidth() > 768) {
            return;
        }

        const list = $(this).find('ul');
        const height = list.outerHeight();

        const clickedElement = event.currentTarget;
        const activeElement = document.querySelector('.footer__nav-item.--active');

        if (clickedElement !== activeElement) {
            $('.footer__nav-item').each(function (_, item) {
                const list = $(this).find('ul');
                list.slideUp('slow');
                $(item).removeClass('--active');
            });
        }

        $(this).toggleClass('--active');

        if ($(this).hasClass('--active')) {
            $('.footer__contacts-links.--mob').css('margin-top', `${parseInt(remToPx(8)) + height}px`);

            list.slideDown('fast');
        } else {
            $('.footer__contacts-links.--mob').css('margin-top', 'initial');
            list.slideUp('fast');
        }
    });
});
