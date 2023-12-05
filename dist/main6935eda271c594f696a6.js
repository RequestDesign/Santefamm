/*! For license information please see main6935eda271c594f696a6.js.LICENSE.txt */
(() => {
    var e = {
            './src/js/components/content.js': () => {
                if (document.querySelectorAll('[data-content-open]')) {
                    const e = document.querySelectorAll('[data-content-open]'),
                        n = document.querySelectorAll('[data-content-block]');
                    e.forEach((t) => {
                        t.addEventListener('click', function () {
                            e.forEach((e) => e.classList.remove('active')), this.classList.add('active');
                            const t = this.getAttribute('data-content-open');
                            n.forEach((e) => e.classList.remove('active')),
                                n.forEach((e) => {
                                    e.getAttribute('data-content-block') === t && e.classList.add('active');
                                });
                        });
                    });
                }
                if (document.querySelector('.js-toggles')) {
                    const e = document.querySelector('.js-toggles').querySelectorAll('button');
                    e.forEach((n) => {
                        n.addEventListener('click', function () {
                            e.forEach((e) => e.classList.remove('active')), this.classList.add('active');
                        });
                    });
                }
            },
            './src/js/components/swipers.js': (e, n, t) => {
                'use strict';
                t.r(n);
                var i = t('./node_modules/swiper/swiper.mjs'),
                    r = t('./node_modules/swiper/modules/index.mjs'),
                    s = t('./src/js/utils/rem.js');
                t('./node_modules/swiper/swiper.css'),
                    t('./node_modules/swiper/modules/navigation.css'),
                    t('./node_modules/swiper/modules/pagination.css'),
                    document.addEventListener('DOMContentLoaded', function () {
                        !(function () {
                            if (document.querySelector('.reviews__swiper')) {
                                const e = document.querySelector('.reviews__swiper'),
                                    n = document.querySelector('.reviews-panel__fractions'),
                                    t = document.querySelector('.reviews-panel__btn-prev'),
                                    a = document.querySelector('.reviews-panel__btn-next');
                                new i.default(e, {
                                    modules: [r.Pagination, r.Navigation],
                                    slidesPerView: 3,
                                    allowTouchMove: !0,
                                    spaceBetween: (0, s.default)(4),
                                    pagination: { el: n, type: 'fraction' },
                                    navigation: { nextEl: a, prevEl: t }
                                });
                            }
                        })(),
                            (function () {
                                if (document.querySelector('.news__swiper')) {
                                    const e = document.querySelector('.news__swiper'),
                                        n = document.querySelector('.news-panel__fractions'),
                                        t = document.querySelector('.news-panel__btn-prev'),
                                        a = document.querySelector('.news-panel__btn-next');
                                    new i.default(e, {
                                        modules: [r.Pagination, r.Navigation],
                                        slidesPerView: 3,
                                        allowTouchMove: !0,
                                        spaceBetween: (0, s.default)(4),
                                        pagination: { el: n, type: 'fraction' },
                                        navigation: { nextEl: a, prevEl: t }
                                    });
                                }
                            })(),
                            (function () {
                                if (document.querySelector('.doctors__swiper')) {
                                    const e = document.querySelector('.doctors__swiper'),
                                        n = document.querySelector('.doctors-panel__fractions'),
                                        t = document.querySelector('.doctors-panel__btn-prev'),
                                        a = document.querySelector('.doctors-panel__btn-next');
                                    new i.default(e, {
                                        modules: [r.Pagination, r.Navigation],
                                        slidesPerView: 2,
                                        allowTouchMove: !0,
                                        spaceBetween: (0, s.default)(4),
                                        pagination: { el: n, type: 'fraction' },
                                        navigation: { nextEl: a, prevEl: t }
                                    });
                                }
                            })();
                    });
            },
            './src/js/pages/contacts.js': () => {
                const e = 55.803929,
                    n = 37.582251;
                function t() {
                    const t = new ymaps.Map('map', { center: [e, n], zoom: 12 }),
                        i = new ymaps.Placemark(
                            [e, n],
                            {},
                            {
                                hideIconOnBalloonOpen: !1,
                                iconLayout: 'default#image',
                                iconImageHref: './assets/images/placemark.svg',
                                icon_imagesize: [54, 54]
                            }
                        );
                    var r;
                    t.geoObjects.add(i),
                        (r = t).controls.remove('geolocationControl'),
                        r.controls.remove('searchControl'),
                        r.controls.remove('trafficControl'),
                        r.controls.remove('typeSelector'),
                        r.controls.remove('rulesControl');
                }
                document.addEventListener('DOMContentLoaded', () => {
                    document.getElementById('map') && ymaps.ready(t);
                });
            },
            './src/js/utils/rem.js': (e, n, t) => {
                'use strict';
                function i(e) {
                    const n = e * parseFloat(getComputedStyle(document.documentElement).fontSize);
                    return `${Math.round(n)}px`;
                }
                t.r(n), t.d(n, { default: () => i });
            },
            './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./node_modules/swiper/modules/navigation.css':
                (e, n, t) => {
                    'use strict';
                    t.r(n), t.d(n, { default: () => o });
                    var i = t('./node_modules/css-loader/dist/runtime/sourceMaps.js'),
                        r = t.n(i),
                        s = t('./node_modules/css-loader/dist/runtime/api.js'),
                        a = t.n(s)()(r());
                    a.push([
                        e.id,
                        ':root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - var(--swiper-navigation-size) / 2);\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n\n.swiper-button-prev svg,\n.swiper-button-next svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transform-origin: center;\n}\n\n.swiper-rtl .swiper-button-prev svg,\n.swiper-rtl .swiper-button-next svg {\n  transform: rotate(180deg);\n}\n\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n\n.swiper-button-lock {\n  display: none;\n}\n\n/* Navigation font start */\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-feature-settings: ;\n  font-variant: initial;\n  line-height: 1;\n}\n\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: "prev";\n}\n\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: "next";\n}\n\n/* Navigation font end */',
                        '',
                        {
                            version: 3,
                            sources: ['webpack://./node_modules/swiper/modules/navigation.css'],
                            names: [],
                            mappings:
                                'AAAA;EACE,8BAAA;EACA;;;;GAAA;AAKF;;AACA;;EAEE,kBAAA;EACA,6CAAA;EACA,oDAAA;EACA,qCAAA;EACA,yDAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gEAAA;AAEF;;AAAA;;EAEE,aAAA;EACA,YAAA;EACA,oBAAA;AAGF;;AADA;;EAEE,UAAA;EACA,YAAA;EACA,oBAAA;AAIF;;AAFA;;EAEE,wBAAA;AAKF;;AAHA;;EAEE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,wBAAA;AAMF;;AAJA;;EAEE,yBAAA;AAOF;;AALA;;EAEE,iDAAA;EACA,WAAA;AAQF;;AANA;;EAEE,kDAAA;EACA,UAAA;AASF;;AAPA;EACE,aAAA;AAUF;;AARA,0BAAA;AACA;;EAEE,yBAAA;EACA,wCAAA;EACA,+BAAA;EACA,iBAAA;EACA,uBAAA;EAAA,qBAAA;EACA,cAAA;AAWF;;AATA;;EAEE,eAAA;AAYF;;AAVA;;EAEE,kDAAA;EACA,UAAA;AAaF;;AAXA;;EAEE,eAAA;AAcF;;AAZA,wBAAA',
                            sourcesContent: [
                                ":root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev svg,\n.swiper-button-next svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transform-origin: center;\n}\n.swiper-rtl .swiper-button-prev svg,\n.swiper-rtl .swiper-button-next svg {\n  transform: rotate(180deg);\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-lock {\n  display: none;\n}\n/* Navigation font start */\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n/* Navigation font end */\n"
                            ],
                            sourceRoot: ''
                        }
                    ]);
                    const o = a;
                },
            './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./node_modules/swiper/modules/pagination.css':
                (e, n, t) => {
                    'use strict';
                    t.r(n), t.d(n, { default: () => o });
                    var i = t('./node_modules/css-loader/dist/runtime/sourceMaps.js'),
                        r = t.n(i),
                        s = t('./node_modules/css-loader/dist/runtime/api.js'),
                        a = t.n(s)()(r());
                    a.push([
                        e.id,
                        ':root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\n\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.swiper-pagination-lock {\n  display: none;\n}',
                        '',
                        {
                            version: 3,
                            sources: ['webpack://./node_modules/swiper/modules/pagination.css'],
                            names: [],
                            mappings:
                                'AAAA;EACE;;;;;;;;;;;;;;;;;;GAAA;AAmBF;;AACA;EACE,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,+BAAA;EACA,WAAA;AAEF;;AAAA;EACE,UAAA;AAGF;;AADA;;EAEE,wBAAA;AAIF;;AAFA,kBAAA;AACA;;;;EAIE,4CAAA;EACA,uCAAA;EACA,OAAA;EACA,WAAA;AAKF;;AAHA,YAAA;AACA;EACE,gBAAA;EACA,YAAA;AAMF;;AAJA;EACE,sBAAA;EACA,kBAAA;AAOF;;AALA;EACE,mBAAA;AAQF;;AANA;EACE,mBAAA;AASF;;AAPA;EACE,sBAAA;AAUF;;AARA;EACE,sBAAA;AAWF;;AATA;EACE,sBAAA;AAYF;;AAVA;EACE,sBAAA;AAaF;;AAXA;EACE,uFAAA;EACA,yFAAA;EACA,qBAAA;EACA,iEAAA;EACA,gEAAA;EACA,8DAAA;AAcF;;AAZA;EACE,YAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,wBAAA;EACQ,gBAAA;AAeV;;AAbA;EACE,eAAA;AAgBF;;AAdA;EACE,wBAAA;AAiBF;;AAfA;EACE,mDAAA;EACA,qEAAA;AAkBF;;AAhBA;;EAEE,0CAAA;EACA,yCAAA;EACA,QAAA;EACA,oCAAA;AAmBF;;AAjBA;;EAEE,2DAAA;EACA,cAAA;AAoBF;;AAlBA;;EAEE,QAAA;EACA,2BAAA;EACA,UAAA;AAqBF;;AAnBA;;EAEE,qBAAA;EACA,sCAAA;AAsBF;;AAnBA;;EAEE,6DAAA;AAsBF;;AApBA;;EAEE,SAAA;EACA,2BAAA;EACA,mBAAA;AAuBF;;AArBA;;EAEE,uCAAA;AAwBF;;AArBA;EACE,wCAAA;AAwBF;;AArBA,aAAA;AACA;EACE,uDAAA;AAwBF;;AAtBA,aAAA;AACA;EACE,8EAAA;EACA,kBAAA;AAyBF;;AAvBA;EACE,qEAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;AA0BF;;AAxBA;EACE,2BAAA;AA2BF;;AAzBA;;;;EAIE,WAAA;EACA,sDAAA;EACA,OAAA;EACA,MAAA;AA4BF;;AA1BA;;;;EAIE,qDAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;AA6BF;;AA3BA;EACE,aAAA;AA8BF',
                            sourcesContent: [
                                ':root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform,\n        200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n        200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n    200ms right;\n}\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n'
                            ],
                            sourceRoot: ''
                        }
                    ]);
                    const o = a;
                },
            './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./node_modules/swiper/swiper.css':
                (e, n, t) => {
                    'use strict';
                    t.r(n), t.d(n, { default: () => m });
                    var i = t('./node_modules/css-loader/dist/runtime/sourceMaps.js'),
                        r = t.n(i),
                        s = t('./node_modules/css-loader/dist/runtime/api.js'),
                        a = t.n(s),
                        o = t('./node_modules/css-loader/dist/runtime/getUrl.js'),
                        l = t.n(o),
                        A = new URL(
                            t(
                                'data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA'
                            ),
                            t.b
                        ),
                        d = a()(r()),
                        c = l()(A);
                    d.push([
                        e.id,
                        `/**\n * Swiper 11.0.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 9, 2023\n */\n/* FONT_START */\n@font-face {\n  font-family: "swiper-icons";\n  src: url(${c});\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n\n.swiper-vertical {\n  touch-action: pan-x;\n}\n\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n\n.swiper-3d {\n  perspective: 1200px;\n}\n\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: "";\n  flex-shrink: 0;\n  order: 9999;\n}\n\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-left: var(--swiper-centered-offset-before);\n}\n\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-top: var(--swiper-centered-offset-before);\n}\n\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */`,
                        '',
                        {
                            version: 3,
                            sources: ['webpack://./node_modules/swiper/swiper.css'],
                            names: [],
                            mappings:
                                'AAAA;;;;;;;;;;EAAA;AAYA,eAAA;AACA;EACE,2BAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;AAAF;AAEA,aAAA;AACA;EACE,6BAAA;EACA;;;GAAA;AAGF;;AAEA;EACE,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AACF;;AACA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,UAAA;EACA,6BAAA;EACA,UAAA;EACA,cAAA;AAEF;;AAAA;EACE,sBAAA;AAGF;;AADA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;EACA,qFAAA;EACA,uBAAA;AAIF;;AAFA;;;EAGE,iCAAA;AAKF;;AAHA;EACE,mBAAA;AAMF;;AAJA;EACE,mBAAA;AAOF;;AALA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,8BAAA;EACA,cAAA;AAQF;;AANA;EACE,kBAAA;AASF;;AAPA,gBAAA;AACA;;EAEE,YAAA;AAUF;;AARA;EACE,uBAAA;EACA,sCAAA;AAWF;;AATA;EACE,wBAAA;EACA,mCAAA;EACQ,2BAAA;AAYV;;AAVA,eAAA;AACA;EACE,mBAAA;AAaF;;AAXA;EACE,4BAAA;AAcF;;AAZA;EACE,mBAAA;AAeF;;AAbA;;EAEE,4BAAA;AAgBF;;AAdA,aAAA;AACA;EACE,cAAA;EACA,qBAAA;EACA,gBAAA;EACA,wBAAA;EACA,mCAAA;AAiBF;;AAfA;EACE,aAAA;AAkBF;;AAhBA;EACE,8BAAA;AAmBF;;AAjBA;EACE,6BAAA;AAoBF;;AAlBA;EACE,6BAAA;AAqBF;;AAnBA;EACE,sBAAA;AAsBF;;AApBA;EACE,uBAAA;AAuBF;;AArBA;EACE,WAAA;EACA,cAAA;EACA,WAAA;AAwBF;;AAtBA;EACE,gCAAA;EACA,wBAAA;AAyBF;;AAvBA;EACE,iDAAA;AA0BF;;AAxBA;EACE,YAAA;EACA,eAAA;EACA,0CAAA;AA2BF;;AAzBA;EACE,gDAAA;AA4BF;;AA1BA;EACE,WAAA;EACA,cAAA;EACA,2CAAA;AA6BF;;AA3BA,uBAAA;AACA,eAAA;AACA;;;;;;;;;;EAUE,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,WAAA;AA8BF;;AA5BA;EACE,+BAAA;AA+BF;;AA7BA;EACE,gFAAA;AAgCF;;AA9BA;EACE,iFAAA;AAiCF;;AA/BA;EACE,+EAAA;AAkCF;;AAhCA;EACE,kFAAA;AAmCF;;AAjCA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,qBAAA;EACA,sBAAA;EACA,0EAAA;EACA,kBAAA;EACA,6BAAA;AAoCF;;AAlCA;;EAEE,mDAAA;AAqCF;;AAnCA;EACE,8BAAA;AAsCF;;AApCA;EACE,8BAAA;AAuCF;;AArCA;EACE;IACE,uBAAA;EAwCF;EAtCA;IACE,yBAAA;EAwCF;AACF;AAtCA,qBAAA',
                            sourcesContent: [
                                "/**\n * Swiper 11.0.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 9, 2023\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n"
                            ],
                            sourceRoot: ''
                        }
                    ]);
                    const m = d;
                },
            './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/index.scss':
                (e, n, t) => {
                    'use strict';
                    t.r(n), t.d(n, { default: () => ee });
                    var i = t('./node_modules/css-loader/dist/runtime/sourceMaps.js'),
                        r = t.n(i),
                        s = t('./node_modules/css-loader/dist/runtime/api.js'),
                        a = t.n(s),
                        o = t('./node_modules/css-loader/dist/runtime/getUrl.js'),
                        l = t.n(o),
                        A = new URL(t('./src/assets/fonts/Philosopher/Philosopher-Regular.eot'), t.b),
                        d = new URL(t('./src/assets/fonts/Philosopher/Philosopher-Regular.woff2'), t.b),
                        c = new URL(t('./src/assets/fonts/Philosopher/Philosopher-Regular.woff'), t.b),
                        m = new URL(t('./src/assets/fonts/Philosopher/Philosopher-Regular.ttf'), t.b),
                        p = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Regular.eot'), t.b),
                        u = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Regular.woff'), t.b),
                        g = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Regular.woff2'), t.b),
                        h = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Regular.ttf'), t.b),
                        f = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Medium.eot'), t.b),
                        w = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Medium.woff'), t.b),
                        b = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Medium.woff2'), t.b),
                        E = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Medium.ttf'), t.b),
                        v = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Semibold.eot'), t.b),
                        _ = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Semibold.woff'), t.b),
                        C = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Semibold.woff2'), t.b),
                        B = new URL(t('./src/assets/fonts/Gilroy/Gilroy-Semibold.ttf'), t.b),
                        y = new URL(t('./src/assets/images/bg/news-card.svg'), t.b),
                        x = new URL(t('./src/assets/images/bg/substract-news.svg'), t.b),
                        k = new URL(t('./src/assets/images/bg/review-bg.svg'), t.b),
                        S = new URL(t('./src/assets/images/bg/bg.png'), t.b),
                        M = new URL(t('./src/assets/images/bg/contact-mob-bg.png'), t.b),
                        z = new URL(t('./src/assets/images/bg/substract-map.svg'), t.b),
                        T = a()(r()),
                        I = l()(A),
                        F = l()(d),
                        G = l()(c),
                        P = l()(m),
                        j = l()(p),
                        L = l()(u),
                        D = l()(g),
                        Y = l()(h),
                        R = l()(f),
                        O = l()(w),
                        N = l()(b),
                        $ = l()(E),
                        q = l()(v),
                        W = l()(_),
                        Q = l()(C),
                        X = l()(B),
                        H = l()(y),
                        J = l()(x),
                        V = l()(k),
                        U = l()(S),
                        Z = l()(M),
                        K = l()(z);
                    T.push([
                        e.id,
                        `/* philosopher-regular - latin */\n@font-face {\n  font-family: "Philosopher";\n  src: url(${I});\n  src: local("Philosopher-Regular"), local("Philosopher-Regular"), url(${F}) format("woff2"), url(${G}) format("woff"), url(${I}) format("embedded-opentype"), url(${P}) format("truetype");\n  font-style: normal;\n  font-weight: 400;\n}\n/* Gilroy */\n@font-face {\n  font-family: "Gilroy";\n  src: url(${j});\n  src: local("Gilroy-Regular"), local("Gilroy-Regular"), url(${j}) format("embedded-opentype"), url(${L}) format("woff"), url(${D}) format("woff2"), url(${Y}) format("truetype");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Gilroy";\n  src: url(${R});\n  src: local("Gilroy-Medium"), local("Gilroy-Medium"), url(${R}) format("embedded-opentype"), url(${O}) format("woff"), url(${N}) format("woff2"), url(${$}) format("truetype");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Gilroy";\n  src: url(${q});\n  src: local("Gilroy-Semibold"), local("Gilroy-Semibold"), url(${q}) format("embedded-opentype"), url(${W}) format("woff"), url(${Q}) format("woff2"), url(${X}) format("truetype");\n  font-weight: 600;\n  font-style: normal;\n}\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n\t ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the \`main\` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on \`h1\` elements within \`section\` and\n * \`article\` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n\t ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd \`em\` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n\t ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd \`em\` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent \`sub\` and \`sup\` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n\t ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n\t ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from \`fieldset\` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    \`fieldset\` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to \`inherit\` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n\t ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n\t ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: "Gilroy", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  -webkit-text-size-adjust: 100%;\n  font-size: 0.520835vw;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Gilroy", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0;\n  color: #282828;\n  background: #e9e5fd;\n}\n\ninput,\ntextarea {\n  -webkit-animation: bugfix infinite 1s;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  color: unset;\n}\n\na,\na:hover {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n  outline: none;\n  cursor: pointer;\n  font: inherit;\n}\nbutton:focus,\ninput:focus,\na:focus,\ntextarea:focus {\n  outline: none;\n}\nbutton:active,\ninput:active,\na:active,\ntextarea:active {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: inherit;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\nbutton {\n  border: none;\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n  padding: 0;\n  background-color: inherit;\n}\n\n.btn {\n  min-width: auto;\n  min-height: auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: unset;\n  padding: 0;\n  color: unset;\n  height: auto;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  max-width: none;\n  font: inherit;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n}\n\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  list-style-type: none;\n}\n\n.container {\n  width: 172rem;\n  margin: 0 auto;\n}\n\n.hidden {\n  overflow: hidden;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n@media (max-width: 48em) {\n  html {\n    font-size: 5px;\n    font-size: 1.5625vw;\n    font-size: 1.3333333333vw;\n    -webkit-text-size-adjust: none;\n  }\n  body {\n    -webkit-text-size-adjust: none;\n  }\n  .container {\n    padding: 0 3.2rem;\n    width: 100%;\n  }\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.services-plushs__items, .akcii__item-content, .akcii__item, .akcii__items, body, .doctor-card__item, .doctor-card__desc, .contacts__time-item, .contacts__time, .footer__container {\n  display: flex;\n  flex-direction: column;\n}\n\n.services-plushs__item, .services-plushs__btn-txt, .contacts-page__connect-circle, .card-review__site, .contacts__time-title, .contacts__items, .header__gender button, .header__btns, .header__menu, .btn-secondary, .btn-primary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.reviews__titles, .card-review__info, .news__titles, .doctors__titles, .swiper-panel, .contacts__container, .footer__bottom-container, .footer__top-container, .header__phone, .header__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.services-plushs__btn, .services-plushs__btns, .contacts-page__connect-item, .footer__top-desc {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.services-desc__container, .contacts-page__container, .doctor-card {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.contacts-page__map-map {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  font-family: Philosopher, sans-serif;\n  font-size: 7rem;\n  line-height: 65.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .title {\n    font-size: 7.2rem;\n  }\n}\n\n.akcii__item-tit, .doctor-card__title {\n  font-family: Philosopher, sans-serif;\n  font-size: 3.2rem;\n  line-height: 92.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .akcii__item-tit, .doctor-card__title {\n    font-size: 4.8rem;\n  }\n}\n\n.services__item-tit, .contacts-page__connect-title, .contacts-page__time-title, .news-card__title, .swiper-panel .swiper-pagination-total, .swiper-panel, .contacts__time-title span {\n  font-family: Philosopher, sans-serif;\n  font-size: 2.8rem;\n  line-height: 65.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .services__item-tit, .contacts-page__connect-title, .contacts-page__time-title, .news-card__title, .swiper-panel .swiper-pagination-total, .swiper-panel, .contacts__time-title span {\n    font-size: 4rem;\n  }\n}\n\n.services-plushs__item-tit, .services-plushs__btn.active .services-plushs__btn-txt span, .contacts-page__connect-tit, .contacts__desc-title, .header__phone-number {\n  font-family: Gilroy, sans-serif;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 120%;\n}\n@media screen and (max-width: 48em) {\n  .services-plushs__item-tit, .services-plushs__btn.active .services-plushs__btn-txt span, .contacts-page__connect-tit, .contacts__desc-title, .header__phone-number {\n    font-size: 3.2rem;\n  }\n}\n\n.services-plushs__item-number, .contacts-page__connect-txt, .akcii__item-txt, .contacts__desc-txt {\n  font-family: Gilroy, sans-serif;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 120%;\n}\n@media screen and (max-width: 48em) {\n  .services-plushs__item-number, .contacts-page__connect-txt, .akcii__item-txt, .contacts__desc-txt {\n    font-size: 2.8rem;\n    font-weight: 500;\n  }\n}\n\n.header__item a, .btn-primary span {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 120%;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .header__item a, .btn-primary span {\n    font-size: 2.8rem;\n    font-weight: 500;\n  }\n}\n\n.services-plushs__item-txt, .services-plushs__btn-txt span, .services-desc__txt p, .contacts-page__block-desc, .contacts-page__time-txt, .card-review__date, .card-review__txt, .news-card__desc, .doctor-card__txt, .contacts__time-desc, .footer__bottom-links a, .footer__top-txt, .footer__top-item a, .header__phone-adres {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 140%;\n}\n@media screen and (max-width: 48em) {\n  .services-plushs__item-txt, .services-plushs__btn-txt span, .services-desc__txt p, .contacts-page__block-desc, .contacts-page__time-txt, .card-review__date, .card-review__txt, .news-card__desc, .doctor-card__txt, .contacts__time-desc, .footer__bottom-links a, .footer__top-txt, .footer__top-item a, .header__phone-adres {\n    font-size: 2.8rem;\n  }\n}\n\n.btn-secondary span {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: 120%;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .btn-secondary span {\n    font-size: 2.8rem;\n  }\n}\n\n.contacts-page__block-title, .contacts-page__time-tit, .card-review__name, .card-review__title, .doctor-card__tit, .contacts__time-day {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 600;\n  line-height: 120%;\n}\n@media screen and (max-width: 48em) {\n  .contacts-page__block-title, .contacts-page__time-tit, .card-review__name, .card-review__title, .doctor-card__tit, .contacts__time-day {\n    font-size: 2.8rem;\n  }\n}\n\n.doctor-card__department span {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 120%;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .doctor-card__department span {\n    font-size: 2.4rem;\n  }\n}\n\n.services-plushs__item-number, .services-plushs__btn-txt span, .services__item.active .services__item-tit, .contacts-page__block-title, .contacts-page__connect-tit, .akcii__item-txt, .doctor-card__department span, .doctor-card__title, .footer__top-item a:hover, .header__item a:hover, .btn-secondary span {\n  background: linear-gradient(284deg, #d65986 -15.39%, #a261f9 112.18%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.btn-primary {\n  border-radius: 1.8rem;\n  background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1.9rem 4rem;\n  cursor: pointer;\n  transition: background 0.3s ease-in-out;\n}\n.btn-primary span {\n  color: #ffffff;\n}\n\n.btn-secondary {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  column-gap: 1.6rem;\n}\n.btn-secondary img {\n  width: 4.4rem;\n  height: 100%;\n}\n\n.header {\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(1.5rem);\n          backdrop-filter: blur(1.5rem);\n}\n.header__container {\n  padding: 2rem 0;\n}\n.header__phone {\n  column-gap: 1.6rem;\n}\n.header__phone-icon {\n  width: 3.6rem;\n  height: 3.6rem;\n}\n.header__phone-number {\n  color: #282828;\n  margin-bottom: 0.4rem;\n}\n.header__phone-adres {\n  color: #8a8296;\n  display: block;\n}\n.header__menu {\n  column-gap: 2.8rem;\n}\n.header__item a {\n  transition: color 0.3s ease, background 0.3s ease;\n}\n.header__btns {\n  column-gap: 2.8rem;\n}\n.header__gender {\n  padding: 0.5rem;\n  background-color: #ffffff;\n  border-radius: 1.2rem;\n  display: flex;\n  column-gap: 0.2rem;\n}\n.header__gender button {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 0.8rem;\n}\n.header__gender button svg {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n.header__gender button.active {\n  background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n}\n.header__gender button.active svg path {\n  stroke: #ffffff;\n}\n\n@media screen and (max-width: 48em) {\n  .header {\n    background: none;\n  }\n  .header__container {\n    padding: 0.8rem 0;\n  }\n  .header__phone {\n    display: none;\n  }\n  .header__phone-icon {\n    width: 3.6rem;\n    height: 3.6rem;\n  }\n  .header__phone-number {\n    color: #282828;\n    margin-bottom: 0.4rem;\n  }\n  .header__phone-adres {\n    color: #8a8296;\n    display: block;\n  }\n  .header__menu .header__item {\n    display: none;\n  }\n  .header__menu .logo-santefam {\n    display: block;\n  }\n  .header__item a {\n    transition: color 0.3s ease, background 0.3s ease;\n  }\n  .header__btns {\n    display: none;\n  }\n  .header__gender {\n    padding: 0.5rem;\n    background-color: #ffffff;\n    border-radius: 1.2rem;\n    display: flex;\n    column-gap: 0.2rem;\n  }\n  .header__gender button {\n    width: 5rem;\n    height: 5rem;\n    border-radius: 0.8rem;\n  }\n  .header__gender button svg {\n    width: 2.4rem;\n    height: 2.4rem;\n  }\n  .header__gender button.active {\n    background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n  }\n  .header__gender button.active svg path {\n    stroke: #ffffff;\n  }\n  .header__tel, .header__burger {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n}\n.footer__top {\n  border-bottom: 0.1rem solid #8a8296;\n}\n.footer__top-container {\n  padding-bottom: 3.8rem;\n}\n.footer__top-menu {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 11.2rem;\n  row-gap: 2.8rem;\n}\n.footer__top-item a {\n  transition: color 0.3s ease, background 0.3s ease;\n}\n.footer__top-desc {\n  column-gap: 1.2rem;\n}\n.footer__top-desc:first-child {\n  margin-bottom: 2.4rem;\n}\n.footer__top-icon {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n.footer__bottom-container {\n  padding: 5.2rem 0 2.6rem;\n}\n.footer__bottom-links a:first-child {\n  margin-right: 4.4rem;\n}\n.footer__bottom-links a {\n  color: #8a8296;\n  display: inline-block;\n  transition: color 0.3s ease;\n}\n.footer__bottom-links a:hover {\n  color: #f3f0ff;\n}\n\n@media screen and (max-width: 48em) {\n  .footer__top {\n    border: 0;\n  }\n  .footer__top-container {\n    padding-bottom: 5.6rem;\n    flex-direction: column;\n    row-gap: 5.6rem;\n    align-items: flex-start;\n    border-bottom: 0.2rem solid #8a8296;\n  }\n  .footer__top-menu {\n    column-gap: 12rem;\n    row-gap: 3.2rem;\n  }\n  .footer__top-item a {\n    line-height: 120%;\n  }\n  .footer__top-descs {\n    display: flex;\n    flex-direction: column-reverse;\n    row-gap: 3.2rem;\n  }\n  .footer__top-desc {\n    column-gap: 2.4rem;\n  }\n  .footer__top-desc:first-child {\n    margin-bottom: 0;\n  }\n  .footer__top-icon {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .footer__bottom-container {\n    flex-direction: column;\n    padding: 5.6rem 0 4rem;\n    row-gap: 5.6rem;\n  }\n  .footer__bottom-links {\n    display: flex;\n    flex-direction: column;\n    row-gap: 5.6rem;\n    width: 100%;\n  }\n  .footer__bottom-links a:first-child {\n    margin-right: 0;\n  }\n  .footer__bottom-links a {\n    line-height: 120%;\n  }\n}\n.logo-santefam {\n  width: 7rem;\n  height: 9.3rem;\n  margin: 0 2.8rem;\n}\n.logo-request {\n  width: 14.4rem;\n  height: 3.2rem;\n}\n\n@media screen and (max-width: 48em) {\n  .logo-santefam {\n    width: 9.4rem;\n    height: 12rem;\n    margin: 0;\n  }\n  .logo-request {\n    width: 23rem;\n    height: 5.8rem;\n  }\n}\n.contacts {\n  margin-top: 20rem;\n  margin-bottom: 20rem;\n}\n.contacts__container {\n  column-gap: 11.5rem;\n}\n.contacts__item {\n  display: flex;\n  column-gap: 1.6rem;\n}\n.contacts__item:not(:last-child) {\n  margin-right: 6.8rem;\n}\n.contacts__circle {\n  background-color: #ffffff;\n  border-radius: 50%;\n  padding: 2.3rem;\n}\n.contacts__circle img {\n  width: 5.4rem;\n  height: 5.4rem;\n}\n.contacts__desc {\n  margin-top: 2.2rem;\n  max-width: 24.7rem;\n}\n.contacts__desc-title {\n  margin-bottom: 0.8rem;\n}\n.contacts__time {\n  align-items: center;\n  position: relative;\n  padding-top: 2.4rem;\n}\n.contacts__time-title {\n  border-radius: 1.8rem;\n  background: linear-gradient(284deg, #d65986 -15.39%, #a261f9 112.18%);\n  padding: 1.8rem 3.8rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  top: -0.2rem;\n  z-index: 2;\n}\n.contacts__time-title span {\n  color: #ffffff;\n}\n.contacts__time-block {\n  width: 54.7rem;\n  height: 23.7rem;\n  border-radius: 1.8rem;\n  background-color: #ffffff;\n  -webkit-backdrop-filter: blur(0.35rem);\n          backdrop-filter: blur(0.35rem);\n  display: flex;\n  justify-content: center;\n  padding-top: 6rem;\n}\n.contacts__time-item {\n  row-gap: 1.2rem;\n  align-items: center;\n  justify-content: center;\n}\n.contacts__time-item:not(:last-child) {\n  margin-bottom: 2.8rem;\n}\n.contacts__time-day {\n  line-height: 2.16rem;\n}\n.contacts__time-desc {\n  color: #8a8296;\n  line-height: 2.16rem;\n}\n\n#map .ymaps-2-1-79-map,\n#map .ymaps-2-1-79-inner-panes {\n  border-radius: 3rem;\n}\n#map .ymaps-2-1-79-controls__control {\n  top: 27rem !important;\n  right: auto !important;\n  bottom: auto !important;\n  left: 1rem !important;\n}\n\n[class*=gototech],\n[class*=copyrights-pane],\n[class*=controls__control],\n[class*=controls__toolbar],\n[class*=controls__bottom] {\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n@media screen and (min-width: 48em) {\n  #map:hover [class*=copyrights-pane],\n  #map:hover [class*=controls__control] {\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 48em) {\n  #map {\n    height: 108rem;\n    width: 100%;\n  }\n}\n.swiper-panel {\n  column-gap: 4.8rem;\n  color: #8a8296;\n}\n.swiper-panel__btn {\n  width: 6rem;\n  height: 1.8rem;\n  flex-shrink: 0;\n}\n.swiper-panel .swiper-pagination-current {\n  color: #282828;\n}\n.swiper-panel .swiper-pagination-total {\n  color: #8a8296;\n}\n\n.doctor-card {\n  border-radius: 4rem;\n  background: #f6f6f6;\n  width: 84rem;\n  height: 39.5rem;\n  column-gap: 3.2rem;\n  padding: 1.6rem 5rem 1.6rem 1.6rem;\n  position: relative;\n}\n.doctor-card:hover .doctor-card__img {\n  transform: scale(1.09);\n}\n.doctor-card__img {\n  width: 36.8rem;\n  height: 36.3rem;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n}\n.doctor-card__img img {\n  border-radius: 4rem;\n}\n.doctor-card__desc {\n  row-gap: 3.2rem;\n  margin-top: 1.6rem;\n}\n.doctor-card__item {\n  row-gap: 1rem;\n}\n.doctor-card__department {\n  padding: 0.8rem 2rem;\n  border-radius: 20rem;\n  background: #f3f0ff;\n  -webkit-backdrop-filter: blur(0.35rem);\n          backdrop-filter: blur(0.35rem);\n  position: absolute;\n  bottom: 4rem;\n  left: 4rem;\n}\n.doctors {\n  margin: 20rem 0;\n}\n.doctors__titles {\n  margin-bottom: 4.8rem;\n}\n.doctors .title {\n  margin-bottom: 0;\n}\n\n.news-card {\n  width: 54.7rem;\n  height: 53.4rem;\n  background: url(${H});\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding: 4rem 3.2rem;\n  position: relative;\n}\n.news-card__title {\n  margin-bottom: 2rem;\n  line-height: 95%;\n}\n.news-card__desc {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  color: #8a8296;\n  margin-bottom: 2rem;\n  line-height: 2.5rem;\n}\n.news-card__img {\n  border-radius: 2rem;\n  width: 48.3rem;\n  height: 28.7rem;\n}\n.news-card__img img {\n  height: 100%;\n  border-radius: 2rem;\n}\n.news-card__link {\n  background: url(${J}) no-repeat center;\n  width: 21.5rem;\n  height: 10rem;\n  background-size: contain;\n  position: absolute;\n  bottom: 3.8rem;\n  right: 3rem;\n}\n.news-card__link .btn-primary {\n  width: 17.6rem;\n  top: 3.8rem;\n  position: absolute;\n  right: 0.2rem;\n}\n\n.news {\n  margin-bottom: 20rem;\n}\n.news__titles {\n  margin-bottom: 4.8rem;\n}\n.news .title {\n  margin-bottom: 0;\n}\n\n.card-review {\n  position: relative;\n  width: 54.7rem;\n  margin-top: 1.4rem;\n}\n.card-review__desc {\n  background: url(${V});\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 4rem 3.2rem 3.2rem;\n  width: 54.7rem;\n  height: 37.2rem;\n}\n.card-review__title {\n  max-width: 30.2rem;\n  margin-bottom: 2rem;\n  line-height: 2.16rem;\n}\n.card-review__txt {\n  color: #8a8296;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 2rem;\n  line-height: 2.5rem;\n}\n.card-review__name {\n  margin-bottom: 0.4rem;\n}\n.card-review__date {\n  color: #8a8296;\n}\n.card-review__site {\n  width: 9.4rem;\n  height: 9.4rem;\n  background: #f3f2f7;\n  -webkit-backdrop-filter: blur(0.35rem);\n          backdrop-filter: blur(0.35rem);\n  border-radius: 50%;\n}\n.card-review__site img {\n  width: 8.1rem;\n  height: 6.9rem;\n}\n.card-review__link {\n  position: absolute;\n  top: -1.4rem;\n  right: 0;\n  width: 17.6rem;\n  padding-top: 1.7rem;\n  padding-bottom: 1.7rem;\n}\n\n.reviews {\n  margin: 20rem 0;\n}\n.reviews__titles {\n  margin-bottom: 4.8rem;\n}\n.reviews .title {\n  margin-bottom: 0;\n}\n\nbody {\n  min-height: 100vh;\n  position: relative;\n}\n\nmain {\n  flex: 1;\n}\n\n.title {\n  margin-bottom: 4.8rem;\n}\n\n.bg {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n\n.--desc {\n  display: block;\n}\n\n.--mob {\n  display: none;\n}\n\n@media screen and (max-width: 48em) {\n  .title {\n    margin-bottom: 6.4rem;\n  }\n  .--desc {\n    display: none;\n  }\n  .--mob {\n    display: block;\n  }\n}\n.main__bg-neit {\n  background: url(${U}) no-repeat center;\n  background-size: cover;\n}\n\n.akcii {\n  margin-bottom: 20rem;\n}\n.akcii__content {\n  position: relative;\n}\n.akcii__man, .akcii__women {\n  position: absolute;\n  bottom: 0;\n}\n.akcii__items {\n  row-gap: 0.5rem;\n}\n.akcii__item {\n  width: 100%;\n  height: 17.1rem;\n  border-radius: 4rem;\n  background: #ffffff;\n  padding: 4.5rem 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.akcii__item-content {\n  position: relative;\n  z-index: 2;\n  align-items: center;\n  justify-content: center;\n  row-gap: 1.6rem;\n  -webkit-user-select: text;\n          user-select: text;\n}\n.contacts-page {\n  margin: 5.4rem 0 20rem;\n}\n.contacts-page-bg {\n  background: url(${Z}) no-repeat center;\n  background-size: cover;\n  display: none;\n}\n.contacts-page__container {\n  column-gap: 4rem;\n}\n.contacts-page__info {\n  width: 54.7rem;\n  margin-top: 4rem;\n}\n.contacts-page__time {\n  margin-bottom: 4rem;\n}\n.contacts-page__time-title {\n  margin-bottom: 3.2rem;\n}\n.contacts-page__time-items {\n  display: flex;\n  column-gap: 4.8rem;\n}\n.contacts-page__time-tit {\n  margin-bottom: 1.2rem;\n}\n.contacts-page__time-txt {\n  color: #8a8296;\n}\n.contacts-page__connect {\n  border-radius: 1.8rem;\n  border: 0.2rem solid #ffffff;\n  background: #ffffff;\n  padding: 4rem;\n  -webkit-backdrop-filter: blur(1.5rem);\n          backdrop-filter: blur(1.5rem);\n}\n.contacts-page__connect-title {\n  margin-bottom: 3.2rem;\n}\n.contacts-page__connect-item {\n  border-radius: 1.8rem;\n  background: #f3f0ff;\n  padding: 2rem;\n  column-gap: 1.6rem;\n}\n.contacts-page__connect-item:not(:last-child) {\n  margin-bottom: 2rem;\n}\n.contacts-page__connect-circle {\n  padding: 2.3rem;\n  border-radius: 50%;\n  background: #ffffff;\n}\n.contacts-page__connect-circle img {\n  width: 5.4rem;\n  height: 5.4rem;\n}\n.contacts-page__connect-tit {\n  margin-bottom: 0.8rem;\n}\n.contacts-page__connect-txt {\n  color: #8a8296;\n}\n.contacts-page__map {\n  position: relative;\n  width: 113.3rem;\n  height: 65.3rem;\n}\n.contacts-page__map-adres {\n  background: url(${K}) no-repeat center;\n  position: absolute;\n  background-size: contain;\n  z-index: 2;\n  width: 43.3rem;\n  height: 18.9rem;\n  top: -0.5rem;\n  left: -0.1rem;\n}\n.contacts-page__map-block {\n  width: 38.4rem;\n  height: 13.2rem;\n  border-radius: 1.8rem;\n  border: 0.2rem solid #ffffff;\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(1.5rem);\n          backdrop-filter: blur(1.5rem);\n  padding: 3.8rem;\n  margin: 0.5rem 0 0 0.1rem;\n}\n.contacts-page__block-title {\n  margin-bottom: 0.8rem;\n}\n@media screen and (max-width: 48em) {\n  .contacts-page {\n    margin: 7rem 0 18rem;\n  }\n  .contacts-page-bg {\n    display: block;\n  }\n  .contacts-page__container {\n    flex-direction: column;\n    row-gap: 8rem;\n  }\n  .contacts-page__info {\n    width: 100%;\n    margin-top: 0;\n  }\n  .contacts-page__time {\n    margin-bottom: 8rem;\n  }\n  .contacts-page__time-title {\n    margin-bottom: 4rem;\n  }\n  .contacts-page__time-items {\n    column-gap: 8rem;\n  }\n  .contacts-page__time-tit {\n    margin-bottom: 1.6rem;\n  }\n  .contacts-page__time-txt {\n    font-size: 3.6rem;\n  }\n  .contacts-page__connect {\n    width: 100%;\n    border-radius: 3.6rem;\n    padding: 4rem;\n    -webkit-backdrop-filter: blur(1.5rem);\n            backdrop-filter: blur(1.5rem);\n  }\n  .contacts-page__connect-title {\n    margin-bottom: 2.2rem;\n  }\n  .contacts-page__connect-item {\n    border-radius: 3.6rem;\n    padding: 4rem;\n    column-gap: 3.2rem;\n  }\n  .contacts-page__connect-item:not(:last-child) {\n    margin-bottom: 1.6rem;\n  }\n  .contacts-page__connect-tit {\n    margin-bottom: 0.8rem;\n  }\n  .contacts-page__connect-txt {\n    color: #8a8296;\n  }\n  .contacts-page__map {\n    width: 100%;\n    height: 100%;\n  }\n  .contacts-page__map-adres {\n    background: none;\n    position: relative;\n    width: 100%;\n    height: 16.4rem;\n    top: 0;\n    left: 0;\n    margin-bottom: 4.8rem;\n  }\n  .contacts-page__map-block {\n    width: 100%;\n    height: 100%;\n    border-radius: 3.6rem;\n    -webkit-backdrop-filter: blur(3rem);\n            backdrop-filter: blur(3rem);\n    padding: 4rem;\n    border-width: 0.4rem;\n    margin: 0;\n  }\n}\n.services-desc {\n  margin-top: 20rem;\n}\n.services-desc__container {\n  column-gap: 4rem;\n}\n.services-desc__title {\n  margin-top: 1.4rem;\n  flex: 0 0 69.3rem;\n}\n.services-desc__txt p {\n  color: #8a8296;\n}\n\n.services {\n  margin-top: 4.8rem;\n}\n.services__items {\n  display: grid;\n  grid-template-columns: repeat(172, 1rem);\n}\n.services__item {\n  border-radius: 5rem;\n  border: 0.2rem solid #ffffff;\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(1.5rem);\n          backdrop-filter: blur(1.5rem);\n  padding: 4rem;\n  display: flex;\n  position: relative;\n}\n.services__item-tit {\n  line-height: 110%;\n}\n.services__item-img {\n  position: absolute;\n}\n.services__items--five {\n  grid-template-rows: repeat(65, 1rem);\n}\n.services__items--five .services__item__tit {\n  max-width: 26rem;\n}\n.services__items--five .services__item:nth-child(1) {\n  grid-column: 1/74;\n  grid-row: 1/38;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(1) .services__item-img {\n  width: 49.2rem;\n  height: 32.8rem;\n  top: 3rem;\n  right: 0;\n}\n.services__items--five .services__item:nth-child(2) {\n  grid-column: 74/175;\n  grid-row: 1/32;\n  margin-bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(2) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(3) {\n  grid-column: 1/70;\n  grid-row: 38/66;\n}\n.services__items--five .services__item:nth-child(3) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(4) {\n  grid-column: 74/118;\n  grid-row: 32/66;\n  margin-right: 4rem;\n}\n.services__items--five .services__item:nth-child(4) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(5) {\n  grid-column: 118/173;\n  grid-row: 32/66;\n}\n.services__items--five .services__item:nth-child(5) .services__item-img {\n  width: 28.6rem;\n  height: 37.5rem;\n  right: 3rem;\n  bottom: 0;\n}\n.services__items--six {\n  grid-template-rows: repeat(65, 1rem);\n}\n.services__items--six .services__item__tit {\n  max-width: 26rem;\n}\n.services__items--six .services__item:nth-child(1) {\n  grid-column: 1/60;\n  grid-row: 1/38;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(1) .services__item-img {\n  width: 49.2rem;\n  height: 32.8rem;\n  top: 3rem;\n  right: 0;\n}\n.services__items--six .services__item:nth-child(2) {\n  grid-column: 60/119;\n  grid-row: 1/32;\n  margin-bottom: 4rem;\n  margin-right: 4rem;\n}\n.services__items--six .services__item:nth-child(2) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(3) {\n  grid-column: 119/175;\n  grid-row: 1/32;\n  margin-bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(3) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(4) {\n  grid-column: 1/60;\n  grid-row: 38/66;\n  margin-right: 4rem;\n}\n.services__items--six .services__item:nth-child(4) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(5) {\n  grid-column: 60/104;\n  grid-row: 32/66;\n  margin-right: 4rem;\n}\n.services__items--six .services__item:nth-child(5) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(6) {\n  grid-column: 104/173;\n  grid-row: 32/66;\n}\n.services__items--six .services__item:nth-child(6) .services__item-img {\n  width: 28.6rem;\n  height: 37.5rem;\n  right: 3rem;\n  bottom: 0;\n}\n.services__items--seven {\n  grid-template-rows: repeat(68, 1rem);\n}\n.services__items--seven .services__item__tit {\n  max-width: 26rem;\n}\n.services__items--seven .services__item:nth-child(1) {\n  grid-column: 1/60;\n  grid-row: 1/38;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(1) .services__item-img {\n  width: 49.2rem;\n  height: 32.8rem;\n  top: 3rem;\n  right: 0;\n}\n.services__items--seven .services__item:nth-child(2) {\n  grid-column: 60/119;\n  grid-row: 1/26;\n  margin-bottom: 4rem;\n  margin-right: 4rem;\n}\n.services__items--seven .services__item:nth-child(2) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(3) {\n  grid-column: 119/175;\n  grid-row: 1/26;\n  margin-bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(3) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(4) {\n  grid-column: 60/175;\n  grid-row: 26/48;\n  margin-bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(4) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(5) {\n  grid-column: 1/60;\n  grid-row: 38/69;\n  margin-right: 4rem;\n}\n.services__items--seven .services__item:nth-child(5) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(6) {\n  grid-column: 60/119;\n  grid-row: 48/69;\n  margin-right: 4rem;\n}\n.services__items--seven .services__item:nth-child(6) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(7) {\n  grid-column: 119/173;\n  grid-row: 48/69;\n}\n.services__items--seven .services__item:nth-child(7) .services__item-img {\n  width: 18.8rem;\n  height: 24.6rem;\n  right: 6rem;\n  bottom: 0;\n}\n.services__items--eight {\n  grid-template-rows: repeat(90, 1rem);\n}\n.services__items--eight .services__item__tit {\n  max-width: 26rem;\n}\n.services__items--eight .services__item:nth-child(1) {\n  grid-column: 1/60;\n  grid-row: 1/48;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(1) .services__item-img {\n  width: 49.2rem;\n  height: 32.8rem;\n  top: 12.7rem;\n  left: 10.8rem;\n}\n.services__items--eight .services__item:nth-child(2) {\n  grid-column: 60/119;\n  grid-row: 1/26;\n  margin-bottom: 4rem;\n  margin-right: 4rem;\n}\n.services__items--eight .services__item:nth-child(2) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(3) {\n  grid-column: 119/175;\n  grid-row: 1/26;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(3) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(4) {\n  grid-column: 60/175;\n  grid-row: 26/48;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(4) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(5) {\n  grid-column: 1/60;\n  grid-row: 48/73;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(5) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(6) {\n  grid-column: 60/119;\n  grid-row: 48/73;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(6) .services__item-img {\n  width: 18.8rem;\n  height: 24.6rem;\n  right: 6rem;\n  bottom: 0;\n}\n.services__items--eight .services__item:nth-child(7) {\n  grid-column: 119/173;\n  grid-row: 48/91;\n}\n.services__items--eight .services__item:nth-child(7) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(8) {\n  grid-column: 1/115;\n  grid-row: 73/91;\n}\n.services__items--eight .services__item:nth-child(8) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n\n.services-plushs {\n  margin-top: 20rem;\n}\n.services-plushs__btns {\n  column-gap: 4rem;\n  margin-bottom: 4.8rem;\n}\n.services-plushs__btn.active .services-plushs__btn-txt {\n  background: #ffffff;\n}\n.services-plushs__btn-img {\n  width: 13.7rem;\n  height: 6rem;\n  border-radius: 20rem;\n}\n.services-plushs__btn-txt {\n  height: 6rem;\n  border-radius: 4rem;\n  border: 0.2rem solid #ffffff;\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(1.5rem);\n          backdrop-filter: blur(1.5rem);\n  padding: 0 2rem;\n}\n.services-plushs__items {\n  display: none;\n}\n.services-plushs__items.active {\n  display: flex;\n}\n.services-plushs__item {\n  column-gap: 4rem;\n  padding: 2.4rem 0;\n  border-bottom: 0.2rem solid #ffffff;\n}\n.services-plushs__item-number {\n  flex: 0 0 10.6rem;\n}\n.services-plushs__item-tit {\n  flex: 0 0 54.6rem;\n  color: #282828;\n}\n.services-plushs__item-txt {\n  flex: 0 0 78.1rem;\n  color: #8a8296;\n}\n.services-plushs__item-btn {\n  flex: 0 0 16.5rem;\n}`,
                        '',
                        {
                            version: 3,
                            sources: [
                                'webpack://./src/scss/_fonts.scss',
                                'webpack://./src/index.scss',
                                'webpack://./src/scss/libs/_normalize.scss',
                                'webpack://./src/scss/libs/_set.scss',
                                'webpack://./src/scss/utils/_flexs.scss',
                                'webpack://./src/scss/utils/_mixins.scss',
                                'webpack://./src/scss/utils/_texts.scss',
                                'webpack://./src/scss/utils/_colors.scss',
                                'webpack://./src/scss/components/_btns.scss',
                                'webpack://./src/scss/components/_header.scss',
                                'webpack://./src/scss/components/_footer.scss',
                                'webpack://./src/scss/utils/_transitions.scss',
                                'webpack://./src/scss/components/_logo.scss',
                                'webpack://./src/scss/components/_contacts.scss',
                                'webpack://./src/scss/components/_map.scss',
                                'webpack://./src/scss/components/_swiper-panel.scss',
                                'webpack://./src/scss/components/doctors/_doctors-card.scss',
                                'webpack://./src/scss/components/doctors/_doctors.scss',
                                'webpack://./src/scss/components/news/_news-card.scss',
                                'webpack://./src/scss/components/news/_news.scss',
                                'webpack://./src/scss/components/reviews/_reviews-card.scss',
                                'webpack://./src/scss/components/reviews/_reviews.scss',
                                'webpack://./src/scss/_style.scss',
                                'webpack://./src/scss/pages/main/_index.scss',
                                'webpack://./src/scss/pages/main/_akcii.scss',
                                'webpack://./src/scss/pages/contacts/_index.scss',
                                'webpack://./src/scss/pages/services/_desc.scss',
                                'webpack://./src/scss/pages/services/_items.scss',
                                'webpack://./src/scss/pages/services/_plushs.scss'
                            ],
                            names: [],
                            mappings:
                                'AAAA,gCAAA;AACA;EACE,0BAAA;EACA,4CAAA;EACA,iTACE;EAMF,kBAAA;EACA,gBAAA;ACLF;ADQA,WAAA;AACA;EACE,qBAAA;EACA,4CAAA;EACA,uSACE;EAMF,gBAAA;EACA,kBAAA;ACZF;ADeA;EACE,qBAAA;EACA,4CAAA;EACA,uSACE;EAMF,gBAAA;EACA,kBAAA;ACnBF;ADsBA;EACE,qBAAA;EACA,6CAAA;EACA,6SACE;EAMF,gBAAA;EACA,kBAAA;AC1BF;AC7BA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA;EACA,MAAA;EACA,8BAAA;EACA,MAAA;AD4BF;;ACzBA;8EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;AD0BF;;ACvBA;;EAAA;AAIA;EACE,cAAA;ADyBF;;ACtBA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;ADwBF;;ACrBA;8EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA;EACA,MAAA;EACA,SAAA;EACA,MAAA;EACA,iBAAA;EACA,MAAA;ADsBF;;ACnBA;;;EAAA;AAKA;EACE,iCAAA;EACA,MAAA;EACA,cAAA;EACA,MAAA;ADqBF;;AClBA;8EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;ADmBF;;AChBA;;;EAAA;AAKA;EACE,mBAAA;EACA,MAAA;EACA,kCAAA;EAAA,0BAAA;EACA,MAAA;EACA,0BAAA;EAAA,yCAAA;UAAA,iCAAA;EACA,MAAA;ADkBF;;ACfA;;EAAA;AAIA;;EAEE,mBAAA;ADiBF;;ACdA;;;EAAA;AAKA;;;EAGE,iCAAA;EACA,MAAA;EACA,cAAA;EACA,MAAA;ADgBF;;ACbA;;EAAA;AAIA;EACE,cAAA;ADeF;;ACZA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ADcF;;ACXA;EACE,eAAA;ADcF;;ACXA;EACE,WAAA;ADcF;;ACXA;8EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;ADYF;;ACTA;8EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA;EACA,MAAA;EACA,eAAA;EACA,MAAA;EACA,iBAAA;EACA,MAAA;EACA,SAAA;EACA,MAAA;ADUF;;ACPA;;;EAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ADSF;;ACNA;;;EAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ADQF;;ACLA;;EAAA;AAIA;;;;EAIE,0BAAA;ADOF;;ACJA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;ADMF;;ACHA;;EAAA;AAIA;;;;EAIE,8BAAA;ADKF;;ACFA;;EAAA;AAIA;EACE,8BAAA;ADIF;;ACDA;;;;;EAAA;AAOA;EACE,sBAAA;EACA,MAAA;EACA,cAAA;EACA,MAAA;EACA,cAAA;EACA,MAAA;EACA,eAAA;EACA,MAAA;EACA,UAAA;EACA,MAAA;EACA,mBAAA;EACA,MAAA;ADGF;;ACAA;;EAAA;AAIA;EACE,wBAAA;ADEF;;ACCA;;EAAA;AAIA;EACE,cAAA;ADCF;;ACEA;;;EAAA;AAKA;;EAEE,sBAAA;EACA,MAAA;EACA,UAAA;EACA,MAAA;ADAF;;ACGA;;EAAA;AAIA;;EAEE,YAAA;ADDF;;ACIA;;;EAAA;AAKA;EACE,6BAAA;EACA,MAAA;EACA,oBAAA;EACA,MAAA;ADFF;;ACKA;;EAAA;AAIA;EACE,wBAAA;ADHF;;ACMA;;;EAAA;AAKA;EACE,0BAAA;EACA,MAAA;EACA,aAAA;EACA,MAAA;ADJF;;ACOA;8EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;ADNF;;ACSA;;EAAA;AAIA;EACE,kBAAA;ADPF;;ACUA;8EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;ADTF;;ACYA;;EAAA;AAIA;EACE,aAAA;ADVF;;AE/WA;;;EAGE,sBAAA;AFkXF;;AE/WA;EACE,iCAAA;EACA,gBAAA;EACA,kBAAA;EACA,8BAAA;EACA,qBAAA;EACA,qCAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;AFkXF;;AE/WA;EACE,iCAAA;EACA,gBAAA;EACA,kBAAA;EACA,qCAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,mBAAA;AFkXF;;AE/WA;;EAEE,qCAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;AFkXF;;AE/WA;EACE,YAAA;AFkXF;;AE/WA;;EAEE,6BAAA;EAAA,qBAAA;AFkXF;;AE/WA;;;;EAIE,aAAA;EACA,eAAA;EACA,aAAA;AFkXF;AEhXE;;;;EACE,aAAA;AFqXJ;AElXE;;;;EACE,aAAA;AFuXJ;;AEnXA;;;;;;EAME,aAAA;EACA,SAAA;EACA,UAAA;AFsXF;;AEnXA;EACE,aAAA;EACA,gBAAA;AFsXF;;AEnXA;EACE,WAAA;EACA,YAAA;EACA,cAAA;AFsXF;;AEnXA;EACE,YAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,yBAAA;AFsXF;;AEnXA;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,uBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;AFsXF;;AEnXA;EACE,UAAA;EACA,SAAA;AFsXF;;AEnXA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;AFsXF;;AEnXA;EACE,qBAAA;AFsXF;;AEnXA;EACE,aAAA;EACA,cAAA;AFsXF;;AEnXA;EACE,gBAAA;AFsXF;;AEnXA;;EAEE,wBAAA;EACA,SAAA;AFsXF;;AEnXA;EACE,0BAAA;AFsXF;;AEnXA;EACE;IACE,cAAA;IACA,mBAAA;IACA,yBAAA;IACA,8BAAA;EFsXF;EEnXA;IACE,8BAAA;EFqXF;EElXA;IACE,iBAAA;IACA,WAAA;EFoXF;AACF;AEjXA;EACE,UAAA;EACA,SAAA;EACA,SAAA;AFmXF;;AG3hBA;EACE,aAAA;EACA,sBAAA;AH8hBF;;AG3hBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AH8hBF;;AG3hBA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AH8hBF;;AG/gBA;EACE,aAAA;EACA,mBAAA;EACA,2BAAA;AHkhBF;;AG/gBA;EACE,aAAA;EACA,uBAAA;EACA,8BAAA;AHkhBF;;AIthBA;EACE,WAAA;EACA,YAAA;AJyhBF;;AK7jBA;EACE,oCAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;ALgkBF;AK9jBE;EAPF;IAQI,iBAAA;ELikBF;AACF;;AK9jBA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;ALikBF;AK/jBE;EAPF;IAQI,iBAAA;ELkkBF;AACF;;AK/jBA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;ALkkBF;AKhkBE;EAPF;IAQI,eAAA;ELmkBF;AACF;;AKhkBA;EACE,+BAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;ALmkBF;AKjkBE;EANF;IAOI,iBAAA;ELokBF;AACF;;AKjkBA;EACE,+BAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;ALokBF;AKlkBE;EANF;IAOI,iBAAA;IACA,gBAAA;ELqkBF;AACF;;AKlkBA;EACE,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;ALqkBF;AKnkBE;EAPF;IAQI,iBAAA;IACA,gBAAA;ELskBF;AACF;;AKnkBA;EACE,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;ALskBF;AKpkBE;EANF;IAOI,iBAAA;ELukBF;AACF;;AKpkBA;EACE,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;ALukBF;AKrkBE;EAPF;IAQI,iBAAA;ELwkBF;AACF;;AKrkBA;EACE,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;ALwkBF;AKtkBE;EANF;IAOI,iBAAA;ELykBF;AACF;;AKtkBA;EACE,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;ALykBF;AKvkBE;EAPF;IAQI,iBAAA;EL0kBF;AACF;;AKhkBA;EACE,qEC9He;ED+Hf,qBAAA;EACA,6BAAA;EACA,oCAAA;ALmkBF;;AOpsBA;EAEE,qBAAA;EACA,iEAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,oBAAA;EACA,eAAA;EACA,uCAAA;APssBF;AOpsBE;EAEE,cDTI;AN8sBR;;AOjsBA;EAEE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,eAAA;EACA,kBAAA;APmsBF;AO5rBE;EHzBA,aG0BiB;EHzBjB,YGyByB;AP+rB3B;;AQ1tBA;EACE,oCAAA;EACA,qCAAA;UAAA,6BAAA;AR6tBF;AQ3tBE;EAEE,eAAA;AR4tBJ;AQztBE;EAEE,kBAAA;AR0tBJ;AQvtBE;EJbA,aIciB;EJbjB,cIayB;AR0tB3B;AQvtBE;EAEE,cFnBI;EEoBJ,qBAAA;ARwtBJ;AQrtBE;EAEE,cFtBG;EEuBH,cAAA;ARstBJ;AQntBE;EAEE,kBAAA;ARotBJ;AQhtBI;EAEE,iDAAA;ARitBN;AQzsBE;EAEE,kBAAA;AR0sBJ;AQvsBE;EACE,eAAA;EACA,yBFnDI;EEoDJ,qBAAA;EACA,aAAA;EACA,kBAAA;ARysBJ;AQvsBI;EJzDF,WI0DmB;EJzDnB,YIyDyB;EAErB,qBAAA;ARysBN;AQvsBM;EJ9DJ,aI+DqB;EJ9DrB,cI8D6B;AR0sB/B;AQvsBM;EACE,iEAAA;ARysBR;AQvsBQ;EACE,eFrEF;AN8wBR;;AQlsBA;EACE;IACE,gBAAA;ERqsBF;EQnsBE;IACE,iBAAA;ERqsBJ;EQlsBE;IACE,aAAA;ERosBJ;EQjsBE;IJzFF,aI0FmB;IJzFnB,cIyF2B;ERosB3B;EQjsBE;IAEE,cF/FE;IEgGF,qBAAA;ERksBJ;EQ/rBE;IAEE,cFlGC;IEmGD,cAAA;ERgsBJ;EQ5rBI;IACE,aAAA;ER8rBN;EQ5rBI;IACE,cAAA;ER8rBN;EQzrBI;IAEE,iDAAA;ER0rBN;EQlrBE;IACE,aAAA;ERorBJ;EQjrBE;IACE,eAAA;IACA,yBFlIE;IEmIF,qBAAA;IACA,aAAA;IACA,kBAAA;ERmrBJ;EQjrBI;IJxIJ,WIyIqB;IJxIrB,YIwI2B;IAErB,qBAAA;ERmrBN;EQjrBM;IJ7IN,aI8IuB;IJ7IvB,cI6I+B;ERorB/B;EQjrBM;IACE,iEAAA;ERmrBR;EQjrBQ;IACE,eFpJJ;ENu0BN;EQ7qBE;IJ3JF,aI6JmB;IJ5JnB,cI4J2B;ER+qB3B;AACF;ASz0BE;EACE,mCAAA;AT20BJ;ASx0BE;EAEE,sBAAA;ATy0BJ;ASt0BE;EACE,aAAA;EACA,8BAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;ATw0BJ;ASp0BI;EAEE,iDAAA;ATq0BN;AS7zBE;EAME,kBAAA;AT0zBJ;AS/zBI;EACE,qBAAA;ATi0BN;AS1zBE;ELzCA,aK0CiB;ELzCjB,cKyCyB;AT6zB3B;AStzBE;EAEE,wBAAA;ATuzBJ;ASnzBI;EACE,oBAAA;ATqzBN;ASnzBI;EAEE,cHzDC;EG0DD,qBAAA;EACA,2BC/DY;AVm3BlB;ASlzBM;EACE,cH5DM;ANg3Bd;;AS9yBA;EAEI;IACE,SAAA;ETgzBJ;ES7yBE;IACE,sBAAA;IACA,sBAAA;IACA,eAAA;IACA,uBAAA;IACA,mCAAA;ET+yBJ;ES5yBE;IACE,iBAAA;IACA,eAAA;ET8yBJ;ES1yBI;IACE,iBAAA;ET4yBN;ESxyBE;IACE,aAAA;IACA,8BAAA;IACA,eAAA;ET0yBJ;ESvyBE;IAKE,kBAAA;ETqyBJ;ESzyBI;IACE,gBAAA;ET2yBN;ESryBE;IL9GF,aK+GmB;IL9GnB,cK8G2B;ETwyB3B;ESjyBE;IACE,sBAAA;IACA,sBAAA;IACA,eAAA;ETmyBJ;EShyBE;IACE,aAAA;IACA,sBAAA;IACA,eAAA;IACA,WAAA;ETkyBJ;EShyBI;IACE,eAAA;ETkyBN;ES/xBI;IACE,iBAAA;ETiyBN;AACF;AWz6BE;EPAA,WOCiB;EPAjB,cAAA;EOCE,gBAAA;AX46BJ;AWz6BE;EPLA,cOMiB;EPLjB,cOK0B;AX46B5B;;AWx6BA;EAEI;IPZF,aOamB;IPZnB,aOY2B;IACvB,SAAA;EX26BJ;EWx6BE;IPjBF,YOkBmB;IPjBnB,cOiB0B;EX26B1B;AACF;AY/7BA;EACE,iBAAA;EACA,oBAAA;AZi8BF;AY/7BE;EAEE,mBAAA;AZg8BJ;AYz7BE;EACE,aAAA;EACA,kBAAA;AZ27BJ;AYz7BI;EACE,oBAAA;AZ27BN;AYv7BE;EACE,yBNrBI;EMsBJ,kBAAA;EACA,eAAA;AZy7BJ;AYv7BI;ER1BF,aQ2BmB;ER1BnB,cQ0B2B;AZ07B7B;AYt7BE;EACE,kBAAA;EACA,kBAAA;AZw7BJ;AYr7BE;EAEE,qBAAA;AZs7BJ;AY/6BE;EAEE,mBAAA;EACA,kBAAA;EACA,mBAAA;AZg7BJ;AY76BE;EAEE,qBAAA;EACA,qEAAA;EACA,sBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;AZ86BJ;AY56BI;EAEE,cN/DE;AN4+BR;AYz6BE;ERpEA,cQqEiB;ERpEjB,eQoE0B;EACxB,qBAAA;EACA,yBNtEI;EMuEJ,sCAAA;UAAA,8BAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;AZ46BJ;AYz6BE;EAEE,eAAA;EACA,mBAAA;EACA,uBAAA;AZ06BJ;AYx6BI;EACE,qBAAA;AZ06BN;AYt6BE;EAEE,oBAAA;AZu6BJ;AYp6BE;EAEE,cN7FG;EM8FH,oBAAA;AZq6BJ;;AatgCE;;EAEE,mBAAA;AbygCJ;AatgCE;EACE,qBAAA;EAAA,sBAAA;EAAA,uBAAA;EAAA,qBAAA;AbwgCJ;;AapgCA;;;;;EAKE,UAAA;EACA,oCAAA;AbugCF;;AapgCA;EACE;;IAEE,UAAA;EbugCF;AACF;AapgCA;EACE;IACE,cAAA;IACA,WAAA;EbsgCF;AACF;AcriCA;EAEE,kBAAA;EACA,cRCK;ANqiCP;AcniCE;EVLA,WUMiB;EVLjB,cUKuB;EACrB,cAAA;AdsiCJ;AcniCE;EACE,cRXI;ANgjCR;AcliCE;EACE,cRZG;ANgjCP;;AepjCA;EACE,mBAAA;EACA,mBTCW;EFFX,YWEe;EXDf,eWCsB;EAEtB,kBAAA;EACA,kCAAA;EACA,kBAAA;AfujCF;AepjCI;EACE,sBAAA;AfsjCN;AeljCE;EXdA,cWeiB;EXdjB,eWc0B;EACxB,cAAA;EACA,+BLXkB;AVgkCtB;AenjCI;EACE,mBAAA;AfqjCN;AejjCE;EAEE,eAAA;EACA,kBAAA;AfkjCJ;Ae1iCE;EAEE,aAAA;Af2iCJ;Ae9hCE;EACE,oBAAA;EACA,oBAAA;EACA,mBAAA;EACA,sCAAA;UAAA,8BAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;AfgiCJ;AgB1lCA;EACE,eAAA;AhB4lCF;AgB1lCE;EAEE,qBAAA;AhB2lCJ;AgBxlCE;EACE,gBAAA;AhB0lCJ;;AiBnmCA;EbCE,cAAA;EACA,eaDwB;EACxB,oDAAA;EACA,4BAAA;EACA,wBAAA;EACA,oBAAA;EACA,kBAAA;AjBumCF;AiBrmCE;EAEE,mBAAA;EACA,gBAAA;AjBsmCJ;AiBnmCE;EAEE,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;EACA,cXhBG;EWiBH,mBAAA;EACA,mBAAA;AjBomCJ;AiBjmCE;EACE,mBAAA;EbzBF,ca0BiB;EbzBjB,eayB0B;AjBomC5B;AiBlmCI;EACE,YAAA;EACA,mBAAA;AjBomCN;AiBhmCE;EACE,qEAAA;EbnCF,caoCiB;EbnCjB,aamC0B;EACxB,wBAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;AjBmmCJ;AiBjmCI;EACE,cAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;AjBmmCN;;AkBlpCA;EACE,oBAAA;AlBqpCF;AkBnpCE;EAEE,qBAAA;AlBopCJ;AkBjpCE;EACE,gBAAA;AlBmpCJ;;AmB5pCA;EACE,kBAAA;EACA,cAAA;EACA,kBAAA;AnB+pCF;AmB7pCE;EACE,oDAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;EfRF,ceSiB;EfRjB,eeQ0B;AnBgqC5B;AmB7pCE;EAEE,kBAAA;EACA,mBAAA;EACA,oBAAA;AnB8pCJ;AmB3pCE;EAEE,cblBG;EamBH,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AnB4pCJ;AmBrpCE;EAEE,qBAAA;AnBspCJ;AmBnpCE;EAEE,cbtCG;AN0rCP;AmBjpCE;Ef5CA,ae8CiB;Ef7CjB,ce6CyB;EACvB,mBAAA;EACA,sCAAA;UAAA,8BAAA;EACA,kBAAA;AnBmpCJ;AmBjpCI;EfnDF,aeoDmB;EfnDnB,cemD2B;AnBopC7B;AmBhpCE;EACE,kBAAA;EACA,YAAA;EACA,QAAA;EACA,cAAA;EACA,mBAAA;EACA,sBAAA;AnBkpCJ;;AoBjtCA;EACE,eAAA;ApBotCF;AoBltCE;EAEE,qBAAA;ApBmtCJ;AoBhtCE;EACE,gBAAA;ApBktCJ;;AqB3tCA;EAEE,iBAAA;EACA,kBAAA;ArB6tCF;;AqB1tCA;EACE,OAAA;ArB6tCF;;AqB1tCA;EAEE,qBAAA;ArB4tCF;;AqBztCA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;ArB4tCF;;AqBztCA;EACE,cAAA;ArB4tCF;;AqBztCA;EACE,aAAA;ArB4tCF;;AqBztCA;EACE;IACE,qBAAA;ErB4tCF;EqBztCA;IACE,aAAA;ErB2tCF;EqBxtCA;IACE,cAAA;ErB0tCF;AACF;AsBnwCE;EACE,qEAAA;EACA,sBAAA;AtBqwCJ;;AuBxwCA;EACE,oBAAA;AvB2wCF;AuBzwCE;EACE,kBAAA;AvB2wCJ;AuBxwCE;EAEE,kBAAA;EACA,SAAA;AvBywCJ;AuBtwCE;EAEE,eAAA;AvBuwCJ;AuBpwCE;EnBjBA,WmBmBiB;EnBlBjB,emBkBuB;EACrB,mBAAA;EACA,mBjBpBI;EiBqBJ,iBAAA;EACA,yBAAA;UAAA,iBAAA;AvBswCJ;AuBnwCE;EACE,kBAAA;EACA,UAAA;EAEA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,yBAAA;UAAA,iBAAA;AvBowCJ;AwBtyCA;EACE,sBAAA;AxBwyCF;AwBtyCE;EACE,qEAAA;EACA,sBAAA;EACA,aAAA;AxBwyCJ;AwBryCE;EAEE,gBAAA;AxBsyCJ;AwBnyCE;EACE,cAAA;EACA,gBAAA;AxBqyCJ;AwBlyCE;EACE,mBAAA;AxBoyCJ;AwBjyCE;EAEE,qBAAA;AxBkyCJ;AwB/xCE;EACE,aAAA;EACA,kBAAA;AxBiyCJ;AwB9xCE;EAEE,qBAAA;AxB+xCJ;AwB5xCE;EAEE,clBpCG;ANi0CP;AwB1xCE;EACE,qBAAA;EACA,4BAAA;EACA,mBlB5CI;EkB6CJ,aAAA;EACA,qCAAA;UAAA,6BAAA;AxB4xCJ;AwBzxCE;EAEE,qBAAA;AxB0xCJ;AwBvxCE;EACE,qBAAA;EACA,mBlBpDU;EkBqDV,aAAA;EAEA,kBAAA;AxBwxCJ;AwBtxCI;EACE,mBAAA;AxBwxCN;AwBpxCE;EAEE,eAAA;EACA,kBAAA;EACA,mBlBtEI;AN21CR;AwBnxCI;EpBzEF,aoB0EmB;EpBzEnB,coByE2B;AxBsxC7B;AwBlxCE;EAGE,qBAAA;AxBkxCJ;AwB/wCE;EAEE,clBnFG;ANm2CP;AwB7wCE;EACE,kBAAA;EpB1FF,eoB2FiB;EpB1FjB,eoB0F2B;AxBgxC7B;AwBzwCE;EACE,qEAAA;EACA,kBAAA;EACA,wBAAA;EACA,UAAA;EpBtGF,coBuGiB;EpBtGjB,eoBsG0B;EACxB,YAAA;EACA,aAAA;AxB4wCJ;AwBzwCE;EpB5GA,coB6GiB;EpB5GjB,eoB4G0B;EACxB,qBAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;UAAA,6BAAA;EACA,eAAA;EACA,yBAAA;AxB4wCJ;AwBzwCE;EAGE,qBAAA;AxBywCJ;AwBjwCA;EACE;IACE,oBAAA;ExBmwCF;EwBjwCE;IACE,cAAA;ExBmwCJ;EwBhwCE;IACE,sBAAA;IACA,aAAA;ExBkwCJ;EwB/vCE;IACE,WAAA;IACA,aAAA;ExBiwCJ;EwB9vCE;IACE,mBAAA;ExBgwCJ;EwB7vCE;IACE,mBAAA;ExB+vCJ;EwB5vCE;IACE,gBAAA;ExB8vCJ;EwB3vCE;IACE,qBAAA;ExB6vCJ;EwB1vCE;IACE,iBAAA;ExB4vCJ;EwBzvCE;IACE,WAAA;IACA,qBAAA;IACA,aAAA;IACA,qCAAA;YAAA,6BAAA;ExB2vCJ;EwBxvCE;IACE,qBAAA;ExB0vCJ;EwBvvCE;IACE,qBAAA;IACA,aAAA;IACA,kBAAA;ExByvCJ;EwBvvCI;IACE,qBAAA;ExByvCN;EwBrvCE;IAGE,qBAAA;ExBqvCJ;EwBlvCE;IAEE,clBjMC;ENo7CL;EwBhvCE;IpBvMF,WoBwMmB;IpBvMnB,YoBuMyB;ExBmvCzB;EwB5uCE;IACE,gBAAA;IACA,kBAAA;IpBjNJ,WoBkNmB;IpBjNnB,eoBiNyB;IACrB,MAAA;IACA,OAAA;IACA,qBAAA;ExB+uCJ;EwB5uCE;IpBxNF,WoByNmB;IpBxNnB,YoBwNyB;IACrB,qBAAA;IACA,mCAAA;YAAA,2BAAA;IACA,aAAA;IACA,oBAAA;IACA,SAAA;ExB+uCJ;AACF;AyB/8CA;EACE,iBAAA;AzBi9CF;AyB/8CE;EAEE,gBAAA;AzBg9CJ;AyB78CE;EACE,kBAAA;EACA,iBAAA;AzB+8CJ;AyB38CI;EAEE,cnBZC;ANw9CP;;A0B59CA;EACE,kBAAA;A1B+9CF;A0B79CE;EACE,aAAA;EACA,wCAAA;A1B+9CJ;A0B59CE;EACE,mBAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;UAAA,6BAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;A1B89CJ;A0Br9CE;EAEE,iBAAA;A1Bs9CJ;A0Bn9CE;EACE,kBAAA;A1Bq9CJ;A0Bl9CE;EACE,oCAAA;A1Bo9CJ;A0Bj9CM;EACE,gBAAA;A1Bm9CR;A0Bh9CM;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;A1Bk9CR;A0Bh9CQ;EtB9CN,csB+CuB;EtB9CvB,esB8CgC;EACxB,SAAA;EACA,QAAA;A1Bm9CV;A0B/8CM;EACE,mBAAA;EACA,cAAA;EACA,mBAAA;A1Bi9CR;A0B/8CQ;EtB1DN,csB2DuB;EtB1DvB,csB0DgC;EACxB,WAAA;EACA,YAAA;A1Bk9CV;A0B98CM;EACE,iBAAA;EACA,eAAA;A1Bg9CR;A0B98CQ;EtBrEN,csBsEuB;EtBrEvB,csBqEgC;EACxB,WAAA;EACA,YAAA;A1Bi9CV;A0B78CM;EACE,mBAAA;EACA,eAAA;EACA,kBAAA;A1B+8CR;A0B78CQ;EtBjFN,csBkFuB;EtBjFvB,csBiFgC;EACxB,WAAA;EACA,YAAA;A1Bg9CV;A0B58CM;EACE,oBAAA;EACA,eAAA;A1B88CR;A0B58CQ;EtB5FN,csB6FuB;EtB5FvB,esB4FgC;EACxB,WAAA;EACA,SAAA;A1B+8CV;A0Bz8CE;EACE,oCAAA;A1B28CJ;A0Bx8CM;EACE,gBAAA;A1B08CR;A0Bv8CM;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;A1By8CR;A0Bv8CQ;EtBnHN,csBoHuB;EtBnHvB,esBmHgC;EACxB,SAAA;EACA,QAAA;A1B08CV;A0Bt8CM;EACE,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;A1Bw8CR;A0Bt8CQ;EtBhIN,csBiIuB;EtBhIvB,csBgIgC;EACxB,WAAA;EACA,YAAA;A1By8CV;A0Br8CM;EACE,oBAAA;EACA,cAAA;EACA,mBAAA;A1Bu8CR;A0Br8CQ;EtB5IN,csB6IuB;EtB5IvB,csB4IgC;EACxB,WAAA;EACA,YAAA;A1Bw8CV;A0Bp8CM;EACE,iBAAA;EACA,eAAA;EACA,kBAAA;A1Bs8CR;A0Bp8CQ;EtBxJN,csByJuB;EtBxJvB,csBwJgC;EACxB,WAAA;EACA,YAAA;A1Bu8CV;A0Bn8CM;EACE,mBAAA;EACA,eAAA;EACA,kBAAA;A1Bq8CR;A0Bn8CQ;EtBpKN,csBqKuB;EtBpKvB,csBoKgC;EACxB,WAAA;EACA,YAAA;A1Bs8CV;A0Bl8CM;EACE,oBAAA;EACA,eAAA;A1Bo8CR;A0Bl8CQ;EtB/KN,csBgLuB;EtB/KvB,esB+KgC;EACxB,WAAA;EACA,SAAA;A1Bq8CV;A0B/7CE;EACE,oCAAA;A1Bi8CJ;A0B97CM;EACE,gBAAA;A1Bg8CR;A0B77CM;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;A1B+7CR;A0B77CQ;EtBtMN,csBuMuB;EtBtMvB,esBsMgC;EACxB,SAAA;EACA,QAAA;A1Bg8CV;A0B57CM;EACE,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;A1B87CR;A0B57CQ;EtBnNN,csBoNuB;EtBnNvB,csBmNgC;EACxB,WAAA;EACA,YAAA;A1B+7CV;A0B37CM;EACE,oBAAA;EACA,cAAA;EACA,mBAAA;A1B67CR;A0B37CQ;EtB/NN,csBgOuB;EtB/NvB,csB+NgC;EACxB,WAAA;EACA,YAAA;A1B87CV;A0B17CM;EACE,mBAAA;EACA,eAAA;EACA,mBAAA;A1B47CR;A0B17CQ;EtB3ON,csB4OuB;EtB3OvB,csB2OgC;EACxB,WAAA;EACA,YAAA;A1B67CV;A0Bz7CM;EACE,iBAAA;EACA,eAAA;EACA,kBAAA;A1B27CR;A0Bz7CQ;EtBvPN,csBwPuB;EtBvPvB,csBuPgC;EACxB,WAAA;EACA,YAAA;A1B47CV;A0Bx7CM;EACE,mBAAA;EACA,eAAA;EACA,kBAAA;A1B07CR;A0Bx7CQ;EtBnQN,csBoQuB;EtBnQvB,csBmQgC;EACxB,WAAA;EACA,YAAA;A1B27CV;A0Bv7CM;EACE,oBAAA;EACA,eAAA;A1By7CR;A0Bv7CQ;EtB9QN,csB+QuB;EtB9QvB,esB8QgC;EACxB,WAAA;EACA,SAAA;A1B07CV;A0Bp7CE;EACE,oCAAA;A1Bs7CJ;A0Bn7CM;EACE,gBAAA;A1Bq7CR;A0Bl7CM;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;A1Bo7CR;A0Bl7CQ;EtBrSN,csBsSuB;EtBrSvB,esBqSgC;EACxB,YAAA;EACA,aAAA;A1Bq7CV;A0Bj7CM;EACE,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;A1Bm7CR;A0Bj7CQ;EtBlTN,csBmTuB;EtBlTvB,csBkTgC;EACxB,WAAA;EACA,YAAA;A1Bo7CV;A0Bh7CM;EACE,oBAAA;EACA,cAAA;EACA,mBAAA;A1Bk7CR;A0Bh7CQ;EtB9TN,csB+TuB;EtB9TvB,csB8TgC;EACxB,WAAA;EACA,YAAA;A1Bm7CV;A0B/6CM;EACE,mBAAA;EACA,eAAA;EACA,mBAAA;A1Bi7CR;A0B/6CQ;EtB1UN,csB2UuB;EtB1UvB,csB0UgC;EACxB,WAAA;EACA,YAAA;A1Bk7CV;A0B96CM;EACE,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;A1Bg7CR;A0B96CQ;EtBvVN,csBwVuB;EtBvVvB,csBuVgC;EACxB,WAAA;EACA,YAAA;A1Bi7CV;A0B76CM;EACE,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;A1B+6CR;A0B76CQ;EtBpWN,csBqWuB;EtBpWvB,esBoWgC;EACxB,WAAA;EACA,SAAA;A1Bg7CV;A0B56CM;EACE,oBAAA;EACA,eAAA;A1B86CR;A0B56CQ;EtB/WN,csBgXuB;EtB/WvB,csB+WgC;EACxB,WAAA;EACA,YAAA;A1B+6CV;A0B36CM;EACE,kBAAA;EACA,eAAA;A1B66CR;A0B36CQ;EtB1XN,csB2XuB;EtB1XvB,csB0XgC;EACxB,WAAA;EACA,YAAA;A1B86CV;;A2B5yDA;EACE,iBAAA;A3B+yDF;A2B7yDE;EAEE,gBAAA;EACA,qBAAA;A3B8yDJ;A2BvyDM;EACE,mBrBZA;ANqzDR;A2BjyDE;EvBrBA,cuBsBiB;EvBrBjB,YuBqB0B;EACxB,oBAAA;A3BoyDJ;A2BjyDE;EAEE,YAAA;EACA,mBAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;UAAA,6BAAA;EACA,eAAA;A3BkyDJ;A2B1xDE;EAEE,aAAA;A3B2xDJ;A2BzxDI;EACE,aAAA;A3B2xDN;A2BvxDE;EAEE,gBAAA;EACA,iBAAA;EACA,mCAAA;A3BwxDJ;A2BrxDE;EACE,iBAAA;A3BuxDJ;A2BlxDE;EACE,iBAAA;EAEA,crBlEI;ANq1DR;A2BhxDE;EACE,iBAAA;EAEA,crBrEG;ANs1DP;A2B9wDE;EACE,iBAAA;A3BgxDJ',
                            sourcesContent: [
                                "/* philosopher-regular - latin */\n@font-face {\n  font-family: 'Philosopher';\n  src: url('./assets/fonts/Philosopher/Philosopher-Regular.eot');\n  src:\n    local('Philosopher-Regular'),\n    local('Philosopher-Regular'),\n    url('./assets/fonts/Philosopher/Philosopher-Regular.woff2') format('woff2'),\n    url('./assets/fonts/Philosopher/Philosopher-Regular.woff') format('woff'),\n    url('./assets/fonts/Philosopher/Philosopher-Regular.eot') format('embedded-opentype'),\n    url('./assets/fonts/Philosopher/Philosopher-Regular.ttf') format('truetype');\n  font-style: normal;\n  font-weight: 400;\n}\n\n/* Gilroy */\n@font-face {\n  font-family: 'Gilroy';\n  src: url('./assets/fonts/Gilroy/Gilroy-Regular.eot');\n  src:\n    local('Gilroy-Regular'),\n    local('Gilroy-Regular'),\n    url('./assets/fonts/Gilroy/Gilroy-Regular.eot') format('embedded-opentype'),\n    url('./assets/fonts/Gilroy/Gilroy-Regular.woff') format('woff'),\n    url('./assets/fonts/Gilroy/Gilroy-Regular.woff2') format('woff2'),\n    url('./assets/fonts/Gilroy/Gilroy-Regular.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Gilroy';\n  src: url('./assets/fonts/Gilroy/Gilroy-Medium.eot');\n  src:\n    local('Gilroy-Medium'),\n    local('Gilroy-Medium'),\n    url('./assets/fonts/Gilroy/Gilroy-Medium.eot') format('embedded-opentype'),\n    url('./assets/fonts/Gilroy/Gilroy-Medium.woff') format('woff'),\n    url('./assets/fonts/Gilroy/Gilroy-Medium.woff2') format('woff2'),\n    url('./assets/fonts/Gilroy/Gilroy-Medium.ttf') format('truetype');\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Gilroy';\n  src: url('./assets/fonts/Gilroy/Gilroy-Semibold.eot');\n  src:\n    local('Gilroy-Semibold'),\n    local('Gilroy-Semibold'),\n    url('./assets/fonts/Gilroy/Gilroy-Semibold.eot') format('embedded-opentype'),\n    url('./assets/fonts/Gilroy/Gilroy-Semibold.woff') format('woff'),\n    url('./assets/fonts/Gilroy/Gilroy-Semibold.woff2') format('woff2'),\n    url('./assets/fonts/Gilroy/Gilroy-Semibold.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n",
                                '/* philosopher-regular - latin */\n@font-face {\n  font-family: "Philosopher";\n  src: url("./assets/fonts/Philosopher/Philosopher-Regular.eot");\n  src: local("Philosopher-Regular"), local("Philosopher-Regular"), url("./assets/fonts/Philosopher/Philosopher-Regular.woff2") format("woff2"), url("./assets/fonts/Philosopher/Philosopher-Regular.woff") format("woff"), url("./assets/fonts/Philosopher/Philosopher-Regular.eot") format("embedded-opentype"), url("./assets/fonts/Philosopher/Philosopher-Regular.ttf") format("truetype");\n  font-style: normal;\n  font-weight: 400;\n}\n/* Gilroy */\n@font-face {\n  font-family: "Gilroy";\n  src: url("./assets/fonts/Gilroy/Gilroy-Regular.eot");\n  src: local("Gilroy-Regular"), local("Gilroy-Regular"), url("./assets/fonts/Gilroy/Gilroy-Regular.eot") format("embedded-opentype"), url("./assets/fonts/Gilroy/Gilroy-Regular.woff") format("woff"), url("./assets/fonts/Gilroy/Gilroy-Regular.woff2") format("woff2"), url("./assets/fonts/Gilroy/Gilroy-Regular.ttf") format("truetype");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Gilroy";\n  src: url("./assets/fonts/Gilroy/Gilroy-Medium.eot");\n  src: local("Gilroy-Medium"), local("Gilroy-Medium"), url("./assets/fonts/Gilroy/Gilroy-Medium.eot") format("embedded-opentype"), url("./assets/fonts/Gilroy/Gilroy-Medium.woff") format("woff"), url("./assets/fonts/Gilroy/Gilroy-Medium.woff2") format("woff2"), url("./assets/fonts/Gilroy/Gilroy-Medium.ttf") format("truetype");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Gilroy";\n  src: url("./assets/fonts/Gilroy/Gilroy-Semibold.eot");\n  src: local("Gilroy-Semibold"), local("Gilroy-Semibold"), url("./assets/fonts/Gilroy/Gilroy-Semibold.eot") format("embedded-opentype"), url("./assets/fonts/Gilroy/Gilroy-Semibold.woff") format("woff"), url("./assets/fonts/Gilroy/Gilroy-Semibold.woff2") format("woff2"), url("./assets/fonts/Gilroy/Gilroy-Semibold.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n}\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n\t ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n\t ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n\t ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n\t ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n\t ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n\t ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n\t ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: "Gilroy", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  -webkit-text-size-adjust: 100%;\n  font-size: 0.520835vw;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Gilroy", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0;\n  color: #282828;\n  background: #e9e5fd;\n}\n\ninput,\ntextarea {\n  -webkit-animation: bugfix infinite 1s;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  color: unset;\n}\n\na,\na:hover {\n  text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n  outline: none;\n  cursor: pointer;\n  font: inherit;\n}\nbutton:focus,\ninput:focus,\na:focus,\ntextarea:focus {\n  outline: none;\n}\nbutton:active,\ninput:active,\na:active,\ntextarea:active {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: inherit;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\nbutton {\n  border: none;\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n  padding: 0;\n  background-color: inherit;\n}\n\n.btn {\n  min-width: auto;\n  min-height: auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: unset;\n  padding: 0;\n  color: unset;\n  height: auto;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  max-width: none;\n  font: inherit;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n}\n\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  list-style-type: none;\n}\n\n.container {\n  width: 172rem;\n  margin: 0 auto;\n}\n\n.hidden {\n  overflow: hidden;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n@media (max-width: 48em) {\n  html {\n    font-size: 5px;\n    font-size: 1.5625vw;\n    font-size: 1.3333333333vw;\n    -webkit-text-size-adjust: none;\n  }\n  body {\n    -webkit-text-size-adjust: none;\n  }\n  .container {\n    padding: 0 3.2rem;\n    width: 100%;\n  }\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.services-plushs__items, .akcii__item-content, .akcii__item, .akcii__items, body, .doctor-card__item, .doctor-card__desc, .contacts__time-item, .contacts__time, .footer__container {\n  display: flex;\n  flex-direction: column;\n}\n\n.services-plushs__item, .services-plushs__btn-txt, .contacts-page__connect-circle, .card-review__site, .contacts__time-title, .contacts__items, .header__gender button, .header__btns, .header__menu, .btn-secondary, .btn-primary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.reviews__titles, .card-review__info, .news__titles, .doctors__titles, .swiper-panel, .contacts__container, .footer__bottom-container, .footer__top-container, .header__phone, .header__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.services-plushs__btn, .services-plushs__btns, .contacts-page__connect-item, .footer__top-desc {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.services-desc__container, .contacts-page__container, .doctor-card {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.contacts-page__map-map {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  font-family: Philosopher, sans-serif;\n  font-size: 7rem;\n  line-height: 65.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .title {\n    font-size: 7.2rem;\n  }\n}\n\n.akcii__item-tit, .doctor-card__title {\n  font-family: Philosopher, sans-serif;\n  font-size: 3.2rem;\n  line-height: 92.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .akcii__item-tit, .doctor-card__title {\n    font-size: 4.8rem;\n  }\n}\n\n.services__item-tit, .contacts-page__connect-title, .contacts-page__time-title, .news-card__title, .swiper-panel .swiper-pagination-total, .swiper-panel, .contacts__time-title span {\n  font-family: Philosopher, sans-serif;\n  font-size: 2.8rem;\n  line-height: 65.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .services__item-tit, .contacts-page__connect-title, .contacts-page__time-title, .news-card__title, .swiper-panel .swiper-pagination-total, .swiper-panel, .contacts__time-title span {\n    font-size: 4rem;\n  }\n}\n\n.services-plushs__item-tit, .services-plushs__btn.active .services-plushs__btn-txt span, .contacts-page__connect-tit, .contacts__desc-title, .header__phone-number {\n  font-family: Gilroy, sans-serif;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 120%;\n}\n@media screen and (max-width: 48em) {\n  .services-plushs__item-tit, .services-plushs__btn.active .services-plushs__btn-txt span, .contacts-page__connect-tit, .contacts__desc-title, .header__phone-number {\n    font-size: 3.2rem;\n  }\n}\n\n.services-plushs__item-number, .contacts-page__connect-txt, .akcii__item-txt, .contacts__desc-txt {\n  font-family: Gilroy, sans-serif;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 120%;\n}\n@media screen and (max-width: 48em) {\n  .services-plushs__item-number, .contacts-page__connect-txt, .akcii__item-txt, .contacts__desc-txt {\n    font-size: 2.8rem;\n    font-weight: 500;\n  }\n}\n\n.header__item a, .btn-primary span {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 120%;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .header__item a, .btn-primary span {\n    font-size: 2.8rem;\n    font-weight: 500;\n  }\n}\n\n.services-plushs__item-txt, .services-plushs__btn-txt span, .services-desc__txt p, .contacts-page__block-desc, .contacts-page__time-txt, .card-review__date, .card-review__txt, .news-card__desc, .doctor-card__txt, .contacts__time-desc, .footer__bottom-links a, .footer__top-txt, .footer__top-item a, .header__phone-adres {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 140%;\n}\n@media screen and (max-width: 48em) {\n  .services-plushs__item-txt, .services-plushs__btn-txt span, .services-desc__txt p, .contacts-page__block-desc, .contacts-page__time-txt, .card-review__date, .card-review__txt, .news-card__desc, .doctor-card__txt, .contacts__time-desc, .footer__bottom-links a, .footer__top-txt, .footer__top-item a, .header__phone-adres {\n    font-size: 2.8rem;\n  }\n}\n\n.btn-secondary span {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: 120%;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .btn-secondary span {\n    font-size: 2.8rem;\n  }\n}\n\n.contacts-page__block-title, .contacts-page__time-tit, .card-review__name, .card-review__title, .doctor-card__tit, .contacts__time-day {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 600;\n  line-height: 120%;\n}\n@media screen and (max-width: 48em) {\n  .contacts-page__block-title, .contacts-page__time-tit, .card-review__name, .card-review__title, .doctor-card__tit, .contacts__time-day {\n    font-size: 2.8rem;\n  }\n}\n\n.doctor-card__department span {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 120%;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 48em) {\n  .doctor-card__department span {\n    font-size: 2.4rem;\n  }\n}\n\n.services-plushs__item-number, .services-plushs__btn-txt span, .services__item.active .services__item-tit, .contacts-page__block-title, .contacts-page__connect-tit, .akcii__item-txt, .doctor-card__department span, .doctor-card__title, .footer__top-item a:hover, .header__item a:hover, .btn-secondary span {\n  background: linear-gradient(284deg, #d65986 -15.39%, #a261f9 112.18%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.btn-primary {\n  border-radius: 1.8rem;\n  background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n  width: fit-content;\n  padding: 1.9rem 4rem;\n  cursor: pointer;\n  transition: background 0.3s ease-in-out;\n}\n.btn-primary span {\n  color: #ffffff;\n}\n\n.btn-secondary {\n  width: fit-content;\n  cursor: pointer;\n  column-gap: 1.6rem;\n}\n.btn-secondary img {\n  width: 4.4rem;\n  height: 100%;\n}\n\n.header {\n  background: rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(1.5rem);\n}\n.header__container {\n  padding: 2rem 0;\n}\n.header__phone {\n  column-gap: 1.6rem;\n}\n.header__phone-icon {\n  width: 3.6rem;\n  height: 3.6rem;\n}\n.header__phone-number {\n  color: #282828;\n  margin-bottom: 0.4rem;\n}\n.header__phone-adres {\n  color: #8a8296;\n  display: block;\n}\n.header__menu {\n  column-gap: 2.8rem;\n}\n.header__item a {\n  transition: color 0.3s ease, background 0.3s ease;\n}\n.header__btns {\n  column-gap: 2.8rem;\n}\n.header__gender {\n  padding: 0.5rem;\n  background-color: #ffffff;\n  border-radius: 1.2rem;\n  display: flex;\n  column-gap: 0.2rem;\n}\n.header__gender button {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 0.8rem;\n}\n.header__gender button svg {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n.header__gender button.active {\n  background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n}\n.header__gender button.active svg path {\n  stroke: #ffffff;\n}\n\n@media screen and (max-width: 48em) {\n  .header {\n    background: none;\n  }\n  .header__container {\n    padding: 0.8rem 0;\n  }\n  .header__phone {\n    display: none;\n  }\n  .header__phone-icon {\n    width: 3.6rem;\n    height: 3.6rem;\n  }\n  .header__phone-number {\n    color: #282828;\n    margin-bottom: 0.4rem;\n  }\n  .header__phone-adres {\n    color: #8a8296;\n    display: block;\n  }\n  .header__menu .header__item {\n    display: none;\n  }\n  .header__menu .logo-santefam {\n    display: block;\n  }\n  .header__item a {\n    transition: color 0.3s ease, background 0.3s ease;\n  }\n  .header__btns {\n    display: none;\n  }\n  .header__gender {\n    padding: 0.5rem;\n    background-color: #ffffff;\n    border-radius: 1.2rem;\n    display: flex;\n    column-gap: 0.2rem;\n  }\n  .header__gender button {\n    width: 5rem;\n    height: 5rem;\n    border-radius: 0.8rem;\n  }\n  .header__gender button svg {\n    width: 2.4rem;\n    height: 2.4rem;\n  }\n  .header__gender button.active {\n    background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n  }\n  .header__gender button.active svg path {\n    stroke: #ffffff;\n  }\n  .header__tel, .header__burger {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n}\n.footer__top {\n  border-bottom: 0.1rem solid #8a8296;\n}\n.footer__top-container {\n  padding-bottom: 3.8rem;\n}\n.footer__top-menu {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 11.2rem;\n  row-gap: 2.8rem;\n}\n.footer__top-item a {\n  transition: color 0.3s ease, background 0.3s ease;\n}\n.footer__top-desc {\n  column-gap: 1.2rem;\n}\n.footer__top-desc:first-child {\n  margin-bottom: 2.4rem;\n}\n.footer__top-icon {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n.footer__bottom-container {\n  padding: 5.2rem 0 2.6rem;\n}\n.footer__bottom-links a:first-child {\n  margin-right: 4.4rem;\n}\n.footer__bottom-links a {\n  color: #8a8296;\n  display: inline-block;\n  transition: color 0.3s ease;\n}\n.footer__bottom-links a:hover {\n  color: #f3f0ff;\n}\n\n@media screen and (max-width: 48em) {\n  .footer__top {\n    border: 0;\n  }\n  .footer__top-container {\n    padding-bottom: 5.6rem;\n    flex-direction: column;\n    row-gap: 5.6rem;\n    align-items: flex-start;\n    border-bottom: 0.2rem solid #8a8296;\n  }\n  .footer__top-menu {\n    column-gap: 12rem;\n    row-gap: 3.2rem;\n  }\n  .footer__top-item a {\n    line-height: 120%;\n  }\n  .footer__top-descs {\n    display: flex;\n    flex-direction: column-reverse;\n    row-gap: 3.2rem;\n  }\n  .footer__top-desc {\n    column-gap: 2.4rem;\n  }\n  .footer__top-desc:first-child {\n    margin-bottom: 0;\n  }\n  .footer__top-icon {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .footer__bottom-container {\n    flex-direction: column;\n    padding: 5.6rem 0 4rem;\n    row-gap: 5.6rem;\n  }\n  .footer__bottom-links {\n    display: flex;\n    flex-direction: column;\n    row-gap: 5.6rem;\n    width: 100%;\n  }\n  .footer__bottom-links a:first-child {\n    margin-right: 0;\n  }\n  .footer__bottom-links a {\n    line-height: 120%;\n  }\n}\n.logo-santefam {\n  width: 7rem;\n  height: 9.3rem;\n  margin: 0 2.8rem;\n}\n.logo-request {\n  width: 14.4rem;\n  height: 3.2rem;\n}\n\n@media screen and (max-width: 48em) {\n  .logo-santefam {\n    width: 9.4rem;\n    height: 12rem;\n    margin: 0;\n  }\n  .logo-request {\n    width: 23rem;\n    height: 5.8rem;\n  }\n}\n.contacts {\n  margin-top: 20rem;\n  margin-bottom: 20rem;\n}\n.contacts__container {\n  column-gap: 11.5rem;\n}\n.contacts__item {\n  display: flex;\n  column-gap: 1.6rem;\n}\n.contacts__item:not(:last-child) {\n  margin-right: 6.8rem;\n}\n.contacts__circle {\n  background-color: #ffffff;\n  border-radius: 50%;\n  padding: 2.3rem;\n}\n.contacts__circle img {\n  width: 5.4rem;\n  height: 5.4rem;\n}\n.contacts__desc {\n  margin-top: 2.2rem;\n  max-width: 24.7rem;\n}\n.contacts__desc-title {\n  margin-bottom: 0.8rem;\n}\n.contacts__time {\n  align-items: center;\n  position: relative;\n  padding-top: 2.4rem;\n}\n.contacts__time-title {\n  border-radius: 1.8rem;\n  background: linear-gradient(284deg, #d65986 -15.39%, #a261f9 112.18%);\n  padding: 1.8rem 3.8rem;\n  width: fit-content;\n  position: absolute;\n  top: -0.2rem;\n  z-index: 2;\n}\n.contacts__time-title span {\n  color: #ffffff;\n}\n.contacts__time-block {\n  width: 54.7rem;\n  height: 23.7rem;\n  border-radius: 1.8rem;\n  background-color: #ffffff;\n  backdrop-filter: blur(0.35rem);\n  display: flex;\n  justify-content: center;\n  padding-top: 6rem;\n}\n.contacts__time-item {\n  row-gap: 1.2rem;\n  align-items: center;\n  justify-content: center;\n}\n.contacts__time-item:not(:last-child) {\n  margin-bottom: 2.8rem;\n}\n.contacts__time-day {\n  line-height: 2.16rem;\n}\n.contacts__time-desc {\n  color: #8a8296;\n  line-height: 2.16rem;\n}\n\n#map .ymaps-2-1-79-map,\n#map .ymaps-2-1-79-inner-panes {\n  border-radius: 3rem;\n}\n#map .ymaps-2-1-79-controls__control {\n  inset: 27rem auto auto 1rem !important;\n}\n\n[class*=gototech],\n[class*=copyrights-pane],\n[class*=controls__control],\n[class*=controls__toolbar],\n[class*=controls__bottom] {\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n@media screen and (min-width: 48em) {\n  #map:hover [class*=copyrights-pane],\n  #map:hover [class*=controls__control] {\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 48em) {\n  #map {\n    height: 108rem;\n    width: 100%;\n  }\n}\n.swiper-panel {\n  column-gap: 4.8rem;\n  color: #8a8296;\n}\n.swiper-panel__btn {\n  width: 6rem;\n  height: 1.8rem;\n  flex-shrink: 0;\n}\n.swiper-panel .swiper-pagination-current {\n  color: #282828;\n}\n.swiper-panel .swiper-pagination-total {\n  color: #8a8296;\n}\n\n.doctor-card {\n  border-radius: 4rem;\n  background: #f6f6f6;\n  width: 84rem;\n  height: 39.5rem;\n  column-gap: 3.2rem;\n  padding: 1.6rem 5rem 1.6rem 1.6rem;\n  position: relative;\n}\n.doctor-card:hover .doctor-card__img {\n  transform: scale(1.09);\n}\n.doctor-card__img {\n  width: 36.8rem;\n  height: 36.3rem;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n}\n.doctor-card__img img {\n  border-radius: 4rem;\n}\n.doctor-card__desc {\n  row-gap: 3.2rem;\n  margin-top: 1.6rem;\n}\n.doctor-card__item {\n  row-gap: 1rem;\n}\n.doctor-card__department {\n  padding: 0.8rem 2rem;\n  border-radius: 20rem;\n  background: #f3f0ff;\n  backdrop-filter: blur(0.35rem);\n  position: absolute;\n  bottom: 4rem;\n  left: 4rem;\n}\n.doctors {\n  margin: 20rem 0;\n}\n.doctors__titles {\n  margin-bottom: 4.8rem;\n}\n.doctors .title {\n  margin-bottom: 0;\n}\n\n.news-card {\n  width: 54.7rem;\n  height: 53.4rem;\n  background: url("./assets/images/bg/news-card.svg");\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding: 4rem 3.2rem;\n  position: relative;\n}\n.news-card__title {\n  margin-bottom: 2rem;\n  line-height: 95%;\n}\n.news-card__desc {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  color: #8a8296;\n  margin-bottom: 2rem;\n  line-height: 2.5rem;\n}\n.news-card__img {\n  border-radius: 2rem;\n  width: 48.3rem;\n  height: 28.7rem;\n}\n.news-card__img img {\n  height: 100%;\n  border-radius: 2rem;\n}\n.news-card__link {\n  background: url("./assets/images/bg/substract-news.svg") no-repeat center;\n  width: 21.5rem;\n  height: 10rem;\n  background-size: contain;\n  position: absolute;\n  bottom: 3.8rem;\n  right: 3rem;\n}\n.news-card__link .btn-primary {\n  width: 17.6rem;\n  top: 3.8rem;\n  position: absolute;\n  right: 0.2rem;\n}\n\n.news {\n  margin-bottom: 20rem;\n}\n.news__titles {\n  margin-bottom: 4.8rem;\n}\n.news .title {\n  margin-bottom: 0;\n}\n\n.card-review {\n  position: relative;\n  width: 54.7rem;\n  margin-top: 1.4rem;\n}\n.card-review__desc {\n  background: url("./assets/images/bg/review-bg.svg");\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 4rem 3.2rem 3.2rem;\n  width: 54.7rem;\n  height: 37.2rem;\n}\n.card-review__title {\n  max-width: 30.2rem;\n  margin-bottom: 2rem;\n  line-height: 2.16rem;\n}\n.card-review__txt {\n  color: #8a8296;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 2rem;\n  line-height: 2.5rem;\n}\n.card-review__name {\n  margin-bottom: 0.4rem;\n}\n.card-review__date {\n  color: #8a8296;\n}\n.card-review__site {\n  width: 9.4rem;\n  height: 9.4rem;\n  background: #f3f2f7;\n  backdrop-filter: blur(0.35rem);\n  border-radius: 50%;\n}\n.card-review__site img {\n  width: 8.1rem;\n  height: 6.9rem;\n}\n.card-review__link {\n  position: absolute;\n  top: -1.4rem;\n  right: 0;\n  width: 17.6rem;\n  padding-top: 1.7rem;\n  padding-bottom: 1.7rem;\n}\n\n.reviews {\n  margin: 20rem 0;\n}\n.reviews__titles {\n  margin-bottom: 4.8rem;\n}\n.reviews .title {\n  margin-bottom: 0;\n}\n\nbody {\n  min-height: 100vh;\n  position: relative;\n}\n\nmain {\n  flex: 1;\n}\n\n.title {\n  margin-bottom: 4.8rem;\n}\n\n.bg {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n\n.--desc {\n  display: block;\n}\n\n.--mob {\n  display: none;\n}\n\n@media screen and (max-width: 48em) {\n  .title {\n    margin-bottom: 6.4rem;\n  }\n  .--desc {\n    display: none;\n  }\n  .--mob {\n    display: block;\n  }\n}\n.main__bg-neit {\n  background: url("./assets/images/bg/bg.png") no-repeat center;\n  background-size: cover;\n}\n\n.akcii {\n  margin-bottom: 20rem;\n}\n.akcii__content {\n  position: relative;\n}\n.akcii__man, .akcii__women {\n  position: absolute;\n  bottom: 0;\n}\n.akcii__items {\n  row-gap: 0.5rem;\n}\n.akcii__item {\n  width: 100%;\n  height: 17.1rem;\n  border-radius: 4rem;\n  background: #ffffff;\n  padding: 4.5rem 0;\n  user-select: none;\n}\n.akcii__item-content {\n  position: relative;\n  z-index: 2;\n  align-items: center;\n  justify-content: center;\n  row-gap: 1.6rem;\n  user-select: text;\n}\n.contacts-page {\n  margin: 5.4rem 0 20rem;\n}\n.contacts-page-bg {\n  background: url("./assets/images/bg/contact-mob-bg.png") no-repeat center;\n  background-size: cover;\n  display: none;\n}\n.contacts-page__container {\n  column-gap: 4rem;\n}\n.contacts-page__info {\n  width: 54.7rem;\n  margin-top: 4rem;\n}\n.contacts-page__time {\n  margin-bottom: 4rem;\n}\n.contacts-page__time-title {\n  margin-bottom: 3.2rem;\n}\n.contacts-page__time-items {\n  display: flex;\n  column-gap: 4.8rem;\n}\n.contacts-page__time-tit {\n  margin-bottom: 1.2rem;\n}\n.contacts-page__time-txt {\n  color: #8a8296;\n}\n.contacts-page__connect {\n  border-radius: 1.8rem;\n  border: 0.2rem solid #ffffff;\n  background: #ffffff;\n  padding: 4rem;\n  backdrop-filter: blur(1.5rem);\n}\n.contacts-page__connect-title {\n  margin-bottom: 3.2rem;\n}\n.contacts-page__connect-item {\n  border-radius: 1.8rem;\n  background: #f3f0ff;\n  padding: 2rem;\n  column-gap: 1.6rem;\n}\n.contacts-page__connect-item:not(:last-child) {\n  margin-bottom: 2rem;\n}\n.contacts-page__connect-circle {\n  padding: 2.3rem;\n  border-radius: 50%;\n  background: #ffffff;\n}\n.contacts-page__connect-circle img {\n  width: 5.4rem;\n  height: 5.4rem;\n}\n.contacts-page__connect-tit {\n  margin-bottom: 0.8rem;\n}\n.contacts-page__connect-txt {\n  color: #8a8296;\n}\n.contacts-page__map {\n  position: relative;\n  width: 113.3rem;\n  height: 65.3rem;\n}\n.contacts-page__map-adres {\n  background: url("./assets/images/bg/substract-map.svg") no-repeat center;\n  position: absolute;\n  background-size: contain;\n  z-index: 2;\n  width: 43.3rem;\n  height: 18.9rem;\n  top: -0.5rem;\n  left: -0.1rem;\n}\n.contacts-page__map-block {\n  width: 38.4rem;\n  height: 13.2rem;\n  border-radius: 1.8rem;\n  border: 0.2rem solid #ffffff;\n  background: rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(1.5rem);\n  padding: 3.8rem;\n  margin: 0.5rem 0 0 0.1rem;\n}\n.contacts-page__block-title {\n  margin-bottom: 0.8rem;\n}\n@media screen and (max-width: 48em) {\n  .contacts-page {\n    margin: 7rem 0 18rem;\n  }\n  .contacts-page-bg {\n    display: block;\n  }\n  .contacts-page__container {\n    flex-direction: column;\n    row-gap: 8rem;\n  }\n  .contacts-page__info {\n    width: 100%;\n    margin-top: 0;\n  }\n  .contacts-page__time {\n    margin-bottom: 8rem;\n  }\n  .contacts-page__time-title {\n    margin-bottom: 4rem;\n  }\n  .contacts-page__time-items {\n    column-gap: 8rem;\n  }\n  .contacts-page__time-tit {\n    margin-bottom: 1.6rem;\n  }\n  .contacts-page__time-txt {\n    font-size: 3.6rem;\n  }\n  .contacts-page__connect {\n    width: 100%;\n    border-radius: 3.6rem;\n    padding: 4rem;\n    backdrop-filter: blur(1.5rem);\n  }\n  .contacts-page__connect-title {\n    margin-bottom: 2.2rem;\n  }\n  .contacts-page__connect-item {\n    border-radius: 3.6rem;\n    padding: 4rem;\n    column-gap: 3.2rem;\n  }\n  .contacts-page__connect-item:not(:last-child) {\n    margin-bottom: 1.6rem;\n  }\n  .contacts-page__connect-tit {\n    margin-bottom: 0.8rem;\n  }\n  .contacts-page__connect-txt {\n    color: #8a8296;\n  }\n  .contacts-page__map {\n    width: 100%;\n    height: 100%;\n  }\n  .contacts-page__map-adres {\n    background: none;\n    position: relative;\n    width: 100%;\n    height: 16.4rem;\n    top: 0;\n    left: 0;\n    margin-bottom: 4.8rem;\n  }\n  .contacts-page__map-block {\n    width: 100%;\n    height: 100%;\n    border-radius: 3.6rem;\n    backdrop-filter: blur(3rem);\n    padding: 4rem;\n    border-width: 0.4rem;\n    margin: 0;\n  }\n}\n.services-desc {\n  margin-top: 20rem;\n}\n.services-desc__container {\n  column-gap: 4rem;\n}\n.services-desc__title {\n  margin-top: 1.4rem;\n  flex: 0 0 69.3rem;\n}\n.services-desc__txt p {\n  color: #8a8296;\n}\n\n.services {\n  margin-top: 4.8rem;\n}\n.services__items {\n  display: grid;\n  grid-template-columns: repeat(172, 1rem);\n}\n.services__item {\n  border-radius: 5rem;\n  border: 0.2rem solid #ffffff;\n  background: rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(1.5rem);\n  padding: 4rem;\n  display: flex;\n  position: relative;\n}\n.services__item-tit {\n  line-height: 110%;\n}\n.services__item-img {\n  position: absolute;\n}\n.services__items--five {\n  grid-template-rows: repeat(65, 1rem);\n}\n.services__items--five .services__item__tit {\n  max-width: 26rem;\n}\n.services__items--five .services__item:nth-child(1) {\n  grid-column: 1/74;\n  grid-row: 1/38;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(1) .services__item-img {\n  width: 49.2rem;\n  height: 32.8rem;\n  top: 3rem;\n  right: 0;\n}\n.services__items--five .services__item:nth-child(2) {\n  grid-column: 74/175;\n  grid-row: 1/32;\n  margin-bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(2) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(3) {\n  grid-column: 1/70;\n  grid-row: 38/66;\n}\n.services__items--five .services__item:nth-child(3) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(4) {\n  grid-column: 74/118;\n  grid-row: 32/66;\n  margin-right: 4rem;\n}\n.services__items--five .services__item:nth-child(4) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--five .services__item:nth-child(5) {\n  grid-column: 118/173;\n  grid-row: 32/66;\n}\n.services__items--five .services__item:nth-child(5) .services__item-img {\n  width: 28.6rem;\n  height: 37.5rem;\n  right: 3rem;\n  bottom: 0;\n}\n.services__items--six {\n  grid-template-rows: repeat(65, 1rem);\n}\n.services__items--six .services__item__tit {\n  max-width: 26rem;\n}\n.services__items--six .services__item:nth-child(1) {\n  grid-column: 1/60;\n  grid-row: 1/38;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(1) .services__item-img {\n  width: 49.2rem;\n  height: 32.8rem;\n  top: 3rem;\n  right: 0;\n}\n.services__items--six .services__item:nth-child(2) {\n  grid-column: 60/119;\n  grid-row: 1/32;\n  margin-bottom: 4rem;\n  margin-right: 4rem;\n}\n.services__items--six .services__item:nth-child(2) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(3) {\n  grid-column: 119/175;\n  grid-row: 1/32;\n  margin-bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(3) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(4) {\n  grid-column: 1/60;\n  grid-row: 38/66;\n  margin-right: 4rem;\n}\n.services__items--six .services__item:nth-child(4) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(5) {\n  grid-column: 60/104;\n  grid-row: 32/66;\n  margin-right: 4rem;\n}\n.services__items--six .services__item:nth-child(5) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--six .services__item:nth-child(6) {\n  grid-column: 104/173;\n  grid-row: 32/66;\n}\n.services__items--six .services__item:nth-child(6) .services__item-img {\n  width: 28.6rem;\n  height: 37.5rem;\n  right: 3rem;\n  bottom: 0;\n}\n.services__items--seven {\n  grid-template-rows: repeat(68, 1rem);\n}\n.services__items--seven .services__item__tit {\n  max-width: 26rem;\n}\n.services__items--seven .services__item:nth-child(1) {\n  grid-column: 1/60;\n  grid-row: 1/38;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(1) .services__item-img {\n  width: 49.2rem;\n  height: 32.8rem;\n  top: 3rem;\n  right: 0;\n}\n.services__items--seven .services__item:nth-child(2) {\n  grid-column: 60/119;\n  grid-row: 1/26;\n  margin-bottom: 4rem;\n  margin-right: 4rem;\n}\n.services__items--seven .services__item:nth-child(2) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(3) {\n  grid-column: 119/175;\n  grid-row: 1/26;\n  margin-bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(3) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(4) {\n  grid-column: 60/175;\n  grid-row: 26/48;\n  margin-bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(4) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(5) {\n  grid-column: 1/60;\n  grid-row: 38/69;\n  margin-right: 4rem;\n}\n.services__items--seven .services__item:nth-child(5) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(6) {\n  grid-column: 60/119;\n  grid-row: 48/69;\n  margin-right: 4rem;\n}\n.services__items--seven .services__item:nth-child(6) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--seven .services__item:nth-child(7) {\n  grid-column: 119/173;\n  grid-row: 48/69;\n}\n.services__items--seven .services__item:nth-child(7) .services__item-img {\n  width: 18.8rem;\n  height: 24.6rem;\n  right: 6rem;\n  bottom: 0;\n}\n.services__items--eight {\n  grid-template-rows: repeat(90, 1rem);\n}\n.services__items--eight .services__item__tit {\n  max-width: 26rem;\n}\n.services__items--eight .services__item:nth-child(1) {\n  grid-column: 1/60;\n  grid-row: 1/48;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(1) .services__item-img {\n  width: 49.2rem;\n  height: 32.8rem;\n  top: 12.7rem;\n  left: 10.8rem;\n}\n.services__items--eight .services__item:nth-child(2) {\n  grid-column: 60/119;\n  grid-row: 1/26;\n  margin-bottom: 4rem;\n  margin-right: 4rem;\n}\n.services__items--eight .services__item:nth-child(2) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(3) {\n  grid-column: 119/175;\n  grid-row: 1/26;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(3) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(4) {\n  grid-column: 60/175;\n  grid-row: 26/48;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(4) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(5) {\n  grid-column: 1/60;\n  grid-row: 48/73;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(5) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(6) {\n  grid-column: 60/119;\n  grid-row: 48/73;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(6) .services__item-img {\n  width: 18.8rem;\n  height: 24.6rem;\n  right: 6rem;\n  bottom: 0;\n}\n.services__items--eight .services__item:nth-child(7) {\n  grid-column: 119/173;\n  grid-row: 48/91;\n}\n.services__items--eight .services__item:nth-child(7) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n.services__items--eight .services__item:nth-child(8) {\n  grid-column: 1/115;\n  grid-row: 73/91;\n}\n.services__items--eight .services__item:nth-child(8) .services__item-img {\n  width: 16.2rem;\n  height: 8.9rem;\n  right: 4rem;\n  bottom: 4rem;\n}\n\n.services-plushs {\n  margin-top: 20rem;\n}\n.services-plushs__btns {\n  column-gap: 4rem;\n  margin-bottom: 4.8rem;\n}\n.services-plushs__btn.active .services-plushs__btn-txt {\n  background: #ffffff;\n}\n.services-plushs__btn-img {\n  width: 13.7rem;\n  height: 6rem;\n  border-radius: 20rem;\n}\n.services-plushs__btn-txt {\n  height: 6rem;\n  border-radius: 4rem;\n  border: 0.2rem solid #ffffff;\n  background: rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(1.5rem);\n  padding: 0 2rem;\n}\n.services-plushs__items {\n  display: none;\n}\n.services-plushs__items.active {\n  display: flex;\n}\n.services-plushs__item {\n  column-gap: 4rem;\n  padding: 2.4rem 0;\n  border-bottom: 0.2rem solid #ffffff;\n}\n.services-plushs__item-number {\n  flex: 0 0 10.6rem;\n}\n.services-plushs__item-tit {\n  flex: 0 0 54.6rem;\n  color: #282828;\n}\n.services-plushs__item-txt {\n  flex: 0 0 78.1rem;\n  color: #8a8296;\n}\n.services-plushs__item-btn {\n  flex: 0 0 16.5rem;\n}',
                                "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n\t ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n\t ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n\t ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n\t ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n\t ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n\t ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n\t ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n",
                                "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Gilroy', sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  -webkit-text-size-adjust: 100%;\n  font-size: 0.520835vw;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Gilroy', sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0;\n  color: #282828;\n  background: #e9e5fd;\n}\n\ninput,\ntextarea {\n  -webkit-animation: bugfix infinite 1s;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  color: unset;\n}\n\na,\na:hover {\n  text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n  outline: none;\n  cursor: pointer;\n  font: inherit;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active {\n    outline: none;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: inherit;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\nbutton {\n  border: none;\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n  padding: 0;\n  background-color: inherit;\n}\n\n.btn {\n  min-width: auto;\n  min-height: auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: unset;\n  padding: 0;\n  color: unset;\n  height: auto;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  max-width: none;\n  font: inherit;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n}\n\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  list-style-type: none;\n}\n\n.container {\n  width: 172rem;\n  margin: 0 auto;\n}\n\n.hidden {\n  overflow: hidden;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n@media (max-width: 48em) {\n  html {\n    font-size: 5px;\n    font-size: 1.5625vw;\n    font-size: calc((100 / 375) * 5vw); // где 320 это ширина моб версии макета\n    -webkit-text-size-adjust: none;\n  }\n\n  body {\n    -webkit-text-size-adjust: none;\n  }\n\n  .container {\n    padding: 0 3.2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n    width: 100%;\n  }\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n",
                                '%flexColumn {\n  display: flex;\n  flex-direction: column;\n}\n\n%flexCenter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n%flexCenterBetween {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n%flexCenterEnd {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n%flexEndCenter {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n}\n\n%flexCenterStart {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n%flexStartBetween {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n',
                                '@mixin sizes($width: 100%, $height: auto) {\n  width: $width;\n  height: $height;\n}\n\n@mixin noScrollLine() {\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n\n  scrollbar-width: none;\n}\n\n@mixin showMob() {\n  .--desc {\n    display: none;\n  }\n\n  .--mob {\n    display: flex;\n  }\n}\n\n@mixin showDesc() {\n  .--desc {\n    display: flex;\n  }\n\n  .--mob {\n    display: none;\n  }\n}\n\n%fullSize {\n  width: 100%;\n  height: 100%;\n}\n',
                                '%philoCaps70 {\n  font-family: Philosopher, sans-serif;\n  font-size: 7rem;\n  line-height: 65.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n\n  @media screen and (max-width: 48em) {\n    font-size: 7.2rem;\n  }\n}\n\n%philoCaps32 {\n  font-family: Philosopher, sans-serif;\n  font-size: 3.2rem;\n  line-height: 92.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n\n  @media screen and (max-width: 48em) {\n    font-size: 4.8rem;\n  }\n}\n\n%philoCaps28 {\n  font-family: Philosopher, sans-serif;\n  font-size: 2.8rem;\n  line-height: 65.5%;\n  font-weight: 400;\n  text-transform: uppercase;\n\n  @media screen and (max-width: 48em) {\n    font-size: 4rem;\n  }\n}\n\n%semibold20 {\n  font-family: Gilroy, sans-serif;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 120%;\n\n  @media screen and (max-width: 48em) {\n    font-size: 3.2rem;\n  }\n}\n\n%regular20 {\n  font-family: Gilroy, sans-serif;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 120%;\n\n  @media screen and (max-width: 48em) {\n    font-size: 2.8rem;\n    font-weight: 500;\n  }\n}\n\n%regularCaps18 {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 120%;\n  text-transform: uppercase;\n\n  @media screen and (max-width: 48em) {\n    font-size: 2.8rem;\n    font-weight: 500;\n  }\n}\n\n%regular18 {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 140%;\n\n  @media screen and (max-width: 48em) {\n    font-size: 2.8rem;\n  }\n}\n\n%medium18Caps {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: 120%;\n  text-transform: uppercase;\n\n  @media screen and (max-width: 48em) {\n    font-size: 2.8rem;\n  }\n}\n\n%semibold18 {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.8rem;\n  font-weight: 600;\n  line-height: 120%;\n\n  @media screen and (max-width: 48em) {\n    font-size: 2.8rem;\n  }\n}\n\n%regularCaps16 {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 120%;\n  text-transform: uppercase;\n\n  @media screen and (max-width: 48em) {\n    font-size: 2.4rem;\n  }\n}\n\n%regular16 {\n  font-family: Gilroy, sans-serif;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 120%;\n}\n\n%gradientColorTxt {\n  background: $gradientPurple;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n',
                                '$gradientPurple: linear-gradient(284deg, #d65986 -15.39%, #a261f9 112.18%);\n$black: #282828;\n$white: #ffffff;\n$lightWhite: #f6f6f6;\n$grey: #8a8296;\n$bgCards: rgba(255, 255, 255, 0.3);\n$lightPurple: #f3f0ff;\n',
                                '.btn-primary {\n  @extend %flexCenter;\n  border-radius: 1.8rem;\n  background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n  width: fit-content;\n  padding: 1.9rem 4rem;\n  cursor: pointer;\n  transition: background 0.3s ease-in-out;\n\n  span {\n    @extend %regularCaps18;\n    color: $white;\n  }\n}\n\n.btn-secondary {\n  @extend %flexCenter;\n  width: fit-content;\n  cursor: pointer;\n  column-gap: 1.6rem;\n\n  span {\n    @extend %medium18Caps;\n    @extend %gradientColorTxt;\n  }\n\n  img {\n    @include sizes(4.4rem, 100%);\n  }\n}\n',
                                '.header {\n  background: rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(1.5rem);\n\n  &__container {\n    @extend %flexCenterBetween;\n    padding: 2rem 0;\n  }\n\n  &__phone {\n    @extend %flexCenterBetween;\n    column-gap: 1.6rem;\n  }\n\n  &__phone-icon {\n    @include sizes(3.6rem, 3.6rem);\n  }\n\n  &__phone-number {\n    @extend %semibold20;\n    color: $black;\n    margin-bottom: 0.4rem;\n  }\n\n  &__phone-adres {\n    @extend %regular18;\n    color: $grey;\n    display: block;\n  }\n\n  &__menu {\n    @extend %flexCenter;\n    column-gap: 2.8rem;\n  }\n\n  &__item {\n    a {\n      @extend %regularCaps18;\n      transition: $transitionColor, $transitionBg;\n\n      &:hover {\n        @extend %gradientColorTxt;\n      }\n    }\n  }\n\n  &__btns {\n    @extend %flexCenter;\n    column-gap: 2.8rem;\n  }\n\n  &__gender {\n    padding: 0.5rem;\n    background-color: $white;\n    border-radius: 1.2rem;\n    display: flex;\n    column-gap: 0.2rem;\n\n    button {\n      @include sizes(5rem, 5rem);\n      @extend %flexCenter;\n      border-radius: 0.8rem;\n\n      svg {\n        @include sizes(2.4rem, 2.4rem);\n      }\n\n      &.active {\n        background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n\n        svg path {\n          stroke: $white;\n        }\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 48em) {\n  .header {\n    background: none;\n\n    &__container {\n      padding: 0.8rem 0;\n    }\n\n    &__phone {\n      display: none;\n    }\n\n    &__phone-icon {\n      @include sizes(3.6rem, 3.6rem);\n    }\n\n    &__phone-number {\n      @extend %semibold20;\n      color: $black;\n      margin-bottom: 0.4rem;\n    }\n\n    &__phone-adres {\n      @extend %regular18;\n      color: $grey;\n      display: block;\n    }\n\n    &__menu {\n      .header__item {\n        display: none;\n      }\n      .logo-santefam {\n        display: block;\n      }\n    }\n\n    &__item {\n      a {\n        @extend %regularCaps18;\n        transition: $transitionColor, $transitionBg;\n\n        &:hover {\n          @extend %gradientColorTxt;\n        }\n      }\n    }\n\n    &__btns {\n      display: none;\n    }\n\n    &__gender {\n      padding: 0.5rem;\n      background-color: $white;\n      border-radius: 1.2rem;\n      display: flex;\n      column-gap: 0.2rem;\n\n      button {\n        @include sizes(5rem, 5rem);\n        @extend %flexCenter;\n        border-radius: 0.8rem;\n\n        svg {\n          @include sizes(2.4rem, 2.4rem);\n        }\n\n        &.active {\n          background: linear-gradient(267deg, #d65986 -0.51%, #a261f9 100%);\n\n          svg path {\n            stroke: $white;\n          }\n        }\n      }\n    }\n\n    &__tel,\n    &__burger {\n      @include sizes(4.8rem, 4.8rem);\n    }\n  }\n}\n',
                                '.footer {\n  &__container {\n    @extend %flexColumn;\n  }\n\n  &__top {\n    border-bottom: 0.1rem solid $grey;\n  }\n\n  &__top-container {\n    @extend %flexCenterBetween;\n    padding-bottom: 3.8rem;\n  }\n\n  &__top-menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    column-gap: 11.2rem;\n    row-gap: 2.8rem;\n  }\n\n  &__top-item {\n    a {\n      @extend %regular18;\n      transition: $transitionColor, $transitionBg;\n\n      &:hover {\n        @extend %gradientColorTxt;\n      }\n    }\n  }\n\n  &__top-desc {\n    &:first-child {\n      margin-bottom: 2.4rem;\n    }\n\n    @extend %flexCenterStart;\n    column-gap: 1.2rem;\n  }\n\n  &__top-icon {\n    @include sizes(2.4rem, 2.4rem);\n  }\n\n  &__top-txt {\n    @extend %regular18;\n  }\n\n  &__bottom-container {\n    @extend %flexCenterBetween;\n    padding: 5.2rem 0 2.6rem;\n  }\n\n  &__bottom-links {\n    a:first-child {\n      margin-right: 4.4rem;\n    }\n    a {\n      @extend %regular18;\n      color: $grey;\n      display: inline-block;\n      transition: $transitionColor;\n\n      &:hover {\n        color: $lightPurple;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 48em) {\n  .footer {\n    &__top {\n      border: 0;\n    }\n\n    &__top-container {\n      padding-bottom: 5.6rem;\n      flex-direction: column;\n      row-gap: 5.6rem;\n      align-items: flex-start;\n      border-bottom: 0.2rem solid $grey;\n    }\n\n    &__top-menu {\n      column-gap: 12rem;\n      row-gap: 3.2rem;\n    }\n\n    &__top-item {\n      a {\n        line-height: 120%;\n      }\n    }\n\n    &__top-descs {\n      display: flex;\n      flex-direction: column-reverse;\n      row-gap: 3.2rem;\n    }\n\n    &__top-desc {\n      &:first-child {\n        margin-bottom: 0;\n      }\n\n      column-gap: 2.4rem;\n    }\n\n    &__top-icon {\n      @include sizes(4.8rem, 4.8rem);\n    }\n\n    &__top-txt {\n      @extend %regular18;\n    }\n\n    &__bottom-container {\n      flex-direction: column;\n      padding: 5.6rem 0 4rem;\n      row-gap: 5.6rem;\n    }\n\n    &__bottom-links {\n      display: flex;\n      flex-direction: column;\n      row-gap: 5.6rem;\n      width: 100%;\n\n      a:first-child {\n        margin-right: 0;\n      }\n\n      a {\n        line-height: 120%;\n      }\n    }\n  }\n}\n',
                                '$transitionColor: color 0.3s ease;\n$transitionBg: background 0.3s ease;\n$transitionBgCol: background-color 0.3s ease;\n$transitionVisibility: visibility 0.3s ease;\n$transitionOpacity: opacity 0.3s ease;\n$transitionIndex: z-index 0.3s ease;\n$transitionOverflow: overflow 0.3s ease;\n$transitionTransform: transform 0.3s ease;\n',
                                '.logo {\n  &-santefam {\n    @include sizes(7rem, 9.3rem);\n    margin: 0 2.8rem;\n  }\n\n  &-request {\n    @include sizes(14.4rem, 3.2rem);\n  }\n}\n\n@media screen and (max-width: 48em) {\n  .logo {\n    &-santefam {\n      @include sizes(9.4rem, 12rem);\n      margin: 0;\n    }\n\n    &-request {\n      @include sizes(23rem, 5.8rem);\n    }\n  }\n}\n',
                                '.contacts {\n  margin-top: 20rem;\n  margin-bottom: 20rem;\n\n  &__container {\n    @extend %flexCenterBetween;\n    column-gap: 11.5rem;\n  }\n\n  &__items {\n    @extend %flexCenter;\n  }\n\n  &__item {\n    display: flex;\n    column-gap: 1.6rem;\n\n    &:not(:last-child) {\n      margin-right: 6.8rem;\n    }\n  }\n\n  &__circle {\n    background-color: $white;\n    border-radius: 50%;\n    padding: 2.3rem;\n\n    img {\n      @include sizes(5.4rem, 5.4rem);\n    }\n  }\n\n  &__desc {\n    margin-top: 2.2rem;\n    max-width: 24.7rem;\n  }\n\n  &__desc-title {\n    @extend %semibold20;\n    margin-bottom: 0.8rem;\n  }\n\n  &__desc-txt {\n    @extend %regular20;\n  }\n\n  &__time {\n    @extend %flexColumn;\n    align-items: center;\n    position: relative;\n    padding-top: 2.4rem;\n  }\n\n  &__time-title {\n    @extend %flexCenter;\n    border-radius: 1.8rem;\n    background: linear-gradient(284deg, #d65986 -15.39%, #a261f9 112.18%);\n    padding: 1.8rem 3.8rem;\n    width: fit-content;\n    position: absolute;\n    top: -0.2rem;\n    z-index: 2;\n\n    span {\n      @extend %philoCaps28;\n      color: $white;\n    }\n  }\n\n  &__time-block {\n    @include sizes(54.7rem, 23.7rem);\n    border-radius: 1.8rem;\n    background-color: $white;\n    backdrop-filter: blur(0.35rem);\n    display: flex;\n    justify-content: center;\n    padding-top: 6rem;\n  }\n\n  &__time-item {\n    @extend %flexColumn;\n    row-gap: 1.2rem;\n    align-items: center;\n    justify-content: center;\n\n    &:not(:last-child) {\n      margin-bottom: 2.8rem;\n    }\n  }\n\n  &__time-day {\n    @extend %semibold18;\n    line-height: 2.16rem;\n  }\n\n  &__time-desc {\n    @extend %regular18;\n    color: $grey;\n    line-height: 2.16rem;\n  }\n}\n',
                                "#map {\n  .ymaps-2-1-79-map,\n  .ymaps-2-1-79-inner-panes {\n    border-radius: 3rem;\n  }\n\n  .ymaps-2-1-79-controls__control {\n    inset: 27rem auto auto 1rem !important;\n  }\n}\n\n[class*='gototech'],\n[class*='copyrights-pane'],\n[class*='controls__control'],\n[class*='controls__toolbar'],\n[class*='controls__bottom'] {\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n@media screen and (min-width: 48em) {\n  #map:hover [class*='copyrights-pane'],\n  #map:hover [class*='controls__control'] {\n    opacity: 1;\n  }\n}\n\n@media screen and (max-width: 48em) {\n  #map {\n    height: 108rem;\n    width: 100%;\n  }\n}\n",
                                '.swiper-panel {\n  @extend %flexCenterBetween;\n  column-gap: 4.8rem;\n  color: $grey;\n  @extend %philoCaps28;\n\n  &__btn {\n    @include sizes(6rem, 1.8rem);\n    flex-shrink: 0;\n  }\n\n  .swiper-pagination-current {\n    color: $black;\n  }\n\n  .swiper-pagination-total {\n    color: $grey;\n    @extend %philoCaps28;\n  }\n}\n',
                                '.doctor-card {\n  border-radius: 4rem;\n  background: $lightWhite;\n  @include sizes(84rem, 39.5rem);\n  @extend %flexStartBetween;\n  column-gap: 3.2rem;\n  padding: 1.6rem 5rem 1.6rem 1.6rem;\n  position: relative;\n\n  &:hover {\n    .doctor-card__img {\n      transform: scale(1.09);\n    }\n  }\n\n  &__img {\n    @include sizes(36.8rem, 36.3rem);\n    flex-shrink: 0;\n    transition: $transitionTransform;\n\n    img {\n      border-radius: 4rem;\n    }\n  }\n\n  &__desc {\n    @extend %flexColumn;\n    row-gap: 3.2rem;\n    margin-top: 1.6rem;\n  }\n\n  &__title {\n    @extend %philoCaps32;\n    @extend %gradientColorTxt;\n  }\n\n  &__item {\n    @extend %flexColumn;\n    row-gap: 1rem;\n  }\n\n  &__tit {\n    @extend %semibold18;\n    // line-height: 2.16rem;\n  }\n\n  &__txt {\n    @extend %regular18;\n    // line-height: 2.16rem;\n  }\n\n  &__department {\n    padding: 0.8rem 2rem;\n    border-radius: 20rem;\n    background: #f3f0ff;\n    backdrop-filter: blur(0.35rem);\n    position: absolute;\n    bottom: 4rem;\n    left: 4rem;\n\n    span {\n      @extend %regularCaps16;\n      @extend %gradientColorTxt;\n    }\n  }\n}\n',
                                '.doctors {\n  margin: 20rem 0;\n\n  &__titles {\n    @extend %flexCenterBetween;\n    margin-bottom: 4.8rem;\n  }\n\n  .title {\n    margin-bottom: 0;\n  }\n}\n',
                                ".news-card {\n  @include sizes(54.7rem, 53.4rem);\n  background: url('./assets/images/bg/news-card.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding: 4rem 3.2rem;\n  position: relative;\n\n  &__title {\n    @extend %philoCaps28;\n    margin-bottom: 2rem;\n    line-height: 95%;\n  }\n\n  &__desc {\n    @extend %regular18;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    color: $grey;\n    margin-bottom: 2rem;\n    line-height: 2.5rem;\n  }\n\n  &__img {\n    border-radius: 2rem;\n    @include sizes(48.3rem, 28.7rem);\n\n    img {\n      height: 100%;\n      border-radius: 2rem;\n    }\n  }\n\n  &__link {\n    background: url('./assets/images/bg/substract-news.svg') no-repeat center;\n    @include sizes(21.5rem, 10rem);\n    background-size: contain;\n    position: absolute;\n    bottom: 3.8rem;\n    right: 3rem;\n\n    .btn-primary {\n      width: 17.6rem;\n      top: 3.8rem;\n      position: absolute;\n      right: 0.2rem;\n    }\n  }\n}\n",
                                '.news {\n  margin-bottom: 20rem;\n\n  &__titles {\n    @extend %flexCenterBetween;\n    margin-bottom: 4.8rem;\n  }\n\n  .title {\n    margin-bottom: 0;\n  }\n}\n',
                                ".card-review {\n  position: relative;\n  width: 54.7rem;\n  margin-top: 1.4rem;\n\n  &__desc {\n    background: url('./assets/images/bg/review-bg.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n    padding: 4rem 3.2rem 3.2rem;\n    @include sizes(54.7rem, 37.2rem);\n  }\n\n  &__title {\n    @extend %semibold18;\n    max-width: 30.2rem;\n    margin-bottom: 2rem;\n    line-height: 2.16rem;\n  }\n\n  &__txt {\n    @extend %regular18;\n    color: $grey;\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    margin-bottom: 2rem;\n    line-height: 2.5rem;\n  }\n\n  &__info {\n    @extend %flexCenterBetween;\n  }\n\n  &__name {\n    @extend %semibold18;\n    margin-bottom: 0.4rem;\n  }\n\n  &__date {\n    @extend %regular18;\n    color: $grey;\n  }\n\n  &__site {\n    @extend %flexCenter;\n    @include sizes(9.4rem, 9.4rem);\n    background: #f3f2f7;\n    backdrop-filter: blur(0.35rem);\n    border-radius: 50%;\n\n    img {\n      @include sizes(8.1rem, 6.9rem);\n    }\n  }\n\n  &__link {\n    position: absolute;\n    top: -1.4rem;\n    right: 0;\n    width: 17.6rem;\n    padding-top: 1.7rem;\n    padding-bottom: 1.7rem;\n  }\n}\n",
                                '.reviews {\n  margin: 20rem 0;\n\n  &__titles {\n    @extend %flexCenterBetween;\n    margin-bottom: 4.8rem;\n  }\n\n  .title {\n    margin-bottom: 0;\n  }\n}\n',
                                'body {\n  @extend %flexColumn;\n  min-height: 100vh;\n  position: relative;\n}\n\nmain {\n  flex: 1;\n}\n\n.title {\n  @extend %philoCaps70;\n  margin-bottom: 4.8rem;\n}\n\n.bg {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n\n.--desc {\n  display: block;\n}\n\n.--mob {\n  display: none;\n}\n\n@media screen and (max-width: 48em) {\n  .title {\n    margin-bottom: 6.4rem;\n  }\n\n  .--desc {\n    display: none;\n  }\n\n  .--mob {\n    display: block;\n  }\n}\n',
                                ".main {\n  &__bg-neit {\n    background: url('./assets/images/bg/bg.png') no-repeat center;\n    background-size: cover;\n  }\n}\n\n@import './akcii';\n",
                                '.akcii {\n  margin-bottom: 20rem;\n\n  &__content {\n    position: relative;\n  }\n\n  &__man,\n  &__women {\n    position: absolute;\n    bottom: 0;\n  }\n\n  &__items {\n    @extend %flexColumn;\n    row-gap: 0.5rem;\n  }\n\n  &__item {\n    @extend %flexColumn;\n    @include sizes(100%, 17.1rem);\n    border-radius: 4rem;\n    background: $white;\n    padding: 4.5rem 0;\n    user-select: none;\n  }\n\n  &__item-content {\n    position: relative;\n    z-index: 2;\n    @extend %flexColumn;\n    align-items: center;\n    justify-content: center;\n    row-gap: 1.6rem;\n    user-select: text;\n  }\n\n  &__item-tit {\n    @extend %philoCaps32;\n  }\n\n  &__item-txt {\n    @extend %regular20;\n    @extend %gradientColorTxt;\n  }\n}\n',
                                ".contacts-page {\n  margin: 5.4rem 0 20rem;\n\n  &-bg {\n    background: url('./assets/images/bg/contact-mob-bg.png') no-repeat center;\n    background-size: cover;\n    display: none;\n  }\n\n  &__container {\n    @extend %flexStartBetween;\n    column-gap: 4rem;\n  }\n\n  &__info {\n    width: 54.7rem;\n    margin-top: 4rem;\n  }\n\n  &__time {\n    margin-bottom: 4rem;\n  }\n\n  &__time-title {\n    @extend %philoCaps28;\n    margin-bottom: 3.2rem;\n  }\n\n  &__time-items {\n    display: flex;\n    column-gap: 4.8rem;\n  }\n\n  &__time-tit {\n    @extend %semibold18;\n    margin-bottom: 1.2rem;\n  }\n\n  &__time-txt {\n    @extend %regular18;\n    color: $grey;\n  }\n\n  &__connect {\n    border-radius: 1.8rem;\n    border: 0.2rem solid $white;\n    background: $white;\n    padding: 4rem;\n    backdrop-filter: blur(1.5rem);\n  }\n\n  &__connect-title {\n    @extend %philoCaps28;\n    margin-bottom: 3.2rem;\n  }\n\n  &__connect-item {\n    border-radius: 1.8rem;\n    background: $lightPurple;\n    padding: 2rem;\n    @extend %flexCenterStart;\n    column-gap: 1.6rem;\n\n    &:not(:last-child) {\n      margin-bottom: 2rem;\n    }\n  }\n\n  &__connect-circle {\n    @extend %flexCenter;\n    padding: 2.3rem;\n    border-radius: 50%;\n    background: $white;\n\n    img {\n      @include sizes(5.4rem, 5.4rem);\n    }\n  }\n\n  &__connect-tit {\n    @extend %semibold20;\n    @extend %gradientColorTxt;\n    margin-bottom: 0.8rem;\n  }\n\n  &__connect-txt {\n    @extend %regular20;\n    color: $grey;\n  }\n\n  &__map {\n    position: relative;\n    @include sizes(113.3rem, 65.3rem);\n  }\n\n  &__map-map {\n    @extend %fullSize;\n  }\n\n  &__map-adres {\n    background: url('./assets/images/bg/substract-map.svg') no-repeat center;\n    position: absolute;\n    background-size: contain;\n    z-index: 2;\n    @include sizes(43.3rem, 18.9rem);\n    top: -0.5rem;\n    left: -0.1rem;\n  }\n\n  &__map-block {\n    @include sizes(38.4rem, 13.2rem);\n    border-radius: 1.8rem;\n    border: 0.2rem solid $white;\n    background: rgba(255, 255, 255, 0.3);\n    backdrop-filter: blur(1.5rem);\n    padding: 3.8rem;\n    margin: 0.5rem 0 0 0.1rem;\n  }\n\n  &__block-title {\n    @extend %semibold18;\n    @extend %gradientColorTxt;\n    margin-bottom: 0.8rem;\n  }\n\n  &__block-desc {\n    @extend %regular18;\n  }\n}\n\n@media screen and (max-width: 48em) {\n  .contacts-page {\n    margin: 7rem 0 18rem;\n\n    &-bg {\n      display: block;\n    }\n\n    &__container {\n      flex-direction: column;\n      row-gap: 8rem;\n    }\n\n    &__info {\n      width: 100%;\n      margin-top: 0;\n    }\n\n    &__time {\n      margin-bottom: 8rem;\n    }\n\n    &__time-title {\n      margin-bottom: 4rem;\n    }\n\n    &__time-items {\n      column-gap: 8rem;\n    }\n\n    &__time-tit {\n      margin-bottom: 1.6rem;\n    }\n\n    &__time-txt {\n      font-size: 3.6rem;\n    }\n\n    &__connect {\n      width: 100%;\n      border-radius: 3.6rem;\n      padding: 4rem;\n      backdrop-filter: blur(1.5rem);\n    }\n\n    &__connect-title {\n      margin-bottom: 2.2rem;\n    }\n\n    &__connect-item {\n      border-radius: 3.6rem;\n      padding: 4rem;\n      column-gap: 3.2rem;\n\n      &:not(:last-child) {\n        margin-bottom: 1.6rem;\n      }\n    }\n\n    &__connect-tit {\n      @extend %semibold20;\n      @extend %gradientColorTxt;\n      margin-bottom: 0.8rem;\n    }\n\n    &__connect-txt {\n      @extend %regular20;\n      color: $grey;\n    }\n\n    &__map {\n      @include sizes(100%, 100%);\n    }\n\n    &__map-map {\n      @extend %fullSize;\n    }\n\n    &__map-adres {\n      background: none;\n      position: relative;\n      @include sizes(100%, 16.4rem);\n      top: 0;\n      left: 0;\n      margin-bottom: 4.8rem;\n    }\n\n    &__map-block {\n      @include sizes(100%, 100%);\n      border-radius: 3.6rem;\n      backdrop-filter: blur(3rem);\n      padding: 4rem;\n      border-width: 0.4rem;\n      margin: 0;\n    }\n  }\n}\n",
                                '.services-desc {\n  margin-top: 20rem;\n\n  &__container {\n    @extend %flexStartBetween;\n    column-gap: 4rem;\n  }\n\n  &__title {\n    margin-top: 1.4rem;\n    flex: 0 0 69.3rem;\n  }\n\n  &__txt {\n    p {\n      @extend %regular18;\n      color: $grey;\n    }\n  }\n}\n',
                                '.services {\n  margin-top: 4.8rem;\n\n  &__items {\n    display: grid;\n    grid-template-columns: repeat(172, 1rem);\n  }\n\n  &__item {\n    border-radius: 5rem;\n    border: 0.2rem solid $white;\n    background: rgba(255, 255, 255, 0.3);\n    backdrop-filter: blur(1.5rem);\n    padding: 4rem;\n    display: flex;\n    position: relative;\n\n    &.active {\n      .services__item-tit {\n        @extend %gradientColorTxt;\n      }\n    }\n  }\n\n  &__item-tit {\n    @extend %philoCaps28;\n    line-height: 110%;\n  }\n\n  &__item-img {\n    position: absolute;\n  }\n\n  &__items--five {\n    grid-template-rows: repeat(65, 1rem);\n\n    .services__item {\n      &__tit {\n        max-width: 26rem;\n      }\n\n      &:nth-child(1) {\n        grid-column: 1 / 74;\n        grid-row: 1 / 38;\n        margin-right: 4rem;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(49.2rem, 32.8rem);\n          top: 3rem;\n          right: 0;\n        }\n      }\n\n      &:nth-child(2) {\n        grid-column: 74/175;\n        grid-row: 1/32;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(3) {\n        grid-column: 1/70;\n        grid-row: 38/66;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(4) {\n        grid-column: 74/118;\n        grid-row: 32/66;\n        margin-right: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(5) {\n        grid-column: 118/173;\n        grid-row: 32/66;\n\n        .services__item-img {\n          @include sizes(28.6rem, 37.5rem);\n          right: 3rem;\n          bottom: 0;\n        }\n      }\n    }\n  }\n\n  &__items--six {\n    grid-template-rows: repeat(65, 1rem);\n\n    .services__item {\n      &__tit {\n        max-width: 26rem;\n      }\n\n      &:nth-child(1) {\n        grid-column: 1 / 60;\n        grid-row: 1 / 38;\n        margin-right: 4rem;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(49.2rem, 32.8rem);\n          top: 3rem;\n          right: 0;\n        }\n      }\n\n      &:nth-child(2) {\n        grid-column: 60/119;\n        grid-row: 1/32;\n        margin-bottom: 4rem;\n        margin-right: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(3) {\n        grid-column: 119/175;\n        grid-row: 1/32;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(4) {\n        grid-column: 1/60;\n        grid-row: 38/66;\n        margin-right: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(5) {\n        grid-column: 60/104;\n        grid-row: 32/66;\n        margin-right: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(6) {\n        grid-column: 104/173;\n        grid-row: 32/66;\n\n        .services__item-img {\n          @include sizes(28.6rem, 37.5rem);\n          right: 3rem;\n          bottom: 0;\n        }\n      }\n    }\n  }\n\n  &__items--seven {\n    grid-template-rows: repeat(68, 1rem);\n\n    .services__item {\n      &__tit {\n        max-width: 26rem;\n      }\n\n      &:nth-child(1) {\n        grid-column: 1 / 60;\n        grid-row: 1 / 38;\n        margin-right: 4rem;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(49.2rem, 32.8rem);\n          top: 3rem;\n          right: 0;\n        }\n      }\n\n      &:nth-child(2) {\n        grid-column: 60/119;\n        grid-row: 1/26;\n        margin-bottom: 4rem;\n        margin-right: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(3) {\n        grid-column: 119/175;\n        grid-row: 1/26;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(4) {\n        grid-column: 60/175;\n        grid-row: 26/48;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(5) {\n        grid-column: 1/60;\n        grid-row: 38/69;\n        margin-right: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(6) {\n        grid-column: 60/119;\n        grid-row: 48/69;\n        margin-right: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(7) {\n        grid-column: 119/173;\n        grid-row: 48/69;\n\n        .services__item-img {\n          @include sizes(18.8rem, 24.6rem);\n          right: 6rem;\n          bottom: 0;\n        }\n      }\n    }\n  }\n\n  &__items--eight {\n    grid-template-rows: repeat(90, 1rem);\n\n    .services__item {\n      &__tit {\n        max-width: 26rem;\n      }\n\n      &:nth-child(1) {\n        grid-column: 1 / 60;\n        grid-row: 1 / 48;\n        margin-right: 4rem;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(49.2rem, 32.8rem);\n          top: 12.7rem;\n          left: 10.8rem;\n        }\n      }\n\n      &:nth-child(2) {\n        grid-column: 60/119;\n        grid-row: 1/26;\n        margin-bottom: 4rem;\n        margin-right: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(3) {\n        grid-column: 119/175;\n        grid-row: 1/26;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(4) {\n        grid-column: 60/175;\n        grid-row: 26/48;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(5) {\n        grid-column: 1/60;\n        grid-row: 48/73;\n        margin-right: 4rem;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(6) {\n        grid-column: 60/119;\n        grid-row: 48/73;\n        margin-right: 4rem;\n        margin-bottom: 4rem;\n\n        .services__item-img {\n          @include sizes(18.8rem, 24.6rem);\n          right: 6rem;\n          bottom: 0;\n        }\n      }\n\n      &:nth-child(7) {\n        grid-column: 119/173;\n        grid-row: 48/91;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n\n      &:nth-child(8) {\n        grid-column: 1/115;\n        grid-row: 73/91;\n\n        .services__item-img {\n          @include sizes(16.2rem, 8.9rem);\n          right: 4rem;\n          bottom: 4rem;\n        }\n      }\n    }\n  }\n}\n',
                                '.services-plushs {\n  margin-top: 20rem;\n\n  &__btns {\n    @extend %flexCenterStart;\n    column-gap: 4rem;\n    margin-bottom: 4.8rem;\n  }\n\n  &__btn {\n    @extend %flexCenterStart;\n\n    &.active {\n      .services-plushs__btn-txt {\n        background: $white;\n        span {\n          @extend %semibold20;\n        }\n      }\n    }\n  }\n\n  &__btn-img {\n    @include sizes(13.7rem, 6rem);\n    border-radius: 20rem;\n  }\n\n  &__btn-txt {\n    @extend %flexCenter;\n    height: 6rem;\n    border-radius: 4rem;\n    border: 0.2rem solid $white;\n    background: rgba(255, 255, 255, 0.3);\n    backdrop-filter: blur(1.5rem);\n    padding: 0 2rem;\n\n    span {\n      @extend %gradientColorTxt;\n      @extend %regular18;\n    }\n  }\n\n  &__items {\n    @extend %flexColumn;\n    display: none;\n\n    &.active {\n      display: flex;\n    }\n  }\n\n  &__item {\n    @extend %flexCenter;\n    column-gap: 4rem;\n    padding: 2.4rem 0;\n    border-bottom: 0.2rem solid $white;\n  }\n\n  &__item-number {\n    flex: 0 0 10.6rem;\n    @extend %regular20;\n    @extend %gradientColorTxt;\n  }\n\n  &__item-tit {\n    flex: 0 0 54.6rem;\n    @extend %semibold20;\n    color: $black;\n  }\n\n  &__item-txt {\n    flex: 0 0 78.1rem;\n    @extend %regular18;\n    color: $grey;\n  }\n\n  &__item-btn {\n    flex: 0 0 16.5rem;\n  }\n}\n'
                            ],
                            sourceRoot: ''
                        }
                    ]);
                    const ee = T;
                },
            './node_modules/css-loader/dist/runtime/api.js': (e) => {
                'use strict';
                e.exports = function (e) {
                    var n = [];
                    return (
                        (n.toString = function () {
                            return this.map(function (n) {
                                var t = '',
                                    i = void 0 !== n[5];
                                return (
                                    n[4] && (t += '@supports ('.concat(n[4], ') {')),
                                    n[2] && (t += '@media '.concat(n[2], ' {')),
                                    i &&
                                        (t += '@layer'.concat(n[5].length > 0 ? ' '.concat(n[5]) : '', ' {')),
                                    (t += e(n)),
                                    i && (t += '}'),
                                    n[2] && (t += '}'),
                                    n[4] && (t += '}'),
                                    t
                                );
                            }).join('');
                        }),
                        (n.i = function (e, t, i, r, s) {
                            'string' == typeof e && (e = [[null, e, void 0]]);
                            var a = {};
                            if (i)
                                for (var o = 0; o < this.length; o++) {
                                    var l = this[o][0];
                                    null != l && (a[l] = !0);
                                }
                            for (var A = 0; A < e.length; A++) {
                                var d = [].concat(e[A]);
                                (i && a[d[0]]) ||
                                    (void 0 !== s &&
                                        (void 0 === d[5] ||
                                            (d[1] = '@layer'
                                                .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                                                .concat(d[1], '}')),
                                        (d[5] = s)),
                                    t &&
                                        (d[2]
                                            ? ((d[1] = '@media '.concat(d[2], ' {').concat(d[1], '}')),
                                              (d[2] = t))
                                            : (d[2] = t)),
                                    r &&
                                        (d[4]
                                            ? ((d[1] = '@supports ('.concat(d[4], ') {').concat(d[1], '}')),
                                              (d[4] = r))
                                            : (d[4] = ''.concat(r))),
                                    n.push(d));
                            }
                        }),
                        n
                    );
                };
            },
            './node_modules/css-loader/dist/runtime/getUrl.js': (e) => {
                'use strict';
                e.exports = function (e, n) {
                    return (
                        n || (n = {}),
                        e
                            ? ((e = String(e.__esModule ? e.default : e)),
                              /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                              n.hash && (e += n.hash),
                              /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                                  ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                                  : e)
                            : e
                    );
                };
            },
            './node_modules/css-loader/dist/runtime/sourceMaps.js': (e) => {
                'use strict';
                e.exports = function (e) {
                    var n = e[1],
                        t = e[3];
                    if (!t) return n;
                    if ('function' == typeof btoa) {
                        var i = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                            r = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(i),
                            s = '/*# '.concat(r, ' */');
                        return [n].concat([s]).join('\n');
                    }
                    return [n].join('\n');
                };
            },
            './node_modules/swiper/modules/navigation.css': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => f });
                var i = t('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                    r = t.n(i),
                    s = t('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                    a = t.n(s),
                    o = t('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                    l = t.n(o),
                    A = t('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                    d = t.n(A),
                    c = t('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                    m = t.n(c),
                    p = t('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                    u = t.n(p),
                    g = t(
                        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./node_modules/swiper/modules/navigation.css'
                    ),
                    h = {};
                (h.styleTagTransform = u()),
                    (h.setAttributes = d()),
                    (h.insert = l().bind(null, 'head')),
                    (h.domAPI = a()),
                    (h.insertStyleElement = m()),
                    r()(g.default, h);
                const f = g.default && g.default.locals ? g.default.locals : void 0;
            },
            './node_modules/swiper/modules/pagination.css': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => f });
                var i = t('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                    r = t.n(i),
                    s = t('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                    a = t.n(s),
                    o = t('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                    l = t.n(o),
                    A = t('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                    d = t.n(A),
                    c = t('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                    m = t.n(c),
                    p = t('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                    u = t.n(p),
                    g = t(
                        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./node_modules/swiper/modules/pagination.css'
                    ),
                    h = {};
                (h.styleTagTransform = u()),
                    (h.setAttributes = d()),
                    (h.insert = l().bind(null, 'head')),
                    (h.domAPI = a()),
                    (h.insertStyleElement = m()),
                    r()(g.default, h);
                const f = g.default && g.default.locals ? g.default.locals : void 0;
            },
            './node_modules/swiper/swiper.css': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => f });
                var i = t('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                    r = t.n(i),
                    s = t('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                    a = t.n(s),
                    o = t('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                    l = t.n(o),
                    A = t('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                    d = t.n(A),
                    c = t('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                    m = t.n(c),
                    p = t('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                    u = t.n(p),
                    g = t(
                        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./node_modules/swiper/swiper.css'
                    ),
                    h = {};
                (h.styleTagTransform = u()),
                    (h.setAttributes = d()),
                    (h.insert = l().bind(null, 'head')),
                    (h.domAPI = a()),
                    (h.insertStyleElement = m()),
                    r()(g.default, h);
                const f = g.default && g.default.locals ? g.default.locals : void 0;
            },
            './src/index.scss': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => f });
                var i = t('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                    r = t.n(i),
                    s = t('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                    a = t.n(s),
                    o = t('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                    l = t.n(o),
                    A = t('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                    d = t.n(A),
                    c = t('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                    m = t.n(c),
                    p = t('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                    u = t.n(p),
                    g = t(
                        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/index.scss'
                    ),
                    h = {};
                (h.styleTagTransform = u()),
                    (h.setAttributes = d()),
                    (h.insert = l().bind(null, 'head')),
                    (h.domAPI = a()),
                    (h.insertStyleElement = m()),
                    r()(g.default, h);
                const f = g.default && g.default.locals ? g.default.locals : void 0;
            },
            './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js': (e) => {
                'use strict';
                var n = [];
                function t(e) {
                    for (var t = -1, i = 0; i < n.length; i++)
                        if (n[i].identifier === e) {
                            t = i;
                            break;
                        }
                    return t;
                }
                function i(e, i) {
                    for (var s = {}, a = [], o = 0; o < e.length; o++) {
                        var l = e[o],
                            A = i.base ? l[0] + i.base : l[0],
                            d = s[A] || 0,
                            c = ''.concat(A, ' ').concat(d);
                        s[A] = d + 1;
                        var m = t(c),
                            p = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
                        if (-1 !== m) n[m].references++, n[m].updater(p);
                        else {
                            var u = r(p, i);
                            (i.byIndex = o), n.splice(o, 0, { identifier: c, updater: u, references: 1 });
                        }
                        a.push(c);
                    }
                    return a;
                }
                function r(e, n) {
                    var t = n.domAPI(n);
                    return (
                        t.update(e),
                        function (n) {
                            if (n) {
                                if (
                                    n.css === e.css &&
                                    n.media === e.media &&
                                    n.sourceMap === e.sourceMap &&
                                    n.supports === e.supports &&
                                    n.layer === e.layer
                                )
                                    return;
                                t.update((e = n));
                            } else t.remove();
                        }
                    );
                }
                e.exports = function (e, r) {
                    var s = i((e = e || []), (r = r || {}));
                    return function (e) {
                        e = e || [];
                        for (var a = 0; a < s.length; a++) {
                            var o = t(s[a]);
                            n[o].references--;
                        }
                        for (var l = i(e, r), A = 0; A < s.length; A++) {
                            var d = t(s[A]);
                            0 === n[d].references && (n[d].updater(), n.splice(d, 1));
                        }
                        s = l;
                    };
                };
            },
            './node_modules/style-loader/dist/runtime/insertBySelector.js': (e) => {
                'use strict';
                var n = {};
                e.exports = function (e, t) {
                    var i = (function (e) {
                        if (void 0 === n[e]) {
                            var t = document.querySelector(e);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                                try {
                                    t = t.contentDocument.head;
                                } catch (e) {
                                    t = null;
                                }
                            n[e] = t;
                        }
                        return n[e];
                    })(e);
                    if (!i)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    i.appendChild(t);
                };
            },
            './node_modules/style-loader/dist/runtime/insertStyleElement.js': (e) => {
                'use strict';
                e.exports = function (e) {
                    var n = document.createElement('style');
                    return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
                };
            },
            './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js': (e, n, t) => {
                'use strict';
                e.exports = function (e) {
                    var n = t.nc;
                    n && e.setAttribute('nonce', n);
                };
            },
            './node_modules/style-loader/dist/runtime/styleDomAPI.js': (e) => {
                'use strict';
                e.exports = function (e) {
                    if ('undefined' == typeof document)
                        return { update: function () {}, remove: function () {} };
                    var n = e.insertStyleElement(e);
                    return {
                        update: function (t) {
                            !(function (e, n, t) {
                                var i = '';
                                t.supports && (i += '@supports ('.concat(t.supports, ') {')),
                                    t.media && (i += '@media '.concat(t.media, ' {'));
                                var r = void 0 !== t.layer;
                                r &&
                                    (i += '@layer'.concat(
                                        t.layer.length > 0 ? ' '.concat(t.layer) : '',
                                        ' {'
                                    )),
                                    (i += t.css),
                                    r && (i += '}'),
                                    t.media && (i += '}'),
                                    t.supports && (i += '}');
                                var s = t.sourceMap;
                                s &&
                                    'undefined' != typeof btoa &&
                                    (i += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                        btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                                        ' */'
                                    )),
                                    n.styleTagTransform(i, e, n.options);
                            })(n, e, t);
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        }
                    };
                };
            },
            './node_modules/style-loader/dist/runtime/styleTagTransform.js': (e) => {
                'use strict';
                e.exports = function (e, n) {
                    if (n.styleSheet) n.styleSheet.cssText = e;
                    else {
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(e));
                    }
                };
            },
            'data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA':
                (e) => {
                    'use strict';
                    e.exports =
                        'data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA';
                },
            './src/assets/images/bg/bg.png': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/images/bg.png';
            },
            './src/assets/images/bg/contact-mob-bg.png': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/images/contact-mob-bg.png';
            },
            './src/assets/images/bg/news-card.svg': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/images/news-card.svg';
            },
            './src/assets/images/bg/review-bg.svg': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/images/review-bg.svg';
            },
            './src/assets/images/bg/substract-map.svg': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/images/substract-map.svg';
            },
            './src/assets/images/bg/substract-news.svg': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/images/substract-news.svg';
            },
            './src/assets/fonts/Gilroy/Gilroy-Medium.eot': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Medium.eot';
            },
            './src/assets/fonts/Gilroy/Gilroy-Medium.ttf': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Medium.ttf';
            },
            './src/assets/fonts/Gilroy/Gilroy-Medium.woff': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Medium.woff';
            },
            './src/assets/fonts/Gilroy/Gilroy-Medium.woff2': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Medium.woff2';
            },
            './src/assets/fonts/Gilroy/Gilroy-Regular.eot': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Regular.eot';
            },
            './src/assets/fonts/Gilroy/Gilroy-Regular.ttf': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Regular.ttf';
            },
            './src/assets/fonts/Gilroy/Gilroy-Regular.woff': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Regular.woff';
            },
            './src/assets/fonts/Gilroy/Gilroy-Regular.woff2': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Regular.woff2';
            },
            './src/assets/fonts/Gilroy/Gilroy-Semibold.eot': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Semibold.eot';
            },
            './src/assets/fonts/Gilroy/Gilroy-Semibold.ttf': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Semibold.ttf';
            },
            './src/assets/fonts/Gilroy/Gilroy-Semibold.woff': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Semibold.woff';
            },
            './src/assets/fonts/Gilroy/Gilroy-Semibold.woff2': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Gilroy-Semibold.woff2';
            },
            './src/assets/fonts/Philosopher/Philosopher-Regular.eot': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Philosopher-Regular.eot';
            },
            './src/assets/fonts/Philosopher/Philosopher-Regular.ttf': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Philosopher-Regular.ttf';
            },
            './src/assets/fonts/Philosopher/Philosopher-Regular.woff': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Philosopher-Regular.woff';
            },
            './src/assets/fonts/Philosopher/Philosopher-Regular.woff2': (e, n, t) => {
                'use strict';
                e.exports = t.p + 'assets/fonts/Philosopher-Regular.woff2';
            },
            './node_modules/swiper/modules/a11y.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => s });
                var i = t('./node_modules/swiper/shared/classes-to-selector.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                function s(e) {
                    let { swiper: n, extendParams: t, on: s } = e;
                    t({
                        a11y: {
                            enabled: !0,
                            notificationClass: 'swiper-notification',
                            prevSlideMessage: 'Previous slide',
                            nextSlideMessage: 'Next slide',
                            firstSlideMessage: 'This is the first slide',
                            lastSlideMessage: 'This is the last slide',
                            paginationBulletMessage: 'Go to slide {{index}}',
                            slideLabelMessage: '{{index}} / {{slidesLength}}',
                            containerMessage: null,
                            containerRoleDescriptionMessage: null,
                            itemRoleDescriptionMessage: null,
                            slideRole: 'group',
                            id: null
                        }
                    }),
                        (n.a11y = { clicked: !1 });
                    let a = null;
                    function o(e) {
                        const n = a;
                        0 !== n.length && ((n.innerHTML = ''), (n.innerHTML = e));
                    }
                    const l = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
                    function A(e) {
                        (e = l(e)).forEach((e) => {
                            e.setAttribute('tabIndex', '0');
                        });
                    }
                    function d(e) {
                        (e = l(e)).forEach((e) => {
                            e.setAttribute('tabIndex', '-1');
                        });
                    }
                    function c(e, n) {
                        (e = l(e)).forEach((e) => {
                            e.setAttribute('role', n);
                        });
                    }
                    function m(e, n) {
                        (e = l(e)).forEach((e) => {
                            e.setAttribute('aria-roledescription', n);
                        });
                    }
                    function p(e, n) {
                        (e = l(e)).forEach((e) => {
                            e.setAttribute('aria-label', n);
                        });
                    }
                    function u(e) {
                        (e = l(e)).forEach((e) => {
                            e.setAttribute('aria-disabled', !0);
                        });
                    }
                    function g(e) {
                        (e = l(e)).forEach((e) => {
                            e.setAttribute('aria-disabled', !1);
                        });
                    }
                    function h(e) {
                        if (13 !== e.keyCode && 32 !== e.keyCode) return;
                        const t = n.params.a11y,
                            r = e.target;
                        (n.pagination &&
                            n.pagination.el &&
                            (r === n.pagination.el || n.pagination.el.contains(e.target)) &&
                            !e.target.matches((0, i.c)(n.params.pagination.bulletClass))) ||
                            (n.navigation &&
                                n.navigation.nextEl &&
                                r === n.navigation.nextEl &&
                                ((n.isEnd && !n.params.loop) || n.slideNext(),
                                n.isEnd ? o(t.lastSlideMessage) : o(t.nextSlideMessage)),
                            n.navigation &&
                                n.navigation.prevEl &&
                                r === n.navigation.prevEl &&
                                ((n.isBeginning && !n.params.loop) || n.slidePrev(),
                                n.isBeginning ? o(t.firstSlideMessage) : o(t.prevSlideMessage)),
                            n.pagination &&
                                r.matches((0, i.c)(n.params.pagination.bulletClass)) &&
                                r.click());
                    }
                    function f() {
                        return n.pagination && n.pagination.bullets && n.pagination.bullets.length;
                    }
                    function w() {
                        return f() && n.params.pagination.clickable;
                    }
                    const b = (e, n, t) => {
                            A(e),
                                'BUTTON' !== e.tagName && (c(e, 'button'), e.addEventListener('keydown', h)),
                                p(e, t),
                                (function (e, n) {
                                    (e = l(e)).forEach((e) => {
                                        e.setAttribute('aria-controls', n);
                                    });
                                })(e, n);
                        },
                        E = () => {
                            n.a11y.clicked = !0;
                        },
                        v = () => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    n.destroyed || (n.a11y.clicked = !1);
                                });
                            });
                        },
                        _ = (e) => {
                            if (n.a11y.clicked) return;
                            const t = e.target.closest(`.${n.params.slideClass}, swiper-slide`);
                            if (!t || !n.slides.includes(t)) return;
                            const i = n.slides.indexOf(t) === n.activeIndex,
                                r =
                                    n.params.watchSlidesProgress &&
                                    n.visibleSlides &&
                                    n.visibleSlides.includes(t);
                            i ||
                                r ||
                                (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
                                (n.isHorizontal() ? (n.el.scrollLeft = 0) : (n.el.scrollTop = 0),
                                n.slideTo(n.slides.indexOf(t), 0));
                        },
                        C = () => {
                            const e = n.params.a11y;
                            e.itemRoleDescriptionMessage && m(n.slides, e.itemRoleDescriptionMessage),
                                e.slideRole && c(n.slides, e.slideRole);
                            const t = n.slides.length;
                            e.slideLabelMessage &&
                                n.slides.forEach((i, r) => {
                                    const s = n.params.loop
                                        ? parseInt(i.getAttribute('data-swiper-slide-index'), 10)
                                        : r;
                                    p(
                                        i,
                                        e.slideLabelMessage
                                            .replace(/\{\{index\}\}/, s + 1)
                                            .replace(/\{\{slidesLength\}\}/, t)
                                    );
                                });
                        };
                    s('beforeInit', () => {
                        (a = (0, r.c)('span', n.params.a11y.notificationClass)),
                            a.setAttribute('aria-live', 'assertive'),
                            a.setAttribute('aria-atomic', 'true');
                    }),
                        s('afterInit', () => {
                            n.params.a11y.enabled &&
                                (() => {
                                    const e = n.params.a11y;
                                    n.el.append(a);
                                    const t = n.el;
                                    e.containerRoleDescriptionMessage &&
                                        m(t, e.containerRoleDescriptionMessage),
                                        e.containerMessage && p(t, e.containerMessage);
                                    const i = n.wrapperEl,
                                        r =
                                            e.id ||
                                            i.getAttribute('id') ||
                                            `swiper-wrapper-${
                                                ((s = 16),
                                                void 0 === s && (s = 16),
                                                'x'
                                                    .repeat(s)
                                                    .replace(/x/g, () =>
                                                        Math.round(16 * Math.random()).toString(16)
                                                    ))
                                            }`;
                                    var s;
                                    const o =
                                        n.params.autoplay && n.params.autoplay.enabled ? 'off' : 'polite';
                                    var A;
                                    (A = r),
                                        l(i).forEach((e) => {
                                            e.setAttribute('id', A);
                                        }),
                                        (function (e, n) {
                                            (e = l(e)).forEach((e) => {
                                                e.setAttribute('aria-live', n);
                                            });
                                        })(i, o),
                                        C();
                                    let { nextEl: d, prevEl: c } = n.navigation ? n.navigation : {};
                                    (d = l(d)),
                                        (c = l(c)),
                                        d && d.forEach((n) => b(n, r, e.nextSlideMessage)),
                                        c && c.forEach((n) => b(n, r, e.prevSlideMessage)),
                                        w() &&
                                            (Array.isArray(n.pagination.el)
                                                ? n.pagination.el
                                                : [n.pagination.el]
                                            ).forEach((e) => {
                                                e.addEventListener('keydown', h);
                                            }),
                                        n.el.addEventListener('focus', _, !0),
                                        n.el.addEventListener('pointerdown', E, !0),
                                        n.el.addEventListener('pointerup', v, !0);
                                })();
                        }),
                        s('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
                            n.params.a11y.enabled && C();
                        }),
                        s('fromEdge toEdge afterInit lock unlock', () => {
                            n.params.a11y.enabled &&
                                (function () {
                                    if (n.params.loop || n.params.rewind || !n.navigation) return;
                                    const { nextEl: e, prevEl: t } = n.navigation;
                                    t && (n.isBeginning ? (u(t), d(t)) : (g(t), A(t))),
                                        e && (n.isEnd ? (u(e), d(e)) : (g(e), A(e)));
                                })();
                        }),
                        s('paginationUpdate', () => {
                            n.params.a11y.enabled &&
                                (function () {
                                    const e = n.params.a11y;
                                    f() &&
                                        n.pagination.bullets.forEach((t) => {
                                            n.params.pagination.clickable &&
                                                (A(t),
                                                n.params.pagination.renderBullet ||
                                                    (c(t, 'button'),
                                                    p(
                                                        t,
                                                        e.paginationBulletMessage.replace(
                                                            /\{\{index\}\}/,
                                                            (0, r.g)(t) + 1
                                                        )
                                                    ))),
                                                t.matches((0, i.c)(n.params.pagination.bulletActiveClass))
                                                    ? t.setAttribute('aria-current', 'true')
                                                    : t.removeAttribute('aria-current');
                                        });
                                })();
                        }),
                        s('destroy', () => {
                            n.params.a11y.enabled &&
                                (function () {
                                    a && a.remove();
                                    let { nextEl: e, prevEl: t } = n.navigation ? n.navigation : {};
                                    (e = l(e)),
                                        (t = l(t)),
                                        e && e.forEach((e) => e.removeEventListener('keydown', h)),
                                        t && t.forEach((e) => e.removeEventListener('keydown', h)),
                                        w() &&
                                            (Array.isArray(n.pagination.el)
                                                ? n.pagination.el
                                                : [n.pagination.el]
                                            ).forEach((e) => {
                                                e.removeEventListener('keydown', h);
                                            }),
                                        n.el.removeEventListener('focus', _, !0),
                                        n.el.removeEventListener('pointerdown', E, !0),
                                        n.el.removeEventListener('pointerup', v, !0);
                                })();
                        });
                }
            },
            './node_modules/swiper/modules/autoplay.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => r });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs');
                function r(e) {
                    let n,
                        t,
                        { swiper: r, extendParams: s, on: a, emit: o, params: l } = e;
                    (r.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
                        s({
                            autoplay: {
                                enabled: !1,
                                delay: 3e3,
                                waitForTransition: !0,
                                disableOnInteraction: !1,
                                stopOnLastSlide: !1,
                                reverseDirection: !1,
                                pauseOnMouseEnter: !1
                            }
                        });
                    let A,
                        d,
                        c,
                        m,
                        p,
                        u,
                        g,
                        h,
                        f = l && l.autoplay ? l.autoplay.delay : 3e3,
                        w = l && l.autoplay ? l.autoplay.delay : 3e3,
                        b = new Date().getTime();
                    function E(e) {
                        r &&
                            !r.destroyed &&
                            r.wrapperEl &&
                            e.target === r.wrapperEl &&
                            (r.wrapperEl.removeEventListener('transitionend', E), h || x());
                    }
                    const v = () => {
                            if (r.destroyed || !r.autoplay.running) return;
                            r.autoplay.paused ? (d = !0) : d && ((w = A), (d = !1));
                            const e = r.autoplay.paused ? A : b + w - new Date().getTime();
                            (r.autoplay.timeLeft = e),
                                o('autoplayTimeLeft', e, e / f),
                                (t = requestAnimationFrame(() => {
                                    v();
                                }));
                        },
                        _ = (e) => {
                            if (r.destroyed || !r.autoplay.running) return;
                            cancelAnimationFrame(t), v();
                            let i = void 0 === e ? r.params.autoplay.delay : e;
                            (f = r.params.autoplay.delay), (w = r.params.autoplay.delay);
                            const s = (() => {
                                let e;
                                if (
                                    ((e =
                                        r.virtual && r.params.virtual.enabled
                                            ? r.slides.filter((e) =>
                                                  e.classList.contains('swiper-slide-active')
                                              )[0]
                                            : r.slides[r.activeIndex]),
                                    e)
                                )
                                    return parseInt(e.getAttribute('data-swiper-autoplay'), 10);
                            })();
                            !Number.isNaN(s) && s > 0 && void 0 === e && ((i = s), (f = s), (w = s)), (A = i);
                            const a = r.params.speed,
                                l = () => {
                                    r &&
                                        !r.destroyed &&
                                        (r.params.autoplay.reverseDirection
                                            ? !r.isBeginning || r.params.loop || r.params.rewind
                                                ? (r.slidePrev(a, !0, !0), o('autoplay'))
                                                : r.params.autoplay.stopOnLastSlide ||
                                                  (r.slideTo(r.slides.length - 1, a, !0, !0), o('autoplay'))
                                            : !r.isEnd || r.params.loop || r.params.rewind
                                              ? (r.slideNext(a, !0, !0), o('autoplay'))
                                              : r.params.autoplay.stopOnLastSlide ||
                                                (r.slideTo(0, a, !0, !0), o('autoplay')),
                                        r.params.cssMode &&
                                            ((b = new Date().getTime()),
                                            requestAnimationFrame(() => {
                                                _();
                                            })));
                                };
                            return (
                                i > 0
                                    ? (clearTimeout(n),
                                      (n = setTimeout(() => {
                                          l();
                                      }, i)))
                                    : requestAnimationFrame(() => {
                                          l();
                                      }),
                                i
                            );
                        },
                        C = () => {
                            (b = new Date().getTime()), (r.autoplay.running = !0), _(), o('autoplayStart');
                        },
                        B = () => {
                            (r.autoplay.running = !1),
                                clearTimeout(n),
                                cancelAnimationFrame(t),
                                o('autoplayStop');
                        },
                        y = (e, t) => {
                            if (r.destroyed || !r.autoplay.running) return;
                            clearTimeout(n), e || (g = !0);
                            const i = () => {
                                o('autoplayPause'),
                                    r.params.autoplay.waitForTransition
                                        ? r.wrapperEl.addEventListener('transitionend', E)
                                        : x();
                            };
                            if (((r.autoplay.paused = !0), t))
                                return u && (A = r.params.autoplay.delay), (u = !1), void i();
                            const s = A || r.params.autoplay.delay;
                            (A = s - (new Date().getTime() - b)),
                                (r.isEnd && A < 0 && !r.params.loop) || (A < 0 && (A = 0), i());
                        },
                        x = () => {
                            (r.isEnd && A < 0 && !r.params.loop) ||
                                r.destroyed ||
                                !r.autoplay.running ||
                                ((b = new Date().getTime()),
                                g ? ((g = !1), _(A)) : _(),
                                (r.autoplay.paused = !1),
                                o('autoplayResume'));
                        },
                        k = () => {
                            if (r.destroyed || !r.autoplay.running) return;
                            const e = (0, i.g)();
                            'hidden' === e.visibilityState && ((g = !0), y(!0)),
                                'visible' === e.visibilityState && x();
                        },
                        S = (e) => {
                            'mouse' === e.pointerType &&
                                ((g = !0), (h = !0), r.animating || r.autoplay.paused || y(!0));
                        },
                        M = (e) => {
                            'mouse' === e.pointerType && ((h = !1), r.autoplay.paused && x());
                        };
                    a('init', () => {
                        r.params.autoplay.enabled &&
                            (r.params.autoplay.pauseOnMouseEnter &&
                                (r.el.addEventListener('pointerenter', S),
                                r.el.addEventListener('pointerleave', M)),
                            (0, i.g)().addEventListener('visibilitychange', k),
                            C());
                    }),
                        a('destroy', () => {
                            r.el.removeEventListener('pointerenter', S),
                                r.el.removeEventListener('pointerleave', M),
                                (0, i.g)().removeEventListener('visibilitychange', k),
                                r.autoplay.running && B();
                        }),
                        a('_freeModeStaticRelease', () => {
                            (m || g) && x();
                        }),
                        a('_freeModeNoMomentumRelease', () => {
                            r.params.autoplay.disableOnInteraction ? B() : y(!0, !0);
                        }),
                        a('beforeTransitionStart', (e, n, t) => {
                            !r.destroyed &&
                                r.autoplay.running &&
                                (t || !r.params.autoplay.disableOnInteraction ? y(!0, !0) : B());
                        }),
                        a('sliderFirstMove', () => {
                            !r.destroyed &&
                                r.autoplay.running &&
                                (r.params.autoplay.disableOnInteraction
                                    ? B()
                                    : ((c = !0),
                                      (m = !1),
                                      (g = !1),
                                      (p = setTimeout(() => {
                                          (g = !0), (m = !0), y(!0);
                                      }, 200))));
                        }),
                        a('touchEnd', () => {
                            if (!r.destroyed && r.autoplay.running && c) {
                                if (
                                    (clearTimeout(p), clearTimeout(n), r.params.autoplay.disableOnInteraction)
                                )
                                    return (m = !1), void (c = !1);
                                m && r.params.cssMode && x(), (m = !1), (c = !1);
                            }
                        }),
                        a('slideChange', () => {
                            !r.destroyed && r.autoplay.running && (u = !0);
                        }),
                        Object.assign(r.autoplay, { start: C, stop: B, pause: y, resume: x });
                }
            },
            './node_modules/swiper/modules/controller.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => r });
                var i = t('./node_modules/swiper/shared/utils.mjs');
                function r(e) {
                    let { swiper: n, extendParams: t, on: r } = e;
                    function s(e, n) {
                        const t = (function () {
                            let e, n, t;
                            return (i, r) => {
                                for (n = -1, e = i.length; e - n > 1; )
                                    (t = (e + n) >> 1), i[t] <= r ? (n = t) : (e = t);
                                return e;
                            };
                        })();
                        let i, r;
                        return (
                            (this.x = e),
                            (this.y = n),
                            (this.lastIndex = e.length - 1),
                            (this.interpolate = function (e) {
                                return e
                                    ? ((r = t(this.x, e)),
                                      (i = r - 1),
                                      ((e - this.x[i]) * (this.y[r] - this.y[i])) / (this.x[r] - this.x[i]) +
                                          this.y[i])
                                    : 0;
                            }),
                            this
                        );
                    }
                    function a() {
                        n.controller.control &&
                            n.controller.spline &&
                            ((n.controller.spline = void 0), delete n.controller.spline);
                    }
                    t({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
                        (n.controller = { control: void 0 }),
                        r('beforeInit', () => {
                            if (
                                'undefined' != typeof window &&
                                ('string' == typeof n.params.controller.control ||
                                    n.params.controller.control instanceof HTMLElement)
                            ) {
                                const e = document.querySelector(n.params.controller.control);
                                if (e && e.swiper) n.controller.control = e.swiper;
                                else if (e) {
                                    const t = (i) => {
                                        (n.controller.control = i.detail[0]),
                                            n.update(),
                                            e.removeEventListener('init', t);
                                    };
                                    e.addEventListener('init', t);
                                }
                            } else n.controller.control = n.params.controller.control;
                        }),
                        r('update', () => {
                            a();
                        }),
                        r('resize', () => {
                            a();
                        }),
                        r('observerUpdate', () => {
                            a();
                        }),
                        r('setTranslate', (e, t, i) => {
                            n.controller.control &&
                                !n.controller.control.destroyed &&
                                n.controller.setTranslate(t, i);
                        }),
                        r('setTransition', (e, t, i) => {
                            n.controller.control &&
                                !n.controller.control.destroyed &&
                                n.controller.setTransition(t, i);
                        }),
                        Object.assign(n.controller, {
                            setTranslate: function (e, t) {
                                const i = n.controller.control;
                                let r, a;
                                const o = n.constructor;
                                function l(e) {
                                    if (e.destroyed) return;
                                    const t = n.rtlTranslate ? -n.translate : n.translate;
                                    'slide' === n.params.controller.by &&
                                        ((function (e) {
                                            n.controller.spline = n.params.loop
                                                ? new s(n.slidesGrid, e.slidesGrid)
                                                : new s(n.snapGrid, e.snapGrid);
                                        })(e),
                                        (a = -n.controller.spline.interpolate(-t))),
                                        (a && 'container' !== n.params.controller.by) ||
                                            ((r =
                                                (e.maxTranslate() - e.minTranslate()) /
                                                (n.maxTranslate() - n.minTranslate())),
                                            (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                                            (a = (t - n.minTranslate()) * r + e.minTranslate())),
                                        n.params.controller.inverse && (a = e.maxTranslate() - a),
                                        e.updateProgress(a),
                                        e.setTranslate(a, n),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses();
                                }
                                if (Array.isArray(i))
                                    for (let e = 0; e < i.length; e += 1)
                                        i[e] !== t && i[e] instanceof o && l(i[e]);
                                else i instanceof o && t !== i && l(i);
                            },
                            setTransition: function (e, t) {
                                const r = n.constructor,
                                    s = n.controller.control;
                                let a;
                                function o(t) {
                                    t.destroyed ||
                                        (t.setTransition(e, n),
                                        0 !== e &&
                                            (t.transitionStart(),
                                            t.params.autoHeight &&
                                                (0, i.n)(() => {
                                                    t.updateAutoHeight();
                                                }),
                                            (0, i.j)(t.wrapperEl, () => {
                                                s && t.transitionEnd();
                                            })));
                                }
                                if (Array.isArray(s))
                                    for (a = 0; a < s.length; a += 1)
                                        s[a] !== t && s[a] instanceof r && o(s[a]);
                                else s instanceof r && t !== s && o(s);
                            }
                        });
                }
            },
            './node_modules/swiper/modules/effect-cards.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => l });
                var i = t('./node_modules/swiper/shared/create-shadow.mjs'),
                    r = t('./node_modules/swiper/shared/effect-init.mjs'),
                    s = t('./node_modules/swiper/shared/effect-target.mjs'),
                    a = t('./node_modules/swiper/shared/effect-virtual-transition-end.mjs'),
                    o = t('./node_modules/swiper/shared/utils.mjs');
                function l(e) {
                    let { swiper: n, extendParams: t, on: l } = e;
                    t({
                        cardsEffect: { slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 }
                    }),
                        (0, r.e)({
                            effect: 'cards',
                            swiper: n,
                            on: l,
                            setTranslate: () => {
                                const { slides: e, activeIndex: t, rtlTranslate: r } = n,
                                    a = n.params.cardsEffect,
                                    { startTranslate: o, isTouched: l } = n.touchEventsData,
                                    A = r ? -n.translate : n.translate;
                                for (let d = 0; d < e.length; d += 1) {
                                    const c = e[d],
                                        m = c.progress,
                                        p = Math.min(Math.max(m, -4), 4);
                                    let u = c.swiperSlideOffset;
                                    n.params.centeredSlides &&
                                        !n.params.cssMode &&
                                        (n.wrapperEl.style.transform = `translateX(${n.minTranslate()}px)`),
                                        n.params.centeredSlides &&
                                            n.params.cssMode &&
                                            (u -= e[0].swiperSlideOffset);
                                    let g = n.params.cssMode ? -u - n.translate : -u,
                                        h = 0;
                                    const f = -100 * Math.abs(p);
                                    let w = 1,
                                        b = -a.perSlideRotate * p,
                                        E = a.perSlideOffset - 0.75 * Math.abs(p);
                                    const v = n.virtual && n.params.virtual.enabled ? n.virtual.from + d : d,
                                        _ =
                                            (v === t || v === t - 1) &&
                                            p > 0 &&
                                            p < 1 &&
                                            (l || n.params.cssMode) &&
                                            A < o,
                                        C =
                                            (v === t || v === t + 1) &&
                                            p < 0 &&
                                            p > -1 &&
                                            (l || n.params.cssMode) &&
                                            A > o;
                                    if (_ || C) {
                                        const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                                        (b += -28 * p * e),
                                            (w += -0.5 * e),
                                            (E += 96 * e),
                                            (h = -25 * e * Math.abs(p) + '%');
                                    }
                                    if (
                                        ((g =
                                            p < 0
                                                ? `calc(${g}px ${r ? '-' : '+'} (${E * Math.abs(p)}%))`
                                                : p > 0
                                                  ? `calc(${g}px ${r ? '-' : '+'} (-${E * Math.abs(p)}%))`
                                                  : `${g}px`),
                                        !n.isHorizontal())
                                    ) {
                                        const e = h;
                                        (h = g), (g = e);
                                    }
                                    const B = p < 0 ? '' + (1 + (1 - w) * p) : '' + (1 - (1 - w) * p),
                                        y = `\n        translate3d(${g}, ${h}, ${f}px)\n        rotateZ(${
                                            a.rotate ? (r ? -b : b) : 0
                                        }deg)\n        scale(${B})\n      `;
                                    if (a.slideShadows) {
                                        let e = c.querySelector('.swiper-slide-shadow');
                                        e || (e = (0, i.c)('cards', c)),
                                            e &&
                                                (e.style.opacity = Math.min(
                                                    Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                                                    1
                                                ));
                                    }
                                    (c.style.zIndex = -Math.abs(Math.round(m)) + e.length),
                                        ((0, s.e)(a, c).style.transform = y);
                                }
                            },
                            setTransition: (e) => {
                                const t = n.slides.map((e) => (0, o.l)(e));
                                t.forEach((n) => {
                                    (n.style.transitionDuration = `${e}ms`),
                                        n.querySelectorAll('.swiper-slide-shadow').forEach((n) => {
                                            n.style.transitionDuration = `${e}ms`;
                                        });
                                }),
                                    (0, a.e)({ swiper: n, duration: e, transformElements: t });
                            },
                            perspective: () => !0,
                            overwriteParams: () => ({
                                watchSlidesProgress: !0,
                                virtualTranslate: !n.params.cssMode
                            })
                        });
                }
            },
            './node_modules/swiper/modules/effect-coverflow.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => o });
                var i = t('./node_modules/swiper/shared/create-shadow.mjs'),
                    r = t('./node_modules/swiper/shared/effect-init.mjs'),
                    s = t('./node_modules/swiper/shared/effect-target.mjs'),
                    a = t('./node_modules/swiper/shared/utils.mjs');
                function o(e) {
                    let { swiper: n, extendParams: t, on: o } = e;
                    t({
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            scale: 1,
                            modifier: 1,
                            slideShadows: !0
                        }
                    }),
                        (0, r.e)({
                            effect: 'coverflow',
                            swiper: n,
                            on: o,
                            setTranslate: () => {
                                const { width: e, height: t, slides: r, slidesSizesGrid: a } = n,
                                    o = n.params.coverflowEffect,
                                    l = n.isHorizontal(),
                                    A = n.translate,
                                    d = l ? e / 2 - A : t / 2 - A,
                                    c = l ? o.rotate : -o.rotate,
                                    m = o.depth;
                                for (let e = 0, t = r.length; e < t; e += 1) {
                                    const t = r[e],
                                        A = a[e],
                                        p = (d - t.swiperSlideOffset - A / 2) / A,
                                        u = 'function' == typeof o.modifier ? o.modifier(p) : p * o.modifier;
                                    let g = l ? c * u : 0,
                                        h = l ? 0 : c * u,
                                        f = -m * Math.abs(u),
                                        w = o.stretch;
                                    'string' == typeof w &&
                                        -1 !== w.indexOf('%') &&
                                        (w = (parseFloat(o.stretch) / 100) * A);
                                    let b = l ? 0 : w * u,
                                        E = l ? w * u : 0,
                                        v = 1 - (1 - o.scale) * Math.abs(u);
                                    Math.abs(E) < 0.001 && (E = 0),
                                        Math.abs(b) < 0.001 && (b = 0),
                                        Math.abs(f) < 0.001 && (f = 0),
                                        Math.abs(g) < 0.001 && (g = 0),
                                        Math.abs(h) < 0.001 && (h = 0),
                                        Math.abs(v) < 0.001 && (v = 0),
                                        n.browser &&
                                            n.browser.isSafari &&
                                            ((Math.abs(g) / 90) % 2 == 1 && (g += 0.001),
                                            (Math.abs(h) / 90) % 2 == 1 && (h += 0.001));
                                    const _ = `translate3d(${E}px,${b}px,${f}px)  rotateX(${h}deg) rotateY(${g}deg) scale(${v})`;
                                    if (
                                        (((0, s.e)(o, t).style.transform = _),
                                        (t.style.zIndex = 1 - Math.abs(Math.round(u))),
                                        o.slideShadows)
                                    ) {
                                        let e = l
                                                ? t.querySelector('.swiper-slide-shadow-left')
                                                : t.querySelector('.swiper-slide-shadow-top'),
                                            n = l
                                                ? t.querySelector('.swiper-slide-shadow-right')
                                                : t.querySelector('.swiper-slide-shadow-bottom');
                                        e || (e = (0, i.c)('coverflow', t, l ? 'left' : 'top')),
                                            n || (n = (0, i.c)('coverflow', t, l ? 'right' : 'bottom')),
                                            e && (e.style.opacity = u > 0 ? u : 0),
                                            n && (n.style.opacity = -u > 0 ? -u : 0);
                                    }
                                }
                            },
                            setTransition: (e) => {
                                n.slides
                                    .map((e) => (0, a.l)(e))
                                    .forEach((n) => {
                                        (n.style.transitionDuration = `${e}ms`),
                                            n
                                                .querySelectorAll(
                                                    '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                                                )
                                                .forEach((n) => {
                                                    n.style.transitionDuration = `${e}ms`;
                                                });
                                    });
                            },
                            perspective: () => !0,
                            overwriteParams: () => ({ watchSlidesProgress: !0 })
                        });
                }
            },
            './node_modules/swiper/modules/effect-creative.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => l });
                var i = t('./node_modules/swiper/shared/create-shadow.mjs'),
                    r = t('./node_modules/swiper/shared/effect-init.mjs'),
                    s = t('./node_modules/swiper/shared/effect-target.mjs'),
                    a = t('./node_modules/swiper/shared/effect-virtual-transition-end.mjs'),
                    o = t('./node_modules/swiper/shared/utils.mjs');
                function l(e) {
                    let { swiper: n, extendParams: t, on: l } = e;
                    t({
                        creativeEffect: {
                            limitProgress: 1,
                            shadowPerProgress: !1,
                            progressMultiplier: 1,
                            perspective: !0,
                            prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                            next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }
                        }
                    });
                    const A = (e) => ('string' == typeof e ? e : `${e}px`);
                    (0, r.e)({
                        effect: 'creative',
                        swiper: n,
                        on: l,
                        setTranslate: () => {
                            const { slides: e, wrapperEl: t, slidesSizesGrid: r } = n,
                                a = n.params.creativeEffect,
                                { progressMultiplier: o } = a,
                                l = n.params.centeredSlides;
                            if (l) {
                                const e = r[0] / 2 - n.params.slidesOffsetBefore || 0;
                                t.style.transform = `translateX(calc(50% - ${e}px))`;
                            }
                            for (let t = 0; t < e.length; t += 1) {
                                const r = e[t],
                                    d = r.progress,
                                    c = Math.min(Math.max(r.progress, -a.limitProgress), a.limitProgress);
                                let m = c;
                                l ||
                                    (m = Math.min(
                                        Math.max(r.originalProgress, -a.limitProgress),
                                        a.limitProgress
                                    ));
                                const p = r.swiperSlideOffset,
                                    u = [n.params.cssMode ? -p - n.translate : -p, 0, 0],
                                    g = [0, 0, 0];
                                let h = !1;
                                n.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
                                let f = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
                                c < 0 ? ((f = a.next), (h = !0)) : c > 0 && ((f = a.prev), (h = !0)),
                                    u.forEach((e, n) => {
                                        u[n] = `calc(${e}px + (${A(f.translate[n])} * ${Math.abs(c * o)}))`;
                                    }),
                                    g.forEach((e, t) => {
                                        let i = f.rotate[t] * Math.abs(c * o);
                                        n.browser &&
                                            n.browser.isSafari &&
                                            (Math.abs(i) / 90) % 2 == 1 &&
                                            (i += 0.001),
                                            (g[t] = i);
                                    }),
                                    (r.style.zIndex = -Math.abs(Math.round(d)) + e.length);
                                const w = u.join(', '),
                                    b = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
                                    E =
                                        m < 0
                                            ? `scale(${1 + (1 - f.scale) * m * o})`
                                            : `scale(${1 - (1 - f.scale) * m * o})`,
                                    v = m < 0 ? 1 + (1 - f.opacity) * m * o : 1 - (1 - f.opacity) * m * o,
                                    _ = `translate3d(${w}) ${b} ${E}`;
                                if ((h && f.shadow) || !h) {
                                    let e = r.querySelector('.swiper-slide-shadow');
                                    if ((!e && f.shadow && (e = (0, i.c)('creative', r)), e)) {
                                        const n = a.shadowPerProgress ? c * (1 / a.limitProgress) : c;
                                        e.style.opacity = Math.min(Math.max(Math.abs(n), 0), 1);
                                    }
                                }
                                const C = (0, s.e)(a, r);
                                (C.style.transform = _),
                                    (C.style.opacity = v),
                                    f.origin && (C.style.transformOrigin = f.origin);
                            }
                        },
                        setTransition: (e) => {
                            const t = n.slides.map((e) => (0, o.l)(e));
                            t.forEach((n) => {
                                (n.style.transitionDuration = `${e}ms`),
                                    n.querySelectorAll('.swiper-slide-shadow').forEach((n) => {
                                        n.style.transitionDuration = `${e}ms`;
                                    });
                            }),
                                (0, a.e)({ swiper: n, duration: e, transformElements: t, allSlides: !0 });
                        },
                        perspective: () => n.params.creativeEffect.perspective,
                        overwriteParams: () => ({
                            watchSlidesProgress: !0,
                            virtualTranslate: !n.params.cssMode
                        })
                    });
                }
            },
            './node_modules/swiper/modules/effect-cube.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => s });
                var i = t('./node_modules/swiper/shared/effect-init.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                function s(e) {
                    let { swiper: n, extendParams: t, on: s } = e;
                    t({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
                    const a = (e, n, t) => {
                        let i = t
                                ? e.querySelector('.swiper-slide-shadow-left')
                                : e.querySelector('.swiper-slide-shadow-top'),
                            s = t
                                ? e.querySelector('.swiper-slide-shadow-right')
                                : e.querySelector('.swiper-slide-shadow-bottom');
                        i ||
                            ((i = (0, r.c)(
                                'div',
                                (
                                    'swiper-slide-shadow-cube swiper-slide-shadow-' + (t ? 'left' : 'top')
                                ).split(' ')
                            )),
                            e.append(i)),
                            s ||
                                ((s = (0, r.c)(
                                    'div',
                                    (
                                        'swiper-slide-shadow-cube swiper-slide-shadow-' +
                                        (t ? 'right' : 'bottom')
                                    ).split(' ')
                                )),
                                e.append(s)),
                            i && (i.style.opacity = Math.max(-n, 0)),
                            s && (s.style.opacity = Math.max(n, 0));
                    };
                    (0, i.e)({
                        effect: 'cube',
                        swiper: n,
                        on: s,
                        setTranslate: () => {
                            const {
                                    el: e,
                                    wrapperEl: t,
                                    slides: i,
                                    width: s,
                                    height: o,
                                    rtlTranslate: l,
                                    size: A,
                                    browser: d
                                } = n,
                                c = n.params.cubeEffect,
                                m = n.isHorizontal(),
                                p = n.virtual && n.params.virtual.enabled;
                            let u,
                                g = 0;
                            c.shadow &&
                                (m
                                    ? ((u = n.wrapperEl.querySelector('.swiper-cube-shadow')),
                                      u ||
                                          ((u = (0, r.c)('div', 'swiper-cube-shadow')),
                                          n.wrapperEl.append(u)),
                                      (u.style.height = `${s}px`))
                                    : ((u = e.querySelector('.swiper-cube-shadow')),
                                      u || ((u = (0, r.c)('div', 'swiper-cube-shadow')), e.append(u))));
                            for (let e = 0; e < i.length; e += 1) {
                                const t = i[e];
                                let r = e;
                                p && (r = parseInt(t.getAttribute('data-swiper-slide-index'), 10));
                                let s = 90 * r,
                                    o = Math.floor(s / 360);
                                l && ((s = -s), (o = Math.floor(-s / 360)));
                                const d = Math.max(Math.min(t.progress, 1), -1);
                                let u = 0,
                                    h = 0,
                                    f = 0;
                                r % 4 == 0
                                    ? ((u = 4 * -o * A), (f = 0))
                                    : (r - 1) % 4 == 0
                                      ? ((u = 0), (f = 4 * -o * A))
                                      : (r - 2) % 4 == 0
                                        ? ((u = A + 4 * o * A), (f = A))
                                        : (r - 3) % 4 == 0 && ((u = -A), (f = 3 * A + 4 * A * o)),
                                    l && (u = -u),
                                    m || ((h = u), (u = 0));
                                const w = `rotateX(${m ? 0 : -s}deg) rotateY(${
                                    m ? s : 0
                                }deg) translate3d(${u}px, ${h}px, ${f}px)`;
                                d <= 1 &&
                                    d > -1 &&
                                    ((g = 90 * r + 90 * d),
                                    l && (g = 90 * -r - 90 * d),
                                    n.browser &&
                                        n.browser.isSafari &&
                                        (Math.abs(g) / 90) % 2 == 1 &&
                                        (g += 0.001)),
                                    (t.style.transform = w),
                                    c.slideShadows && a(t, d, m);
                            }
                            if (
                                ((t.style.transformOrigin = `50% 50% -${A / 2}px`),
                                (t.style['-webkit-transform-origin'] = `50% 50% -${A / 2}px`),
                                c.shadow)
                            )
                                if (m)
                                    u.style.transform = `translate3d(0px, ${s / 2 + c.shadowOffset}px, ${
                                        -s / 2
                                    }px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;
                                else {
                                    const e = Math.abs(g) - 90 * Math.floor(Math.abs(g) / 90),
                                        n =
                                            1.5 -
                                            (Math.sin((2 * e * Math.PI) / 360) / 2 +
                                                Math.cos((2 * e * Math.PI) / 360) / 2),
                                        t = c.shadowScale,
                                        i = c.shadowScale / n,
                                        r = c.shadowOffset;
                                    u.style.transform = `scale3d(${t}, 1, ${i}) translate3d(0px, ${
                                        o / 2 + r
                                    }px, ${-o / 2 / i}px) rotateX(-89.99deg)`;
                                }
                            const h = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -A / 2 : 0;
                            (t.style.transform = `translate3d(0px,0,${h}px) rotateX(${
                                n.isHorizontal() ? 0 : g
                            }deg) rotateY(${n.isHorizontal() ? -g : 0}deg)`),
                                t.style.setProperty('--swiper-cube-translate-z', `${h}px`);
                        },
                        setTransition: (e) => {
                            const { el: t, slides: i } = n;
                            if (
                                (i.forEach((n) => {
                                    (n.style.transitionDuration = `${e}ms`),
                                        n
                                            .querySelectorAll(
                                                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                                            )
                                            .forEach((n) => {
                                                n.style.transitionDuration = `${e}ms`;
                                            });
                                }),
                                n.params.cubeEffect.shadow && !n.isHorizontal())
                            ) {
                                const n = t.querySelector('.swiper-cube-shadow');
                                n && (n.style.transitionDuration = `${e}ms`);
                            }
                        },
                        recreateShadows: () => {
                            const e = n.isHorizontal();
                            n.slides.forEach((n) => {
                                const t = Math.max(Math.min(n.progress, 1), -1);
                                a(n, t, e);
                            });
                        },
                        getEffectParams: () => n.params.cubeEffect,
                        perspective: () => !0,
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        })
                    });
                }
            },
            './node_modules/swiper/modules/effect-fade.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => o });
                var i = t('./node_modules/swiper/shared/effect-init.mjs'),
                    r = t('./node_modules/swiper/shared/effect-target.mjs'),
                    s = t('./node_modules/swiper/shared/effect-virtual-transition-end.mjs'),
                    a = t('./node_modules/swiper/shared/utils.mjs');
                function o(e) {
                    let { swiper: n, extendParams: t, on: o } = e;
                    t({ fadeEffect: { crossFade: !1 } }),
                        (0, i.e)({
                            effect: 'fade',
                            swiper: n,
                            on: o,
                            setTranslate: () => {
                                const { slides: e } = n,
                                    t = n.params.fadeEffect;
                                for (let i = 0; i < e.length; i += 1) {
                                    const e = n.slides[i];
                                    let s = -e.swiperSlideOffset;
                                    n.params.virtualTranslate || (s -= n.translate);
                                    let a = 0;
                                    n.isHorizontal() || ((a = s), (s = 0));
                                    const o = n.params.fadeEffect.crossFade
                                            ? Math.max(1 - Math.abs(e.progress), 0)
                                            : 1 + Math.min(Math.max(e.progress, -1), 0),
                                        l = (0, r.e)(t, e);
                                    (l.style.opacity = o),
                                        (l.style.transform = `translate3d(${s}px, ${a}px, 0px)`);
                                }
                            },
                            setTransition: (e) => {
                                const t = n.slides.map((e) => (0, a.l)(e));
                                t.forEach((n) => {
                                    n.style.transitionDuration = `${e}ms`;
                                }),
                                    (0, s.e)({ swiper: n, duration: e, transformElements: t, allSlides: !0 });
                            },
                            overwriteParams: () => ({
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !n.params.cssMode
                            })
                        });
                }
            },
            './node_modules/swiper/modules/effect-flip.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => l });
                var i = t('./node_modules/swiper/shared/create-shadow.mjs'),
                    r = t('./node_modules/swiper/shared/effect-init.mjs'),
                    s = t('./node_modules/swiper/shared/effect-target.mjs'),
                    a = t('./node_modules/swiper/shared/effect-virtual-transition-end.mjs'),
                    o = t('./node_modules/swiper/shared/utils.mjs');
                function l(e) {
                    let { swiper: n, extendParams: t, on: l } = e;
                    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
                    const A = (e, t) => {
                        let r = n.isHorizontal()
                                ? e.querySelector('.swiper-slide-shadow-left')
                                : e.querySelector('.swiper-slide-shadow-top'),
                            s = n.isHorizontal()
                                ? e.querySelector('.swiper-slide-shadow-right')
                                : e.querySelector('.swiper-slide-shadow-bottom');
                        r || (r = (0, i.c)('flip', e, n.isHorizontal() ? 'left' : 'top')),
                            s || (s = (0, i.c)('flip', e, n.isHorizontal() ? 'right' : 'bottom')),
                            r && (r.style.opacity = Math.max(-t, 0)),
                            s && (s.style.opacity = Math.max(t, 0));
                    };
                    (0, r.e)({
                        effect: 'flip',
                        swiper: n,
                        on: l,
                        setTranslate: () => {
                            const { slides: e, rtlTranslate: t } = n,
                                i = n.params.flipEffect;
                            for (let r = 0; r < e.length; r += 1) {
                                const a = e[r];
                                let o = a.progress;
                                n.params.flipEffect.limitRotation &&
                                    (o = Math.max(Math.min(a.progress, 1), -1));
                                const l = a.swiperSlideOffset;
                                let d = -180 * o,
                                    c = 0,
                                    m = n.params.cssMode ? -l - n.translate : -l,
                                    p = 0;
                                n.isHorizontal() ? t && (d = -d) : ((p = m), (m = 0), (c = -d), (d = 0)),
                                    n.browser &&
                                        n.browser.isSafari &&
                                        ((Math.abs(d) / 90) % 2 == 1 && (d += 0.001),
                                        (Math.abs(c) / 90) % 2 == 1 && (c += 0.001)),
                                    (a.style.zIndex = -Math.abs(Math.round(o)) + e.length),
                                    i.slideShadows && A(a, o);
                                const u = `translate3d(${m}px, ${p}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                                (0, s.e)(i, a).style.transform = u;
                            }
                        },
                        setTransition: (e) => {
                            const t = n.slides.map((e) => (0, o.l)(e));
                            t.forEach((n) => {
                                (n.style.transitionDuration = `${e}ms`),
                                    n
                                        .querySelectorAll(
                                            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                                        )
                                        .forEach((n) => {
                                            n.style.transitionDuration = `${e}ms`;
                                        });
                            }),
                                (0, a.e)({ swiper: n, duration: e, transformElements: t });
                        },
                        recreateShadows: () => {
                            n.params.flipEffect,
                                n.slides.forEach((e) => {
                                    let t = e.progress;
                                    n.params.flipEffect.limitRotation &&
                                        (t = Math.max(Math.min(e.progress, 1), -1)),
                                        A(e, t);
                                });
                        },
                        getEffectParams: () => n.params.flipEffect,
                        perspective: () => !0,
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !n.params.cssMode
                        })
                    });
                }
            },
            './node_modules/swiper/modules/free-mode.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => r });
                var i = t('./node_modules/swiper/shared/utils.mjs');
                function r(e) {
                    let { swiper: n, extendParams: t, emit: r, once: s } = e;
                    t({
                        freeMode: {
                            enabled: !1,
                            momentum: !0,
                            momentumRatio: 1,
                            momentumBounce: !0,
                            momentumBounceRatio: 1,
                            momentumVelocityRatio: 1,
                            sticky: !1,
                            minimumVelocity: 0.02
                        }
                    }),
                        Object.assign(n, {
                            freeMode: {
                                onTouchStart: function () {
                                    if (n.params.cssMode) return;
                                    const e = n.getTranslate();
                                    n.setTranslate(e),
                                        n.setTransition(0),
                                        (n.touchEventsData.velocities.length = 0),
                                        n.freeMode.onTouchEnd({
                                            currentPos: n.rtl ? n.translate : -n.translate
                                        });
                                },
                                onTouchMove: function () {
                                    if (n.params.cssMode) return;
                                    const { touchEventsData: e, touches: t } = n;
                                    0 === e.velocities.length &&
                                        e.velocities.push({
                                            position: t[n.isHorizontal() ? 'startX' : 'startY'],
                                            time: e.touchStartTime
                                        }),
                                        e.velocities.push({
                                            position: t[n.isHorizontal() ? 'currentX' : 'currentY'],
                                            time: (0, i.d)()
                                        });
                                },
                                onTouchEnd: function (e) {
                                    let { currentPos: t } = e;
                                    if (n.params.cssMode) return;
                                    const {
                                            params: a,
                                            wrapperEl: o,
                                            rtlTranslate: l,
                                            snapGrid: A,
                                            touchEventsData: d
                                        } = n,
                                        c = (0, i.d)() - d.touchStartTime;
                                    if (t < -n.minTranslate()) n.slideTo(n.activeIndex);
                                    else if (t > -n.maxTranslate())
                                        n.slides.length < A.length
                                            ? n.slideTo(A.length - 1)
                                            : n.slideTo(n.slides.length - 1);
                                    else {
                                        if (a.freeMode.momentum) {
                                            if (d.velocities.length > 1) {
                                                const e = d.velocities.pop(),
                                                    t = d.velocities.pop(),
                                                    r = e.position - t.position,
                                                    s = e.time - t.time;
                                                (n.velocity = r / s),
                                                    (n.velocity /= 2),
                                                    Math.abs(n.velocity) < a.freeMode.minimumVelocity &&
                                                        (n.velocity = 0),
                                                    (s > 150 || (0, i.d)() - e.time > 300) &&
                                                        (n.velocity = 0);
                                            } else n.velocity = 0;
                                            (n.velocity *= a.freeMode.momentumVelocityRatio),
                                                (d.velocities.length = 0);
                                            let e = 1e3 * a.freeMode.momentumRatio;
                                            const t = n.velocity * e;
                                            let c = n.translate + t;
                                            l && (c = -c);
                                            let m,
                                                p = !1;
                                            const u =
                                                20 * Math.abs(n.velocity) * a.freeMode.momentumBounceRatio;
                                            let g;
                                            if (c < n.maxTranslate())
                                                a.freeMode.momentumBounce
                                                    ? (c + n.maxTranslate() < -u &&
                                                          (c = n.maxTranslate() - u),
                                                      (m = n.maxTranslate()),
                                                      (p = !0),
                                                      (d.allowMomentumBounce = !0))
                                                    : (c = n.maxTranslate()),
                                                    a.loop && a.centeredSlides && (g = !0);
                                            else if (c > n.minTranslate())
                                                a.freeMode.momentumBounce
                                                    ? (c - n.minTranslate() > u && (c = n.minTranslate() + u),
                                                      (m = n.minTranslate()),
                                                      (p = !0),
                                                      (d.allowMomentumBounce = !0))
                                                    : (c = n.minTranslate()),
                                                    a.loop && a.centeredSlides && (g = !0);
                                            else if (a.freeMode.sticky) {
                                                let e;
                                                for (let n = 0; n < A.length; n += 1)
                                                    if (A[n] > -c) {
                                                        e = n;
                                                        break;
                                                    }
                                                (c =
                                                    Math.abs(A[e] - c) < Math.abs(A[e - 1] - c) ||
                                                    'next' === n.swipeDirection
                                                        ? A[e]
                                                        : A[e - 1]),
                                                    (c = -c);
                                            }
                                            if (
                                                (g &&
                                                    s('transitionEnd', () => {
                                                        n.loopFix();
                                                    }),
                                                0 !== n.velocity)
                                            ) {
                                                if (
                                                    ((e = l
                                                        ? Math.abs((-c - n.translate) / n.velocity)
                                                        : Math.abs((c - n.translate) / n.velocity)),
                                                    a.freeMode.sticky)
                                                ) {
                                                    const t = Math.abs((l ? -c : c) - n.translate),
                                                        i = n.slidesSizesGrid[n.activeIndex];
                                                    e =
                                                        t < i
                                                            ? a.speed
                                                            : t < 2 * i
                                                              ? 1.5 * a.speed
                                                              : 2.5 * a.speed;
                                                }
                                            } else if (a.freeMode.sticky) return void n.slideToClosest();
                                            a.freeMode.momentumBounce && p
                                                ? (n.updateProgress(m),
                                                  n.setTransition(e),
                                                  n.setTranslate(c),
                                                  n.transitionStart(!0, n.swipeDirection),
                                                  (n.animating = !0),
                                                  (0, i.j)(o, () => {
                                                      n &&
                                                          !n.destroyed &&
                                                          d.allowMomentumBounce &&
                                                          (r('momentumBounce'),
                                                          n.setTransition(a.speed),
                                                          setTimeout(() => {
                                                              n.setTranslate(m),
                                                                  (0, i.j)(o, () => {
                                                                      n && !n.destroyed && n.transitionEnd();
                                                                  });
                                                          }, 0));
                                                  }))
                                                : n.velocity
                                                  ? (r('_freeModeNoMomentumRelease'),
                                                    n.updateProgress(c),
                                                    n.setTransition(e),
                                                    n.setTranslate(c),
                                                    n.transitionStart(!0, n.swipeDirection),
                                                    n.animating ||
                                                        ((n.animating = !0),
                                                        (0, i.j)(o, () => {
                                                            n && !n.destroyed && n.transitionEnd();
                                                        })))
                                                  : n.updateProgress(c),
                                                n.updateActiveIndex(),
                                                n.updateSlidesClasses();
                                        } else {
                                            if (a.freeMode.sticky) return void n.slideToClosest();
                                            a.freeMode && r('_freeModeNoMomentumRelease');
                                        }
                                        (!a.freeMode.momentum || c >= a.longSwipesMs) &&
                                            (r('_freeModeStaticRelease'),
                                            n.updateProgress(),
                                            n.updateActiveIndex(),
                                            n.updateSlidesClasses());
                                    }
                                }
                            }
                        });
                }
            },
            './node_modules/swiper/modules/grid.mjs': (e, n, t) => {
                'use strict';
                function i(e) {
                    let n,
                        t,
                        i,
                        r,
                        { swiper: s, extendParams: a, on: o } = e;
                    a({ grid: { rows: 1, fill: 'column' } });
                    const l = () => {
                        let e = s.params.spaceBetween;
                        return (
                            'string' == typeof e && e.indexOf('%') >= 0
                                ? (e = (parseFloat(e.replace('%', '')) / 100) * s.size)
                                : 'string' == typeof e && (e = parseFloat(e)),
                            e
                        );
                    };
                    o('init', () => {
                        r = s.params.grid && s.params.grid.rows > 1;
                    }),
                        o('update', () => {
                            const { params: e, el: n } = s,
                                t = e.grid && e.grid.rows > 1;
                            r && !t
                                ? (n.classList.remove(
                                      `${e.containerModifierClass}grid`,
                                      `${e.containerModifierClass}grid-column`
                                  ),
                                  (i = 1),
                                  s.emitContainerClasses())
                                : !r &&
                                  t &&
                                  (n.classList.add(`${e.containerModifierClass}grid`),
                                  'column' === e.grid.fill &&
                                      n.classList.add(`${e.containerModifierClass}grid-column`),
                                  s.emitContainerClasses()),
                                (r = t);
                        }),
                        (s.grid = {
                            initSlides: (e) => {
                                const { slidesPerView: r } = s.params,
                                    { rows: a, fill: o } = s.params.grid,
                                    l =
                                        s.virtual && s.params.virtual.enabled
                                            ? s.virtual.slides.length
                                            : e.length;
                                (i = Math.floor(l / a)),
                                    (n = Math.floor(l / a) === l / a ? l : Math.ceil(l / a) * a),
                                    'auto' !== r && 'row' === o && (n = Math.max(n, r * a)),
                                    (t = n / a);
                            },
                            unsetSlides: () => {
                                s.slides &&
                                    s.slides.forEach((e) => {
                                        e.swiperSlideGridSet &&
                                            ((e.style.height = ''),
                                            (e.style[s.getDirectionLabel('margin-top')] = ''));
                                    });
                            },
                            updateSlide: (e, r, a) => {
                                const { slidesPerGroup: o } = s.params,
                                    A = l(),
                                    { rows: d, fill: c } = s.params.grid,
                                    m =
                                        s.virtual && s.params.virtual.enabled
                                            ? s.virtual.slides.length
                                            : a.length;
                                let p, u, g;
                                if ('row' === c && o > 1) {
                                    const t = Math.floor(e / (o * d)),
                                        i = e - d * o * t,
                                        s = 0 === t ? o : Math.min(Math.ceil((m - t * d * o) / d), o);
                                    (g = Math.floor(i / s)),
                                        (u = i - g * s + t * o),
                                        (p = u + (g * n) / d),
                                        (r.style.order = p);
                                } else
                                    'column' === c
                                        ? ((u = Math.floor(e / d)),
                                          (g = e - u * d),
                                          (u > i || (u === i && g === d - 1)) &&
                                              ((g += 1), g >= d && ((g = 0), (u += 1))))
                                        : ((g = Math.floor(e / t)), (u = e - g * t));
                                (r.row = g),
                                    (r.column = u),
                                    (r.style.height = `calc((100% - ${(d - 1) * A}px) / ${d})`),
                                    (r.style[s.getDirectionLabel('margin-top')] =
                                        0 !== g ? A && `${A}px` : ''),
                                    (r.swiperSlideGridSet = !0);
                            },
                            updateWrapperSize: (e, t) => {
                                const { centeredSlides: i, roundLengths: r } = s.params,
                                    a = l(),
                                    { rows: o } = s.params.grid;
                                if (
                                    ((s.virtualSize = (e + a) * n),
                                    (s.virtualSize = Math.ceil(s.virtualSize / o) - a),
                                    s.params.cssMode ||
                                        (s.wrapperEl.style[s.getDirectionLabel('width')] = `${
                                            s.virtualSize + a
                                        }px`),
                                    i)
                                ) {
                                    const e = [];
                                    for (let n = 0; n < t.length; n += 1) {
                                        let i = t[n];
                                        r && (i = Math.floor(i)), t[n] < s.virtualSize + t[0] && e.push(i);
                                    }
                                    t.splice(0, t.length), t.push(...e);
                                }
                            }
                        });
                }
                t.r(n), t.d(n, { default: () => i });
            },
            './node_modules/swiper/modules/hash-navigation.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => s });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                function s(e) {
                    let { swiper: n, extendParams: t, emit: s, on: a } = e,
                        o = !1;
                    const l = (0, i.g)(),
                        A = (0, i.a)();
                    t({
                        hashNavigation: {
                            enabled: !1,
                            replaceState: !1,
                            watchState: !1,
                            getSlideIndex(e, t) {
                                if (n.virtual && n.params.virtual.enabled) {
                                    const e = n.slides.filter((e) => e.getAttribute('data-hash') === t)[0];
                                    return e ? parseInt(e.getAttribute('data-swiper-slide-index'), 10) : 0;
                                }
                                return n.getSlideIndex(
                                    (0, r.e)(
                                        n.slidesEl,
                                        `.${n.params.slideClass}[data-hash="${t}"], swiper-slide[data-hash="${t}"]`
                                    )[0]
                                );
                            }
                        }
                    });
                    const d = () => {
                            s('hashChange');
                            const e = l.location.hash.replace('#', ''),
                                t =
                                    n.virtual && n.params.virtual.enabled
                                        ? n.slidesEl.querySelector(
                                              `[data-swiper-slide-index="${n.activeIndex}"]`
                                          )
                                        : n.slides[n.activeIndex];
                            if (e !== (t ? t.getAttribute('data-hash') : '')) {
                                const t = n.params.hashNavigation.getSlideIndex(n, e);
                                if (void 0 === t || Number.isNaN(t)) return;
                                n.slideTo(t);
                            }
                        },
                        c = () => {
                            if (!o || !n.params.hashNavigation.enabled) return;
                            const e =
                                    n.virtual && n.params.virtual.enabled
                                        ? n.slidesEl.querySelector(
                                              `[data-swiper-slide-index="${n.activeIndex}"]`
                                          )
                                        : n.slides[n.activeIndex],
                                t = e ? e.getAttribute('data-hash') || e.getAttribute('data-history') : '';
                            n.params.hashNavigation.replaceState && A.history && A.history.replaceState
                                ? (A.history.replaceState(null, null, `#${t}` || ''), s('hashSet'))
                                : ((l.location.hash = t || ''), s('hashSet'));
                        };
                    a('init', () => {
                        n.params.hashNavigation.enabled &&
                            (() => {
                                if (
                                    !n.params.hashNavigation.enabled ||
                                    (n.params.history && n.params.history.enabled)
                                )
                                    return;
                                o = !0;
                                const e = l.location.hash.replace('#', '');
                                if (e) {
                                    const t = 0,
                                        i = n.params.hashNavigation.getSlideIndex(n, e);
                                    n.slideTo(i || 0, t, n.params.runCallbacksOnInit, !0);
                                }
                                n.params.hashNavigation.watchState && A.addEventListener('hashchange', d);
                            })();
                    }),
                        a('destroy', () => {
                            n.params.hashNavigation.enabled &&
                                n.params.hashNavigation.watchState &&
                                A.removeEventListener('hashchange', d);
                        }),
                        a('transitionEnd _freeModeNoMomentumRelease', () => {
                            o && c();
                        }),
                        a('slideChange', () => {
                            o && n.params.cssMode && c();
                        });
                }
            },
            './node_modules/swiper/modules/history.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => r });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs');
                function r(e) {
                    let { swiper: n, extendParams: t, on: r } = e;
                    t({ history: { enabled: !1, root: '', replaceState: !1, key: 'slides', keepQuery: !1 } });
                    let s = !1,
                        a = {};
                    const o = (e) =>
                            e
                                .toString()
                                .replace(/\s+/g, '-')
                                .replace(/[^\w-]+/g, '')
                                .replace(/--+/g, '-')
                                .replace(/^-+/, '')
                                .replace(/-+$/, ''),
                        l = (e) => {
                            const n = (0, i.a)();
                            let t;
                            t = e ? new URL(e) : n.location;
                            const r = t.pathname
                                    .slice(1)
                                    .split('/')
                                    .filter((e) => '' !== e),
                                s = r.length;
                            return { key: r[s - 2], value: r[s - 1] };
                        },
                        A = (e, t) => {
                            const r = (0, i.a)();
                            if (!s || !n.params.history.enabled) return;
                            let a;
                            a = n.params.url ? new URL(n.params.url) : r.location;
                            const l = n.slides[t];
                            let A = o(l.getAttribute('data-history'));
                            if (n.params.history.root.length > 0) {
                                let t = n.params.history.root;
                                '/' === t[t.length - 1] && (t = t.slice(0, t.length - 1)),
                                    (A = `${t}/${e ? `${e}/` : ''}${A}`);
                            } else a.pathname.includes(e) || (A = `${e ? `${e}/` : ''}${A}`);
                            n.params.history.keepQuery && (A += a.search);
                            const d = r.history.state;
                            (d && d.value === A) ||
                                (n.params.history.replaceState
                                    ? r.history.replaceState({ value: A }, null, A)
                                    : r.history.pushState({ value: A }, null, A));
                        },
                        d = (e, t, i) => {
                            if (t)
                                for (let r = 0, s = n.slides.length; r < s; r += 1) {
                                    const s = n.slides[r];
                                    if (o(s.getAttribute('data-history')) === t) {
                                        const t = n.getSlideIndex(s);
                                        n.slideTo(t, e, i);
                                    }
                                }
                            else n.slideTo(0, e, i);
                        },
                        c = () => {
                            (a = l(n.params.url)), d(n.params.speed, a.value, !1);
                        };
                    r('init', () => {
                        n.params.history.enabled &&
                            (() => {
                                const e = (0, i.a)();
                                if (n.params.history) {
                                    if (!e.history || !e.history.pushState)
                                        return (
                                            (n.params.history.enabled = !1),
                                            void (n.params.hashNavigation.enabled = !0)
                                        );
                                    (s = !0),
                                        (a = l(n.params.url)),
                                        a.key || a.value
                                            ? (d(0, a.value, n.params.runCallbacksOnInit),
                                              n.params.history.replaceState ||
                                                  e.addEventListener('popstate', c))
                                            : n.params.history.replaceState ||
                                              e.addEventListener('popstate', c);
                                }
                            })();
                    }),
                        r('destroy', () => {
                            n.params.history.enabled &&
                                (() => {
                                    const e = (0, i.a)();
                                    n.params.history.replaceState || e.removeEventListener('popstate', c);
                                })();
                        }),
                        r('transitionEnd _freeModeNoMomentumRelease', () => {
                            s && A(n.params.history.key, n.activeIndex);
                        }),
                        r('slideChange', () => {
                            s && n.params.cssMode && A(n.params.history.key, n.activeIndex);
                        });
                }
            },
            './node_modules/swiper/modules/index.mjs': (e, n, t) => {
                'use strict';
                t.r(n),
                    t.d(n, {
                        A11y: () => m.default,
                        Autoplay: () => g.default,
                        Controller: () => c.default,
                        EffectCards: () => y.default,
                        EffectCoverflow: () => C.default,
                        EffectCreative: () => B.default,
                        EffectCube: () => v.default,
                        EffectFade: () => E.default,
                        EffectFlip: () => _.default,
                        FreeMode: () => f.default,
                        Grid: () => w.default,
                        HashNavigation: () => u.default,
                        History: () => p.default,
                        Keyboard: () => r.default,
                        Manipulation: () => b.default,
                        Mousewheel: () => s.default,
                        Navigation: () => a.default,
                        Pagination: () => o.default,
                        Parallax: () => A.default,
                        Scrollbar: () => l.default,
                        Thumbs: () => h.default,
                        Virtual: () => i.default,
                        Zoom: () => d.default
                    });
                var i = t('./node_modules/swiper/modules/virtual.mjs'),
                    r = t('./node_modules/swiper/modules/keyboard.mjs'),
                    s = t('./node_modules/swiper/modules/mousewheel.mjs'),
                    a = t('./node_modules/swiper/modules/navigation.mjs'),
                    o = t('./node_modules/swiper/modules/pagination.mjs'),
                    l = t('./node_modules/swiper/modules/scrollbar.mjs'),
                    A = t('./node_modules/swiper/modules/parallax.mjs'),
                    d = t('./node_modules/swiper/modules/zoom.mjs'),
                    c = t('./node_modules/swiper/modules/controller.mjs'),
                    m = t('./node_modules/swiper/modules/a11y.mjs'),
                    p = t('./node_modules/swiper/modules/history.mjs'),
                    u = t('./node_modules/swiper/modules/hash-navigation.mjs'),
                    g = t('./node_modules/swiper/modules/autoplay.mjs'),
                    h = t('./node_modules/swiper/modules/thumbs.mjs'),
                    f = t('./node_modules/swiper/modules/free-mode.mjs'),
                    w = t('./node_modules/swiper/modules/grid.mjs'),
                    b = t('./node_modules/swiper/modules/manipulation.mjs'),
                    E = t('./node_modules/swiper/modules/effect-fade.mjs'),
                    v = t('./node_modules/swiper/modules/effect-cube.mjs'),
                    _ = t('./node_modules/swiper/modules/effect-flip.mjs'),
                    C = t('./node_modules/swiper/modules/effect-coverflow.mjs'),
                    B = t('./node_modules/swiper/modules/effect-creative.mjs'),
                    y = t('./node_modules/swiper/modules/effect-cards.mjs');
            },
            './node_modules/swiper/modules/keyboard.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => s });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                function s(e) {
                    let { swiper: n, extendParams: t, on: s, emit: a } = e;
                    const o = (0, i.g)(),
                        l = (0, i.a)();
                    function A(e) {
                        if (!n.enabled) return;
                        const { rtlTranslate: t } = n;
                        let i = e;
                        i.originalEvent && (i = i.originalEvent);
                        const s = i.keyCode || i.charCode,
                            A = n.params.keyboard.pageUpDown,
                            d = A && 33 === s,
                            c = A && 34 === s,
                            m = 37 === s,
                            p = 39 === s,
                            u = 38 === s,
                            g = 40 === s;
                        if (!n.allowSlideNext && ((n.isHorizontal() && p) || (n.isVertical() && g) || c))
                            return !1;
                        if (!n.allowSlidePrev && ((n.isHorizontal() && m) || (n.isVertical() && u) || d))
                            return !1;
                        if (
                            !(
                                i.shiftKey ||
                                i.altKey ||
                                i.ctrlKey ||
                                i.metaKey ||
                                (o.activeElement &&
                                    o.activeElement.nodeName &&
                                    ('input' === o.activeElement.nodeName.toLowerCase() ||
                                        'textarea' === o.activeElement.nodeName.toLowerCase()))
                            )
                        ) {
                            if (n.params.keyboard.onlyInViewport && (d || c || m || p || u || g)) {
                                let e = !1;
                                if (
                                    (0, r.a)(n.el, `.${n.params.slideClass}, swiper-slide`).length > 0 &&
                                    0 === (0, r.a)(n.el, `.${n.params.slideActiveClass}`).length
                                )
                                    return;
                                const i = n.el,
                                    s = i.clientWidth,
                                    a = i.clientHeight,
                                    o = l.innerWidth,
                                    A = l.innerHeight,
                                    d = (0, r.b)(i);
                                t && (d.left -= i.scrollLeft);
                                const c = [
                                    [d.left, d.top],
                                    [d.left + s, d.top],
                                    [d.left, d.top + a],
                                    [d.left + s, d.top + a]
                                ];
                                for (let n = 0; n < c.length; n += 1) {
                                    const t = c[n];
                                    if (t[0] >= 0 && t[0] <= o && t[1] >= 0 && t[1] <= A) {
                                        if (0 === t[0] && 0 === t[1]) continue;
                                        e = !0;
                                    }
                                }
                                if (!e) return;
                            }
                            n.isHorizontal()
                                ? ((d || c || m || p) &&
                                      (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                                  (((c || p) && !t) || ((d || m) && t)) && n.slideNext(),
                                  (((d || m) && !t) || ((c || p) && t)) && n.slidePrev())
                                : ((d || c || u || g) &&
                                      (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                                  (c || g) && n.slideNext(),
                                  (d || u) && n.slidePrev()),
                                a('keyPress', s);
                        }
                    }
                    function d() {
                        n.keyboard.enabled || (o.addEventListener('keydown', A), (n.keyboard.enabled = !0));
                    }
                    function c() {
                        n.keyboard.enabled &&
                            (o.removeEventListener('keydown', A), (n.keyboard.enabled = !1));
                    }
                    (n.keyboard = { enabled: !1 }),
                        t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
                        s('init', () => {
                            n.params.keyboard.enabled && d();
                        }),
                        s('destroy', () => {
                            n.keyboard.enabled && c();
                        }),
                        Object.assign(n.keyboard, { enable: d, disable: c });
                }
            },
            './node_modules/swiper/modules/manipulation.mjs': (e, n, t) => {
                'use strict';
                function i(e) {
                    const n = this,
                        { params: t, slidesEl: i } = n;
                    t.loop && n.loopDestroy();
                    const r = (e) => {
                        if ('string' == typeof e) {
                            const n = document.createElement('div');
                            (n.innerHTML = e), i.append(n.children[0]), (n.innerHTML = '');
                        } else i.append(e);
                    };
                    if ('object' == typeof e && 'length' in e)
                        for (let n = 0; n < e.length; n += 1) e[n] && r(e[n]);
                    else r(e);
                    n.recalcSlides(), t.loop && n.loopCreate(), (t.observer && !n.isElement) || n.update();
                }
                function r(e) {
                    const n = this,
                        { params: t, activeIndex: i, slidesEl: r } = n;
                    t.loop && n.loopDestroy();
                    let s = i + 1;
                    const a = (e) => {
                        if ('string' == typeof e) {
                            const n = document.createElement('div');
                            (n.innerHTML = e), r.prepend(n.children[0]), (n.innerHTML = '');
                        } else r.prepend(e);
                    };
                    if ('object' == typeof e && 'length' in e) {
                        for (let n = 0; n < e.length; n += 1) e[n] && a(e[n]);
                        s = i + e.length;
                    } else a(e);
                    n.recalcSlides(),
                        t.loop && n.loopCreate(),
                        (t.observer && !n.isElement) || n.update(),
                        n.slideTo(s, 0, !1);
                }
                function s(e, n) {
                    const t = this,
                        { params: i, activeIndex: r, slidesEl: s } = t;
                    let a = r;
                    i.loop && ((a -= t.loopedSlides), t.loopDestroy(), t.recalcSlides());
                    const o = t.slides.length;
                    if (e <= 0) return void t.prependSlide(n);
                    if (e >= o) return void t.appendSlide(n);
                    let l = a > e ? a + 1 : a;
                    const A = [];
                    for (let n = o - 1; n >= e; n -= 1) {
                        const e = t.slides[n];
                        e.remove(), A.unshift(e);
                    }
                    if ('object' == typeof n && 'length' in n) {
                        for (let e = 0; e < n.length; e += 1) n[e] && s.append(n[e]);
                        l = a > e ? a + n.length : a;
                    } else s.append(n);
                    for (let e = 0; e < A.length; e += 1) s.append(A[e]);
                    t.recalcSlides(),
                        i.loop && t.loopCreate(),
                        (i.observer && !t.isElement) || t.update(),
                        i.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
                }
                function a(e) {
                    const n = this,
                        { params: t, activeIndex: i } = n;
                    let r = i;
                    t.loop && ((r -= n.loopedSlides), n.loopDestroy());
                    let s,
                        a = r;
                    if ('object' == typeof e && 'length' in e) {
                        for (let t = 0; t < e.length; t += 1)
                            (s = e[t]), n.slides[s] && n.slides[s].remove(), s < a && (a -= 1);
                        a = Math.max(a, 0);
                    } else
                        (s = e), n.slides[s] && n.slides[s].remove(), s < a && (a -= 1), (a = Math.max(a, 0));
                    n.recalcSlides(),
                        t.loop && n.loopCreate(),
                        (t.observer && !n.isElement) || n.update(),
                        t.loop ? n.slideTo(a + n.loopedSlides, 0, !1) : n.slideTo(a, 0, !1);
                }
                function o() {
                    const e = this,
                        n = [];
                    for (let t = 0; t < e.slides.length; t += 1) n.push(t);
                    e.removeSlide(n);
                }
                function l(e) {
                    let { swiper: n } = e;
                    Object.assign(n, {
                        appendSlide: i.bind(n),
                        prependSlide: r.bind(n),
                        addSlide: s.bind(n),
                        removeSlide: a.bind(n),
                        removeAllSlides: o.bind(n)
                    });
                }
                t.r(n), t.d(n, { default: () => l });
            },
            './node_modules/swiper/modules/mousewheel.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => s });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                function s(e) {
                    let { swiper: n, extendParams: t, on: s, emit: a } = e;
                    const o = (0, i.a)();
                    let l;
                    t({
                        mousewheel: {
                            enabled: !1,
                            releaseOnEdges: !1,
                            invert: !1,
                            forceToAxis: !1,
                            sensitivity: 1,
                            eventsTarget: 'container',
                            thresholdDelta: null,
                            thresholdTime: null,
                            noMousewheelClass: 'swiper-no-mousewheel'
                        }
                    }),
                        (n.mousewheel = { enabled: !1 });
                    let A,
                        d = (0, r.d)();
                    const c = [];
                    function m() {
                        n.enabled && (n.mouseEntered = !0);
                    }
                    function p() {
                        n.enabled && (n.mouseEntered = !1);
                    }
                    function u(e) {
                        return !(
                            (n.params.mousewheel.thresholdDelta &&
                                e.delta < n.params.mousewheel.thresholdDelta) ||
                            (n.params.mousewheel.thresholdTime &&
                                (0, r.d)() - d < n.params.mousewheel.thresholdTime) ||
                            (!(e.delta >= 6 && (0, r.d)() - d < 60) &&
                                (e.direction < 0
                                    ? (n.isEnd && !n.params.loop) ||
                                      n.animating ||
                                      (n.slideNext(), a('scroll', e.raw))
                                    : (n.isBeginning && !n.params.loop) ||
                                      n.animating ||
                                      (n.slidePrev(), a('scroll', e.raw)),
                                (d = new o.Date().getTime()),
                                1))
                        );
                    }
                    function g(e) {
                        let t = e,
                            i = !0;
                        if (!n.enabled) return;
                        if (e.target.closest(`.${n.params.mousewheel.noMousewheelClass}`)) return;
                        const s = n.params.mousewheel;
                        n.params.cssMode && t.preventDefault();
                        let o = n.el;
                        'container' !== n.params.mousewheel.eventsTarget &&
                            (o = document.querySelector(n.params.mousewheel.eventsTarget));
                        const d = o && o.contains(t.target);
                        if (!n.mouseEntered && !d && !s.releaseOnEdges) return !0;
                        t.originalEvent && (t = t.originalEvent);
                        let m = 0;
                        const p = n.rtlTranslate ? -1 : 1,
                            g = (function (e) {
                                let n = 0,
                                    t = 0,
                                    i = 0,
                                    r = 0;
                                return (
                                    'detail' in e && (t = e.detail),
                                    'wheelDelta' in e && (t = -e.wheelDelta / 120),
                                    'wheelDeltaY' in e && (t = -e.wheelDeltaY / 120),
                                    'wheelDeltaX' in e && (n = -e.wheelDeltaX / 120),
                                    'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((n = t), (t = 0)),
                                    (i = 10 * n),
                                    (r = 10 * t),
                                    'deltaY' in e && (r = e.deltaY),
                                    'deltaX' in e && (i = e.deltaX),
                                    e.shiftKey && !i && ((i = r), (r = 0)),
                                    (i || r) &&
                                        e.deltaMode &&
                                        (1 === e.deltaMode
                                            ? ((i *= 40), (r *= 40))
                                            : ((i *= 800), (r *= 800))),
                                    i && !n && (n = i < 1 ? -1 : 1),
                                    r && !t && (t = r < 1 ? -1 : 1),
                                    { spinX: n, spinY: t, pixelX: i, pixelY: r }
                                );
                            })(t);
                        if (s.forceToAxis)
                            if (n.isHorizontal()) {
                                if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                                m = -g.pixelX * p;
                            } else {
                                if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                                m = -g.pixelY;
                            }
                        else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * p : -g.pixelY;
                        if (0 === m) return !0;
                        s.invert && (m = -m);
                        let h = n.getTranslate() + m * s.sensitivity;
                        if (
                            (h >= n.minTranslate() && (h = n.minTranslate()),
                            h <= n.maxTranslate() && (h = n.maxTranslate()),
                            (i = !!n.params.loop || !(h === n.minTranslate() || h === n.maxTranslate())),
                            i && n.params.nested && t.stopPropagation(),
                            n.params.freeMode && n.params.freeMode.enabled)
                        ) {
                            const e = { time: (0, r.d)(), delta: Math.abs(m), direction: Math.sign(m) },
                                i =
                                    A &&
                                    e.time < A.time + 500 &&
                                    e.delta <= A.delta &&
                                    e.direction === A.direction;
                            if (!i) {
                                A = void 0;
                                let o = n.getTranslate() + m * s.sensitivity;
                                const d = n.isBeginning,
                                    p = n.isEnd;
                                if (
                                    (o >= n.minTranslate() && (o = n.minTranslate()),
                                    o <= n.maxTranslate() && (o = n.maxTranslate()),
                                    n.setTransition(0),
                                    n.setTranslate(o),
                                    n.updateProgress(),
                                    n.updateActiveIndex(),
                                    n.updateSlidesClasses(),
                                    ((!d && n.isBeginning) || (!p && n.isEnd)) && n.updateSlidesClasses(),
                                    n.params.loop &&
                                        n.loopFix({
                                            direction: e.direction < 0 ? 'next' : 'prev',
                                            byMousewheel: !0
                                        }),
                                    n.params.freeMode.sticky)
                                ) {
                                    clearTimeout(l), (l = void 0), c.length >= 15 && c.shift();
                                    const t = c.length ? c[c.length - 1] : void 0,
                                        i = c[0];
                                    if ((c.push(e), t && (e.delta > t.delta || e.direction !== t.direction)))
                                        c.splice(0);
                                    else if (
                                        c.length >= 15 &&
                                        e.time - i.time < 500 &&
                                        i.delta - e.delta >= 1 &&
                                        e.delta <= 6
                                    ) {
                                        const t = m > 0 ? 0.8 : 0.2;
                                        (A = e),
                                            c.splice(0),
                                            (l = (0, r.n)(() => {
                                                n.slideToClosest(n.params.speed, !0, void 0, t);
                                            }, 0));
                                    }
                                    l ||
                                        (l = (0, r.n)(() => {
                                            (A = e),
                                                c.splice(0),
                                                n.slideToClosest(n.params.speed, !0, void 0, 0.5);
                                        }, 500));
                                }
                                if (
                                    (i || a('scroll', t),
                                    n.params.autoplay &&
                                        n.params.autoplayDisableOnInteraction &&
                                        n.autoplay.stop(),
                                    s.releaseOnEdges && (o === n.minTranslate() || o === n.maxTranslate()))
                                )
                                    return !0;
                            }
                        } else {
                            const t = {
                                time: (0, r.d)(),
                                delta: Math.abs(m),
                                direction: Math.sign(m),
                                raw: e
                            };
                            c.length >= 2 && c.shift();
                            const i = c.length ? c[c.length - 1] : void 0;
                            if (
                                (c.push(t),
                                i
                                    ? (t.direction !== i.direction ||
                                          t.delta > i.delta ||
                                          t.time > i.time + 150) &&
                                      u(t)
                                    : u(t),
                                (function (e) {
                                    const t = n.params.mousewheel;
                                    if (e.direction < 0) {
                                        if (n.isEnd && !n.params.loop && t.releaseOnEdges) return !0;
                                    } else if (n.isBeginning && !n.params.loop && t.releaseOnEdges) return !0;
                                    return !1;
                                })(t))
                            )
                                return !0;
                        }
                        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
                    }
                    function h(e) {
                        let t = n.el;
                        'container' !== n.params.mousewheel.eventsTarget &&
                            (t = document.querySelector(n.params.mousewheel.eventsTarget)),
                            t[e]('mouseenter', m),
                            t[e]('mouseleave', p),
                            t[e]('wheel', g);
                    }
                    function f() {
                        return n.params.cssMode
                            ? (n.wrapperEl.removeEventListener('wheel', g), !0)
                            : !n.mousewheel.enabled &&
                                  (h('addEventListener'), (n.mousewheel.enabled = !0), !0);
                    }
                    function w() {
                        return n.params.cssMode
                            ? (n.wrapperEl.addEventListener(event, g), !0)
                            : !!n.mousewheel.enabled &&
                                  (h('removeEventListener'), (n.mousewheel.enabled = !1), !0);
                    }
                    s('init', () => {
                        !n.params.mousewheel.enabled && n.params.cssMode && w(),
                            n.params.mousewheel.enabled && f();
                    }),
                        s('destroy', () => {
                            n.params.cssMode && f(), n.mousewheel.enabled && w();
                        }),
                        Object.assign(n.mousewheel, { enable: f, disable: w });
                }
            },
            './node_modules/swiper/modules/navigation.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => r });
                var i = t('./node_modules/swiper/shared/create-element-if-not-defined.mjs');
                function r(e) {
                    let { swiper: n, extendParams: t, on: r, emit: s } = e;
                    t({
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: 'swiper-button-disabled',
                            hiddenClass: 'swiper-button-hidden',
                            lockClass: 'swiper-button-lock',
                            navigationDisabledClass: 'swiper-navigation-disabled'
                        }
                    }),
                        (n.navigation = { nextEl: null, prevEl: null });
                    const a = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
                    function o(e) {
                        let t;
                        return e && 'string' == typeof e && n.isElement && ((t = n.el.querySelector(e)), t)
                            ? t
                            : (e &&
                                  ('string' == typeof e && (t = [...document.querySelectorAll(e)]),
                                  n.params.uniqueNavElements &&
                                      'string' == typeof e &&
                                      t.length > 1 &&
                                      1 === n.el.querySelectorAll(e).length &&
                                      (t = n.el.querySelector(e))),
                              e && !t ? e : t);
                    }
                    function l(e, t) {
                        const i = n.params.navigation;
                        (e = a(e)).forEach((e) => {
                            e &&
                                (e.classList[t ? 'add' : 'remove'](...i.disabledClass.split(' ')),
                                'BUTTON' === e.tagName && (e.disabled = t),
                                n.params.watchOverflow &&
                                    n.enabled &&
                                    e.classList[n.isLocked ? 'add' : 'remove'](i.lockClass));
                        });
                    }
                    function A() {
                        const { nextEl: e, prevEl: t } = n.navigation;
                        if (n.params.loop) return l(t, !1), void l(e, !1);
                        l(t, n.isBeginning && !n.params.rewind), l(e, n.isEnd && !n.params.rewind);
                    }
                    function d(e) {
                        e.preventDefault(),
                            (!n.isBeginning || n.params.loop || n.params.rewind) &&
                                (n.slidePrev(), s('navigationPrev'));
                    }
                    function c(e) {
                        e.preventDefault(),
                            (!n.isEnd || n.params.loop || n.params.rewind) &&
                                (n.slideNext(), s('navigationNext'));
                    }
                    function m() {
                        const e = n.params.navigation;
                        if (
                            ((n.params.navigation = (0, i.c)(
                                n,
                                n.originalParams.navigation,
                                n.params.navigation,
                                { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
                            )),
                            !e.nextEl && !e.prevEl)
                        )
                            return;
                        let t = o(e.nextEl),
                            r = o(e.prevEl);
                        Object.assign(n.navigation, { nextEl: t, prevEl: r }), (t = a(t)), (r = a(r));
                        const s = (t, i) => {
                            t && t.addEventListener('click', 'next' === i ? c : d),
                                !n.enabled && t && t.classList.add(...e.lockClass.split(' '));
                        };
                        t.forEach((e) => s(e, 'next')), r.forEach((e) => s(e, 'prev'));
                    }
                    function p() {
                        let { nextEl: e, prevEl: t } = n.navigation;
                        (e = a(e)), (t = a(t));
                        const i = (e, t) => {
                            e.removeEventListener('click', 'next' === t ? c : d),
                                e.classList.remove(...n.params.navigation.disabledClass.split(' '));
                        };
                        e.forEach((e) => i(e, 'next')), t.forEach((e) => i(e, 'prev'));
                    }
                    r('init', () => {
                        !1 === n.params.navigation.enabled ? u() : (m(), A());
                    }),
                        r('toEdge fromEdge lock unlock', () => {
                            A();
                        }),
                        r('destroy', () => {
                            p();
                        }),
                        r('enable disable', () => {
                            let { nextEl: e, prevEl: t } = n.navigation;
                            (e = a(e)),
                                (t = a(t)),
                                n.enabled
                                    ? A()
                                    : [...e, ...t]
                                          .filter((e) => !!e)
                                          .forEach((e) => e.classList.add(n.params.navigation.lockClass));
                        }),
                        r('click', (e, t) => {
                            let { nextEl: i, prevEl: r } = n.navigation;
                            (i = a(i)), (r = a(r));
                            const o = t.target;
                            if (n.params.navigation.hideOnClick && !r.includes(o) && !i.includes(o)) {
                                if (
                                    n.pagination &&
                                    n.params.pagination &&
                                    n.params.pagination.clickable &&
                                    (n.pagination.el === o || n.pagination.el.contains(o))
                                )
                                    return;
                                let e;
                                i.length
                                    ? (e = i[0].classList.contains(n.params.navigation.hiddenClass))
                                    : r.length &&
                                      (e = r[0].classList.contains(n.params.navigation.hiddenClass)),
                                    s(!0 === e ? 'navigationShow' : 'navigationHide'),
                                    [...i, ...r]
                                        .filter((e) => !!e)
                                        .forEach((e) => e.classList.toggle(n.params.navigation.hiddenClass));
                            }
                        });
                    const u = () => {
                        n.el.classList.add(...n.params.navigation.navigationDisabledClass.split(' ')), p();
                    };
                    Object.assign(n.navigation, {
                        enable: () => {
                            n.el.classList.remove(...n.params.navigation.navigationDisabledClass.split(' ')),
                                m(),
                                A();
                        },
                        disable: u,
                        update: A,
                        init: m,
                        destroy: p
                    });
                }
            },
            './node_modules/swiper/modules/pagination.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => a });
                var i = t('./node_modules/swiper/shared/classes-to-selector.mjs'),
                    r = t('./node_modules/swiper/shared/create-element-if-not-defined.mjs'),
                    s = t('./node_modules/swiper/shared/utils.mjs');
                function a(e) {
                    let { swiper: n, extendParams: t, on: a, emit: o } = e;
                    const l = 'swiper-pagination';
                    let A;
                    t({
                        pagination: {
                            el: null,
                            bulletElement: 'span',
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: 'bullets',
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: (e) => e,
                            formatFractionTotal: (e) => e,
                            bulletClass: `${l}-bullet`,
                            bulletActiveClass: `${l}-bullet-active`,
                            modifierClass: `${l}-`,
                            currentClass: `${l}-current`,
                            totalClass: `${l}-total`,
                            hiddenClass: `${l}-hidden`,
                            progressbarFillClass: `${l}-progressbar-fill`,
                            progressbarOppositeClass: `${l}-progressbar-opposite`,
                            clickableClass: `${l}-clickable`,
                            lockClass: `${l}-lock`,
                            horizontalClass: `${l}-horizontal`,
                            verticalClass: `${l}-vertical`,
                            paginationDisabledClass: `${l}-disabled`
                        }
                    }),
                        (n.pagination = { el: null, bullets: [] });
                    let d = 0;
                    const c = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
                    function m() {
                        return (
                            !n.params.pagination.el ||
                            !n.pagination.el ||
                            (Array.isArray(n.pagination.el) && 0 === n.pagination.el.length)
                        );
                    }
                    function p(e, t) {
                        const { bulletActiveClass: i } = n.params.pagination;
                        e &&
                            (e = e[('prev' === t ? 'previous' : 'next') + 'ElementSibling']) &&
                            (e.classList.add(`${i}-${t}`),
                            (e = e[('prev' === t ? 'previous' : 'next') + 'ElementSibling']) &&
                                e.classList.add(`${i}-${t}-${t}`));
                    }
                    function u(e) {
                        const t = e.target.closest((0, i.c)(n.params.pagination.bulletClass));
                        if (!t) return;
                        e.preventDefault();
                        const r = (0, s.g)(t) * n.params.slidesPerGroup;
                        if (n.params.loop) {
                            if (n.realIndex === r) return;
                            n.slideToLoop(r);
                        } else n.slideTo(r);
                    }
                    function g() {
                        const e = n.rtl,
                            t = n.params.pagination;
                        if (m()) return;
                        let r,
                            a,
                            l = n.pagination.el;
                        l = c(l);
                        const u =
                                n.virtual && n.params.virtual.enabled
                                    ? n.virtual.slides.length
                                    : n.slides.length,
                            g = n.params.loop ? Math.ceil(u / n.params.slidesPerGroup) : n.snapGrid.length;
                        if (
                            (n.params.loop
                                ? ((a = n.previousRealIndex || 0),
                                  (r =
                                      n.params.slidesPerGroup > 1
                                          ? Math.floor(n.realIndex / n.params.slidesPerGroup)
                                          : n.realIndex))
                                : void 0 !== n.snapIndex
                                  ? ((r = n.snapIndex), (a = n.previousSnapIndex))
                                  : ((a = n.previousIndex || 0), (r = n.activeIndex || 0)),
                            'bullets' === t.type && n.pagination.bullets && n.pagination.bullets.length > 0)
                        ) {
                            const i = n.pagination.bullets;
                            let o, c, m;
                            if (
                                (t.dynamicBullets &&
                                    ((A = (0, s.f)(i[0], n.isHorizontal() ? 'width' : 'height', !0)),
                                    l.forEach((e) => {
                                        e.style[n.isHorizontal() ? 'width' : 'height'] =
                                            A * (t.dynamicMainBullets + 4) + 'px';
                                    }),
                                    t.dynamicMainBullets > 1 &&
                                        void 0 !== a &&
                                        ((d += r - (a || 0)),
                                        d > t.dynamicMainBullets - 1
                                            ? (d = t.dynamicMainBullets - 1)
                                            : d < 0 && (d = 0)),
                                    (o = Math.max(r - d, 0)),
                                    (c = o + (Math.min(i.length, t.dynamicMainBullets) - 1)),
                                    (m = (c + o) / 2)),
                                i.forEach((e) => {
                                    const n = [
                                        ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
                                            (e) => `${t.bulletActiveClass}${e}`
                                        )
                                    ]
                                        .map((e) =>
                                            'string' == typeof e && e.includes(' ') ? e.split(' ') : e
                                        )
                                        .flat();
                                    e.classList.remove(...n);
                                }),
                                l.length > 1)
                            )
                                i.forEach((e) => {
                                    const i = (0, s.g)(e);
                                    i === r
                                        ? e.classList.add(...t.bulletActiveClass.split(' '))
                                        : n.isElement && e.setAttribute('part', 'bullet'),
                                        t.dynamicBullets &&
                                            (i >= o &&
                                                i <= c &&
                                                e.classList.add(...`${t.bulletActiveClass}-main`.split(' ')),
                                            i === o && p(e, 'prev'),
                                            i === c && p(e, 'next'));
                                });
                            else {
                                const e = i[r];
                                if (
                                    (e && e.classList.add(...t.bulletActiveClass.split(' ')),
                                    n.isElement &&
                                        i.forEach((e, n) => {
                                            e.setAttribute('part', n === r ? 'bullet-active' : 'bullet');
                                        }),
                                    t.dynamicBullets)
                                ) {
                                    const e = i[o],
                                        n = i[c];
                                    for (let e = o; e <= c; e += 1)
                                        i[e] &&
                                            i[e].classList.add(...`${t.bulletActiveClass}-main`.split(' '));
                                    p(e, 'prev'), p(n, 'next');
                                }
                            }
                            if (t.dynamicBullets) {
                                const r = Math.min(i.length, t.dynamicMainBullets + 4),
                                    s = (A * r - A) / 2 - m * A,
                                    a = e ? 'right' : 'left';
                                i.forEach((e) => {
                                    e.style[n.isHorizontal() ? a : 'top'] = `${s}px`;
                                });
                            }
                        }
                        l.forEach((e, s) => {
                            if (
                                ('fraction' === t.type &&
                                    (e.querySelectorAll((0, i.c)(t.currentClass)).forEach((e) => {
                                        e.textContent = t.formatFractionCurrent(r + 1);
                                    }),
                                    e.querySelectorAll((0, i.c)(t.totalClass)).forEach((e) => {
                                        e.textContent = t.formatFractionTotal(g);
                                    })),
                                'progressbar' === t.type)
                            ) {
                                let s;
                                s = t.progressbarOpposite
                                    ? n.isHorizontal()
                                        ? 'vertical'
                                        : 'horizontal'
                                    : n.isHorizontal()
                                      ? 'horizontal'
                                      : 'vertical';
                                const a = (r + 1) / g;
                                let o = 1,
                                    l = 1;
                                'horizontal' === s ? (o = a) : (l = a),
                                    e.querySelectorAll((0, i.c)(t.progressbarFillClass)).forEach((e) => {
                                        (e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${l})`),
                                            (e.style.transitionDuration = `${n.params.speed}ms`);
                                    });
                            }
                            'custom' === t.type && t.renderCustom
                                ? ((e.innerHTML = t.renderCustom(n, r + 1, g)),
                                  0 === s && o('paginationRender', e))
                                : (0 === s && o('paginationRender', e), o('paginationUpdate', e)),
                                n.params.watchOverflow &&
                                    n.enabled &&
                                    e.classList[n.isLocked ? 'add' : 'remove'](t.lockClass);
                        });
                    }
                    function h() {
                        const e = n.params.pagination;
                        if (m()) return;
                        const t =
                            n.virtual && n.params.virtual.enabled
                                ? n.virtual.slides.length
                                : n.grid && n.params.grid.rows > 1
                                  ? n.slides.length / Math.ceil(n.params.grid.rows)
                                  : n.slides.length;
                        let r = n.pagination.el;
                        r = c(r);
                        let s = '';
                        if ('bullets' === e.type) {
                            let i = n.params.loop
                                ? Math.ceil(t / n.params.slidesPerGroup)
                                : n.snapGrid.length;
                            n.params.freeMode && n.params.freeMode.enabled && i > t && (i = t);
                            for (let t = 0; t < i; t += 1)
                                e.renderBullet
                                    ? (s += e.renderBullet.call(n, t, e.bulletClass))
                                    : (s += `<${e.bulletElement} ${
                                          n.isElement ? 'part="bullet"' : ''
                                      } class="${e.bulletClass}"></${e.bulletElement}>`);
                        }
                        'fraction' === e.type &&
                            (s = e.renderFraction
                                ? e.renderFraction.call(n, e.currentClass, e.totalClass)
                                : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
                            'progressbar' === e.type &&
                                (s = e.renderProgressbar
                                    ? e.renderProgressbar.call(n, e.progressbarFillClass)
                                    : `<span class="${e.progressbarFillClass}"></span>`),
                            (n.pagination.bullets = []),
                            r.forEach((t) => {
                                'custom' !== e.type && (t.innerHTML = s || ''),
                                    'bullets' === e.type &&
                                        n.pagination.bullets.push(
                                            ...t.querySelectorAll((0, i.c)(e.bulletClass))
                                        );
                            }),
                            'custom' !== e.type && o('paginationRender', r[0]);
                    }
                    function f() {
                        n.params.pagination = (0, r.c)(n, n.originalParams.pagination, n.params.pagination, {
                            el: 'swiper-pagination'
                        });
                        const e = n.params.pagination;
                        if (!e.el) return;
                        let t;
                        'string' == typeof e.el && n.isElement && (t = n.el.querySelector(e.el)),
                            t || 'string' != typeof e.el || (t = [...document.querySelectorAll(e.el)]),
                            t || (t = e.el),
                            t &&
                                0 !== t.length &&
                                (n.params.uniqueNavElements &&
                                    'string' == typeof e.el &&
                                    Array.isArray(t) &&
                                    t.length > 1 &&
                                    ((t = [...n.el.querySelectorAll(e.el)]),
                                    t.length > 1 &&
                                        (t = t.filter((e) => (0, s.a)(e, '.swiper')[0] === n.el)[0])),
                                Array.isArray(t) && 1 === t.length && (t = t[0]),
                                Object.assign(n.pagination, { el: t }),
                                (t = c(t)),
                                t.forEach((t) => {
                                    'bullets' === e.type &&
                                        e.clickable &&
                                        t.classList.add(...(e.clickableClass || '').split(' ')),
                                        t.classList.add(e.modifierClass + e.type),
                                        t.classList.add(
                                            n.isHorizontal() ? e.horizontalClass : e.verticalClass
                                        ),
                                        'bullets' === e.type &&
                                            e.dynamicBullets &&
                                            (t.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                                            (d = 0),
                                            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                                        'progressbar' === e.type &&
                                            e.progressbarOpposite &&
                                            t.classList.add(e.progressbarOppositeClass),
                                        e.clickable && t.addEventListener('click', u),
                                        n.enabled || t.classList.add(e.lockClass);
                                }));
                    }
                    function w() {
                        const e = n.params.pagination;
                        if (m()) return;
                        let t = n.pagination.el;
                        t &&
                            ((t = c(t)),
                            t.forEach((t) => {
                                t.classList.remove(e.hiddenClass),
                                    t.classList.remove(e.modifierClass + e.type),
                                    t.classList.remove(
                                        n.isHorizontal() ? e.horizontalClass : e.verticalClass
                                    ),
                                    e.clickable &&
                                        (t.classList.remove(...(e.clickableClass || '').split(' ')),
                                        t.removeEventListener('click', u));
                            })),
                            n.pagination.bullets &&
                                n.pagination.bullets.forEach((n) =>
                                    n.classList.remove(...e.bulletActiveClass.split(' '))
                                );
                    }
                    a('changeDirection', () => {
                        if (!n.pagination || !n.pagination.el) return;
                        const e = n.params.pagination;
                        let { el: t } = n.pagination;
                        (t = c(t)),
                            t.forEach((t) => {
                                t.classList.remove(e.horizontalClass, e.verticalClass),
                                    t.classList.add(n.isHorizontal() ? e.horizontalClass : e.verticalClass);
                            });
                    }),
                        a('init', () => {
                            !1 === n.params.pagination.enabled ? b() : (f(), h(), g());
                        }),
                        a('activeIndexChange', () => {
                            void 0 === n.snapIndex && g();
                        }),
                        a('snapIndexChange', () => {
                            g();
                        }),
                        a('snapGridLengthChange', () => {
                            h(), g();
                        }),
                        a('destroy', () => {
                            w();
                        }),
                        a('enable disable', () => {
                            let { el: e } = n.pagination;
                            e &&
                                ((e = c(e)),
                                e.forEach((e) =>
                                    e.classList[n.enabled ? 'remove' : 'add'](n.params.pagination.lockClass)
                                ));
                        }),
                        a('lock unlock', () => {
                            g();
                        }),
                        a('click', (e, t) => {
                            const i = t.target,
                                r = c(n.pagination.el);
                            if (
                                n.params.pagination.el &&
                                n.params.pagination.hideOnClick &&
                                r &&
                                r.length > 0 &&
                                !i.classList.contains(n.params.pagination.bulletClass)
                            ) {
                                if (
                                    n.navigation &&
                                    ((n.navigation.nextEl && i === n.navigation.nextEl) ||
                                        (n.navigation.prevEl && i === n.navigation.prevEl))
                                )
                                    return;
                                const e = r[0].classList.contains(n.params.pagination.hiddenClass);
                                o(!0 === e ? 'paginationShow' : 'paginationHide'),
                                    r.forEach((e) => e.classList.toggle(n.params.pagination.hiddenClass));
                            }
                        });
                    const b = () => {
                        n.el.classList.add(n.params.pagination.paginationDisabledClass);
                        let { el: e } = n.pagination;
                        e &&
                            ((e = c(e)),
                            e.forEach((e) => e.classList.add(n.params.pagination.paginationDisabledClass))),
                            w();
                    };
                    Object.assign(n.pagination, {
                        enable: () => {
                            n.el.classList.remove(n.params.pagination.paginationDisabledClass);
                            let { el: e } = n.pagination;
                            e &&
                                ((e = c(e)),
                                e.forEach((e) =>
                                    e.classList.remove(n.params.pagination.paginationDisabledClass)
                                )),
                                f(),
                                h(),
                                g();
                        },
                        disable: b,
                        render: h,
                        update: g,
                        init: f,
                        destroy: w
                    });
                }
            },
            './node_modules/swiper/modules/parallax.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => r });
                var i = t('./node_modules/swiper/shared/utils.mjs');
                function r(e) {
                    let { swiper: n, extendParams: t, on: r } = e;
                    t({ parallax: { enabled: !1 } });
                    const s =
                            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
                        a = (e, t) => {
                            const { rtl: i } = n,
                                r = i ? -1 : 1,
                                s = e.getAttribute('data-swiper-parallax') || '0';
                            let a = e.getAttribute('data-swiper-parallax-x'),
                                o = e.getAttribute('data-swiper-parallax-y');
                            const l = e.getAttribute('data-swiper-parallax-scale'),
                                A = e.getAttribute('data-swiper-parallax-opacity'),
                                d = e.getAttribute('data-swiper-parallax-rotate');
                            if (
                                (a || o
                                    ? ((a = a || '0'), (o = o || '0'))
                                    : n.isHorizontal()
                                      ? ((a = s), (o = '0'))
                                      : ((o = s), (a = '0')),
                                (a = a.indexOf('%') >= 0 ? parseInt(a, 10) * t * r + '%' : a * t * r + 'px'),
                                (o = o.indexOf('%') >= 0 ? parseInt(o, 10) * t + '%' : o * t + 'px'),
                                null != A)
                            ) {
                                const n = A - (A - 1) * (1 - Math.abs(t));
                                e.style.opacity = n;
                            }
                            let c = `translate3d(${a}, ${o}, 0px)`;
                            null != l && (c += ` scale(${l - (l - 1) * (1 - Math.abs(t))})`),
                                d && null != d && (c += ` rotate(${d * t * -1}deg)`),
                                (e.style.transform = c);
                        },
                        o = () => {
                            const { el: e, slides: t, progress: r, snapGrid: o, isElement: l } = n,
                                A = (0, i.e)(e, s);
                            n.isElement && A.push(...(0, i.e)(n.hostEl, s)),
                                A.forEach((e) => {
                                    a(e, r);
                                }),
                                t.forEach((e, t) => {
                                    let i = e.progress;
                                    n.params.slidesPerGroup > 1 &&
                                        'auto' !== n.params.slidesPerView &&
                                        (i += Math.ceil(t / 2) - r * (o.length - 1)),
                                        (i = Math.min(Math.max(i, -1), 1)),
                                        e
                                            .querySelectorAll(`${s}, [data-swiper-parallax-rotate]`)
                                            .forEach((e) => {
                                                a(e, i);
                                            });
                                });
                        };
                    r('beforeInit', () => {
                        n.params.parallax.enabled &&
                            ((n.params.watchSlidesProgress = !0),
                            (n.originalParams.watchSlidesProgress = !0));
                    }),
                        r('init', () => {
                            n.params.parallax.enabled && o();
                        }),
                        r('setTranslate', () => {
                            n.params.parallax.enabled && o();
                        }),
                        r('setTransition', (e, t) => {
                            n.params.parallax.enabled &&
                                (function (e) {
                                    void 0 === e && (e = n.params.speed);
                                    const { el: t, hostEl: i } = n,
                                        r = [...t.querySelectorAll(s)];
                                    n.isElement && r.push(...i.querySelectorAll(s)),
                                        r.forEach((n) => {
                                            let t =
                                                parseInt(
                                                    n.getAttribute('data-swiper-parallax-duration'),
                                                    10
                                                ) || e;
                                            0 === e && (t = 0), (n.style.transitionDuration = `${t}ms`);
                                        });
                                })(t);
                        });
                }
            },
            './node_modules/swiper/modules/scrollbar.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => o });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs'),
                    s = t('./node_modules/swiper/shared/create-element-if-not-defined.mjs'),
                    a = t('./node_modules/swiper/shared/classes-to-selector.mjs');
                function o(e) {
                    let { swiper: n, extendParams: t, on: o, emit: l } = e;
                    const A = (0, i.g)();
                    let d,
                        c,
                        m,
                        p,
                        u = !1,
                        g = null,
                        h = null;
                    function f() {
                        if (!n.params.scrollbar.el || !n.scrollbar.el) return;
                        const { scrollbar: e, rtlTranslate: t } = n,
                            { dragEl: i, el: r } = e,
                            s = n.params.scrollbar,
                            a = n.params.loop ? n.progressLoop : n.progress;
                        let o = c,
                            l = (m - c) * a;
                        t
                            ? ((l = -l), l > 0 ? ((o = c - l), (l = 0)) : -l + c > m && (o = m + l))
                            : l < 0
                              ? ((o = c + l), (l = 0))
                              : l + c > m && (o = m - l),
                            n.isHorizontal()
                                ? ((i.style.transform = `translate3d(${l}px, 0, 0)`),
                                  (i.style.width = `${o}px`))
                                : ((i.style.transform = `translate3d(0px, ${l}px, 0)`),
                                  (i.style.height = `${o}px`)),
                            s.hide &&
                                (clearTimeout(g),
                                (r.style.opacity = 1),
                                (g = setTimeout(() => {
                                    (r.style.opacity = 0), (r.style.transitionDuration = '400ms');
                                }, 1e3)));
                    }
                    function w() {
                        if (!n.params.scrollbar.el || !n.scrollbar.el) return;
                        const { scrollbar: e } = n,
                            { dragEl: t, el: i } = e;
                        (t.style.width = ''),
                            (t.style.height = ''),
                            (m = n.isHorizontal() ? i.offsetWidth : i.offsetHeight),
                            (p =
                                n.size /
                                (n.virtualSize +
                                    n.params.slidesOffsetBefore -
                                    (n.params.centeredSlides ? n.snapGrid[0] : 0))),
                            (c =
                                'auto' === n.params.scrollbar.dragSize
                                    ? m * p
                                    : parseInt(n.params.scrollbar.dragSize, 10)),
                            n.isHorizontal() ? (t.style.width = `${c}px`) : (t.style.height = `${c}px`),
                            (i.style.display = p >= 1 ? 'none' : ''),
                            n.params.scrollbar.hide && (i.style.opacity = 0),
                            n.params.watchOverflow &&
                                n.enabled &&
                                e.el.classList[n.isLocked ? 'add' : 'remove'](n.params.scrollbar.lockClass);
                    }
                    function b(e) {
                        return n.isHorizontal() ? e.clientX : e.clientY;
                    }
                    function E(e) {
                        const { scrollbar: t, rtlTranslate: i } = n,
                            { el: s } = t;
                        let a;
                        (a =
                            (b(e) -
                                (0, r.b)(s)[n.isHorizontal() ? 'left' : 'top'] -
                                (null !== d ? d : c / 2)) /
                            (m - c)),
                            (a = Math.max(Math.min(a, 1), 0)),
                            i && (a = 1 - a);
                        const o = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * a;
                        n.updateProgress(o),
                            n.setTranslate(o),
                            n.updateActiveIndex(),
                            n.updateSlidesClasses();
                    }
                    function v(e) {
                        const t = n.params.scrollbar,
                            { scrollbar: i, wrapperEl: r } = n,
                            { el: s, dragEl: a } = i;
                        (u = !0),
                            (d =
                                e.target === a
                                    ? b(e) -
                                      e.target.getBoundingClientRect()[n.isHorizontal() ? 'left' : 'top']
                                    : null),
                            e.preventDefault(),
                            e.stopPropagation(),
                            (r.style.transitionDuration = '100ms'),
                            (a.style.transitionDuration = '100ms'),
                            E(e),
                            clearTimeout(h),
                            (s.style.transitionDuration = '0ms'),
                            t.hide && (s.style.opacity = 1),
                            n.params.cssMode && (n.wrapperEl.style['scroll-snap-type'] = 'none'),
                            l('scrollbarDragStart', e);
                    }
                    function _(e) {
                        const { scrollbar: t, wrapperEl: i } = n,
                            { el: r, dragEl: s } = t;
                        u &&
                            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                            E(e),
                            (i.style.transitionDuration = '0ms'),
                            (r.style.transitionDuration = '0ms'),
                            (s.style.transitionDuration = '0ms'),
                            l('scrollbarDragMove', e));
                    }
                    function C(e) {
                        const t = n.params.scrollbar,
                            { scrollbar: i, wrapperEl: s } = n,
                            { el: a } = i;
                        u &&
                            ((u = !1),
                            n.params.cssMode &&
                                ((n.wrapperEl.style['scroll-snap-type'] = ''),
                                (s.style.transitionDuration = '')),
                            t.hide &&
                                (clearTimeout(h),
                                (h = (0, r.n)(() => {
                                    (a.style.opacity = 0), (a.style.transitionDuration = '400ms');
                                }, 1e3))),
                            l('scrollbarDragEnd', e),
                            t.snapOnRelease && n.slideToClosest());
                    }
                    function B(e) {
                        const { scrollbar: t, params: i } = n,
                            r = t.el;
                        if (!r) return;
                        const s = r,
                            a = !!i.passiveListeners && { passive: !1, capture: !1 },
                            o = !!i.passiveListeners && { passive: !0, capture: !1 };
                        if (!s) return;
                        const l = 'on' === e ? 'addEventListener' : 'removeEventListener';
                        s[l]('pointerdown', v, a), A[l]('pointermove', _, a), A[l]('pointerup', C, o);
                    }
                    function y() {
                        const { scrollbar: e, el: t } = n;
                        n.params.scrollbar = (0, s.c)(n, n.originalParams.scrollbar, n.params.scrollbar, {
                            el: 'swiper-scrollbar'
                        });
                        const i = n.params.scrollbar;
                        if (!i.el) return;
                        let o, l;
                        if (
                            ('string' == typeof i.el && n.isElement && (o = n.el.querySelector(i.el)),
                            o || 'string' != typeof i.el)
                        )
                            o || (o = i.el);
                        else if (((o = A.querySelectorAll(i.el)), !o.length)) return;
                        n.params.uniqueNavElements &&
                            'string' == typeof i.el &&
                            o.length > 1 &&
                            1 === t.querySelectorAll(i.el).length &&
                            (o = t.querySelector(i.el)),
                            o.length > 0 && (o = o[0]),
                            o.classList.add(n.isHorizontal() ? i.horizontalClass : i.verticalClass),
                            o &&
                                ((l = o.querySelector((0, a.c)(n.params.scrollbar.dragClass))),
                                l || ((l = (0, r.c)('div', n.params.scrollbar.dragClass)), o.append(l))),
                            Object.assign(e, { el: o, dragEl: l }),
                            i.draggable && n.params.scrollbar.el && n.scrollbar.el && B('on'),
                            o &&
                                o.classList[n.enabled ? 'remove' : 'add'](
                                    ...(0, r.h)(n.params.scrollbar.lockClass)
                                );
                    }
                    function x() {
                        const e = n.params.scrollbar,
                            t = n.scrollbar.el;
                        t &&
                            t.classList.remove(
                                ...(0, r.h)(n.isHorizontal() ? e.horizontalClass : e.verticalClass)
                            ),
                            n.params.scrollbar.el && n.scrollbar.el && B('off');
                    }
                    t({
                        scrollbar: {
                            el: null,
                            dragSize: 'auto',
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: 'swiper-scrollbar-lock',
                            dragClass: 'swiper-scrollbar-drag',
                            scrollbarDisabledClass: 'swiper-scrollbar-disabled',
                            horizontalClass: 'swiper-scrollbar-horizontal',
                            verticalClass: 'swiper-scrollbar-vertical'
                        }
                    }),
                        (n.scrollbar = { el: null, dragEl: null }),
                        o('init', () => {
                            !1 === n.params.scrollbar.enabled ? k() : (y(), w(), f());
                        }),
                        o('update resize observerUpdate lock unlock', () => {
                            w();
                        }),
                        o('setTranslate', () => {
                            f();
                        }),
                        o('setTransition', (e, t) => {
                            !(function (e) {
                                n.params.scrollbar.el &&
                                    n.scrollbar.el &&
                                    (n.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
                            })(t);
                        }),
                        o('enable disable', () => {
                            const { el: e } = n.scrollbar;
                            e &&
                                e.classList[n.enabled ? 'remove' : 'add'](
                                    ...(0, r.h)(n.params.scrollbar.lockClass)
                                );
                        }),
                        o('destroy', () => {
                            x();
                        });
                    const k = () => {
                        n.el.classList.add(...(0, r.h)(n.params.scrollbar.scrollbarDisabledClass)),
                            n.scrollbar.el &&
                                n.scrollbar.el.classList.add(
                                    ...(0, r.h)(n.params.scrollbar.scrollbarDisabledClass)
                                ),
                            x();
                    };
                    Object.assign(n.scrollbar, {
                        enable: () => {
                            n.el.classList.remove(...(0, r.h)(n.params.scrollbar.scrollbarDisabledClass)),
                                n.scrollbar.el &&
                                    n.scrollbar.el.classList.remove(
                                        ...(0, r.h)(n.params.scrollbar.scrollbarDisabledClass)
                                    ),
                                y(),
                                w(),
                                f();
                        },
                        disable: k,
                        updateSize: w,
                        setTranslate: f,
                        init: y,
                        destroy: x
                    });
                }
            },
            './node_modules/swiper/modules/thumbs.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => s });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                function s(e) {
                    let { swiper: n, extendParams: t, on: s } = e;
                    t({
                        thumbs: {
                            swiper: null,
                            multipleActiveThumbs: !0,
                            autoScrollOffset: 0,
                            slideThumbActiveClass: 'swiper-slide-thumb-active',
                            thumbsContainerClass: 'swiper-thumbs'
                        }
                    });
                    let a = !1,
                        o = !1;
                    function l() {
                        const e = n.thumbs.swiper;
                        if (!e || e.destroyed) return;
                        const t = e.clickedIndex,
                            i = e.clickedSlide;
                        if (i && i.classList.contains(n.params.thumbs.slideThumbActiveClass)) return;
                        if (null == t) return;
                        let r;
                        (r = e.params.loop
                            ? parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)
                            : t),
                            n.params.loop ? n.slideToLoop(r) : n.slideTo(r);
                    }
                    function A() {
                        const { thumbs: e } = n.params;
                        if (a) return !1;
                        a = !0;
                        const t = n.constructor;
                        if (e.swiper instanceof t)
                            (n.thumbs.swiper = e.swiper),
                                Object.assign(n.thumbs.swiper.originalParams, {
                                    watchSlidesProgress: !0,
                                    slideToClickedSlide: !1
                                }),
                                Object.assign(n.thumbs.swiper.params, {
                                    watchSlidesProgress: !0,
                                    slideToClickedSlide: !1
                                }),
                                n.thumbs.swiper.update();
                        else if ((0, r.k)(e.swiper)) {
                            const i = Object.assign({}, e.swiper);
                            Object.assign(i, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                                (n.thumbs.swiper = new t(i)),
                                (o = !0);
                        }
                        return (
                            n.thumbs.swiper.el.classList.add(n.params.thumbs.thumbsContainerClass),
                            n.thumbs.swiper.on('tap', l),
                            !0
                        );
                    }
                    function d(e) {
                        const t = n.thumbs.swiper;
                        if (!t || t.destroyed) return;
                        const i =
                            'auto' === t.params.slidesPerView
                                ? t.slidesPerViewDynamic()
                                : t.params.slidesPerView;
                        let s = 1;
                        const a = n.params.thumbs.slideThumbActiveClass;
                        if (
                            (n.params.slidesPerView > 1 &&
                                !n.params.centeredSlides &&
                                (s = n.params.slidesPerView),
                            n.params.thumbs.multipleActiveThumbs || (s = 1),
                            (s = Math.floor(s)),
                            t.slides.forEach((e) => e.classList.remove(a)),
                            t.params.loop || (t.params.virtual && t.params.virtual.enabled))
                        )
                            for (let e = 0; e < s; e += 1)
                                (0, r.e)(
                                    t.slidesEl,
                                    `[data-swiper-slide-index="${n.realIndex + e}"]`
                                ).forEach((e) => {
                                    e.classList.add(a);
                                });
                        else
                            for (let e = 0; e < s; e += 1)
                                t.slides[n.realIndex + e] && t.slides[n.realIndex + e].classList.add(a);
                        const o = n.params.thumbs.autoScrollOffset,
                            l = o && !t.params.loop;
                        if (n.realIndex !== t.realIndex || l) {
                            const r = t.activeIndex;
                            let s, a;
                            if (t.params.loop) {
                                const e = t.slides.filter(
                                    (e) => e.getAttribute('data-swiper-slide-index') === `${n.realIndex}`
                                )[0];
                                (s = t.slides.indexOf(e)),
                                    (a = n.activeIndex > n.previousIndex ? 'next' : 'prev');
                            } else (s = n.realIndex), (a = s > n.previousIndex ? 'next' : 'prev');
                            l && (s += 'next' === a ? o : -1 * o),
                                t.visibleSlidesIndexes &&
                                    t.visibleSlidesIndexes.indexOf(s) < 0 &&
                                    (t.params.centeredSlides
                                        ? (s = s > r ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1)
                                        : s > r && t.params.slidesPerGroup,
                                    t.slideTo(s, e ? 0 : void 0));
                        }
                    }
                    (n.thumbs = { swiper: null }),
                        s('beforeInit', () => {
                            const { thumbs: e } = n.params;
                            if (e && e.swiper)
                                if ('string' == typeof e.swiper || e.swiper instanceof HTMLElement) {
                                    const t = (0, i.g)(),
                                        r = () => {
                                            const i =
                                                'string' == typeof e.swiper
                                                    ? t.querySelector(e.swiper)
                                                    : e.swiper;
                                            if (i && i.swiper) (e.swiper = i.swiper), A(), d(!0);
                                            else if (i) {
                                                const t = (r) => {
                                                    (e.swiper = r.detail[0]),
                                                        i.removeEventListener('init', t),
                                                        A(),
                                                        d(!0),
                                                        e.swiper.update(),
                                                        n.update();
                                                };
                                                i.addEventListener('init', t);
                                            }
                                            return i;
                                        },
                                        s = () => {
                                            n.destroyed || r() || requestAnimationFrame(s);
                                        };
                                    requestAnimationFrame(s);
                                } else A(), d(!0);
                        }),
                        s('slideChange update resize observerUpdate', () => {
                            d();
                        }),
                        s('setTransition', (e, t) => {
                            const i = n.thumbs.swiper;
                            i && !i.destroyed && i.setTransition(t);
                        }),
                        s('beforeDestroy', () => {
                            const e = n.thumbs.swiper;
                            e && !e.destroyed && o && e.destroy();
                        }),
                        Object.assign(n.thumbs, { init: A, update: d });
                }
            },
            './node_modules/swiper/modules/virtual.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => s });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                function s(e) {
                    let n,
                        { swiper: t, extendParams: s, on: a, emit: o } = e;
                    s({
                        virtual: {
                            enabled: !1,
                            slides: [],
                            cache: !0,
                            renderSlide: null,
                            renderExternal: null,
                            renderExternalUpdate: !0,
                            addSlidesBefore: 0,
                            addSlidesAfter: 0
                        }
                    });
                    const l = (0, i.g)();
                    t.virtual = {
                        cache: {},
                        from: void 0,
                        to: void 0,
                        slides: [],
                        offset: 0,
                        slidesGrid: []
                    };
                    const A = l.createElement('div');
                    function d(e, n) {
                        const i = t.params.virtual;
                        if (i.cache && t.virtual.cache[n]) return t.virtual.cache[n];
                        let s;
                        return (
                            i.renderSlide
                                ? ((s = i.renderSlide.call(t, e, n)),
                                  'string' == typeof s && ((A.innerHTML = s), (s = A.children[0])))
                                : (s = t.isElement
                                      ? (0, r.c)('swiper-slide')
                                      : (0, r.c)('div', t.params.slideClass)),
                            s.setAttribute('data-swiper-slide-index', n),
                            i.renderSlide || (s.innerHTML = e),
                            i.cache && (t.virtual.cache[n] = s),
                            s
                        );
                    }
                    function c(e) {
                        const { slidesPerView: n, slidesPerGroup: i, centeredSlides: s, loop: a } = t.params,
                            { addSlidesBefore: l, addSlidesAfter: A } = t.params.virtual,
                            { from: c, to: m, slides: p, slidesGrid: u, offset: g } = t.virtual;
                        t.params.cssMode || t.updateActiveIndex();
                        const h = t.activeIndex || 0;
                        let f, w, b;
                        (f = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top'),
                            s
                                ? ((w = Math.floor(n / 2) + i + A), (b = Math.floor(n / 2) + i + l))
                                : ((w = n + (i - 1) + A), (b = (a ? n : i) + l));
                        let E = h - b,
                            v = h + w;
                        a || ((E = Math.max(E, 0)), (v = Math.min(v, p.length - 1)));
                        let _ = (t.slidesGrid[E] || 0) - (t.slidesGrid[0] || 0);
                        function C() {
                            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), o('virtualUpdate');
                        }
                        if (
                            (a && h >= b
                                ? ((E -= b), s || (_ += t.slidesGrid[0]))
                                : a && h < b && ((E = -b), s && (_ += t.slidesGrid[0])),
                            Object.assign(t.virtual, {
                                from: E,
                                to: v,
                                offset: _,
                                slidesGrid: t.slidesGrid,
                                slidesBefore: b,
                                slidesAfter: w
                            }),
                            c === E && m === v && !e)
                        )
                            return (
                                t.slidesGrid !== u &&
                                    _ !== g &&
                                    t.slides.forEach((e) => {
                                        e.style[f] = _ - Math.abs(t.cssOverflowAdjustment()) + 'px';
                                    }),
                                t.updateProgress(),
                                void o('virtualUpdate')
                            );
                        if (t.params.virtual.renderExternal)
                            return (
                                t.params.virtual.renderExternal.call(t, {
                                    offset: _,
                                    from: E,
                                    to: v,
                                    slides: (function () {
                                        const e = [];
                                        for (let n = E; n <= v; n += 1) e.push(p[n]);
                                        return e;
                                    })()
                                }),
                                void (t.params.virtual.renderExternalUpdate ? C() : o('virtualUpdate'))
                            );
                        const B = [],
                            y = [],
                            x = (e) => {
                                let n = e;
                                return e < 0 ? (n = p.length + e) : n >= p.length && (n -= p.length), n;
                            };
                        if (e)
                            t.slides
                                .filter((e) => e.matches(`.${t.params.slideClass}, swiper-slide`))
                                .forEach((e) => {
                                    e.remove();
                                });
                        else
                            for (let e = c; e <= m; e += 1)
                                if (e < E || e > v) {
                                    const n = x(e);
                                    t.slides
                                        .filter((e) =>
                                            e.matches(
                                                `.${t.params.slideClass}[data-swiper-slide-index="${n}"], swiper-slide[data-swiper-slide-index="${n}"]`
                                            )
                                        )
                                        .forEach((e) => {
                                            e.remove();
                                        });
                                }
                        const k = a ? -p.length : 0,
                            S = a ? 2 * p.length : p.length;
                        for (let n = k; n < S; n += 1)
                            if (n >= E && n <= v) {
                                const t = x(n);
                                void 0 === m || e ? y.push(t) : (n > m && y.push(t), n < c && B.push(t));
                            }
                        if (
                            (y.forEach((e) => {
                                t.slidesEl.append(d(p[e], e));
                            }),
                            a)
                        )
                            for (let e = B.length - 1; e >= 0; e -= 1) {
                                const n = B[e];
                                t.slidesEl.prepend(d(p[n], n));
                            }
                        else
                            B.sort((e, n) => n - e),
                                B.forEach((e) => {
                                    t.slidesEl.prepend(d(p[e], e));
                                });
                        (0, r.e)(t.slidesEl, '.swiper-slide, swiper-slide').forEach((e) => {
                            e.style[f] = _ - Math.abs(t.cssOverflowAdjustment()) + 'px';
                        }),
                            C();
                    }
                    a('beforeInit', () => {
                        if (!t.params.virtual.enabled) return;
                        let e;
                        if (void 0 === t.passedParams.virtual.slides) {
                            const n = [...t.slidesEl.children].filter((e) =>
                                e.matches(`.${t.params.slideClass}, swiper-slide`)
                            );
                            n &&
                                n.length &&
                                ((t.virtual.slides = [...n]),
                                (e = !0),
                                n.forEach((e, n) => {
                                    e.setAttribute('data-swiper-slide-index', n),
                                        (t.virtual.cache[n] = e),
                                        e.remove();
                                }));
                        }
                        e || (t.virtual.slides = t.params.virtual.slides),
                            t.classNames.push(`${t.params.containerModifierClass}virtual`),
                            (t.params.watchSlidesProgress = !0),
                            (t.originalParams.watchSlidesProgress = !0),
                            c();
                    }),
                        a('setTranslate', () => {
                            t.params.virtual.enabled &&
                                (t.params.cssMode && !t._immediateVirtual
                                    ? (clearTimeout(n),
                                      (n = setTimeout(() => {
                                          c();
                                      }, 100)))
                                    : c());
                        }),
                        a('init update resize', () => {
                            t.params.virtual.enabled &&
                                t.params.cssMode &&
                                (0, r.s)(t.wrapperEl, '--swiper-virtual-size', `${t.virtualSize}px`);
                        }),
                        Object.assign(t.virtual, {
                            appendSlide: function (e) {
                                if ('object' == typeof e && 'length' in e)
                                    for (let n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.push(e[n]);
                                else t.virtual.slides.push(e);
                                c(!0);
                            },
                            prependSlide: function (e) {
                                const n = t.activeIndex;
                                let i = n + 1,
                                    r = 1;
                                if (Array.isArray(e)) {
                                    for (let n = 0; n < e.length; n += 1)
                                        e[n] && t.virtual.slides.unshift(e[n]);
                                    (i = n + e.length), (r = e.length);
                                } else t.virtual.slides.unshift(e);
                                if (t.params.virtual.cache) {
                                    const e = t.virtual.cache,
                                        n = {};
                                    Object.keys(e).forEach((t) => {
                                        const i = e[t],
                                            s = i.getAttribute('data-swiper-slide-index');
                                        s && i.setAttribute('data-swiper-slide-index', parseInt(s, 10) + r),
                                            (n[parseInt(t, 10) + r] = i);
                                    }),
                                        (t.virtual.cache = n);
                                }
                                c(!0), t.slideTo(i, 0);
                            },
                            removeSlide: function (e) {
                                if (null == e) return;
                                let n = t.activeIndex;
                                if (Array.isArray(e))
                                    for (let i = e.length - 1; i >= 0; i -= 1)
                                        t.params.virtual.cache &&
                                            (delete t.virtual.cache[e[i]],
                                            Object.keys(t.virtual.cache).forEach((n) => {
                                                n > e &&
                                                    ((t.virtual.cache[n - 1] = t.virtual.cache[n]),
                                                    t.virtual.cache[n - 1].setAttribute(
                                                        'data-swiper-slide-index',
                                                        n - 1
                                                    ),
                                                    delete t.virtual.cache[n]);
                                            })),
                                            t.virtual.slides.splice(e[i], 1),
                                            e[i] < n && (n -= 1),
                                            (n = Math.max(n, 0));
                                else
                                    t.params.virtual.cache &&
                                        (delete t.virtual.cache[e],
                                        Object.keys(t.virtual.cache).forEach((n) => {
                                            n > e &&
                                                ((t.virtual.cache[n - 1] = t.virtual.cache[n]),
                                                t.virtual.cache[n - 1].setAttribute(
                                                    'data-swiper-slide-index',
                                                    n - 1
                                                ),
                                                delete t.virtual.cache[n]);
                                        })),
                                        t.virtual.slides.splice(e, 1),
                                        e < n && (n -= 1),
                                        (n = Math.max(n, 0));
                                c(!0), t.slideTo(n, 0);
                            },
                            removeAllSlides: function () {
                                (t.virtual.slides = []),
                                    t.params.virtual.cache && (t.virtual.cache = {}),
                                    c(!0),
                                    t.slideTo(0, 0);
                            },
                            update: c
                        });
                }
            },
            './node_modules/swiper/modules/zoom.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { default: () => s });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                function s(e) {
                    let { swiper: n, extendParams: t, on: s, emit: a } = e;
                    const o = (0, i.a)();
                    t({
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: 'swiper-zoom-container',
                            zoomedSlideClass: 'swiper-slide-zoomed'
                        }
                    }),
                        (n.zoom = { enabled: !1 });
                    let l,
                        A,
                        d = 1,
                        c = !1;
                    const m = [],
                        p = {
                            originX: 0,
                            originY: 0,
                            slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            imageEl: void 0,
                            imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        u = {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        g = {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        };
                    let h = 1;
                    function f() {
                        if (m.length < 2) return 1;
                        const e = m[0].pageX,
                            n = m[0].pageY,
                            t = m[1].pageX,
                            i = m[1].pageY;
                        return Math.sqrt((t - e) ** 2 + (i - n) ** 2);
                    }
                    function w(e) {
                        const t = n.isElement ? 'swiper-slide' : `.${n.params.slideClass}`;
                        return (
                            !!e.target.matches(t) || n.slides.filter((n) => n.contains(e.target)).length > 0
                        );
                    }
                    function b(e) {
                        if (('mouse' === e.pointerType && m.splice(0, m.length), !w(e))) return;
                        const t = n.params.zoom;
                        if (((l = !1), (A = !1), m.push(e), !(m.length < 2))) {
                            if (((l = !0), (p.scaleStart = f()), !p.slideEl)) {
                                (p.slideEl = e.target.closest(`.${n.params.slideClass}, swiper-slide`)),
                                    p.slideEl || (p.slideEl = n.slides[n.activeIndex]);
                                let i = p.slideEl.querySelector(`.${t.containerClass}`);
                                if (
                                    (i &&
                                        (i = i.querySelectorAll(
                                            'picture, img, svg, canvas, .swiper-zoom-target'
                                        )[0]),
                                    (p.imageEl = i),
                                    (p.imageWrapEl = i
                                        ? (0, r.a)(p.imageEl, `.${t.containerClass}`)[0]
                                        : void 0),
                                    !p.imageWrapEl)
                                )
                                    return void (p.imageEl = void 0);
                                p.maxRatio = p.imageWrapEl.getAttribute('data-swiper-zoom') || t.maxRatio;
                            }
                            if (p.imageEl) {
                                const [e, n] = (function () {
                                    if (m.length < 2) return { x: null, y: null };
                                    const e = p.imageEl.getBoundingClientRect();
                                    return [
                                        (m[0].pageX + (m[1].pageX - m[0].pageX) / 2 - e.x - o.scrollX) / d,
                                        (m[0].pageY + (m[1].pageY - m[0].pageY) / 2 - e.y - o.scrollY) / d
                                    ];
                                })();
                                (p.originX = e),
                                    (p.originY = n),
                                    (p.imageEl.style.transitionDuration = '0ms');
                            }
                            c = !0;
                        }
                    }
                    function E(e) {
                        if (!w(e)) return;
                        const t = n.params.zoom,
                            i = n.zoom,
                            r = m.findIndex((n) => n.pointerId === e.pointerId);
                        r >= 0 && (m[r] = e),
                            m.length < 2 ||
                                ((A = !0),
                                (p.scaleMove = f()),
                                p.imageEl &&
                                    ((i.scale = (p.scaleMove / p.scaleStart) * d),
                                    i.scale > p.maxRatio &&
                                        (i.scale = p.maxRatio - 1 + (i.scale - p.maxRatio + 1) ** 0.5),
                                    i.scale < t.minRatio &&
                                        (i.scale = t.minRatio + 1 - (t.minRatio - i.scale + 1) ** 0.5),
                                    (p.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`)));
                    }
                    function v(e) {
                        if (!w(e)) return;
                        if ('mouse' === e.pointerType && 'pointerout' === e.type) return;
                        const t = n.params.zoom,
                            i = n.zoom,
                            r = m.findIndex((n) => n.pointerId === e.pointerId);
                        r >= 0 && m.splice(r, 1),
                            l &&
                                A &&
                                ((l = !1),
                                (A = !1),
                                p.imageEl &&
                                    ((i.scale = Math.max(Math.min(i.scale, p.maxRatio), t.minRatio)),
                                    (p.imageEl.style.transitionDuration = `${n.params.speed}ms`),
                                    (p.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
                                    (d = i.scale),
                                    (c = !1),
                                    i.scale > 1 && p.slideEl
                                        ? p.slideEl.classList.add(`${t.zoomedSlideClass}`)
                                        : i.scale <= 1 &&
                                          p.slideEl &&
                                          p.slideEl.classList.remove(`${t.zoomedSlideClass}`),
                                    1 === i.scale &&
                                        ((p.originX = 0), (p.originY = 0), (p.slideEl = void 0))));
                    }
                    function _(e) {
                        if (
                            !w(e) ||
                            !(function (e) {
                                const t = `.${n.params.zoom.containerClass}`;
                                return (
                                    !!e.target.matches(t) ||
                                    [...n.hostEl.querySelectorAll(t)].filter((n) => n.contains(e.target))
                                        .length > 0
                                );
                            })(e)
                        )
                            return;
                        const t = n.zoom;
                        if (!p.imageEl) return;
                        if (!u.isTouched || !p.slideEl) return;
                        u.isMoved ||
                            ((u.width = p.imageEl.offsetWidth),
                            (u.height = p.imageEl.offsetHeight),
                            (u.startX = (0, r.i)(p.imageWrapEl, 'x') || 0),
                            (u.startY = (0, r.i)(p.imageWrapEl, 'y') || 0),
                            (p.slideWidth = p.slideEl.offsetWidth),
                            (p.slideHeight = p.slideEl.offsetHeight),
                            (p.imageWrapEl.style.transitionDuration = '0ms'));
                        const i = u.width * t.scale,
                            s = u.height * t.scale;
                        if (i < p.slideWidth && s < p.slideHeight) return;
                        if (
                            ((u.minX = Math.min(p.slideWidth / 2 - i / 2, 0)),
                            (u.maxX = -u.minX),
                            (u.minY = Math.min(p.slideHeight / 2 - s / 2, 0)),
                            (u.maxY = -u.minY),
                            (u.touchesCurrent.x = m.length > 0 ? m[0].pageX : e.pageX),
                            (u.touchesCurrent.y = m.length > 0 ? m[0].pageY : e.pageY),
                            Math.max(
                                Math.abs(u.touchesCurrent.x - u.touchesStart.x),
                                Math.abs(u.touchesCurrent.y - u.touchesStart.y)
                            ) > 5 && (n.allowClick = !1),
                            !u.isMoved && !c)
                        ) {
                            if (
                                n.isHorizontal() &&
                                ((Math.floor(u.minX) === Math.floor(u.startX) &&
                                    u.touchesCurrent.x < u.touchesStart.x) ||
                                    (Math.floor(u.maxX) === Math.floor(u.startX) &&
                                        u.touchesCurrent.x > u.touchesStart.x))
                            )
                                return void (u.isTouched = !1);
                            if (
                                !n.isHorizontal() &&
                                ((Math.floor(u.minY) === Math.floor(u.startY) &&
                                    u.touchesCurrent.y < u.touchesStart.y) ||
                                    (Math.floor(u.maxY) === Math.floor(u.startY) &&
                                        u.touchesCurrent.y > u.touchesStart.y))
                            )
                                return void (u.isTouched = !1);
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), (u.isMoved = !0);
                        const a = (t.scale - d) / (p.maxRatio - n.params.zoom.minRatio),
                            { originX: o, originY: l } = p;
                        (u.currentX =
                            u.touchesCurrent.x - u.touchesStart.x + u.startX + a * (u.width - 2 * o)),
                            (u.currentY =
                                u.touchesCurrent.y - u.touchesStart.y + u.startY + a * (u.height - 2 * l)),
                            u.currentX < u.minX &&
                                (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** 0.8),
                            u.currentX > u.maxX &&
                                (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** 0.8),
                            u.currentY < u.minY &&
                                (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** 0.8),
                            u.currentY > u.maxY &&
                                (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** 0.8),
                            g.prevPositionX || (g.prevPositionX = u.touchesCurrent.x),
                            g.prevPositionY || (g.prevPositionY = u.touchesCurrent.y),
                            g.prevTime || (g.prevTime = Date.now()),
                            (g.x = (u.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
                            (g.y = (u.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
                            Math.abs(u.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
                            Math.abs(u.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
                            (g.prevPositionX = u.touchesCurrent.x),
                            (g.prevPositionY = u.touchesCurrent.y),
                            (g.prevTime = Date.now()),
                            (p.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`);
                    }
                    function C() {
                        const e = n.zoom;
                        p.slideEl &&
                            n.activeIndex !== n.slides.indexOf(p.slideEl) &&
                            (p.imageEl && (p.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'),
                            p.imageWrapEl && (p.imageWrapEl.style.transform = 'translate3d(0,0,0)'),
                            p.slideEl.classList.remove(`${n.params.zoom.zoomedSlideClass}`),
                            (e.scale = 1),
                            (d = 1),
                            (p.slideEl = void 0),
                            (p.imageEl = void 0),
                            (p.imageWrapEl = void 0),
                            (p.originX = 0),
                            (p.originY = 0));
                    }
                    function B(e) {
                        const t = n.zoom,
                            i = n.params.zoom;
                        if (!p.slideEl) {
                            e &&
                                e.target &&
                                (p.slideEl = e.target.closest(`.${n.params.slideClass}, swiper-slide`)),
                                p.slideEl ||
                                    (n.params.virtual && n.params.virtual.enabled && n.virtual
                                        ? (p.slideEl = (0, r.e)(
                                              n.slidesEl,
                                              `.${n.params.slideActiveClass}`
                                          )[0])
                                        : (p.slideEl = n.slides[n.activeIndex]));
                            let t = p.slideEl.querySelector(`.${i.containerClass}`);
                            t &&
                                (t = t.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]),
                                (p.imageEl = t),
                                (p.imageWrapEl = t ? (0, r.a)(p.imageEl, `.${i.containerClass}`)[0] : void 0);
                        }
                        if (!p.imageEl || !p.imageWrapEl) return;
                        let s, a, l, A, c, m, g, h, f, w, b, E, v, _, C, B, y, x;
                        n.params.cssMode &&
                            ((n.wrapperEl.style.overflow = 'hidden'),
                            (n.wrapperEl.style.touchAction = 'none')),
                            p.slideEl.classList.add(`${i.zoomedSlideClass}`),
                            void 0 === u.touchesStart.x && e
                                ? ((s = e.pageX), (a = e.pageY))
                                : ((s = u.touchesStart.x), (a = u.touchesStart.y));
                        const k = 'number' == typeof e ? e : null;
                        1 === d && k && ((s = void 0), (a = void 0)),
                            (t.scale = k || p.imageWrapEl.getAttribute('data-swiper-zoom') || i.maxRatio),
                            (d = k || p.imageWrapEl.getAttribute('data-swiper-zoom') || i.maxRatio),
                            !e || (1 === d && k)
                                ? ((g = 0), (h = 0))
                                : ((y = p.slideEl.offsetWidth),
                                  (x = p.slideEl.offsetHeight),
                                  (l = (0, r.b)(p.slideEl).left + o.scrollX),
                                  (A = (0, r.b)(p.slideEl).top + o.scrollY),
                                  (c = l + y / 2 - s),
                                  (m = A + x / 2 - a),
                                  (f = p.imageEl.offsetWidth),
                                  (w = p.imageEl.offsetHeight),
                                  (b = f * t.scale),
                                  (E = w * t.scale),
                                  (v = Math.min(y / 2 - b / 2, 0)),
                                  (_ = Math.min(x / 2 - E / 2, 0)),
                                  (C = -v),
                                  (B = -_),
                                  (g = c * t.scale),
                                  (h = m * t.scale),
                                  g < v && (g = v),
                                  g > C && (g = C),
                                  h < _ && (h = _),
                                  h > B && (h = B)),
                            k && 1 === t.scale && ((p.originX = 0), (p.originY = 0)),
                            (p.imageWrapEl.style.transitionDuration = '300ms'),
                            (p.imageWrapEl.style.transform = `translate3d(${g}px, ${h}px,0)`),
                            (p.imageEl.style.transitionDuration = '300ms'),
                            (p.imageEl.style.transform = `translate3d(0,0,0) scale(${t.scale})`);
                    }
                    function y() {
                        const e = n.zoom,
                            t = n.params.zoom;
                        if (!p.slideEl) {
                            n.params.virtual && n.params.virtual.enabled && n.virtual
                                ? (p.slideEl = (0, r.e)(n.slidesEl, `.${n.params.slideActiveClass}`)[0])
                                : (p.slideEl = n.slides[n.activeIndex]);
                            let e = p.slideEl.querySelector(`.${t.containerClass}`);
                            e &&
                                (e = e.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]),
                                (p.imageEl = e),
                                (p.imageWrapEl = e ? (0, r.a)(p.imageEl, `.${t.containerClass}`)[0] : void 0);
                        }
                        p.imageEl &&
                            p.imageWrapEl &&
                            (n.params.cssMode &&
                                ((n.wrapperEl.style.overflow = ''), (n.wrapperEl.style.touchAction = '')),
                            (e.scale = 1),
                            (d = 1),
                            (p.imageWrapEl.style.transitionDuration = '300ms'),
                            (p.imageWrapEl.style.transform = 'translate3d(0,0,0)'),
                            (p.imageEl.style.transitionDuration = '300ms'),
                            (p.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'),
                            p.slideEl.classList.remove(`${t.zoomedSlideClass}`),
                            (p.slideEl = void 0),
                            (p.originX = 0),
                            (p.originY = 0));
                    }
                    function x(e) {
                        const t = n.zoom;
                        t.scale && 1 !== t.scale ? y() : B(e);
                    }
                    function k() {
                        return {
                            passiveListener: !!n.params.passiveListeners && { passive: !0, capture: !1 },
                            activeListenerWithCapture: !n.params.passiveListeners || {
                                passive: !1,
                                capture: !0
                            }
                        };
                    }
                    function S() {
                        const e = n.zoom;
                        if (e.enabled) return;
                        e.enabled = !0;
                        const { passiveListener: t, activeListenerWithCapture: i } = k();
                        n.wrapperEl.addEventListener('pointerdown', b, t),
                            n.wrapperEl.addEventListener('pointermove', E, i),
                            ['pointerup', 'pointercancel', 'pointerout'].forEach((e) => {
                                n.wrapperEl.addEventListener(e, v, t);
                            }),
                            n.wrapperEl.addEventListener('pointermove', _, i);
                    }
                    function M() {
                        const e = n.zoom;
                        if (!e.enabled) return;
                        e.enabled = !1;
                        const { passiveListener: t, activeListenerWithCapture: i } = k();
                        n.wrapperEl.removeEventListener('pointerdown', b, t),
                            n.wrapperEl.removeEventListener('pointermove', E, i),
                            ['pointerup', 'pointercancel', 'pointerout'].forEach((e) => {
                                n.wrapperEl.removeEventListener(e, v, t);
                            }),
                            n.wrapperEl.removeEventListener('pointermove', _, i);
                    }
                    Object.defineProperty(n.zoom, 'scale', {
                        get: () => h,
                        set(e) {
                            if (h !== e) {
                                const n = p.imageEl,
                                    t = p.slideEl;
                                a('zoomChange', e, n, t);
                            }
                            h = e;
                        }
                    }),
                        s('init', () => {
                            n.params.zoom.enabled && S();
                        }),
                        s('destroy', () => {
                            M();
                        }),
                        s('touchStart', (e, t) => {
                            n.zoom.enabled &&
                                (function (e) {
                                    const t = n.device;
                                    if (!p.imageEl) return;
                                    if (u.isTouched) return;
                                    t.android && e.cancelable && e.preventDefault(), (u.isTouched = !0);
                                    const i = m.length > 0 ? m[0] : e;
                                    (u.touchesStart.x = i.pageX), (u.touchesStart.y = i.pageY);
                                })(t);
                        }),
                        s('touchEnd', (e, t) => {
                            n.zoom.enabled &&
                                (function () {
                                    const e = n.zoom;
                                    if (!p.imageEl) return;
                                    if (!u.isTouched || !u.isMoved)
                                        return (u.isTouched = !1), void (u.isMoved = !1);
                                    (u.isTouched = !1), (u.isMoved = !1);
                                    let t = 300,
                                        i = 300;
                                    const r = g.x * t,
                                        s = u.currentX + r,
                                        a = g.y * i,
                                        o = u.currentY + a;
                                    0 !== g.x && (t = Math.abs((s - u.currentX) / g.x)),
                                        0 !== g.y && (i = Math.abs((o - u.currentY) / g.y));
                                    const l = Math.max(t, i);
                                    (u.currentX = s), (u.currentY = o);
                                    const A = u.width * e.scale,
                                        d = u.height * e.scale;
                                    (u.minX = Math.min(p.slideWidth / 2 - A / 2, 0)),
                                        (u.maxX = -u.minX),
                                        (u.minY = Math.min(p.slideHeight / 2 - d / 2, 0)),
                                        (u.maxY = -u.minY),
                                        (u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX)),
                                        (u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY)),
                                        (p.imageWrapEl.style.transitionDuration = `${l}ms`),
                                        (p.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`);
                                })();
                        }),
                        s('doubleTap', (e, t) => {
                            !n.animating &&
                                n.params.zoom.enabled &&
                                n.zoom.enabled &&
                                n.params.zoom.toggle &&
                                x(t);
                        }),
                        s('transitionEnd', () => {
                            n.zoom.enabled && n.params.zoom.enabled && C();
                        }),
                        s('slideChange', () => {
                            n.zoom.enabled && n.params.zoom.enabled && n.params.cssMode && C();
                        }),
                        Object.assign(n.zoom, { enable: S, disable: M, in: B, out: y, toggle: x });
                }
            },
            './node_modules/swiper/shared/classes-to-selector.mjs': (e, n, t) => {
                'use strict';
                function i(e) {
                    return (
                        void 0 === e && (e = ''),
                        `.${e
                            .trim()
                            .replace(/([\.:!+\/])/g, '\\$1')
                            .replace(/ /g, '.')}`
                    );
                }
                t.r(n), t.d(n, { c: () => i });
            },
            './node_modules/swiper/shared/create-element-if-not-defined.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { c: () => r });
                var i = t('./node_modules/swiper/shared/utils.mjs');
                function r(e, n, t, r) {
                    return (
                        e.params.createElements &&
                            Object.keys(r).forEach((s) => {
                                if (!t[s] && !0 === t.auto) {
                                    let a = (0, i.e)(e.el, `.${r[s]}`)[0];
                                    a || ((a = (0, i.c)('div', r[s])), (a.className = r[s]), e.el.append(a)),
                                        (t[s] = a),
                                        (n[s] = a);
                                }
                            }),
                        t
                    );
                }
            },
            './node_modules/swiper/shared/create-shadow.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { c: () => r });
                var i = t('./node_modules/swiper/shared/utils.mjs');
                function r(e, n, t) {
                    const r = `swiper-slide-shadow${t ? `-${t}` : ''}${e ? ` swiper-slide-shadow-${e}` : ''}`,
                        s = (0, i.l)(n);
                    let a = s.querySelector(`.${r.split(' ').join('.')}`);
                    return a || ((a = (0, i.c)('div', r.split(' '))), s.append(a)), a;
                }
            },
            './node_modules/swiper/shared/effect-init.mjs': (e, n, t) => {
                'use strict';
                function i(e) {
                    const {
                        effect: n,
                        swiper: t,
                        on: i,
                        setTranslate: r,
                        setTransition: s,
                        overwriteParams: a,
                        perspective: o,
                        recreateShadows: l,
                        getEffectParams: A
                    } = e;
                    let d;
                    i('beforeInit', () => {
                        if (t.params.effect !== n) return;
                        t.classNames.push(`${t.params.containerModifierClass}${n}`),
                            o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
                        const e = a ? a() : {};
                        Object.assign(t.params, e), Object.assign(t.originalParams, e);
                    }),
                        i('setTranslate', () => {
                            t.params.effect === n && r();
                        }),
                        i('setTransition', (e, i) => {
                            t.params.effect === n && s(i);
                        }),
                        i('transitionEnd', () => {
                            if (t.params.effect === n && l) {
                                if (!A || !A().slideShadows) return;
                                t.slides.forEach((e) => {
                                    e.querySelectorAll(
                                        '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                                    ).forEach((e) => e.remove());
                                }),
                                    l();
                            }
                        }),
                        i('virtualUpdate', () => {
                            t.params.effect === n &&
                                (t.slides.length || (d = !0),
                                requestAnimationFrame(() => {
                                    d && t.slides && t.slides.length && (r(), (d = !1));
                                }));
                        });
                }
                t.r(n), t.d(n, { e: () => i });
            },
            './node_modules/swiper/shared/effect-target.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { e: () => r });
                var i = t('./node_modules/swiper/shared/utils.mjs');
                function r(e, n) {
                    const t = (0, i.l)(n);
                    return (
                        t !== n &&
                            ((t.style.backfaceVisibility = 'hidden'),
                            (t.style['-webkit-backface-visibility'] = 'hidden')),
                        t
                    );
                }
            },
            './node_modules/swiper/shared/effect-virtual-transition-end.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { e: () => r });
                var i = t('./node_modules/swiper/shared/utils.mjs');
                function r(e) {
                    let { swiper: n, duration: t, transformElements: r, allSlides: s } = e;
                    const { activeIndex: a } = n;
                    if (n.params.virtualTranslate && 0 !== t) {
                        let e,
                            t = !1;
                        (e = s
                            ? r
                            : r.filter((e) => {
                                  const t = e.classList.contains('swiper-slide-transform')
                                      ? ((e) =>
                                            e.parentElement
                                                ? e.parentElement
                                                : n.slides.filter(
                                                      (n) => n.shadowRoot && n.shadowRoot === e.parentNode
                                                  )[0])(e)
                                      : e;
                                  return n.getSlideIndex(t) === a;
                              })),
                            e.forEach((e) => {
                                (0, i.j)(e, () => {
                                    if (t) return;
                                    if (!n || n.destroyed) return;
                                    (t = !0), (n.animating = !1);
                                    const e = new window.CustomEvent('transitionend', {
                                        bubbles: !0,
                                        cancelable: !0
                                    });
                                    n.wrapperEl.dispatchEvent(e);
                                });
                            });
                    }
                }
            },
            './node_modules/swiper/shared/ssr-window.esm.mjs': (e, n, t) => {
                'use strict';
                function i(e) {
                    return (
                        null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object
                    );
                }
                function r(e, n) {
                    void 0 === e && (e = {}),
                        void 0 === n && (n = {}),
                        Object.keys(n).forEach((t) => {
                            void 0 === e[t]
                                ? (e[t] = n[t])
                                : i(n[t]) && i(e[t]) && Object.keys(n[t]).length > 0 && r(e[t], n[t]);
                        });
                }
                t.r(n), t.d(n, { a: () => l, g: () => a });
                const s = {
                    body: {},
                    addEventListener() {},
                    removeEventListener() {},
                    activeElement: { blur() {}, nodeName: '' },
                    querySelector: () => null,
                    querySelectorAll: () => [],
                    getElementById: () => null,
                    createEvent: () => ({ initEvent() {} }),
                    createElement: () => ({
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute() {},
                        getElementsByTagName: () => []
                    }),
                    createElementNS: () => ({}),
                    importNode: () => null,
                    location: {
                        hash: '',
                        host: '',
                        hostname: '',
                        href: '',
                        origin: '',
                        pathname: '',
                        protocol: '',
                        search: ''
                    }
                };
                function a() {
                    const e = 'undefined' != typeof document ? document : {};
                    return r(e, s), e;
                }
                const o = {
                    document: s,
                    navigator: { userAgent: '' },
                    location: {
                        hash: '',
                        host: '',
                        hostname: '',
                        href: '',
                        origin: '',
                        pathname: '',
                        protocol: '',
                        search: ''
                    },
                    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
                    CustomEvent: function () {
                        return this;
                    },
                    addEventListener() {},
                    removeEventListener() {},
                    getComputedStyle: () => ({ getPropertyValue: () => '' }),
                    Image() {},
                    Date() {},
                    screen: {},
                    setTimeout() {},
                    clearTimeout() {},
                    matchMedia: () => ({}),
                    requestAnimationFrame: (e) =>
                        'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                    cancelAnimationFrame(e) {
                        'undefined' != typeof setTimeout && clearTimeout(e);
                    }
                };
                function l() {
                    const e = 'undefined' != typeof window ? window : {};
                    return r(e, o), e;
                }
            },
            './node_modules/swiper/shared/swiper-core.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { S: () => I, d: () => S });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs'),
                    r = t('./node_modules/swiper/shared/utils.mjs');
                let s, a, o;
                function l() {
                    return (
                        s ||
                            (s = (function () {
                                const e = (0, i.a)(),
                                    n = (0, i.g)();
                                return {
                                    smoothScroll:
                                        n.documentElement &&
                                        n.documentElement.style &&
                                        'scrollBehavior' in n.documentElement.style,
                                    touch: !!(
                                        'ontouchstart' in e ||
                                        (e.DocumentTouch && n instanceof e.DocumentTouch)
                                    )
                                };
                            })()),
                        s
                    );
                }
                var A = {
                    on(e, n, t) {
                        const i = this;
                        if (!i.eventsListeners || i.destroyed) return i;
                        if ('function' != typeof n) return i;
                        const r = t ? 'unshift' : 'push';
                        return (
                            e.split(' ').forEach((e) => {
                                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                                    i.eventsListeners[e][r](n);
                            }),
                            i
                        );
                    },
                    once(e, n, t) {
                        const i = this;
                        if (!i.eventsListeners || i.destroyed) return i;
                        if ('function' != typeof n) return i;
                        function r() {
                            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
                                s[a] = arguments[a];
                            n.apply(i, s);
                        }
                        return (r.__emitterProxy = n), i.on(e, r, t);
                    },
                    onAny(e, n) {
                        const t = this;
                        if (!t.eventsListeners || t.destroyed) return t;
                        if ('function' != typeof e) return t;
                        const i = n ? 'unshift' : 'push';
                        return t.eventsAnyListeners.indexOf(e) < 0 && t.eventsAnyListeners[i](e), t;
                    },
                    offAny(e) {
                        const n = this;
                        if (!n.eventsListeners || n.destroyed) return n;
                        if (!n.eventsAnyListeners) return n;
                        const t = n.eventsAnyListeners.indexOf(e);
                        return t >= 0 && n.eventsAnyListeners.splice(t, 1), n;
                    },
                    off(e, n) {
                        const t = this;
                        return !t.eventsListeners || t.destroyed
                            ? t
                            : t.eventsListeners
                              ? (e.split(' ').forEach((e) => {
                                    void 0 === n
                                        ? (t.eventsListeners[e] = [])
                                        : t.eventsListeners[e] &&
                                          t.eventsListeners[e].forEach((i, r) => {
                                              (i === n || (i.__emitterProxy && i.__emitterProxy === n)) &&
                                                  t.eventsListeners[e].splice(r, 1);
                                          });
                                }),
                                t)
                              : t;
                    },
                    emit() {
                        const e = this;
                        if (!e.eventsListeners || e.destroyed) return e;
                        if (!e.eventsListeners) return e;
                        let n, t, i;
                        for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
                            s[a] = arguments[a];
                        return (
                            'string' == typeof s[0] || Array.isArray(s[0])
                                ? ((n = s[0]), (t = s.slice(1, s.length)), (i = e))
                                : ((n = s[0].events), (t = s[0].data), (i = s[0].context || e)),
                            t.unshift(i),
                            (Array.isArray(n) ? n : n.split(' ')).forEach((n) => {
                                e.eventsAnyListeners &&
                                    e.eventsAnyListeners.length &&
                                    e.eventsAnyListeners.forEach((e) => {
                                        e.apply(i, [n, ...t]);
                                    }),
                                    e.eventsListeners &&
                                        e.eventsListeners[n] &&
                                        e.eventsListeners[n].forEach((e) => {
                                            e.apply(i, t);
                                        });
                            }),
                            e
                        );
                    }
                };
                const d = (e, n) => {
                        if (!e || e.destroyed || !e.params) return;
                        const t = n.closest(e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`);
                        if (t) {
                            let n = t.querySelector(`.${e.params.lazyPreloaderClass}`);
                            !n &&
                                e.isElement &&
                                (t.shadowRoot
                                    ? (n = t.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
                                    : requestAnimationFrame(() => {
                                          t.shadowRoot &&
                                              ((n = t.shadowRoot.querySelector(
                                                  `.${e.params.lazyPreloaderClass}`
                                              )),
                                              n && n.remove());
                                      })),
                                n && n.remove();
                        }
                    },
                    c = (e, n) => {
                        if (!e.slides[n]) return;
                        const t = e.slides[n].querySelector('[loading="lazy"]');
                        t && t.removeAttribute('loading');
                    },
                    m = (e) => {
                        if (!e || e.destroyed || !e.params) return;
                        let n = e.params.lazyPreloadPrevNext;
                        const t = e.slides.length;
                        if (!t || !n || n < 0) return;
                        n = Math.min(n, t);
                        const i =
                                'auto' === e.params.slidesPerView
                                    ? e.slidesPerViewDynamic()
                                    : Math.ceil(e.params.slidesPerView),
                            r = e.activeIndex;
                        if (e.params.grid && e.params.grid.rows > 1) {
                            const t = r,
                                s = [t - n];
                            return (
                                s.push(...Array.from({ length: n }).map((e, n) => t + i + n)),
                                void e.slides.forEach((n, t) => {
                                    s.includes(n.column) && c(e, t);
                                })
                            );
                        }
                        const s = r + i - 1;
                        if (e.params.rewind || e.params.loop)
                            for (let i = r - n; i <= s + n; i += 1) {
                                const n = ((i % t) + t) % t;
                                (n < r || n > s) && c(e, n);
                            }
                        else
                            for (let i = Math.max(r - n, 0); i <= Math.min(s + n, t - 1); i += 1)
                                i !== r && (i > s || i < r) && c(e, i);
                    };
                var p = {
                    updateSize: function () {
                        const e = this;
                        let n, t;
                        const i = e.el;
                        (n =
                            void 0 !== e.params.width && null !== e.params.width
                                ? e.params.width
                                : i.clientWidth),
                            (t =
                                void 0 !== e.params.height && null !== e.params.height
                                    ? e.params.height
                                    : i.clientHeight),
                            (0 === n && e.isHorizontal()) ||
                                (0 === t && e.isVertical()) ||
                                ((n =
                                    n -
                                    parseInt((0, r.m)(i, 'padding-left') || 0, 10) -
                                    parseInt((0, r.m)(i, 'padding-right') || 0, 10)),
                                (t =
                                    t -
                                    parseInt((0, r.m)(i, 'padding-top') || 0, 10) -
                                    parseInt((0, r.m)(i, 'padding-bottom') || 0, 10)),
                                Number.isNaN(n) && (n = 0),
                                Number.isNaN(t) && (t = 0),
                                Object.assign(e, { width: n, height: t, size: e.isHorizontal() ? n : t }));
                    },
                    updateSlides: function () {
                        const e = this;
                        function n(n, t) {
                            return parseFloat(n.getPropertyValue(e.getDirectionLabel(t)) || 0);
                        }
                        const t = e.params,
                            { wrapperEl: i, slidesEl: s, size: a, rtlTranslate: o, wrongRTL: l } = e,
                            A = e.virtual && t.virtual.enabled,
                            d = A ? e.virtual.slides.length : e.slides.length,
                            c = (0, r.e)(s, `.${e.params.slideClass}, swiper-slide`),
                            m = A ? e.virtual.slides.length : c.length;
                        let p = [];
                        const u = [],
                            g = [];
                        let h = t.slidesOffsetBefore;
                        'function' == typeof h && (h = t.slidesOffsetBefore.call(e));
                        let f = t.slidesOffsetAfter;
                        'function' == typeof f && (f = t.slidesOffsetAfter.call(e));
                        const w = e.snapGrid.length,
                            b = e.slidesGrid.length;
                        let E = t.spaceBetween,
                            v = -h,
                            _ = 0,
                            C = 0;
                        if (void 0 === a) return;
                        'string' == typeof E && E.indexOf('%') >= 0
                            ? (E = (parseFloat(E.replace('%', '')) / 100) * a)
                            : 'string' == typeof E && (E = parseFloat(E)),
                            (e.virtualSize = -E),
                            c.forEach((e) => {
                                o ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
                                    (e.style.marginBottom = ''),
                                    (e.style.marginTop = '');
                            }),
                            t.centeredSlides &&
                                t.cssMode &&
                                ((0, r.s)(i, '--swiper-centered-offset-before', ''),
                                (0, r.s)(i, '--swiper-centered-offset-after', ''));
                        const B = t.grid && t.grid.rows > 1 && e.grid;
                        let y;
                        B ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
                        const x =
                            'auto' === t.slidesPerView &&
                            t.breakpoints &&
                            Object.keys(t.breakpoints).filter(
                                (e) => void 0 !== t.breakpoints[e].slidesPerView
                            ).length > 0;
                        for (let i = 0; i < m; i += 1) {
                            let s;
                            if (
                                ((y = 0),
                                c[i] && (s = c[i]),
                                B && e.grid.updateSlide(i, s, c),
                                !c[i] || 'none' !== (0, r.m)(s, 'display'))
                            ) {
                                if ('auto' === t.slidesPerView) {
                                    x && (c[i].style[e.getDirectionLabel('width')] = '');
                                    const a = getComputedStyle(s),
                                        o = s.style.transform,
                                        l = s.style.webkitTransform;
                                    if (
                                        (o && (s.style.transform = 'none'),
                                        l && (s.style.webkitTransform = 'none'),
                                        t.roundLengths)
                                    )
                                        y = e.isHorizontal()
                                            ? (0, r.f)(s, 'width', !0)
                                            : (0, r.f)(s, 'height', !0);
                                    else {
                                        const e = n(a, 'width'),
                                            t = n(a, 'padding-left'),
                                            i = n(a, 'padding-right'),
                                            r = n(a, 'margin-left'),
                                            o = n(a, 'margin-right'),
                                            l = a.getPropertyValue('box-sizing');
                                        if (l && 'border-box' === l) y = e + r + o;
                                        else {
                                            const { clientWidth: n, offsetWidth: a } = s;
                                            y = e + t + i + r + o + (a - n);
                                        }
                                    }
                                    o && (s.style.transform = o),
                                        l && (s.style.webkitTransform = l),
                                        t.roundLengths && (y = Math.floor(y));
                                } else
                                    (y = (a - (t.slidesPerView - 1) * E) / t.slidesPerView),
                                        t.roundLengths && (y = Math.floor(y)),
                                        c[i] && (c[i].style[e.getDirectionLabel('width')] = `${y}px`);
                                c[i] && (c[i].swiperSlideSize = y),
                                    g.push(y),
                                    t.centeredSlides
                                        ? ((v = v + y / 2 + _ / 2 + E),
                                          0 === _ && 0 !== i && (v = v - a / 2 - E),
                                          0 === i && (v = v - a / 2 - E),
                                          Math.abs(v) < 0.001 && (v = 0),
                                          t.roundLengths && (v = Math.floor(v)),
                                          C % t.slidesPerGroup == 0 && p.push(v),
                                          u.push(v))
                                        : (t.roundLengths && (v = Math.floor(v)),
                                          (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                                              e.params.slidesPerGroup ==
                                              0 && p.push(v),
                                          u.push(v),
                                          (v = v + y + E)),
                                    (e.virtualSize += y + E),
                                    (_ = y),
                                    (C += 1);
                            }
                        }
                        if (
                            ((e.virtualSize = Math.max(e.virtualSize, a) + f),
                            o &&
                                l &&
                                ('slide' === t.effect || 'coverflow' === t.effect) &&
                                (i.style.width = `${e.virtualSize + E}px`),
                            t.setWrapperSize &&
                                (i.style[e.getDirectionLabel('width')] = `${e.virtualSize + E}px`),
                            B && e.grid.updateWrapperSize(y, p),
                            !t.centeredSlides)
                        ) {
                            const n = [];
                            for (let i = 0; i < p.length; i += 1) {
                                let r = p[i];
                                t.roundLengths && (r = Math.floor(r)), p[i] <= e.virtualSize - a && n.push(r);
                            }
                            (p = n),
                                Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 &&
                                    p.push(e.virtualSize - a);
                        }
                        if (A && t.loop) {
                            const n = g[0] + E;
                            if (t.slidesPerGroup > 1) {
                                const i = Math.ceil(
                                        (e.virtual.slidesBefore + e.virtual.slidesAfter) / t.slidesPerGroup
                                    ),
                                    r = n * t.slidesPerGroup;
                                for (let e = 0; e < i; e += 1) p.push(p[p.length - 1] + r);
                            }
                            for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1)
                                1 === t.slidesPerGroup && p.push(p[p.length - 1] + n),
                                    u.push(u[u.length - 1] + n),
                                    (e.virtualSize += n);
                        }
                        if ((0 === p.length && (p = [0]), 0 !== E)) {
                            const n =
                                e.isHorizontal() && o ? 'marginLeft' : e.getDirectionLabel('marginRight');
                            c.filter((e, n) => !(t.cssMode && !t.loop) || n !== c.length - 1).forEach((e) => {
                                e.style[n] = `${E}px`;
                            });
                        }
                        if (t.centeredSlides && t.centeredSlidesBounds) {
                            let e = 0;
                            g.forEach((n) => {
                                e += n + (E || 0);
                            }),
                                (e -= E);
                            const n = e - a;
                            p = p.map((e) => (e <= 0 ? -h : e > n ? n + f : e));
                        }
                        if (t.centerInsufficientSlides) {
                            let e = 0;
                            if (
                                (g.forEach((n) => {
                                    e += n + (E || 0);
                                }),
                                (e -= E),
                                e < a)
                            ) {
                                const n = (a - e) / 2;
                                p.forEach((e, t) => {
                                    p[t] = e - n;
                                }),
                                    u.forEach((e, t) => {
                                        u[t] = e + n;
                                    });
                            }
                        }
                        if (
                            (Object.assign(e, { slides: c, snapGrid: p, slidesGrid: u, slidesSizesGrid: g }),
                            t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
                        ) {
                            (0, r.s)(i, '--swiper-centered-offset-before', -p[0] + 'px'),
                                (0, r.s)(
                                    i,
                                    '--swiper-centered-offset-after',
                                    e.size / 2 - g[g.length - 1] / 2 + 'px'
                                );
                            const n = -e.snapGrid[0],
                                t = -e.slidesGrid[0];
                            (e.snapGrid = e.snapGrid.map((e) => e + n)),
                                (e.slidesGrid = e.slidesGrid.map((e) => e + t));
                        }
                        if (
                            (m !== d && e.emit('slidesLengthChange'),
                            p.length !== w &&
                                (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
                            u.length !== b && e.emit('slidesGridLengthChange'),
                            t.watchSlidesProgress && e.updateSlidesOffset(),
                            !(A || t.cssMode || ('slide' !== t.effect && 'fade' !== t.effect)))
                        ) {
                            const n = `${t.containerModifierClass}backface-hidden`,
                                i = e.el.classList.contains(n);
                            m <= t.maxBackfaceHiddenSlides
                                ? i || e.el.classList.add(n)
                                : i && e.el.classList.remove(n);
                        }
                    },
                    updateAutoHeight: function (e) {
                        const n = this,
                            t = [],
                            i = n.virtual && n.params.virtual.enabled;
                        let r,
                            s = 0;
                        'number' == typeof e
                            ? n.setTransition(e)
                            : !0 === e && n.setTransition(n.params.speed);
                        const a = (e) => (i ? n.slides[n.getSlideIndexByData(e)] : n.slides[e]);
                        if ('auto' !== n.params.slidesPerView && n.params.slidesPerView > 1)
                            if (n.params.centeredSlides)
                                (n.visibleSlides || []).forEach((e) => {
                                    t.push(e);
                                });
                            else
                                for (r = 0; r < Math.ceil(n.params.slidesPerView); r += 1) {
                                    const e = n.activeIndex + r;
                                    if (e > n.slides.length && !i) break;
                                    t.push(a(e));
                                }
                        else t.push(a(n.activeIndex));
                        for (r = 0; r < t.length; r += 1)
                            if (void 0 !== t[r]) {
                                const e = t[r].offsetHeight;
                                s = e > s ? e : s;
                            }
                        (s || 0 === s) && (n.wrapperEl.style.height = `${s}px`);
                    },
                    updateSlidesOffset: function () {
                        const e = this,
                            n = e.slides,
                            t = e.isElement
                                ? e.isHorizontal()
                                    ? e.wrapperEl.offsetLeft
                                    : e.wrapperEl.offsetTop
                                : 0;
                        for (let i = 0; i < n.length; i += 1)
                            n[i].swiperSlideOffset =
                                (e.isHorizontal() ? n[i].offsetLeft : n[i].offsetTop) -
                                t -
                                e.cssOverflowAdjustment();
                    },
                    updateSlidesProgress: function (e) {
                        void 0 === e && (e = (this && this.translate) || 0);
                        const n = this,
                            t = n.params,
                            { slides: i, rtlTranslate: r, snapGrid: s } = n;
                        if (0 === i.length) return;
                        void 0 === i[0].swiperSlideOffset && n.updateSlidesOffset();
                        let a = -e;
                        r && (a = e),
                            i.forEach((e) => {
                                e.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass);
                            }),
                            (n.visibleSlidesIndexes = []),
                            (n.visibleSlides = []);
                        let o = t.spaceBetween;
                        'string' == typeof o && o.indexOf('%') >= 0
                            ? (o = (parseFloat(o.replace('%', '')) / 100) * n.size)
                            : 'string' == typeof o && (o = parseFloat(o));
                        for (let e = 0; e < i.length; e += 1) {
                            const l = i[e];
                            let A = l.swiperSlideOffset;
                            t.cssMode && t.centeredSlides && (A -= i[0].swiperSlideOffset);
                            const d =
                                    (a + (t.centeredSlides ? n.minTranslate() : 0) - A) /
                                    (l.swiperSlideSize + o),
                                c =
                                    (a - s[0] + (t.centeredSlides ? n.minTranslate() : 0) - A) /
                                    (l.swiperSlideSize + o),
                                m = -(a - A),
                                p = m + n.slidesSizesGrid[e],
                                u = m >= 0 && m <= n.size - n.slidesSizesGrid[e];
                            ((m >= 0 && m < n.size - 1) ||
                                (p > 1 && p <= n.size) ||
                                (m <= 0 && p >= n.size)) &&
                                (n.visibleSlides.push(l),
                                n.visibleSlidesIndexes.push(e),
                                i[e].classList.add(t.slideVisibleClass)),
                                u && i[e].classList.add(t.slideFullyVisibleClass),
                                (l.progress = r ? -d : d),
                                (l.originalProgress = r ? -c : c);
                        }
                    },
                    updateProgress: function (e) {
                        const n = this;
                        if (void 0 === e) {
                            const t = n.rtlTranslate ? -1 : 1;
                            e = (n && n.translate && n.translate * t) || 0;
                        }
                        const t = n.params,
                            i = n.maxTranslate() - n.minTranslate();
                        let { progress: r, isBeginning: s, isEnd: a, progressLoop: o } = n;
                        const l = s,
                            A = a;
                        if (0 === i) (r = 0), (s = !0), (a = !0);
                        else {
                            r = (e - n.minTranslate()) / i;
                            const t = Math.abs(e - n.minTranslate()) < 1,
                                o = Math.abs(e - n.maxTranslate()) < 1;
                            (s = t || r <= 0), (a = o || r >= 1), t && (r = 0), o && (r = 1);
                        }
                        if (t.loop) {
                            const t = n.getSlideIndexByData(0),
                                i = n.getSlideIndexByData(n.slides.length - 1),
                                r = n.slidesGrid[t],
                                s = n.slidesGrid[i],
                                a = n.slidesGrid[n.slidesGrid.length - 1],
                                l = Math.abs(e);
                            (o = l >= r ? (l - r) / a : (l + a - s) / a), o > 1 && (o -= 1);
                        }
                        Object.assign(n, { progress: r, progressLoop: o, isBeginning: s, isEnd: a }),
                            (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                                n.updateSlidesProgress(e),
                            s && !l && n.emit('reachBeginning toEdge'),
                            a && !A && n.emit('reachEnd toEdge'),
                            ((l && !s) || (A && !a)) && n.emit('fromEdge'),
                            n.emit('progress', r);
                    },
                    updateSlidesClasses: function () {
                        const e = this,
                            { slides: n, params: t, slidesEl: i, activeIndex: s } = e,
                            a = e.virtual && t.virtual.enabled,
                            o = e.grid && t.grid && t.grid.rows > 1,
                            l = (e) => (0, r.e)(i, `.${t.slideClass}${e}, swiper-slide${e}`)[0];
                        let A, d, c;
                        if (
                            (n.forEach((e) => {
                                e.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass);
                            }),
                            a)
                        )
                            if (t.loop) {
                                let n = s - e.virtual.slidesBefore;
                                n < 0 && (n = e.virtual.slides.length + n),
                                    n >= e.virtual.slides.length && (n -= e.virtual.slides.length),
                                    (A = l(`[data-swiper-slide-index="${n}"]`));
                            } else A = l(`[data-swiper-slide-index="${s}"]`);
                        else
                            o
                                ? ((A = n.filter((e) => e.column === s)[0]),
                                  (c = n.filter((e) => e.column === s + 1)[0]),
                                  (d = n.filter((e) => e.column === s - 1)[0]))
                                : (A = n[s]);
                        A &&
                            (A.classList.add(t.slideActiveClass),
                            o
                                ? (c && c.classList.add(t.slideNextClass),
                                  d && d.classList.add(t.slidePrevClass))
                                : ((c = (0, r.o)(A, `.${t.slideClass}, swiper-slide`)[0]),
                                  t.loop && !c && (c = n[0]),
                                  c && c.classList.add(t.slideNextClass),
                                  (d = (0, r.p)(A, `.${t.slideClass}, swiper-slide`)[0]),
                                  t.loop && 0 === !d && (d = n[n.length - 1]),
                                  d && d.classList.add(t.slidePrevClass))),
                            e.emitSlidesClasses();
                    },
                    updateActiveIndex: function (e) {
                        const n = this,
                            t = n.rtlTranslate ? n.translate : -n.translate,
                            { snapGrid: i, params: r, activeIndex: s, realIndex: a, snapIndex: o } = n;
                        let l,
                            A = e;
                        const d = (e) => {
                            let t = e - n.virtual.slidesBefore;
                            return (
                                t < 0 && (t = n.virtual.slides.length + t),
                                t >= n.virtual.slides.length && (t -= n.virtual.slides.length),
                                t
                            );
                        };
                        if (
                            (void 0 === A &&
                                (A = (function (e) {
                                    const { slidesGrid: n, params: t } = e,
                                        i = e.rtlTranslate ? e.translate : -e.translate;
                                    let r;
                                    for (let e = 0; e < n.length; e += 1)
                                        void 0 !== n[e + 1]
                                            ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2
                                                ? (r = e)
                                                : i >= n[e] && i < n[e + 1] && (r = e + 1)
                                            : i >= n[e] && (r = e);
                                    return t.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
                                })(n)),
                            i.indexOf(t) >= 0)
                        )
                            l = i.indexOf(t);
                        else {
                            const e = Math.min(r.slidesPerGroupSkip, A);
                            l = e + Math.floor((A - e) / r.slidesPerGroup);
                        }
                        if ((l >= i.length && (l = i.length - 1), A === s && !n.params.loop))
                            return void (l !== o && ((n.snapIndex = l), n.emit('snapIndexChange')));
                        if (A === s && n.params.loop && n.virtual && n.params.virtual.enabled)
                            return void (n.realIndex = d(A));
                        const c = n.grid && r.grid && r.grid.rows > 1;
                        let p;
                        if (n.virtual && r.virtual.enabled && r.loop) p = d(A);
                        else if (c) {
                            const e = n.slides.filter((e) => e.column === A)[0];
                            let t = parseInt(e.getAttribute('data-swiper-slide-index'), 10);
                            Number.isNaN(t) && (t = Math.max(n.slides.indexOf(e), 0)),
                                (p = Math.floor(t / r.grid.rows));
                        } else if (n.slides[A]) {
                            const e = n.slides[A].getAttribute('data-swiper-slide-index');
                            p = e ? parseInt(e, 10) : A;
                        } else p = A;
                        Object.assign(n, {
                            previousSnapIndex: o,
                            snapIndex: l,
                            previousRealIndex: a,
                            realIndex: p,
                            previousIndex: s,
                            activeIndex: A
                        }),
                            n.initialized && m(n),
                            n.emit('activeIndexChange'),
                            n.emit('snapIndexChange'),
                            (n.initialized || n.params.runCallbacksOnInit) &&
                                (a !== p && n.emit('realIndexChange'), n.emit('slideChange'));
                    },
                    updateClickedSlide: function (e, n) {
                        const t = this,
                            i = t.params;
                        let r = e.closest(`.${i.slideClass}, swiper-slide`);
                        !r &&
                            t.isElement &&
                            n &&
                            n.length > 1 &&
                            n.includes(e) &&
                            [...n.slice(n.indexOf(e) + 1, n.length)].forEach((e) => {
                                !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e);
                            });
                        let s,
                            a = !1;
                        if (r)
                            for (let e = 0; e < t.slides.length; e += 1)
                                if (t.slides[e] === r) {
                                    (a = !0), (s = e);
                                    break;
                                }
                        if (!r || !a) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                        (t.clickedSlide = r),
                            t.virtual && t.params.virtual.enabled
                                ? (t.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10))
                                : (t.clickedIndex = s),
                            i.slideToClickedSlide &&
                                void 0 !== t.clickedIndex &&
                                t.clickedIndex !== t.activeIndex &&
                                t.slideToClickedSlide();
                    }
                };
                function u(e) {
                    let { swiper: n, runCallbacks: t, direction: i, step: r } = e;
                    const { activeIndex: s, previousIndex: a } = n;
                    let o = i;
                    if (
                        (o || (o = s > a ? 'next' : s < a ? 'prev' : 'reset'),
                        n.emit(`transition${r}`),
                        t && s !== a)
                    ) {
                        if ('reset' === o) return void n.emit(`slideResetTransition${r}`);
                        n.emit(`slideChangeTransition${r}`),
                            'next' === o
                                ? n.emit(`slideNextTransition${r}`)
                                : n.emit(`slidePrevTransition${r}`);
                    }
                }
                var g = {
                        slideTo: function (e, n, t, i, s) {
                            void 0 === e && (e = 0),
                                void 0 === n && (n = this.params.speed),
                                void 0 === t && (t = !0),
                                'string' == typeof e && (e = parseInt(e, 10));
                            const a = this;
                            let o = e;
                            o < 0 && (o = 0);
                            const {
                                params: l,
                                snapGrid: A,
                                slidesGrid: d,
                                previousIndex: c,
                                activeIndex: m,
                                rtlTranslate: p,
                                wrapperEl: u,
                                enabled: g
                            } = a;
                            if ((a.animating && l.preventInteractionOnTransition) || (!g && !i && !s))
                                return !1;
                            const h = Math.min(a.params.slidesPerGroupSkip, o);
                            let f = h + Math.floor((o - h) / a.params.slidesPerGroup);
                            f >= A.length && (f = A.length - 1);
                            const w = -A[f];
                            if (l.normalizeSlideIndex)
                                for (let e = 0; e < d.length; e += 1) {
                                    const n = -Math.floor(100 * w),
                                        t = Math.floor(100 * d[e]),
                                        i = Math.floor(100 * d[e + 1]);
                                    void 0 !== d[e + 1]
                                        ? n >= t && n < i - (i - t) / 2
                                            ? (o = e)
                                            : n >= t && n < i && (o = e + 1)
                                        : n >= t && (o = e);
                                }
                            if (a.initialized && o !== m) {
                                if (
                                    !a.allowSlideNext &&
                                    (p
                                        ? w > a.translate && w > a.minTranslate()
                                        : w < a.translate && w < a.minTranslate())
                                )
                                    return !1;
                                if (
                                    !a.allowSlidePrev &&
                                    w > a.translate &&
                                    w > a.maxTranslate() &&
                                    (m || 0) !== o
                                )
                                    return !1;
                            }
                            let b;
                            if (
                                (o !== (c || 0) && t && a.emit('beforeSlideChangeStart'),
                                a.updateProgress(w),
                                (b = o > m ? 'next' : o < m ? 'prev' : 'reset'),
                                (p && -w === a.translate) || (!p && w === a.translate))
                            )
                                return (
                                    a.updateActiveIndex(o),
                                    l.autoHeight && a.updateAutoHeight(),
                                    a.updateSlidesClasses(),
                                    'slide' !== l.effect && a.setTranslate(w),
                                    'reset' !== b && (a.transitionStart(t, b), a.transitionEnd(t, b)),
                                    !1
                                );
                            if (l.cssMode) {
                                const e = a.isHorizontal(),
                                    t = p ? w : -w;
                                if (0 === n) {
                                    const n = a.virtual && a.params.virtual.enabled;
                                    n &&
                                        ((a.wrapperEl.style.scrollSnapType = 'none'),
                                        (a._immediateVirtual = !0)),
                                        n && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
                                            ? ((a._cssModeVirtualInitialSet = !0),
                                              requestAnimationFrame(() => {
                                                  u[e ? 'scrollLeft' : 'scrollTop'] = t;
                                              }))
                                            : (u[e ? 'scrollLeft' : 'scrollTop'] = t),
                                        n &&
                                            requestAnimationFrame(() => {
                                                (a.wrapperEl.style.scrollSnapType = ''),
                                                    (a._immediateVirtual = !1);
                                            });
                                } else {
                                    if (!a.support.smoothScroll)
                                        return (
                                            (0, r.q)({
                                                swiper: a,
                                                targetPosition: t,
                                                side: e ? 'left' : 'top'
                                            }),
                                            !0
                                        );
                                    u.scrollTo({ [e ? 'left' : 'top']: t, behavior: 'smooth' });
                                }
                                return !0;
                            }
                            return (
                                a.setTransition(n),
                                a.setTranslate(w),
                                a.updateActiveIndex(o),
                                a.updateSlidesClasses(),
                                a.emit('beforeTransitionStart', n, i),
                                a.transitionStart(t, b),
                                0 === n
                                    ? a.transitionEnd(t, b)
                                    : a.animating ||
                                      ((a.animating = !0),
                                      a.onSlideToWrapperTransitionEnd ||
                                          (a.onSlideToWrapperTransitionEnd = function (e) {
                                              a &&
                                                  !a.destroyed &&
                                                  e.target === this &&
                                                  (a.wrapperEl.removeEventListener(
                                                      'transitionend',
                                                      a.onSlideToWrapperTransitionEnd
                                                  ),
                                                  (a.onSlideToWrapperTransitionEnd = null),
                                                  delete a.onSlideToWrapperTransitionEnd,
                                                  a.transitionEnd(t, b));
                                          }),
                                      a.wrapperEl.addEventListener(
                                          'transitionend',
                                          a.onSlideToWrapperTransitionEnd
                                      )),
                                !0
                            );
                        },
                        slideToLoop: function (e, n, t, i) {
                            void 0 === e && (e = 0),
                                void 0 === n && (n = this.params.speed),
                                void 0 === t && (t = !0),
                                'string' == typeof e && (e = parseInt(e, 10));
                            const r = this,
                                s = r.grid && r.params.grid && r.params.grid.rows > 1;
                            let a = e;
                            if (r.params.loop)
                                if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
                                else {
                                    let e;
                                    if (s) {
                                        const n = a * r.params.grid.rows;
                                        e = r.slides.filter(
                                            (e) => 1 * e.getAttribute('data-swiper-slide-index') === n
                                        )[0].column;
                                    } else e = r.getSlideIndexByData(a);
                                    const n = s
                                            ? Math.ceil(r.slides.length / r.params.grid.rows)
                                            : r.slides.length,
                                        { centeredSlides: t } = r.params;
                                    let i = r.params.slidesPerView;
                                    'auto' === i
                                        ? (i = r.slidesPerViewDynamic())
                                        : ((i = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                                          t && i % 2 == 0 && (i += 1));
                                    let o = n - e < i;
                                    if ((t && (o = o || e < Math.ceil(i / 2)), o)) {
                                        const i = t
                                            ? e < r.activeIndex
                                                ? 'prev'
                                                : 'next'
                                            : e - r.activeIndex - 1 < r.params.slidesPerView
                                              ? 'next'
                                              : 'prev';
                                        r.loopFix({
                                            direction: i,
                                            slideTo: !0,
                                            activeSlideIndex: 'next' === i ? e + 1 : e - n + 1,
                                            slideRealIndex: 'next' === i ? r.realIndex : void 0
                                        });
                                    }
                                    if (s) {
                                        const e = a * r.params.grid.rows;
                                        a = r.slides.filter(
                                            (n) => 1 * n.getAttribute('data-swiper-slide-index') === e
                                        )[0].column;
                                    } else a = r.getSlideIndexByData(a);
                                }
                            return (
                                requestAnimationFrame(() => {
                                    r.slideTo(a, n, t, i);
                                }),
                                r
                            );
                        },
                        slideNext: function (e, n, t) {
                            void 0 === e && (e = this.params.speed), void 0 === n && (n = !0);
                            const i = this,
                                { enabled: r, params: s, animating: a } = i;
                            if (!r) return i;
                            let o = s.slidesPerGroup;
                            'auto' === s.slidesPerView &&
                                1 === s.slidesPerGroup &&
                                s.slidesPerGroupAuto &&
                                (o = Math.max(i.slidesPerViewDynamic('current', !0), 1));
                            const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
                                A = i.virtual && s.virtual.enabled;
                            if (s.loop) {
                                if (a && !A && s.loopPreventsSliding) return !1;
                                if (
                                    (i.loopFix({ direction: 'next' }),
                                    (i._clientLeft = i.wrapperEl.clientLeft),
                                    i.activeIndex === i.slides.length - 1 && s.cssMode)
                                )
                                    return (
                                        requestAnimationFrame(() => {
                                            i.slideTo(i.activeIndex + l, e, n, t);
                                        }),
                                        !0
                                    );
                            }
                            return s.rewind && i.isEnd
                                ? i.slideTo(0, e, n, t)
                                : i.slideTo(i.activeIndex + l, e, n, t);
                        },
                        slidePrev: function (e, n, t) {
                            void 0 === e && (e = this.params.speed), void 0 === n && (n = !0);
                            const i = this,
                                {
                                    params: r,
                                    snapGrid: s,
                                    slidesGrid: a,
                                    rtlTranslate: o,
                                    enabled: l,
                                    animating: A
                                } = i;
                            if (!l) return i;
                            const d = i.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (A && !d && r.loopPreventsSliding) return !1;
                                i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft);
                            }
                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                            }
                            const m = c(o ? i.translate : -i.translate),
                                p = s.map((e) => c(e));
                            let u = s[p.indexOf(m) - 1];
                            if (void 0 === u && r.cssMode) {
                                let e;
                                s.forEach((n, t) => {
                                    m >= n && (e = t);
                                }),
                                    void 0 !== e && (u = s[e > 0 ? e - 1 : e]);
                            }
                            let g = 0;
                            if (
                                (void 0 !== u &&
                                    ((g = a.indexOf(u)),
                                    g < 0 && (g = i.activeIndex - 1),
                                    'auto' === r.slidesPerView &&
                                        1 === r.slidesPerGroup &&
                                        r.slidesPerGroupAuto &&
                                        ((g = g - i.slidesPerViewDynamic('previous', !0) + 1),
                                        (g = Math.max(g, 0)))),
                                r.rewind && i.isBeginning)
                            ) {
                                const r =
                                    i.params.virtual && i.params.virtual.enabled && i.virtual
                                        ? i.virtual.slides.length - 1
                                        : i.slides.length - 1;
                                return i.slideTo(r, e, n, t);
                            }
                            return r.loop && 0 === i.activeIndex && r.cssMode
                                ? (requestAnimationFrame(() => {
                                      i.slideTo(g, e, n, t);
                                  }),
                                  !0)
                                : i.slideTo(g, e, n, t);
                        },
                        slideReset: function (e, n, t) {
                            return (
                                void 0 === e && (e = this.params.speed),
                                void 0 === n && (n = !0),
                                this.slideTo(this.activeIndex, e, n, t)
                            );
                        },
                        slideToClosest: function (e, n, t, i) {
                            void 0 === e && (e = this.params.speed),
                                void 0 === n && (n = !0),
                                void 0 === i && (i = 0.5);
                            const r = this;
                            let s = r.activeIndex;
                            const a = Math.min(r.params.slidesPerGroupSkip, s),
                                o = a + Math.floor((s - a) / r.params.slidesPerGroup),
                                l = r.rtlTranslate ? r.translate : -r.translate;
                            if (l >= r.snapGrid[o]) {
                                const e = r.snapGrid[o];
                                l - e > (r.snapGrid[o + 1] - e) * i && (s += r.params.slidesPerGroup);
                            } else {
                                const e = r.snapGrid[o - 1];
                                l - e <= (r.snapGrid[o] - e) * i && (s -= r.params.slidesPerGroup);
                            }
                            return (
                                (s = Math.max(s, 0)),
                                (s = Math.min(s, r.slidesGrid.length - 1)),
                                r.slideTo(s, e, n, t)
                            );
                        },
                        slideToClickedSlide: function () {
                            const e = this,
                                { params: n, slidesEl: t } = e,
                                i = 'auto' === n.slidesPerView ? e.slidesPerViewDynamic() : n.slidesPerView;
                            let s,
                                a = e.clickedIndex;
                            const o = e.isElement ? 'swiper-slide' : `.${n.slideClass}`;
                            if (n.loop) {
                                if (e.animating) return;
                                (s = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
                                    n.centeredSlides
                                        ? a < e.loopedSlides - i / 2 ||
                                          a > e.slides.length - e.loopedSlides + i / 2
                                            ? (e.loopFix(),
                                              (a = e.getSlideIndex(
                                                  (0, r.e)(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
                                              )),
                                              (0, r.n)(() => {
                                                  e.slideTo(a);
                                              }))
                                            : e.slideTo(a)
                                        : a > e.slides.length - i
                                          ? (e.loopFix(),
                                            (a = e.getSlideIndex(
                                                (0, r.e)(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
                                            )),
                                            (0, r.n)(() => {
                                                e.slideTo(a);
                                            }))
                                          : e.slideTo(a);
                            } else e.slideTo(a);
                        }
                    },
                    h = {
                        loopCreate: function (e) {
                            const n = this,
                                { params: t, slidesEl: i } = n;
                            if (!t.loop || (n.virtual && n.params.virtual.enabled)) return;
                            const s = () => {
                                    (0, r.e)(i, `.${t.slideClass}, swiper-slide`).forEach((e, n) => {
                                        e.setAttribute('data-swiper-slide-index', n);
                                    });
                                },
                                a = n.grid && t.grid && t.grid.rows > 1,
                                o = t.slidesPerGroup * (a ? t.grid.rows : 1),
                                l = n.slides.length % o != 0,
                                A = a && n.slides.length % t.grid.rows != 0,
                                d = (e) => {
                                    for (let i = 0; i < e; i += 1) {
                                        const e = n.isElement
                                            ? (0, r.c)('swiper-slide', [t.slideBlankClass])
                                            : (0, r.c)('div', [t.slideClass, t.slideBlankClass]);
                                        n.slidesEl.append(e);
                                    }
                                };
                            l
                                ? (t.loopAddBlankSlides
                                      ? (d(o - (n.slides.length % o)), n.recalcSlides(), n.updateSlides())
                                      : (0, r.r)(
                                            'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
                                        ),
                                  s())
                                : A
                                  ? (t.loopAddBlankSlides
                                        ? (d(t.grid.rows - (n.slides.length % t.grid.rows)),
                                          n.recalcSlides(),
                                          n.updateSlides())
                                        : (0, r.r)(
                                              'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
                                          ),
                                    s())
                                  : s(),
                                n.loopFix({
                                    slideRealIndex: e,
                                    direction: t.centeredSlides ? void 0 : 'next'
                                });
                        },
                        loopFix: function (e) {
                            let {
                                slideRealIndex: n,
                                slideTo: t = !0,
                                direction: i,
                                setTranslate: s,
                                activeSlideIndex: a,
                                byController: o,
                                byMousewheel: l
                            } = void 0 === e ? {} : e;
                            const A = this;
                            if (!A.params.loop) return;
                            A.emit('beforeLoopFix');
                            const {
                                    slides: d,
                                    allowSlidePrev: c,
                                    allowSlideNext: m,
                                    slidesEl: p,
                                    params: u
                                } = A,
                                { centeredSlides: g } = u;
                            if (
                                ((A.allowSlidePrev = !0),
                                (A.allowSlideNext = !0),
                                A.virtual && u.virtual.enabled)
                            )
                                return (
                                    t &&
                                        (u.centeredSlides || 0 !== A.snapIndex
                                            ? u.centeredSlides && A.snapIndex < u.slidesPerView
                                                ? A.slideTo(A.virtual.slides.length + A.snapIndex, 0, !1, !0)
                                                : A.snapIndex === A.snapGrid.length - 1 &&
                                                  A.slideTo(A.virtual.slidesBefore, 0, !1, !0)
                                            : A.slideTo(A.virtual.slides.length, 0, !1, !0)),
                                    (A.allowSlidePrev = c),
                                    (A.allowSlideNext = m),
                                    void A.emit('loopFix')
                                );
                            let h = u.slidesPerView;
                            'auto' === h
                                ? (h = A.slidesPerViewDynamic())
                                : ((h = Math.ceil(parseFloat(u.slidesPerView, 10))),
                                  g && h % 2 == 0 && (h += 1));
                            const f = u.slidesPerGroupAuto ? h : u.slidesPerGroup;
                            let w = f;
                            w % f != 0 && (w += f - (w % f)),
                                (w += u.loopAdditionalSlides),
                                (A.loopedSlides = w);
                            const b = A.grid && u.grid && u.grid.rows > 1;
                            d.length < h + w
                                ? (0, r.r)(
                                      'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
                                  )
                                : b &&
                                  'row' === u.grid.fill &&
                                  (0, r.r)(
                                      'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
                                  );
                            const E = [],
                                v = [];
                            let _ = A.activeIndex;
                            void 0 === a
                                ? (a = A.getSlideIndex(
                                      d.filter((e) => e.classList.contains(u.slideActiveClass))[0]
                                  ))
                                : (_ = a);
                            const C = 'next' === i || !i,
                                B = 'prev' === i || !i;
                            let y = 0,
                                x = 0;
                            const k = b ? Math.ceil(d.length / u.grid.rows) : d.length,
                                S = (b ? d[a].column : a) + (g && void 0 === s ? -h / 2 + 0.5 : 0);
                            if (S < w) {
                                y = Math.max(w - S, f);
                                for (let e = 0; e < w - S; e += 1) {
                                    const n = e - Math.floor(e / k) * k;
                                    if (b) {
                                        const e = k - n - 1;
                                        for (let n = d.length - 1; n >= 0; n -= 1)
                                            d[n].column === e && E.push(n);
                                    } else E.push(k - n - 1);
                                }
                            } else if (S + h > k - w) {
                                x = Math.max(S - (k - 2 * w), f);
                                for (let e = 0; e < x; e += 1) {
                                    const n = e - Math.floor(e / k) * k;
                                    b
                                        ? d.forEach((e, t) => {
                                              e.column === n && v.push(t);
                                          })
                                        : v.push(n);
                                }
                            }
                            if (
                                ((A.__preventObserver__ = !0),
                                requestAnimationFrame(() => {
                                    A.__preventObserver__ = !1;
                                }),
                                B &&
                                    E.forEach((e) => {
                                        (d[e].swiperLoopMoveDOM = !0),
                                            p.prepend(d[e]),
                                            (d[e].swiperLoopMoveDOM = !1);
                                    }),
                                C &&
                                    v.forEach((e) => {
                                        (d[e].swiperLoopMoveDOM = !0),
                                            p.append(d[e]),
                                            (d[e].swiperLoopMoveDOM = !1);
                                    }),
                                A.recalcSlides(),
                                'auto' === u.slidesPerView
                                    ? A.updateSlides()
                                    : b &&
                                      ((E.length > 0 && B) || (v.length > 0 && C)) &&
                                      A.slides.forEach((e, n) => {
                                          A.grid.updateSlide(n, e, A.slides);
                                      }),
                                u.watchSlidesProgress && A.updateSlidesOffset(),
                                t)
                            )
                                if (E.length > 0 && B) {
                                    if (void 0 === n) {
                                        const e = A.slidesGrid[_],
                                            n = A.slidesGrid[_ + y] - e;
                                        l
                                            ? A.setTranslate(A.translate - n)
                                            : (A.slideTo(_ + y, 0, !1, !0),
                                              s &&
                                                  ((A.touchEventsData.startTranslate =
                                                      A.touchEventsData.startTranslate - n),
                                                  (A.touchEventsData.currentTranslate =
                                                      A.touchEventsData.currentTranslate - n)));
                                    } else if (s) {
                                        const e = b ? E.length / u.grid.rows : E.length;
                                        A.slideTo(A.activeIndex + e, 0, !1, !0),
                                            (A.touchEventsData.currentTranslate = A.translate);
                                    }
                                } else if (v.length > 0 && C)
                                    if (void 0 === n) {
                                        const e = A.slidesGrid[_],
                                            n = A.slidesGrid[_ - x] - e;
                                        l
                                            ? A.setTranslate(A.translate - n)
                                            : (A.slideTo(_ - x, 0, !1, !0),
                                              s &&
                                                  ((A.touchEventsData.startTranslate =
                                                      A.touchEventsData.startTranslate - n),
                                                  (A.touchEventsData.currentTranslate =
                                                      A.touchEventsData.currentTranslate - n)));
                                    } else {
                                        const e = b ? v.length / u.grid.rows : v.length;
                                        A.slideTo(A.activeIndex - e, 0, !1, !0);
                                    }
                            if (
                                ((A.allowSlidePrev = c),
                                (A.allowSlideNext = m),
                                A.controller && A.controller.control && !o)
                            ) {
                                const e = {
                                    slideRealIndex: n,
                                    direction: i,
                                    setTranslate: s,
                                    activeSlideIndex: a,
                                    byController: !0
                                };
                                Array.isArray(A.controller.control)
                                    ? A.controller.control.forEach((n) => {
                                          !n.destroyed &&
                                              n.params.loop &&
                                              n.loopFix({
                                                  ...e,
                                                  slideTo: n.params.slidesPerView === u.slidesPerView && t
                                              });
                                      })
                                    : A.controller.control instanceof A.constructor &&
                                      A.controller.control.params.loop &&
                                      A.controller.control.loopFix({
                                          ...e,
                                          slideTo:
                                              A.controller.control.params.slidesPerView === u.slidesPerView &&
                                              t
                                      });
                            }
                            A.emit('loopFix');
                        },
                        loopDestroy: function () {
                            const e = this,
                                { params: n, slidesEl: t } = e;
                            if (!n.loop || (e.virtual && e.params.virtual.enabled)) return;
                            e.recalcSlides();
                            const i = [];
                            e.slides.forEach((e) => {
                                const n =
                                    void 0 === e.swiperSlideIndex
                                        ? 1 * e.getAttribute('data-swiper-slide-index')
                                        : e.swiperSlideIndex;
                                i[n] = e;
                            }),
                                e.slides.forEach((e) => {
                                    e.removeAttribute('data-swiper-slide-index');
                                }),
                                i.forEach((e) => {
                                    t.append(e);
                                }),
                                e.recalcSlides(),
                                e.slideTo(e.realIndex, 0);
                        }
                    };
                function f(e, n, t) {
                    const r = (0, i.a)(),
                        { params: s } = e,
                        a = s.edgeSwipeDetection,
                        o = s.edgeSwipeThreshold;
                    return (
                        !a ||
                        !(t <= o || t >= r.innerWidth - o) ||
                        ('prevent' === a && (n.preventDefault(), !0))
                    );
                }
                function w(e) {
                    const n = this,
                        t = (0, i.g)();
                    let s = e;
                    s.originalEvent && (s = s.originalEvent);
                    const a = n.touchEventsData;
                    if ('pointerdown' === s.type) {
                        if (null !== a.pointerId && a.pointerId !== s.pointerId) return;
                        a.pointerId = s.pointerId;
                    } else
                        'touchstart' === s.type &&
                            1 === s.targetTouches.length &&
                            (a.touchId = s.targetTouches[0].identifier);
                    if ('touchstart' === s.type) return void f(n, s, s.targetTouches[0].pageX);
                    const { params: o, touches: l, enabled: A } = n;
                    if (!A) return;
                    if (!o.simulateTouch && 'mouse' === s.pointerType) return;
                    if (n.animating && o.preventInteractionOnTransition) return;
                    !n.animating && o.cssMode && o.loop && n.loopFix();
                    let d = s.target;
                    if ('wrapper' === o.touchEventsTarget && !n.wrapperEl.contains(d)) return;
                    if ('which' in s && 3 === s.which) return;
                    if ('button' in s && s.button > 0) return;
                    if (a.isTouched && a.isMoved) return;
                    const c = !!o.noSwipingClass && '' !== o.noSwipingClass,
                        m = s.composedPath ? s.composedPath() : s.path;
                    c && s.target && s.target.shadowRoot && m && (d = m[0]);
                    const p = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
                        u = !(!s.target || !s.target.shadowRoot);
                    if (
                        o.noSwiping &&
                        (u
                            ? (function (e, n) {
                                  return (
                                      void 0 === n && (n = this),
                                      (function n(t) {
                                          if (!t || t === (0, i.g)() || t === (0, i.a)()) return null;
                                          t.assignedSlot && (t = t.assignedSlot);
                                          const r = t.closest(e);
                                          return r || t.getRootNode ? r || n(t.getRootNode().host) : null;
                                      })(n)
                                  );
                              })(p, d)
                            : d.closest(p))
                    )
                        return void (n.allowClick = !0);
                    if (o.swipeHandler && !d.closest(o.swipeHandler)) return;
                    (l.currentX = s.pageX), (l.currentY = s.pageY);
                    const g = l.currentX,
                        h = l.currentY;
                    if (!f(n, s, g)) return;
                    Object.assign(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }),
                        (l.startX = g),
                        (l.startY = h),
                        (a.touchStartTime = (0, r.d)()),
                        (n.allowClick = !0),
                        n.updateSize(),
                        (n.swipeDirection = void 0),
                        o.threshold > 0 && (a.allowThresholdMove = !1);
                    let w = !0;
                    d.matches(a.focusableElements) &&
                        ((w = !1), 'SELECT' === d.nodeName && (a.isTouched = !1)),
                        t.activeElement &&
                            t.activeElement.matches(a.focusableElements) &&
                            t.activeElement !== d &&
                            t.activeElement.blur();
                    const b = w && n.allowTouchMove && o.touchStartPreventDefault;
                    (!o.touchStartForcePreventDefault && !b) || d.isContentEditable || s.preventDefault(),
                        o.freeMode &&
                            o.freeMode.enabled &&
                            n.freeMode &&
                            n.animating &&
                            !o.cssMode &&
                            n.freeMode.onTouchStart(),
                        n.emit('touchStart', s);
                }
                function b(e) {
                    const n = (0, i.g)(),
                        t = this,
                        s = t.touchEventsData,
                        { params: a, touches: o, rtlTranslate: l, enabled: A } = t;
                    if (!A) return;
                    if (!a.simulateTouch && 'mouse' === e.pointerType) return;
                    let d,
                        c = e;
                    if ((c.originalEvent && (c = c.originalEvent), 'pointermove' === c.type)) {
                        if (null !== s.touchId) return;
                        if (c.pointerId !== s.pointerId) return;
                    }
                    if ('touchmove' === c.type) {
                        if (
                            ((d = [...c.changedTouches].filter((e) => e.identifier === s.touchId)[0]),
                            !d || d.identifier !== s.touchId)
                        )
                            return;
                    } else d = c;
                    if (!s.isTouched)
                        return void (s.startMoving && s.isScrolling && t.emit('touchMoveOpposite', c));
                    const m = d.pageX,
                        p = d.pageY;
                    if (c.preventedByNestedSwiper) return (o.startX = m), void (o.startY = p);
                    if (!t.allowTouchMove)
                        return (
                            c.target.matches(s.focusableElements) || (t.allowClick = !1),
                            void (
                                s.isTouched &&
                                (Object.assign(o, { startX: m, startY: p, currentX: m, currentY: p }),
                                (s.touchStartTime = (0, r.d)()))
                            )
                        );
                    if (a.touchReleaseOnEdges && !a.loop)
                        if (t.isVertical()) {
                            if (
                                (p < o.startY && t.translate <= t.maxTranslate()) ||
                                (p > o.startY && t.translate >= t.minTranslate())
                            )
                                return (s.isTouched = !1), void (s.isMoved = !1);
                        } else if (
                            (m < o.startX && t.translate <= t.maxTranslate()) ||
                            (m > o.startX && t.translate >= t.minTranslate())
                        )
                            return;
                    if (
                        n.activeElement &&
                        c.target === n.activeElement &&
                        c.target.matches(s.focusableElements)
                    )
                        return (s.isMoved = !0), void (t.allowClick = !1);
                    s.allowTouchCallbacks && t.emit('touchMove', c),
                        (o.previousX = o.currentX),
                        (o.previousY = o.currentY),
                        (o.currentX = m),
                        (o.currentY = p);
                    const u = o.currentX - o.startX,
                        g = o.currentY - o.startY;
                    if (t.params.threshold && Math.sqrt(u ** 2 + g ** 2) < t.params.threshold) return;
                    if (void 0 === s.isScrolling) {
                        let e;
                        (t.isHorizontal() && o.currentY === o.startY) ||
                        (t.isVertical() && o.currentX === o.startX)
                            ? (s.isScrolling = !1)
                            : u * u + g * g >= 25 &&
                              ((e = (180 * Math.atan2(Math.abs(g), Math.abs(u))) / Math.PI),
                              (s.isScrolling = t.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle));
                    }
                    if (
                        (s.isScrolling && t.emit('touchMoveOpposite', c),
                        void 0 === s.startMoving &&
                            ((o.currentX === o.startX && o.currentY === o.startY) || (s.startMoving = !0)),
                        s.isScrolling)
                    )
                        return void (s.isTouched = !1);
                    if (!s.startMoving) return;
                    (t.allowClick = !1),
                        !a.cssMode && c.cancelable && c.preventDefault(),
                        a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
                    let h = t.isHorizontal() ? u : g,
                        f = t.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
                    a.oneWayMovement && ((h = Math.abs(h) * (l ? 1 : -1)), (f = Math.abs(f) * (l ? 1 : -1))),
                        (o.diff = h),
                        (h *= a.touchRatio),
                        l && ((h = -h), (f = -f));
                    const w = t.touchesDirection;
                    (t.swipeDirection = h > 0 ? 'prev' : 'next'),
                        (t.touchesDirection = f > 0 ? 'prev' : 'next');
                    const b = t.params.loop && !a.cssMode,
                        E =
                            ('next' === t.touchesDirection && t.allowSlideNext) ||
                            ('prev' === t.touchesDirection && t.allowSlidePrev);
                    if (!s.isMoved) {
                        if (
                            (b && E && t.loopFix({ direction: t.swipeDirection }),
                            (s.startTranslate = t.getTranslate()),
                            t.setTransition(0),
                            t.animating)
                        ) {
                            const e = new window.CustomEvent('transitionend', {
                                bubbles: !0,
                                cancelable: !0
                            });
                            t.wrapperEl.dispatchEvent(e);
                        }
                        (s.allowMomentumBounce = !1),
                            !a.grabCursor ||
                                (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
                                t.setGrabCursor(!0),
                            t.emit('sliderFirstMove', c);
                    }
                    if (
                        (new Date().getTime(),
                        s.isMoved &&
                            s.allowThresholdMove &&
                            w !== t.touchesDirection &&
                            b &&
                            E &&
                            Math.abs(h) >= 1)
                    )
                        return (
                            Object.assign(o, {
                                startX: m,
                                startY: p,
                                currentX: m,
                                currentY: p,
                                startTranslate: s.currentTranslate
                            }),
                            (s.loopSwapReset = !0),
                            void (s.startTranslate = s.currentTranslate)
                        );
                    t.emit('sliderMove', c), (s.isMoved = !0), (s.currentTranslate = h + s.startTranslate);
                    let v = !0,
                        _ = a.resistanceRatio;
                    if (
                        (a.touchReleaseOnEdges && (_ = 0),
                        h > 0
                            ? (b &&
                                  E &&
                                  s.allowThresholdMove &&
                                  s.currentTranslate >
                                      (a.centeredSlides
                                          ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1]
                                          : t.minTranslate()) &&
                                  t.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
                              s.currentTranslate > t.minTranslate() &&
                                  ((v = !1),
                                  a.resistance &&
                                      (s.currentTranslate =
                                          t.minTranslate() -
                                          1 +
                                          (-t.minTranslate() + s.startTranslate + h) ** _)))
                            : h < 0 &&
                              (b &&
                                  E &&
                                  s.allowThresholdMove &&
                                  s.currentTranslate <
                                      (a.centeredSlides
                                          ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1]
                                          : t.maxTranslate()) &&
                                  t.loopFix({
                                      direction: 'next',
                                      setTranslate: !0,
                                      activeSlideIndex:
                                          t.slides.length -
                                          ('auto' === a.slidesPerView
                                              ? t.slidesPerViewDynamic()
                                              : Math.ceil(parseFloat(a.slidesPerView, 10)))
                                  }),
                              s.currentTranslate < t.maxTranslate() &&
                                  ((v = !1),
                                  a.resistance &&
                                      (s.currentTranslate =
                                          t.maxTranslate() +
                                          1 -
                                          (t.maxTranslate() - s.startTranslate - h) ** _))),
                        v && (c.preventedByNestedSwiper = !0),
                        !t.allowSlideNext &&
                            'next' === t.swipeDirection &&
                            s.currentTranslate < s.startTranslate &&
                            (s.currentTranslate = s.startTranslate),
                        !t.allowSlidePrev &&
                            'prev' === t.swipeDirection &&
                            s.currentTranslate > s.startTranslate &&
                            (s.currentTranslate = s.startTranslate),
                        t.allowSlidePrev || t.allowSlideNext || (s.currentTranslate = s.startTranslate),
                        a.threshold > 0)
                    ) {
                        if (!(Math.abs(h) > a.threshold || s.allowThresholdMove))
                            return void (s.currentTranslate = s.startTranslate);
                        if (!s.allowThresholdMove)
                            return (
                                (s.allowThresholdMove = !0),
                                (o.startX = o.currentX),
                                (o.startY = o.currentY),
                                (s.currentTranslate = s.startTranslate),
                                void (o.diff = t.isHorizontal()
                                    ? o.currentX - o.startX
                                    : o.currentY - o.startY)
                            );
                    }
                    a.followFinger &&
                        !a.cssMode &&
                        (((a.freeMode && a.freeMode.enabled && t.freeMode) || a.watchSlidesProgress) &&
                            (t.updateActiveIndex(), t.updateSlidesClasses()),
                        a.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
                        t.updateProgress(s.currentTranslate),
                        t.setTranslate(s.currentTranslate));
                }
                function E(e) {
                    const n = this,
                        t = n.touchEventsData;
                    let i,
                        s = e;
                    if (
                        (s.originalEvent && (s = s.originalEvent),
                        'touchend' === s.type || 'touchcancel' === s.type)
                    ) {
                        if (
                            ((i = [...s.changedTouches].filter((e) => e.identifier === t.touchId)[0]),
                            !i || i.identifier !== t.touchId)
                        )
                            return;
                    } else {
                        if (null !== t.touchId) return;
                        if (s.pointerId !== t.pointerId) return;
                        i = s;
                    }
                    if (
                        ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(s.type) &&
                        (!['pointercancel', 'contextmenu'].includes(s.type) ||
                            (!n.browser.isSafari && !n.browser.isWebView))
                    )
                        return;
                    (t.pointerId = null), (t.touchId = null);
                    const { params: a, touches: o, rtlTranslate: l, slidesGrid: A, enabled: d } = n;
                    if (!d) return;
                    if (!a.simulateTouch && 'mouse' === s.pointerType) return;
                    if (
                        (t.allowTouchCallbacks && n.emit('touchEnd', s),
                        (t.allowTouchCallbacks = !1),
                        !t.isTouched)
                    )
                        return (
                            t.isMoved && a.grabCursor && n.setGrabCursor(!1),
                            (t.isMoved = !1),
                            void (t.startMoving = !1)
                        );
                    a.grabCursor &&
                        t.isMoved &&
                        t.isTouched &&
                        (!0 === n.allowSlideNext || !0 === n.allowSlidePrev) &&
                        n.setGrabCursor(!1);
                    const c = (0, r.d)(),
                        m = c - t.touchStartTime;
                    if (n.allowClick) {
                        const e = s.path || (s.composedPath && s.composedPath());
                        n.updateClickedSlide((e && e[0]) || s.target, e),
                            n.emit('tap click', s),
                            m < 300 && c - t.lastClickTime < 300 && n.emit('doubleTap doubleClick', s);
                    }
                    if (
                        ((t.lastClickTime = (0, r.d)()),
                        (0, r.n)(() => {
                            n.destroyed || (n.allowClick = !0);
                        }),
                        !t.isTouched ||
                            !t.isMoved ||
                            !n.swipeDirection ||
                            (0 === o.diff && !t.loopSwapReset) ||
                            (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
                    )
                        return (t.isTouched = !1), (t.isMoved = !1), void (t.startMoving = !1);
                    let p;
                    if (
                        ((t.isTouched = !1),
                        (t.isMoved = !1),
                        (t.startMoving = !1),
                        (p = a.followFinger ? (l ? n.translate : -n.translate) : -t.currentTranslate),
                        a.cssMode)
                    )
                        return;
                    if (a.freeMode && a.freeMode.enabled)
                        return void n.freeMode.onTouchEnd({ currentPos: p });
                    let u = 0,
                        g = n.slidesSizesGrid[0];
                    for (let e = 0; e < A.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                        const n = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                        void 0 !== A[e + n]
                            ? p >= A[e] && p < A[e + n] && ((u = e), (g = A[e + n] - A[e]))
                            : p >= A[e] && ((u = e), (g = A[A.length - 1] - A[A.length - 2]));
                    }
                    let h = null,
                        f = null;
                    a.rewind &&
                        (n.isBeginning
                            ? (f =
                                  a.virtual && a.virtual.enabled && n.virtual
                                      ? n.virtual.slides.length - 1
                                      : n.slides.length - 1)
                            : n.isEnd && (h = 0));
                    const w = (p - A[u]) / g,
                        b = u < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                    if (m > a.longSwipesMs) {
                        if (!a.longSwipes) return void n.slideTo(n.activeIndex);
                        'next' === n.swipeDirection &&
                            (w >= a.longSwipesRatio
                                ? n.slideTo(a.rewind && n.isEnd ? h : u + b)
                                : n.slideTo(u)),
                            'prev' === n.swipeDirection &&
                                (w > 1 - a.longSwipesRatio
                                    ? n.slideTo(u + b)
                                    : null !== f && w < 0 && Math.abs(w) > a.longSwipesRatio
                                      ? n.slideTo(f)
                                      : n.slideTo(u));
                    } else {
                        if (!a.shortSwipes) return void n.slideTo(n.activeIndex);
                        !n.navigation ||
                        (s.target !== n.navigation.nextEl && s.target !== n.navigation.prevEl)
                            ? ('next' === n.swipeDirection && n.slideTo(null !== h ? h : u + b),
                              'prev' === n.swipeDirection && n.slideTo(null !== f ? f : u))
                            : s.target === n.navigation.nextEl
                              ? n.slideTo(u + b)
                              : n.slideTo(u);
                    }
                }
                function v() {
                    const e = this,
                        { params: n, el: t } = e;
                    if (t && 0 === t.offsetWidth) return;
                    n.breakpoints && e.setBreakpoint();
                    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e,
                        a = e.virtual && e.params.virtual.enabled;
                    (e.allowSlideNext = !0),
                        (e.allowSlidePrev = !0),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateSlidesClasses();
                    const o = a && n.loop;
                    !('auto' === n.slidesPerView || n.slidesPerView > 1) ||
                    !e.isEnd ||
                    e.isBeginning ||
                    e.params.centeredSlides ||
                    o
                        ? e.params.loop && !a
                            ? e.slideToLoop(e.realIndex, 0, !1, !0)
                            : e.slideTo(e.activeIndex, 0, !1, !0)
                        : e.slideTo(e.slides.length - 1, 0, !1, !0),
                        e.autoplay &&
                            e.autoplay.running &&
                            e.autoplay.paused &&
                            (clearTimeout(e.autoplay.resizeTimeout),
                            (e.autoplay.resizeTimeout = setTimeout(() => {
                                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
                            }, 500))),
                        (e.allowSlidePrev = r),
                        (e.allowSlideNext = i),
                        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
                }
                function _(e) {
                    const n = this;
                    n.enabled &&
                        (n.allowClick ||
                            (n.params.preventClicks && e.preventDefault(),
                            n.params.preventClicksPropagation &&
                                n.animating &&
                                (e.stopPropagation(), e.stopImmediatePropagation())));
                }
                function C() {
                    const e = this,
                        { wrapperEl: n, rtlTranslate: t, enabled: i } = e;
                    if (!i) return;
                    let r;
                    (e.previousTranslate = e.translate),
                        e.isHorizontal() ? (e.translate = -n.scrollLeft) : (e.translate = -n.scrollTop),
                        0 === e.translate && (e.translate = 0),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    const s = e.maxTranslate() - e.minTranslate();
                    (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
                        r !== e.progress && e.updateProgress(t ? -e.translate : e.translate),
                        e.emit('setTranslate', e.translate, !1);
                }
                function B(e) {
                    const n = this;
                    d(n, e.target),
                        n.params.cssMode ||
                            ('auto' !== n.params.slidesPerView && !n.params.autoHeight) ||
                            n.update();
                }
                function y() {
                    const e = this;
                    e.documentTouchHandlerProceeded ||
                        ((e.documentTouchHandlerProceeded = !0),
                        e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'));
                }
                const x = (e, n) => {
                        const t = (0, i.g)(),
                            { params: r, el: s, wrapperEl: a, device: o } = e,
                            l = !!r.nested,
                            A = 'on' === n ? 'addEventListener' : 'removeEventListener',
                            d = n;
                        t[A]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: l }),
                            s[A]('touchstart', e.onTouchStart, { passive: !1 }),
                            s[A]('pointerdown', e.onTouchStart, { passive: !1 }),
                            t[A]('touchmove', e.onTouchMove, { passive: !1, capture: l }),
                            t[A]('pointermove', e.onTouchMove, { passive: !1, capture: l }),
                            t[A]('touchend', e.onTouchEnd, { passive: !0 }),
                            t[A]('pointerup', e.onTouchEnd, { passive: !0 }),
                            t[A]('pointercancel', e.onTouchEnd, { passive: !0 }),
                            t[A]('touchcancel', e.onTouchEnd, { passive: !0 }),
                            t[A]('pointerout', e.onTouchEnd, { passive: !0 }),
                            t[A]('pointerleave', e.onTouchEnd, { passive: !0 }),
                            t[A]('contextmenu', e.onTouchEnd, { passive: !0 }),
                            (r.preventClicks || r.preventClicksPropagation) && s[A]('click', e.onClick, !0),
                            r.cssMode && a[A]('scroll', e.onScroll),
                            r.updateOnWindowResize
                                ? e[d](
                                      o.ios || o.android
                                          ? 'resize orientationchange observerUpdate'
                                          : 'resize observerUpdate',
                                      v,
                                      !0
                                  )
                                : e[d]('observerUpdate', v, !0),
                            s[A]('load', e.onLoad, { capture: !0 });
                    },
                    k = (e, n) => e.grid && n.grid && n.grid.rows > 1;
                var S = {
                    init: !0,
                    direction: 'horizontal',
                    oneWayMovement: !1,
                    touchEventsTarget: 'wrapper',
                    initialSlide: 0,
                    speed: 300,
                    cssMode: !1,
                    updateOnWindowResize: !0,
                    resizeObserver: !0,
                    nested: !1,
                    createElements: !1,
                    eventsPrefix: 'swiper',
                    enabled: !0,
                    focusableElements: 'input, select, option, textarea, button, video, label',
                    width: null,
                    height: null,
                    preventInteractionOnTransition: !1,
                    userAgent: null,
                    url: null,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: 'slide',
                    breakpoints: void 0,
                    breakpointsBase: 'window',
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slidesPerGroupSkip: 0,
                    slidesPerGroupAuto: !1,
                    centeredSlides: !1,
                    centeredSlidesBounds: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 5,
                    touchMoveStopPropagation: !1,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: 0.85,
                    watchSlidesProgress: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    loop: !1,
                    loopAddBlankSlides: !0,
                    loopAdditionalSlides: 0,
                    loopPreventsSliding: !0,
                    rewind: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: 'swiper-no-swiping',
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    maxBackfaceHiddenSlides: 10,
                    containerModifierClass: 'swiper-',
                    slideClass: 'swiper-slide',
                    slideBlankClass: 'swiper-slide-blank',
                    slideActiveClass: 'swiper-slide-active',
                    slideVisibleClass: 'swiper-slide-visible',
                    slideFullyVisibleClass: 'swiper-slide-fully-visible',
                    slideNextClass: 'swiper-slide-next',
                    slidePrevClass: 'swiper-slide-prev',
                    wrapperClass: 'swiper-wrapper',
                    lazyPreloaderClass: 'swiper-lazy-preloader',
                    lazyPreloadPrevNext: 0,
                    runCallbacksOnInit: !0,
                    _emitClasses: !1
                };
                function M(e, n) {
                    return function (t) {
                        void 0 === t && (t = {});
                        const i = Object.keys(t)[0],
                            s = t[i];
                        'object' == typeof s && null !== s
                            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                              'navigation' === i &&
                                  e[i] &&
                                  e[i].enabled &&
                                  !e[i].prevEl &&
                                  !e[i].nextEl &&
                                  (e[i].auto = !0),
                              ['pagination', 'scrollbar'].indexOf(i) >= 0 &&
                                  e[i] &&
                                  e[i].enabled &&
                                  !e[i].el &&
                                  (e[i].auto = !0),
                              i in e && 'enabled' in s
                                  ? ('object' != typeof e[i] || 'enabled' in e[i] || (e[i].enabled = !0),
                                    e[i] || (e[i] = { enabled: !1 }),
                                    (0, r.t)(n, t))
                                  : (0, r.t)(n, t))
                            : (0, r.t)(n, t);
                    };
                }
                const z = {
                        eventsEmitter: A,
                        update: p,
                        translate: {
                            getTranslate: function (e) {
                                void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
                                const { params: n, rtlTranslate: t, translate: i, wrapperEl: s } = this;
                                if (n.virtualTranslate) return t ? -i : i;
                                if (n.cssMode) return i;
                                let a = (0, r.i)(s, e);
                                return (a += this.cssOverflowAdjustment()), t && (a = -a), a || 0;
                            },
                            setTranslate: function (e, n) {
                                const t = this,
                                    { rtlTranslate: i, params: r, wrapperEl: s, progress: a } = t;
                                let o,
                                    l = 0,
                                    A = 0;
                                t.isHorizontal() ? (l = i ? -e : e) : (A = e),
                                    r.roundLengths && ((l = Math.floor(l)), (A = Math.floor(A))),
                                    (t.previousTranslate = t.translate),
                                    (t.translate = t.isHorizontal() ? l : A),
                                    r.cssMode
                                        ? (s[t.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = t.isHorizontal()
                                              ? -l
                                              : -A)
                                        : r.virtualTranslate ||
                                          (t.isHorizontal()
                                              ? (l -= t.cssOverflowAdjustment())
                                              : (A -= t.cssOverflowAdjustment()),
                                          (s.style.transform = `translate3d(${l}px, ${A}px, 0px)`));
                                const d = t.maxTranslate() - t.minTranslate();
                                (o = 0 === d ? 0 : (e - t.minTranslate()) / d),
                                    o !== a && t.updateProgress(e),
                                    t.emit('setTranslate', t.translate, n);
                            },
                            minTranslate: function () {
                                return -this.snapGrid[0];
                            },
                            maxTranslate: function () {
                                return -this.snapGrid[this.snapGrid.length - 1];
                            },
                            translateTo: function (e, n, t, i, s) {
                                void 0 === e && (e = 0),
                                    void 0 === n && (n = this.params.speed),
                                    void 0 === t && (t = !0),
                                    void 0 === i && (i = !0);
                                const a = this,
                                    { params: o, wrapperEl: l } = a;
                                if (a.animating && o.preventInteractionOnTransition) return !1;
                                const A = a.minTranslate(),
                                    d = a.maxTranslate();
                                let c;
                                if (
                                    ((c = i && e > A ? A : i && e < d ? d : e),
                                    a.updateProgress(c),
                                    o.cssMode)
                                ) {
                                    const e = a.isHorizontal();
                                    if (0 === n) l[e ? 'scrollLeft' : 'scrollTop'] = -c;
                                    else {
                                        if (!a.support.smoothScroll)
                                            return (
                                                (0, r.q)({
                                                    swiper: a,
                                                    targetPosition: -c,
                                                    side: e ? 'left' : 'top'
                                                }),
                                                !0
                                            );
                                        l.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' });
                                    }
                                    return !0;
                                }
                                return (
                                    0 === n
                                        ? (a.setTransition(0),
                                          a.setTranslate(c),
                                          t &&
                                              (a.emit('beforeTransitionStart', n, s),
                                              a.emit('transitionEnd')))
                                        : (a.setTransition(n),
                                          a.setTranslate(c),
                                          t &&
                                              (a.emit('beforeTransitionStart', n, s),
                                              a.emit('transitionStart')),
                                          a.animating ||
                                              ((a.animating = !0),
                                              a.onTranslateToWrapperTransitionEnd ||
                                                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                                                      a &&
                                                          !a.destroyed &&
                                                          e.target === this &&
                                                          (a.wrapperEl.removeEventListener(
                                                              'transitionend',
                                                              a.onTranslateToWrapperTransitionEnd
                                                          ),
                                                          (a.onTranslateToWrapperTransitionEnd = null),
                                                          delete a.onTranslateToWrapperTransitionEnd,
                                                          t && a.emit('transitionEnd'));
                                                  }),
                                              a.wrapperEl.addEventListener(
                                                  'transitionend',
                                                  a.onTranslateToWrapperTransitionEnd
                                              ))),
                                    !0
                                );
                            }
                        },
                        transition: {
                            setTransition: function (e, n) {
                                const t = this;
                                t.params.cssMode ||
                                    ((t.wrapperEl.style.transitionDuration = `${e}ms`),
                                    (t.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')),
                                    t.emit('setTransition', e, n);
                            },
                            transitionStart: function (e, n) {
                                void 0 === e && (e = !0);
                                const t = this,
                                    { params: i } = t;
                                i.cssMode ||
                                    (i.autoHeight && t.updateAutoHeight(),
                                    u({ swiper: t, runCallbacks: e, direction: n, step: 'Start' }));
                            },
                            transitionEnd: function (e, n) {
                                void 0 === e && (e = !0);
                                const t = this,
                                    { params: i } = t;
                                (t.animating = !1),
                                    i.cssMode ||
                                        (t.setTransition(0),
                                        u({ swiper: t, runCallbacks: e, direction: n, step: 'End' }));
                            }
                        },
                        slide: g,
                        loop: h,
                        grabCursor: {
                            setGrabCursor: function (e) {
                                const n = this;
                                if (
                                    !n.params.simulateTouch ||
                                    (n.params.watchOverflow && n.isLocked) ||
                                    n.params.cssMode
                                )
                                    return;
                                const t = 'container' === n.params.touchEventsTarget ? n.el : n.wrapperEl;
                                n.isElement && (n.__preventObserver__ = !0),
                                    (t.style.cursor = 'move'),
                                    (t.style.cursor = e ? 'grabbing' : 'grab'),
                                    n.isElement &&
                                        requestAnimationFrame(() => {
                                            n.__preventObserver__ = !1;
                                        });
                            },
                            unsetGrabCursor: function () {
                                const e = this;
                                (e.params.watchOverflow && e.isLocked) ||
                                    e.params.cssMode ||
                                    (e.isElement && (e.__preventObserver__ = !0),
                                    (e[
                                        'container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'
                                    ].style.cursor = ''),
                                    e.isElement &&
                                        requestAnimationFrame(() => {
                                            e.__preventObserver__ = !1;
                                        }));
                            }
                        },
                        events: {
                            attachEvents: function () {
                                const e = this,
                                    { params: n } = e;
                                (e.onTouchStart = w.bind(e)),
                                    (e.onTouchMove = b.bind(e)),
                                    (e.onTouchEnd = E.bind(e)),
                                    (e.onDocumentTouchStart = y.bind(e)),
                                    n.cssMode && (e.onScroll = C.bind(e)),
                                    (e.onClick = _.bind(e)),
                                    (e.onLoad = B.bind(e)),
                                    x(e, 'on');
                            },
                            detachEvents: function () {
                                x(this, 'off');
                            }
                        },
                        breakpoints: {
                            setBreakpoint: function () {
                                const e = this,
                                    { realIndex: n, initialized: t, params: i, el: s } = e,
                                    a = i.breakpoints;
                                if (!a || (a && 0 === Object.keys(a).length)) return;
                                const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                                if (!o || e.currentBreakpoint === o) return;
                                const l = (o in a ? a[o] : void 0) || e.originalParams,
                                    A = k(e, i),
                                    d = k(e, l),
                                    c = i.enabled;
                                A && !d
                                    ? (s.classList.remove(
                                          `${i.containerModifierClass}grid`,
                                          `${i.containerModifierClass}grid-column`
                                      ),
                                      e.emitContainerClasses())
                                    : !A &&
                                      d &&
                                      (s.classList.add(`${i.containerModifierClass}grid`),
                                      ((l.grid.fill && 'column' === l.grid.fill) ||
                                          (!l.grid.fill && 'column' === i.grid.fill)) &&
                                          s.classList.add(`${i.containerModifierClass}grid-column`),
                                      e.emitContainerClasses()),
                                    ['navigation', 'pagination', 'scrollbar'].forEach((n) => {
                                        if (void 0 === l[n]) return;
                                        const t = i[n] && i[n].enabled,
                                            r = l[n] && l[n].enabled;
                                        t && !r && e[n].disable(), !t && r && e[n].enable();
                                    });
                                const m = l.direction && l.direction !== i.direction,
                                    p = i.loop && (l.slidesPerView !== i.slidesPerView || m),
                                    u = i.loop;
                                m && t && e.changeDirection(), (0, r.t)(e.params, l);
                                const g = e.params.enabled,
                                    h = e.params.loop;
                                Object.assign(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }),
                                    c && !g ? e.disable() : !c && g && e.enable(),
                                    (e.currentBreakpoint = o),
                                    e.emit('_beforeBreakpoint', l),
                                    t &&
                                        (p
                                            ? (e.loopDestroy(), e.loopCreate(n), e.updateSlides())
                                            : !u && h
                                              ? (e.loopCreate(n), e.updateSlides())
                                              : u && !h && e.loopDestroy()),
                                    e.emit('breakpoint', l);
                            },
                            getBreakpoint: function (e, n, t) {
                                if ((void 0 === n && (n = 'window'), !e || ('container' === n && !t))) return;
                                let r = !1;
                                const s = (0, i.a)(),
                                    a = 'window' === n ? s.innerHeight : t.clientHeight,
                                    o = Object.keys(e).map((e) => {
                                        if ('string' == typeof e && 0 === e.indexOf('@')) {
                                            const n = parseFloat(e.substr(1));
                                            return { value: a * n, point: e };
                                        }
                                        return { value: e, point: e };
                                    });
                                o.sort((e, n) => parseInt(e.value, 10) - parseInt(n.value, 10));
                                for (let e = 0; e < o.length; e += 1) {
                                    const { point: i, value: a } = o[e];
                                    'window' === n
                                        ? s.matchMedia(`(min-width: ${a}px)`).matches && (r = i)
                                        : a <= t.clientWidth && (r = i);
                                }
                                return r || 'max';
                            }
                        },
                        checkOverflow: {
                            checkOverflow: function () {
                                const e = this,
                                    { isLocked: n, params: t } = e,
                                    { slidesOffsetBefore: i } = t;
                                if (i) {
                                    const n = e.slides.length - 1,
                                        t = e.slidesGrid[n] + e.slidesSizesGrid[n] + 2 * i;
                                    e.isLocked = e.size > t;
                                } else e.isLocked = 1 === e.snapGrid.length;
                                !0 === t.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                                    !0 === t.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                                    n && n !== e.isLocked && (e.isEnd = !1),
                                    n !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
                            }
                        },
                        classes: {
                            addClasses: function () {
                                const e = this,
                                    { classNames: n, params: t, rtl: i, el: r, device: s } = e,
                                    a = (function (e, n) {
                                        const t = [];
                                        return (
                                            e.forEach((e) => {
                                                'object' == typeof e
                                                    ? Object.keys(e).forEach((i) => {
                                                          e[i] && t.push(n + i);
                                                      })
                                                    : 'string' == typeof e && t.push(n + e);
                                            }),
                                            t
                                        );
                                    })(
                                        [
                                            'initialized',
                                            t.direction,
                                            { 'free-mode': e.params.freeMode && t.freeMode.enabled },
                                            { autoheight: t.autoHeight },
                                            { rtl: i },
                                            { grid: t.grid && t.grid.rows > 1 },
                                            {
                                                'grid-column':
                                                    t.grid && t.grid.rows > 1 && 'column' === t.grid.fill
                                            },
                                            { android: s.android },
                                            { ios: s.ios },
                                            { 'css-mode': t.cssMode },
                                            { centered: t.cssMode && t.centeredSlides },
                                            { 'watch-progress': t.watchSlidesProgress }
                                        ],
                                        t.containerModifierClass
                                    );
                                n.push(...a), r.classList.add(...n), e.emitContainerClasses();
                            },
                            removeClasses: function () {
                                const { el: e, classNames: n } = this;
                                e.classList.remove(...n), this.emitContainerClasses();
                            }
                        }
                    },
                    T = {};
                class I {
                    constructor() {
                        let e, n;
                        for (var t = arguments.length, s = new Array(t), A = 0; A < t; A++)
                            s[A] = arguments[A];
                        1 === s.length &&
                        s[0].constructor &&
                        'Object' === Object.prototype.toString.call(s[0]).slice(8, -1)
                            ? (n = s[0])
                            : ([e, n] = s),
                            n || (n = {}),
                            (n = (0, r.t)({}, n)),
                            e && !n.el && (n.el = e);
                        const d = (0, i.g)();
                        if (n.el && 'string' == typeof n.el && d.querySelectorAll(n.el).length > 1) {
                            const e = [];
                            return (
                                d.querySelectorAll(n.el).forEach((t) => {
                                    const i = (0, r.t)({}, n, { el: t });
                                    e.push(new I(i));
                                }),
                                e
                            );
                        }
                        const c = this;
                        var m;
                        (c.__swiper__ = !0),
                            (c.support = l()),
                            (c.device =
                                (void 0 === (m = { userAgent: n.userAgent }) && (m = {}),
                                a ||
                                    (a = (function (e) {
                                        let { userAgent: n } = void 0 === e ? {} : e;
                                        const t = l(),
                                            r = (0, i.a)(),
                                            s = r.navigator.platform,
                                            a = n || r.navigator.userAgent,
                                            o = { ios: !1, android: !1 },
                                            A = r.screen.width,
                                            d = r.screen.height,
                                            c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                                        let m = a.match(/(iPad).*OS\s([\d_]+)/);
                                        const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                                            u = !m && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                            g = 'Win32' === s;
                                        let h = 'MacIntel' === s;
                                        return (
                                            !m &&
                                                h &&
                                                t.touch &&
                                                [
                                                    '1024x1366',
                                                    '1366x1024',
                                                    '834x1194',
                                                    '1194x834',
                                                    '834x1112',
                                                    '1112x834',
                                                    '768x1024',
                                                    '1024x768',
                                                    '820x1180',
                                                    '1180x820',
                                                    '810x1080',
                                                    '1080x810'
                                                ].indexOf(`${A}x${d}`) >= 0 &&
                                                ((m = a.match(/(Version)\/([\d.]+)/)),
                                                m || (m = [0, 1, '13_0_0']),
                                                (h = !1)),
                                            c && !g && ((o.os = 'android'), (o.android = !0)),
                                            (m || u || p) && ((o.os = 'ios'), (o.ios = !0)),
                                            o
                                        );
                                    })(m)),
                                a)),
                            (c.browser =
                                (o ||
                                    (o = (function () {
                                        const e = (0, i.a)();
                                        let n = !1;
                                        function t() {
                                            const n = e.navigator.userAgent.toLowerCase();
                                            return (
                                                n.indexOf('safari') >= 0 &&
                                                n.indexOf('chrome') < 0 &&
                                                n.indexOf('android') < 0
                                            );
                                        }
                                        if (t()) {
                                            const t = String(e.navigator.userAgent);
                                            if (t.includes('Version/')) {
                                                const [e, i] = t
                                                    .split('Version/')[1]
                                                    .split(' ')[0]
                                                    .split('.')
                                                    .map((e) => Number(e));
                                                n = e < 16 || (16 === e && i < 2);
                                            }
                                        }
                                        return {
                                            isSafari: n || t(),
                                            needPerspectiveFix: n,
                                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                                                e.navigator.userAgent
                                            )
                                        };
                                    })()),
                                o)),
                            (c.eventsListeners = {}),
                            (c.eventsAnyListeners = []),
                            (c.modules = [...c.__modules__]),
                            n.modules && Array.isArray(n.modules) && c.modules.push(...n.modules);
                        const p = {};
                        c.modules.forEach((e) => {
                            e({
                                params: n,
                                swiper: c,
                                extendParams: M(n, p),
                                on: c.on.bind(c),
                                once: c.once.bind(c),
                                off: c.off.bind(c),
                                emit: c.emit.bind(c)
                            });
                        });
                        const u = (0, r.t)({}, S, p);
                        return (
                            (c.params = (0, r.t)({}, u, T, n)),
                            (c.originalParams = (0, r.t)({}, c.params)),
                            (c.passedParams = (0, r.t)({}, n)),
                            c.params &&
                                c.params.on &&
                                Object.keys(c.params.on).forEach((e) => {
                                    c.on(e, c.params.on[e]);
                                }),
                            c.params && c.params.onAny && c.onAny(c.params.onAny),
                            Object.assign(c, {
                                enabled: c.params.enabled,
                                el: e,
                                classNames: [],
                                slides: [],
                                slidesGrid: [],
                                snapGrid: [],
                                slidesSizesGrid: [],
                                isHorizontal: () => 'horizontal' === c.params.direction,
                                isVertical: () => 'vertical' === c.params.direction,
                                activeIndex: 0,
                                realIndex: 0,
                                isBeginning: !0,
                                isEnd: !1,
                                translate: 0,
                                previousTranslate: 0,
                                progress: 0,
                                velocity: 0,
                                animating: !1,
                                cssOverflowAdjustment() {
                                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                                },
                                allowSlideNext: c.params.allowSlideNext,
                                allowSlidePrev: c.params.allowSlidePrev,
                                touchEventsData: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    allowTouchCallbacks: void 0,
                                    touchStartTime: void 0,
                                    isScrolling: void 0,
                                    currentTranslate: void 0,
                                    startTranslate: void 0,
                                    allowThresholdMove: void 0,
                                    focusableElements: c.params.focusableElements,
                                    lastClickTime: 0,
                                    clickTimeout: void 0,
                                    velocities: [],
                                    allowMomentumBounce: void 0,
                                    startMoving: void 0,
                                    pointerId: null,
                                    touchId: null
                                },
                                allowClick: !0,
                                allowTouchMove: c.params.allowTouchMove,
                                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                                imagesToLoad: [],
                                imagesLoaded: 0
                            }),
                            c.emit('_swiper'),
                            c.params.init && c.init(),
                            c
                        );
                    }
                    getDirectionLabel(e) {
                        return this.isHorizontal()
                            ? e
                            : {
                                  width: 'height',
                                  'margin-top': 'margin-left',
                                  'margin-bottom ': 'margin-right',
                                  'margin-left': 'margin-top',
                                  'margin-right': 'margin-bottom',
                                  'padding-left': 'padding-top',
                                  'padding-right': 'padding-bottom',
                                  marginRight: 'marginBottom'
                              }[e];
                    }
                    getSlideIndex(e) {
                        const { slidesEl: n, params: t } = this,
                            i = (0, r.e)(n, `.${t.slideClass}, swiper-slide`),
                            s = (0, r.g)(i[0]);
                        return (0, r.g)(e) - s;
                    }
                    getSlideIndexByData(e) {
                        return this.getSlideIndex(
                            this.slides.filter((n) => 1 * n.getAttribute('data-swiper-slide-index') === e)[0]
                        );
                    }
                    recalcSlides() {
                        const { slidesEl: e, params: n } = this;
                        this.slides = (0, r.e)(e, `.${n.slideClass}, swiper-slide`);
                    }
                    enable() {
                        const e = this;
                        e.enabled ||
                            ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
                    }
                    disable() {
                        const e = this;
                        e.enabled &&
                            ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
                    }
                    setProgress(e, n) {
                        const t = this;
                        e = Math.min(Math.max(e, 0), 1);
                        const i = t.minTranslate(),
                            r = (t.maxTranslate() - i) * e + i;
                        t.translateTo(r, void 0 === n ? 0 : n),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    }
                    emitContainerClasses() {
                        const e = this;
                        if (!e.params._emitClasses || !e.el) return;
                        const n = e.el.className
                            .split(' ')
                            .filter(
                                (n) =>
                                    0 === n.indexOf('swiper') ||
                                    0 === n.indexOf(e.params.containerModifierClass)
                            );
                        e.emit('_containerClasses', n.join(' '));
                    }
                    getSlideClasses(e) {
                        const n = this;
                        return n.destroyed
                            ? ''
                            : e.className
                                  .split(' ')
                                  .filter(
                                      (e) =>
                                          0 === e.indexOf('swiper-slide') ||
                                          0 === e.indexOf(n.params.slideClass)
                                  )
                                  .join(' ');
                    }
                    emitSlidesClasses() {
                        const e = this;
                        if (!e.params._emitClasses || !e.el) return;
                        const n = [];
                        e.slides.forEach((t) => {
                            const i = e.getSlideClasses(t);
                            n.push({ slideEl: t, classNames: i }), e.emit('_slideClass', t, i);
                        }),
                            e.emit('_slideClasses', n);
                    }
                    slidesPerViewDynamic(e, n) {
                        void 0 === e && (e = 'current'), void 0 === n && (n = !1);
                        const {
                            params: t,
                            slides: i,
                            slidesGrid: r,
                            slidesSizesGrid: s,
                            size: a,
                            activeIndex: o
                        } = this;
                        let l = 1;
                        if ('number' == typeof t.slidesPerView) return t.slidesPerView;
                        if (t.centeredSlides) {
                            let e,
                                n = i[o] ? i[o].swiperSlideSize : 0;
                            for (let t = o + 1; t < i.length; t += 1)
                                i[t] && !e && ((n += i[t].swiperSlideSize), (l += 1), n > a && (e = !0));
                            for (let t = o - 1; t >= 0; t -= 1)
                                i[t] && !e && ((n += i[t].swiperSlideSize), (l += 1), n > a && (e = !0));
                        } else if ('current' === e)
                            for (let e = o + 1; e < i.length; e += 1)
                                (n ? r[e] + s[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
                        else for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < a && (l += 1);
                        return l;
                    }
                    update() {
                        const e = this;
                        if (!e || e.destroyed) return;
                        const { snapGrid: n, params: t } = e;
                        function i() {
                            const n = e.rtlTranslate ? -1 * e.translate : e.translate,
                                t = Math.min(Math.max(n, e.maxTranslate()), e.minTranslate());
                            e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses();
                        }
                        let r;
                        if (
                            (t.breakpoints && e.setBreakpoint(),
                            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((n) => {
                                n.complete && d(e, n);
                            }),
                            e.updateSize(),
                            e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            t.freeMode && t.freeMode.enabled && !t.cssMode)
                        )
                            i(), t.autoHeight && e.updateAutoHeight();
                        else {
                            if (
                                ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
                                e.isEnd &&
                                !t.centeredSlides
                            ) {
                                const n = e.virtual && t.virtual.enabled ? e.virtual.slides : e.slides;
                                r = e.slideTo(n.length - 1, 0, !1, !0);
                            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
                            r || i();
                        }
                        t.watchOverflow && n !== e.snapGrid && e.checkOverflow(), e.emit('update');
                    }
                    changeDirection(e, n) {
                        void 0 === n && (n = !0);
                        const t = this,
                            i = t.params.direction;
                        return (
                            e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
                            e === i ||
                                ('horizontal' !== e && 'vertical' !== e) ||
                                (t.el.classList.remove(`${t.params.containerModifierClass}${i}`),
                                t.el.classList.add(`${t.params.containerModifierClass}${e}`),
                                t.emitContainerClasses(),
                                (t.params.direction = e),
                                t.slides.forEach((n) => {
                                    'vertical' === e ? (n.style.width = '') : (n.style.height = '');
                                }),
                                t.emit('changeDirection'),
                                n && t.update()),
                            t
                        );
                    }
                    changeLanguageDirection(e) {
                        const n = this;
                        (n.rtl && 'rtl' === e) ||
                            (!n.rtl && 'ltr' === e) ||
                            ((n.rtl = 'rtl' === e),
                            (n.rtlTranslate = 'horizontal' === n.params.direction && n.rtl),
                            n.rtl
                                ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
                                  (n.el.dir = 'rtl'))
                                : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
                                  (n.el.dir = 'ltr')),
                            n.update());
                    }
                    mount(e) {
                        const n = this;
                        if (n.mounted) return !0;
                        let t = e || n.params.el;
                        if (('string' == typeof t && (t = document.querySelector(t)), !t)) return !1;
                        (t.swiper = n),
                            t.parentNode &&
                                t.parentNode.host &&
                                'SWIPER-CONTAINER' === t.parentNode.host.nodeName &&
                                (n.isElement = !0);
                        const i = () => `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`;
                        let s =
                            t && t.shadowRoot && t.shadowRoot.querySelector
                                ? t.shadowRoot.querySelector(i())
                                : (0, r.e)(t, i())[0];
                        return (
                            !s &&
                                n.params.createElements &&
                                ((s = (0, r.c)('div', n.params.wrapperClass)),
                                t.append(s),
                                (0, r.e)(t, `.${n.params.slideClass}`).forEach((e) => {
                                    s.append(e);
                                })),
                            Object.assign(n, {
                                el: t,
                                wrapperEl: s,
                                slidesEl:
                                    n.isElement && !t.parentNode.host.slideSlots ? t.parentNode.host : s,
                                hostEl: n.isElement ? t.parentNode.host : t,
                                mounted: !0,
                                rtl: 'rtl' === t.dir.toLowerCase() || 'rtl' === (0, r.m)(t, 'direction'),
                                rtlTranslate:
                                    'horizontal' === n.params.direction &&
                                    ('rtl' === t.dir.toLowerCase() || 'rtl' === (0, r.m)(t, 'direction')),
                                wrongRTL: '-webkit-box' === (0, r.m)(s, 'display')
                            }),
                            !0
                        );
                    }
                    init(e) {
                        const n = this;
                        if (n.initialized) return n;
                        if (!1 === n.mount(e)) return n;
                        n.emit('beforeInit'),
                            n.params.breakpoints && n.setBreakpoint(),
                            n.addClasses(),
                            n.updateSize(),
                            n.updateSlides(),
                            n.params.watchOverflow && n.checkOverflow(),
                            n.params.grabCursor && n.enabled && n.setGrabCursor(),
                            n.params.loop && n.virtual && n.params.virtual.enabled
                                ? n.slideTo(
                                      n.params.initialSlide + n.virtual.slidesBefore,
                                      0,
                                      n.params.runCallbacksOnInit,
                                      !1,
                                      !0
                                  )
                                : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
                            n.params.loop && n.loopCreate(),
                            n.attachEvents();
                        const t = [...n.el.querySelectorAll('[loading="lazy"]')];
                        return (
                            n.isElement && t.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
                            t.forEach((e) => {
                                e.complete
                                    ? d(n, e)
                                    : e.addEventListener('load', (e) => {
                                          d(n, e.target);
                                      });
                            }),
                            m(n),
                            (n.initialized = !0),
                            m(n),
                            n.emit('init'),
                            n.emit('afterInit'),
                            n
                        );
                    }
                    destroy(e, n) {
                        void 0 === e && (e = !0), void 0 === n && (n = !0);
                        const t = this,
                            { params: i, el: s, wrapperEl: a, slides: o } = t;
                        return (
                            void 0 === t.params ||
                                t.destroyed ||
                                (t.emit('beforeDestroy'),
                                (t.initialized = !1),
                                t.detachEvents(),
                                i.loop && t.loopDestroy(),
                                n &&
                                    (t.removeClasses(),
                                    s.removeAttribute('style'),
                                    a.removeAttribute('style'),
                                    o &&
                                        o.length &&
                                        o.forEach((e) => {
                                            e.classList.remove(
                                                i.slideVisibleClass,
                                                i.slideFullyVisibleClass,
                                                i.slideActiveClass,
                                                i.slideNextClass,
                                                i.slidePrevClass
                                            ),
                                                e.removeAttribute('style'),
                                                e.removeAttribute('data-swiper-slide-index');
                                        })),
                                t.emit('destroy'),
                                Object.keys(t.eventsListeners).forEach((e) => {
                                    t.off(e);
                                }),
                                !1 !== e && ((t.el.swiper = null), (0, r.u)(t)),
                                (t.destroyed = !0)),
                            null
                        );
                    }
                    static extendDefaults(e) {
                        (0, r.t)(T, e);
                    }
                    static get extendedDefaults() {
                        return T;
                    }
                    static get defaults() {
                        return S;
                    }
                    static installModule(e) {
                        I.prototype.__modules__ || (I.prototype.__modules__ = []);
                        const n = I.prototype.__modules__;
                        'function' == typeof e && n.indexOf(e) < 0 && n.push(e);
                    }
                    static use(e) {
                        return Array.isArray(e)
                            ? (e.forEach((e) => I.installModule(e)), I)
                            : (I.installModule(e), I);
                    }
                }
                Object.keys(z).forEach((e) => {
                    Object.keys(z[e]).forEach((n) => {
                        I.prototype[n] = z[e][n];
                    });
                }),
                    I.use([
                        function (e) {
                            let { swiper: n, on: t, emit: r } = e;
                            const s = (0, i.a)();
                            let a = null,
                                o = null;
                            const l = () => {
                                    n && !n.destroyed && n.initialized && (r('beforeResize'), r('resize'));
                                },
                                A = () => {
                                    n && !n.destroyed && n.initialized && r('orientationchange');
                                };
                            t('init', () => {
                                n.params.resizeObserver && void 0 !== s.ResizeObserver
                                    ? n &&
                                      !n.destroyed &&
                                      n.initialized &&
                                      ((a = new ResizeObserver((e) => {
                                          o = s.requestAnimationFrame(() => {
                                              const { width: t, height: i } = n;
                                              let r = t,
                                                  s = i;
                                              e.forEach((e) => {
                                                  let { contentBoxSize: t, contentRect: i, target: a } = e;
                                                  (a && a !== n.el) ||
                                                      ((r = i ? i.width : (t[0] || t).inlineSize),
                                                      (s = i ? i.height : (t[0] || t).blockSize));
                                              }),
                                                  (r === t && s === i) || l();
                                          });
                                      })),
                                      a.observe(n.el))
                                    : (s.addEventListener('resize', l),
                                      s.addEventListener('orientationchange', A));
                            }),
                                t('destroy', () => {
                                    o && s.cancelAnimationFrame(o),
                                        a && a.unobserve && n.el && (a.unobserve(n.el), (a = null)),
                                        s.removeEventListener('resize', l),
                                        s.removeEventListener('orientationchange', A);
                                });
                        },
                        function (e) {
                            let { swiper: n, extendParams: t, on: s, emit: a } = e;
                            const o = [],
                                l = (0, i.a)(),
                                A = function (e, t) {
                                    void 0 === t && (t = {});
                                    const i = new (l.MutationObserver || l.WebkitMutationObserver)((e) => {
                                        if (n.__preventObserver__) return;
                                        if (1 === e.length) return void a('observerUpdate', e[0]);
                                        const t = function () {
                                            a('observerUpdate', e[0]);
                                        };
                                        l.requestAnimationFrame
                                            ? l.requestAnimationFrame(t)
                                            : l.setTimeout(t, 0);
                                    });
                                    i.observe(e, {
                                        attributes: void 0 === t.attributes || t.attributes,
                                        childList: void 0 === t.childList || t.childList,
                                        characterData: void 0 === t.characterData || t.characterData
                                    }),
                                        o.push(i);
                                };
                            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                                s('init', () => {
                                    if (n.params.observer) {
                                        if (n.params.observeParents) {
                                            const e = (0, r.a)(n.hostEl);
                                            for (let n = 0; n < e.length; n += 1) A(e[n]);
                                        }
                                        A(n.hostEl, { childList: n.params.observeSlideChildren }),
                                            A(n.wrapperEl, { attributes: !1 });
                                    }
                                }),
                                s('destroy', () => {
                                    o.forEach((e) => {
                                        e.disconnect();
                                    }),
                                        o.splice(0, o.length);
                                });
                        }
                    ]);
            },
            './node_modules/swiper/shared/utils.mjs': (e, n, t) => {
                'use strict';
                t.r(n),
                    t.d(n, {
                        a: () => _,
                        b: () => f,
                        c: () => h,
                        d: () => o,
                        e: () => u,
                        f: () => B,
                        g: () => v,
                        h: () => r,
                        i: () => l,
                        j: () => C,
                        k: () => A,
                        l: () => p,
                        m: () => E,
                        n: () => a,
                        o: () => b,
                        p: () => w,
                        q: () => m,
                        r: () => g,
                        s: () => c,
                        t: () => d,
                        u: () => s
                    });
                var i = t('./node_modules/swiper/shared/ssr-window.esm.mjs');
                function r(e) {
                    return (
                        void 0 === e && (e = ''),
                        e
                            .trim()
                            .split(' ')
                            .filter((e) => !!e.trim())
                    );
                }
                function s(e) {
                    const n = e;
                    Object.keys(n).forEach((e) => {
                        try {
                            n[e] = null;
                        } catch (e) {}
                        try {
                            delete n[e];
                        } catch (e) {}
                    });
                }
                function a(e, n) {
                    return void 0 === n && (n = 0), setTimeout(e, n);
                }
                function o() {
                    return Date.now();
                }
                function l(e, n) {
                    void 0 === n && (n = 'x');
                    const t = (0, i.a)();
                    let r, s, a;
                    const o = (function (e) {
                        const n = (0, i.a)();
                        let t;
                        return (
                            n.getComputedStyle && (t = n.getComputedStyle(e, null)),
                            !t && e.currentStyle && (t = e.currentStyle),
                            t || (t = e.style),
                            t
                        );
                    })(e);
                    return (
                        t.WebKitCSSMatrix
                            ? ((s = o.transform || o.webkitTransform),
                              s.split(',').length > 6 &&
                                  (s = s
                                      .split(', ')
                                      .map((e) => e.replace(',', '.'))
                                      .join(', ')),
                              (a = new t.WebKitCSSMatrix('none' === s ? '' : s)))
                            : ((a =
                                  o.MozTransform ||
                                  o.OTransform ||
                                  o.MsTransform ||
                                  o.msTransform ||
                                  o.transform ||
                                  o
                                      .getPropertyValue('transform')
                                      .replace('translate(', 'matrix(1, 0, 0, 1,')),
                              (r = a.toString().split(','))),
                        'x' === n &&
                            (s = t.WebKitCSSMatrix
                                ? a.m41
                                : 16 === r.length
                                  ? parseFloat(r[12])
                                  : parseFloat(r[4])),
                        'y' === n &&
                            (s = t.WebKitCSSMatrix
                                ? a.m42
                                : 16 === r.length
                                  ? parseFloat(r[13])
                                  : parseFloat(r[5])),
                        s || 0
                    );
                }
                function A(e) {
                    return (
                        'object' == typeof e &&
                        null !== e &&
                        e.constructor &&
                        'Object' === Object.prototype.toString.call(e).slice(8, -1)
                    );
                }
                function d() {
                    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                        n = ['__proto__', 'constructor', 'prototype'];
                    for (let i = 1; i < arguments.length; i += 1) {
                        const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                        if (
                            null != r &&
                            ((t = r),
                            !('undefined' != typeof window && void 0 !== window.HTMLElement
                                ? t instanceof HTMLElement
                                : t && (1 === t.nodeType || 11 === t.nodeType)))
                        ) {
                            const t = Object.keys(Object(r)).filter((e) => n.indexOf(e) < 0);
                            for (let n = 0, i = t.length; n < i; n += 1) {
                                const i = t[n],
                                    s = Object.getOwnPropertyDescriptor(r, i);
                                void 0 !== s &&
                                    s.enumerable &&
                                    (A(e[i]) && A(r[i])
                                        ? r[i].__swiper__
                                            ? (e[i] = r[i])
                                            : d(e[i], r[i])
                                        : !A(e[i]) && A(r[i])
                                          ? ((e[i] = {}), r[i].__swiper__ ? (e[i] = r[i]) : d(e[i], r[i]))
                                          : (e[i] = r[i]));
                            }
                        }
                    }
                    var t;
                    return e;
                }
                function c(e, n, t) {
                    e.style.setProperty(n, t);
                }
                function m(e) {
                    let { swiper: n, targetPosition: t, side: r } = e;
                    const s = (0, i.a)(),
                        a = -n.translate;
                    let o,
                        l = null;
                    const A = n.params.speed;
                    (n.wrapperEl.style.scrollSnapType = 'none'), s.cancelAnimationFrame(n.cssModeFrameID);
                    const d = t > a ? 'next' : 'prev',
                        c = (e, n) => ('next' === d && e >= n) || ('prev' === d && e <= n),
                        m = () => {
                            (o = new Date().getTime()), null === l && (l = o);
                            const e = Math.max(Math.min((o - l) / A, 1), 0),
                                i = 0.5 - Math.cos(e * Math.PI) / 2;
                            let d = a + i * (t - a);
                            if ((c(d, t) && (d = t), n.wrapperEl.scrollTo({ [r]: d }), c(d, t)))
                                return (
                                    (n.wrapperEl.style.overflow = 'hidden'),
                                    (n.wrapperEl.style.scrollSnapType = ''),
                                    setTimeout(() => {
                                        (n.wrapperEl.style.overflow = ''), n.wrapperEl.scrollTo({ [r]: d });
                                    }),
                                    void s.cancelAnimationFrame(n.cssModeFrameID)
                                );
                            n.cssModeFrameID = s.requestAnimationFrame(m);
                        };
                    m();
                }
                function p(e) {
                    return (
                        e.querySelector('.swiper-slide-transform') ||
                        (e.shadowRoot && e.shadowRoot.querySelector('.swiper-slide-transform')) ||
                        e
                    );
                }
                function u(e, n) {
                    return void 0 === n && (n = ''), [...e.children].filter((e) => e.matches(n));
                }
                function g(e) {
                    try {
                        return void console.warn(e);
                    } catch (e) {}
                }
                function h(e, n) {
                    void 0 === n && (n = []);
                    const t = document.createElement(e);
                    return t.classList.add(...(Array.isArray(n) ? n : r(n))), t;
                }
                function f(e) {
                    const n = (0, i.a)(),
                        t = (0, i.g)(),
                        r = e.getBoundingClientRect(),
                        s = t.body,
                        a = e.clientTop || s.clientTop || 0,
                        o = e.clientLeft || s.clientLeft || 0,
                        l = e === n ? n.scrollY : e.scrollTop,
                        A = e === n ? n.scrollX : e.scrollLeft;
                    return { top: r.top + l - a, left: r.left + A - o };
                }
                function w(e, n) {
                    const t = [];
                    for (; e.previousElementSibling; ) {
                        const i = e.previousElementSibling;
                        n ? i.matches(n) && t.push(i) : t.push(i), (e = i);
                    }
                    return t;
                }
                function b(e, n) {
                    const t = [];
                    for (; e.nextElementSibling; ) {
                        const i = e.nextElementSibling;
                        n ? i.matches(n) && t.push(i) : t.push(i), (e = i);
                    }
                    return t;
                }
                function E(e, n) {
                    return (0, i.a)().getComputedStyle(e, null).getPropertyValue(n);
                }
                function v(e) {
                    let n,
                        t = e;
                    if (t) {
                        for (n = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (n += 1);
                        return n;
                    }
                }
                function _(e, n) {
                    const t = [];
                    let i = e.parentElement;
                    for (; i; ) n ? i.matches(n) && t.push(i) : t.push(i), (i = i.parentElement);
                    return t;
                }
                function C(e, n) {
                    n &&
                        e.addEventListener('transitionend', function t(i) {
                            i.target === e && (n.call(e, i), e.removeEventListener('transitionend', t));
                        });
                }
                function B(e, n, t) {
                    const r = (0, i.a)();
                    return t
                        ? e['width' === n ? 'offsetWidth' : 'offsetHeight'] +
                              parseFloat(
                                  r
                                      .getComputedStyle(e, null)
                                      .getPropertyValue('width' === n ? 'margin-right' : 'margin-top')
                              ) +
                              parseFloat(
                                  r
                                      .getComputedStyle(e, null)
                                      .getPropertyValue('width' === n ? 'margin-left' : 'margin-bottom')
                              )
                        : e.offsetWidth;
                }
            },
            './node_modules/swiper/swiper.mjs': (e, n, t) => {
                'use strict';
                t.r(n), t.d(n, { Swiper: () => i.S, default: () => i.S });
                var i = t('./node_modules/swiper/shared/swiper-core.mjs');
            }
        },
        n = {};
    function t(i) {
        var r = n[i];
        if (void 0 !== r) return r.exports;
        var s = (n[i] = { id: i, exports: {} });
        return e[i](s, s.exports, t), s.exports;
    }
    (t.m = e),
        (t.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return t.d(n, { a: n }), n;
        }),
        (t.d = (e, n) => {
            for (var i in n)
                t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: n[i] });
        }),
        (t.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (t.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (() => {
            var e;
            t.g.importScripts && (e = t.g.location + '');
            var n = t.g.document;
            if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
                var i = n.getElementsByTagName('script');
                if (i.length) for (var r = i.length - 1; r > -1 && !e; ) e = i[r--].src;
            }
            if (!e) throw new Error('Automatic publicPath is not supported in this browser');
            (e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (t.p = e);
        })(),
        (t.b = document.baseURI || self.location.href),
        (t.nc = void 0);
    var i = {};
    (() => {
        'use strict';
        t.r(i),
            t('./src/js/components/swipers.js'),
            t('./src/js/components/content.js'),
            t('./src/js/pages/contacts.js'),
            t('./src/index.scss');
    })();
})();
//# sourceMappingURL=main6935eda271c594f696a6.js.map
