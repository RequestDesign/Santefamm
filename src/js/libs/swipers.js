import { Swiper } from 'swiper';
import { EffectFade, Navigation, Pagination, Thumbs } from 'swiper/modules';
import remToPx from '../utils/rem';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function initReviewsSliders() {
    if (document.querySelector('.reviews__swiper')) {
        const slider = document.querySelector('.reviews__swiper');
        const fractions = document.querySelector('.reviews-panel__fractions');
        const btnPrev = document.querySelector('.reviews-panel__btn-prev');
        const btnNext = document.querySelector('.reviews-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            allowTouchMove: true,
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            },
            pagination: {
                el: fractions,
                type: 'fraction'
            },
            speed: 1200,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: remToPx(2),
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: remToPx(4),
                }
            }
        });
    }
}

function initDoctorsSliders() {
    if (document.querySelector('.doctors__swiper')) {
        const slider = document.querySelector('.doctors__swiper');
        const fraction = document.querySelector('.doctors-panel__fractions')
        const btnPrev = document.querySelector('.doctors-panel__btn-prev');
        const btnNext = document.querySelector('.doctors-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            allowTouchMove: true,
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            },
            pagination: {
                el: fraction,
                type: 'fraction'
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: remToPx(2),
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: remToPx(4),
                }
            }
        });
    }
}

function initNewsSliders() {
    if (document.querySelector('.news__swiper')) {
        const slider = document.querySelector('.news__swiper');
        const fractions = document.querySelector('.news-panel__fractions');
        const btnPrev = document.querySelector('.news-panel__btn-prev');
        const btnNext = document.querySelector('.news-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            allowTouchMove: true,
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            },
            pagination: {
                el: fractions,
                type: 'fraction'
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: remToPx(2),
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: remToPx(4),
                }
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
        const fractions = document.querySelector('.palomar__panel-fractions')
        const next = document.querySelector('.palomar-button-next');
        const prev = document.querySelector('.palomar-button-prev');

        new Swiper(slider, {
            modules: [Navigation],
            speed: 1200,
            slideToClickedSlide: true,
            loop: true,
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            pagination: {
                el: fractions,
                type: 'fraction'
            },
            breakpoints: {
                0: {
                    slidesPerView: '2.2',
                    spaceBetween: remToPx(1.6)
                },
                768: {
                    slidesPerView: '3',
                    spaceBetween: remToPx(5.05)
                }
            }
        });
    }
}
function initBeforeAfterSlider() {
    if (document.querySelector('.palomar__swiper-result')) {
        const slider = document.querySelector('.palomar__swiper-result');
        const fractions = document.querySelector('.palomar__panel-fractions');
        const prevButton = document.querySelector('.palomar__result-prev');
        const nextButton = document.querySelector('.palomar__result-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            allowTouchMove: true,
            speed: 1200,
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton
            },
            pagination: {
                el: fractions,
                type: 'fraction'
            },
            breakpoints: {
                0: {
                    slidesPerView: '2',
                    spaceBetween: remToPx(1.3),
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
            slidesPerView: 'auto',
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
        const fractions = document.querySelector('.licenses__panel-fractions');
        const btnPrev = document.querySelector('.licenses__panel-prev');
        const btnNext = document.querySelector('.licenses__panel-next');

        const sliderLicense = document.querySelector('.licenses__swiper-license');

        const license = new Swiper(sliderLicense, {
            modules: [Pagination, Navigation, EffectFade],
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            loop: true,
            slidesPerView: 1,
            speed: 1200,
            pagination: {
                el: fractions,
                type: 'fraction'
            },
            breakpoints: {
                0: {
                    noSwiping: false,
                },
                768: {
                    noSwiping: true,
                    noSwipingClass: 'swiper-slide'
                }
            }
        });

        new Swiper(slider, {
            modules: [Pagination, Navigation, Thumbs],
            slidesPerView: '3',
            grabCursor: true,
            spaceBetween: remToPx(4),
            speed: 1200,
            loop: true,
            thumbs: {
                swiper: license
            },
            pagination: {
                el: fractions,
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

        const categoriesSlider = document.querySelector('.pages-info-categories-swiper');

        const categoriesSwiper = new Swiper(categoriesSlider, {
            slidesPerView: 'auto',
            speed: 1200,
            spaceBetween: remToPx(0.8)
        });

        new Swiper(slider, {
            modules: [Navigation, EffectFade, Thumbs],
            allowTouchMove: false,
            thumbs: {
                swiper: categoriesSwiper
            },
            autoHeight: true,
            slidesPerView: 1,
            loop: true,
            runCallbacksOnInit: false,
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

                    if (titlePrevIndex === -1) {
                        titlePrevIndex = slides.length - 1;
                    }
                    if (titleNextIndex === slides.length) {
                        titleNextIndex = 0;
                    }
                    function fadeIn(fade) {
                        let opacity = 0;

                        const intervalID = setInterval(function () {
                            if (opacity < 1) {
                                opacity = opacity + 0.01;
                                fade.style.opacity = opacity;
                            } else {
                                clearInterval(intervalID);
                            }
                        }, fadeSpeed);
                    }
                    function fadeOut(fade) {
                        let opacity = 1;
                        const intervalID = setInterval(function () {
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
        const fractions = document.querySelector(
            '.service-description-panel__fractions'
        );
        const btnPrev = document.querySelector('.service-description-panel__btn-prev');
        const btnNext = document.querySelector('.service-description-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation, EffectFade],
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            loop: true,
            spaceBetween: remToPx(4),
            speed: 1200,
            autoHeight: true,
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            },
            pagination: {
                el: fractions,
                type: 'fraction'
            },
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
            speed: 1200,
            slideToClickedSlide: true
        });
    }
}
function initActionSlider() {
    if (document.querySelector('.action__swiper')) {
        const slider = document.querySelector('.action__swiper');

        const next = document.querySelector('.action-button-next');
        const prev = document.querySelector('.action-button-prev');

        new Swiper(slider, {
            modules: [Navigation],
            slidesPerView: 'auto',
            speed: 1200,
            slideToClickedSlide: true,
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            breakpoints: {
                0: {
                    spaceBetween: remToPx(0.8)
                },
                768: {
                    spaceBetween: remToPx(1.6)
                }
            }
        });
    }
}
function initActionOtherSliders() {
    if (document.querySelector('.action-other__swiper')) {
        const slider = document.querySelector('.action-other__swiper');
        const fractions = document.querySelector('.action-other-panel__fractions');
        const btnPrev = document.querySelector('.action-other-panel__btn-prev');
        const btnNext = document.querySelector('.action-other-panel__btn-next');

        new Swiper(slider, {
            modules: [Pagination, Navigation],
            allowTouchMove: true,
            navigation: {
                nextEl: btnNext,
                prevEl: btnPrev
            },
            pagination: {
                el: fractions,
                type: 'fraction'
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: remToPx(2),
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: remToPx(4),
                }
            }
        });
    }
}

function initDotsSlide() {
    if (document.querySelector('.layer__content-problems-dot-swiper')) {
        $('.layer__content-problems-dot-slider').each(function (index, swiper) {
            const slider = swiper.querySelector('.layer__content-problems-dot-swiper');
            const fractions = {
                desktop: swiper.querySelector('.dots__panel.--desc .dots__panel-fractions'),
                mobile: swiper.querySelector('.dots__panel.--mob .dots__panel-fractions')
            }
            const btnPrev = swiper.querySelector('.dots__panel-prev');
            const btnNext = swiper.querySelector('.dots__panel-next');

            new Swiper(slider, {
                modules: [Pagination, Navigation, EffectFade],
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                loop: true,
                spaceBetween: remToPx(4),
                speed: 1200,
                navigation: {
                    nextEl: btnNext,
                    prevEl: btnPrev
                },
                breakpoints: {
                    0: {
                        pagination: {
                            el: fractions.mobile,
                            type: 'fraction'
                        },
                    },
                    768: {
                        pagination: {
                            el: fractions.desktop,
                            type: 'fraction'
                        },
                    }
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
    initSpecialistsSlider();
    initPagesInfoSlider();
    initDevicesSlider();
    initServiceDescriptionEqSlider();
    initBeforeAfterSlider();
    initServiceBenefitsEqSlider();
    initLicensesSlider();
    initServiceDetailedSwiper();
    initActionSlider();
    initActionOtherSliders();
    initDotsSlide();
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

resizableSwiper('(max-width: 768px)', '.doctors-swiper', {
    modules: [Pagination, Navigation],
    speed: 1200,
    slidesPerView: '1',
    spaceBetween: remToPx(2),
    pagination: {
        el: document.querySelector('.doctors-detailed-panel__fractions'),
        type: 'fraction'
    },
    navigation: {
        nextEl: document.querySelector('.doctors-detailed-panel__btn-next'),
        prevEl: document.querySelector('.doctors-detailed-panel__btn-prev')
    }
});

resizableSwiper('(max-width: 768px)', '.services-description-swiper', {
    speed: 1200,
    slidesPerView: 'auto',
    spaceBetween: remToPx(0.4),
    slideToClickedSlide: true
});

document.addEventListener('DOMContentLoaded', initSliders);
