import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

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
      spaceBetween: 40,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
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
      spaceBetween: 40,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
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
      spaceBetween: 40,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
    });
  }
}

function initSliders() {
  initReviewsSliders();
  initNewsSliders();
  initDoctorsSliders();
}

document.addEventListener('DOMContentLoaded', initSliders);
