import { Swiper, SwiperSlide } from 'swiper';
import { EffectFade, EffectCards, Navigation, Pagination, Thumbs } from 'swiper/modules';
import remToPx from '../utils/rem';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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

        const next = document.querySelector('.palomar-button-next');
        const prev = document.querySelector('.palomar-button-prev');

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
        // const resultSlider = document.querySelector('.palomar__swiper-result');
        // const fraction = document.querySelector('.palomar__panel-fractions');
        // const prevButton = document.querySelector('.palomar__result-prev');
        // const nextButton = document.querySelector('.palomar__result-next');

        // new Swiper(resultSlider, {
        //     modules: [Pagination, Navigation],
        //     allowTouchMove: true,
        //     slidesPerView: '4',
        //     spaceBetween: remToPx(1.2),
        //     speed: 1200,
        //     pagination: {
        //         el: fraction,
        //         type: 'fraction'
        //     },
        //     navigation: {
        //         nextEl: nextButton,
        //         prevEl: prevButton
        //     }
        // });
    }
}
function initBeforeAfterSlider() {
    if (document.querySelector('.palomar__swiper-result')) {
        const slider = document.querySelector('.palomar__swiper-result');
        const fraction = document.querySelector('.palomar__panel-fractions');
        const prevButton = document.querySelector('.palomar__result-prev');
        const nextButton = document.querySelector('.palomar__result-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            allowTouchMove: true,
            speed: 1200,
            pagination: {
                el: fraction,
                type: 'fraction'
            },
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton
            },
            breakpoints: {
                0: {
                    slidesPerView: '2',
                    spaceBetween: remToPx(1.3)
                },
                768: {
                    slidesPerView: '4',
                    spaceBetween: remToPx(1.2)
                }
            }
        });
    }
}
function initSpecialistsSlider() {
    if (document.querySelector('.specialists__swiper')) {
        const slider = document.querySelector('.specialists__swiper');

        new Swiper(slider, {
            modules: [Navigation],
            slidesPerView: 'auto',
            spaceBetween: remToPx(1.2),
            speed: 1200,
            slideToClickedSlide: true,
            navigation: {
                nextEl: document.querySelector('.specialists-button-next'),
                prevEl: document.querySelector('.specialists-button-prev')
            }
        });
    }
}

function initDevicesSlider() {
    if (document.querySelector('.devices__swiper')) {
        const slider = document.querySelector('.devices__swiper');
        const fraction = document.querySelector('.devices__panel-fractions');
        const btnPrev = document.querySelector('.devices__panel-prev');
        const btnNext = document.querySelector('.devices__panel-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            slidesPerView: '3',
            spaceBetween: remToPx(4),
            speed: 1200,
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

function initLicensesSlider() {
    if (document.querySelector('.licenses__swiper')) {
        const slider = document.querySelector('.licenses__swiper');
        const fraction = document.querySelector('.licenses__panel-fractions');
        const btnPrev = document.querySelector('.licenses__panel-prev');
        const btnNext = document.querySelector('.licenses__panel-next');

        const sliderLicense = document.querySelector('.licenses__swiper-license');

        const license = new Swiper(sliderLicense, {
            modules: [Pagination, Navigation, EffectFade],
            effect: 'fade',
            noSwiping: true,
            noSwipingClass: 'swiper-slide',
            fadeEffect: {
                crossFade: true
            },
            slidesPerView: 1,
            speed: 1200
        });

        new Swiper(slider, {
            modules: [Pagination, Navigation, Thumbs],
            slidesPerView: '3',
            spaceBetween: remToPx(4),
            speed: 1200,
            thumbs: {
                swiper: license
            },
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

function initPagesInfoSlider() {
    if (document.querySelector('.pages-info__swiper')) {
        const slider = document.querySelector('.pages-info__swiper');
        const btnPrev = document.querySelector('.pages-info__link-rotate-prev');
        const btnNext = document.querySelector('.pages-info__link-rotate-next');
        const slides = slider.querySelectorAll('.swiper-slide .pages-info__title');

        new Swiper(slider, {
            modules: [Navigation, EffectFade],
            slidesPerView: 1,
            loop: true,
            spaceBetween: remToPx(10),
            effect: 'fade',
            fadeEffect: { crossFade: true },
            speed: 1200,
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            },
            on: {
                slideChange() {
                    let titlePrevIndex = this.realIndex - 1;
                    let titleNextIndex = this.realIndex + 1;
                    let fadeSpeed = 6;

                    if (titlePrevIndex == -1) {
                        titlePrevIndex = slides.length - 1;
                    }
                    if (titleNextIndex == slides.length) {
                        titleNextIndex = 0;
                    }
                    function fadeIn(fade) {
                        var opacity = 0;
                        var intervalID = setInterval(function () {
                            if (opacity < 1) {
                                opacity = opacity + 0.01;
                                fade.style.opacity = opacity;
                            } else {
                                clearInterval(intervalID);
                            }
                        }, fadeSpeed);
                    }
                    function fadeOut(fade) {
                        var opacity = 1;
                        var intervalID = setInterval(function () {
                            if (opacity > 0) {
                                opacity = opacity - 0.01;
                                fade.style.opacity = opacity;
                            } else {
                                clearInterval(intervalID);
                            }
                        }, fadeSpeed);
                    }
                    function changeTitle() {
                        btnNext.querySelector('p').textContent = slides[titleNextIndex].textContent;
                        btnPrev.querySelector('p').textContent = slides[titlePrevIndex].textContent;
                    }

                    fadeOut(btnNext.querySelector('p'));
                    fadeOut(btnPrev.querySelector('p'));

                    setTimeout(function () {
                        changeTitle();
                        fadeIn(btnNext.querySelector('p'));
                        fadeIn(btnPrev.querySelector('p'));
                    }, fadeSpeed * 100);
                }
            }
        });
    }
}

function initServiceDescriptionEqSlider() {
    if (document.querySelector('.service-description__swiper')) {
        const slider = document.querySelector('.service-description__swiper');
        const fraction = document.querySelector('.service-description-panel__fractions');
        const btnPrev = document.querySelector('.service-description-panel__btn-prev');
        const btnNext = document.querySelector('.service-description-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation, EffectFade],
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            spaceBetween: remToPx(4),
            speed: 1200,
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

function initServiceBenefitsEqSlider() {
    if (document.querySelector('.service-benefits__swiper')) {
        const slider = document.querySelector('.service-benefits__swiper');
        const fraction = document.querySelector('.service-benefits__fractions');
        const btnPrev = document.querySelector('.service-benefits__btn-prev');
        const btnNext = document.querySelector('.service-benefits__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            slidesPerView: '4',
            spaceBetween: remToPx(4),
            speed: 1200,
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

function initServiceDetailedSwiper() {
    if (document.querySelector('.accommodation__swiper')) {
        const slider = document.querySelector('.accommodation__swiper');

        new Swiper(slider, {
            slidesPerView: '1.05',
            spaceBetween: remToPx(0.8),
            speed: 1200
        });
    }
}

function initSliders() {
    initReviewsSliders();
    initNewsSliders();
    initDoctorsSliders();
    initCategorySlider();
    initPalomarSlider();
    initSpecialistsSlider();
    initPagesInfoSlider();
    initDevicesSlider();
    initServiceDescriptionEqSlider();
    initBeforeAfterSlider();
    initServiceBenefitsEqSlider();
    initLicensesSlider();
    initServiceDetailedSwiper();
}

const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    if (!document.querySelector(swiperClass)) return;

    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
            callback(swiper);
        }
    };

    const checker = function () {
        if (breakpoint.matches) {
            return enableSwiper(swiperClass, swiperSettings);
        } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
        }
    };

    breakpoint.addEventListener('change', checker);
    checker();
};

resizableSwiper('(max-width: 768px)', '.equipment__swiper', {
    speed: 1200,
    slidesPerView: 'auto',
    spaceBetween: remToPx(0.4),
    slideToClickedSlide: true
});

document.addEventListener('DOMContentLoaded', initSliders);
