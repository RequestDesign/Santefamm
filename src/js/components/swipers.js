import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import remToPx from '../utils/rem';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initReviewsSliders() {
    if (document.querySelector('.reviews__swiper')) {
        const slider = document.querySelector('.reviews__swiper');
        const fraction = document.querySelector('.reviews-panel__fractions');
        const btnPrev = document.querySelector('.reviews-panel__btn-prev');
        const btnNext = document.querySelector('.reviews-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            slidesPerView: 3,
            allowTouchMove: true,
            spaceBetween: remToPx(4),
            pagination: {
                el: fraction,
                type: 'fraction'
            },
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            }
        });
    }
}

function initDoctorsSliders() {
    if (document.querySelector('.doctors__swiper')) {
        const slider = document.querySelector('.doctors__swiper');
        const fraction = document.querySelector('.doctors-panel__fractions');
        const btnPrev = document.querySelector('.doctors-panel__btn-prev');
        const btnNext = document.querySelector('.doctors-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            slidesPerView: 2,
            allowTouchMove: true,
            spaceBetween: remToPx(4),
            pagination: {
                el: fraction,
                type: 'fraction'
            },
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            }
        });
    }
}

function initNewsSliders() {
    if (document.querySelector('.news__swiper')) {
        const slider = document.querySelector('.news__swiper');
        const fraction = document.querySelector('.news-panel__fractions');
        const btnPrev = document.querySelector('.news-panel__btn-prev');
        const btnNext = document.querySelector('.news-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            slidesPerView: 3,
            allowTouchMove: true,
            spaceBetween: remToPx(4),
            pagination: {
                el: fraction,
                type: 'fraction'
            },
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            }
        });
    }
}

function initCategorySlider() {
    if (document.querySelector('.prices__categories-swiper')) {
        const slider = document.querySelector('.prices__categories-swiper');

        new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: remToPx(0.8),
            speed: 1200,
            slideToClickedSlide: true
        });
    }
}

function initPalomarSlider() {
    if (document.querySelector('.palomar__swiper')) {
        const slider = document.querySelector('.palomar__swiper');

        const next = slider.querySelector('.palomar-button-next');
        const prev = slider.querySelector('.palomar-button-prev');

        new Swiper(slider, {
            modules: [Navigation],
            slidesPerView: '3',
            spaceBetween: remToPx(5.05),
            speed: 1200,
            slideToClickedSlide: true,
            loop: true,
            navigation: {
                nextEl: next,
                prevEl: prev
            }
        });

        const resultSliders = document.querySelectorAll('.palomar__swiper-result');

        resultSliders.forEach((slider) => {
            const parent = slider.closest('.palomar__block');

            const fraction = parent.querySelector('.palomar__panel-fractions');
            const prevButton = parent.querySelector('.palomar__result-prev');
            const nextButton = parent.querySelector('.palomar__result-next');

            new Swiper(slider, {
                modules: [Pagination, Navigation],
                allowTouchMove: true,
                slidesPerView: '4',
                spaceBetween: remToPx(1.2),
                speed: 1200,
                pagination: {
                    el: fraction,
                    type: 'fraction'
                },
                navigation: {
                    nextEl: nextButton,
                    prevEl: prevButton
                }
            });
        });
    }
}

function initSliders() {
    initReviewsSliders();
    initNewsSliders();
    initDoctorsSliders();
    initCategorySlider();
    initPalomarSlider();
}

document.addEventListener('DOMContentLoaded', initSliders);
