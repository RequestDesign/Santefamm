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

    if (document.querySelector('.palomar')) {
        initContent('.palomar');
    }

    if (document.querySelector('.equipment')) {
        initContent('.equipment');
    }
}
