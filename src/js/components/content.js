import $ from 'jquery';

if (document.querySelectorAll('[data-content-open]')) {
    function initContent(parent) {
        const btnsOpen = document.querySelectorAll(
            parent ? `${parent} [data-content-open]` : '[data-content-open]'
        );
        const contents = document.querySelectorAll(
            parent ? `${parent} [data-content-block]` : '[data-content-block]'
        );

        btnsOpen.forEach((btnOpen) => {
            btnOpen.addEventListener('click', function () {
                btnsOpen.forEach((btn) => btn.classList.remove('--active'));
                this.classList.add('--active');

                const attr = this.getAttribute('data-content-open');

                contents.forEach((content) => content.classList.remove('--active'));

                contents.forEach((cont) => {
                    if (cont.getAttribute('data-content-block') === attr) {
                        cont.classList.add('--active');
                    }
                });
            });
        });
    }

    if (document.querySelector('.palomar') && document.querySelector('.equipment')) {
        initContent('.palomar');
        initContent('.equipment');
    } else {
        if (!document.querySelector('.services__item')) {
            initContent();
        }
    }
}

$('.services__item').each(function (index) {
    $(this).on('click', function () {
        $('.services__list-item').each(function () {
            $(this).removeClass('--active');
        });

        $('.services__item').each(function () {
            $(this).removeClass('--active');
        });

        $('.services__list-item').eq(index).addClass('--active');
        $(this).addClass('--active');
    });
});

$('.services__list-item').each(function () {
    const btnsOpen = this.querySelectorAll('[data-content-open]');
    const contents = this.querySelectorAll('[data-content-block]');

    btnsOpen.forEach((btnOpen) => {
        btnOpen.addEventListener('click', function () {
            btnsOpen.forEach((btn) => btn.classList.remove('--active'));
            this.classList.add('--active');

            const attr = this.getAttribute('data-content-open');

            contents.forEach((content) => content.classList.remove('--active'));

            contents.forEach((cont) => {
                if (cont.getAttribute('data-content-block') === attr) {
                    cont.classList.add('--active');
                }
            });
        });
    });
});
