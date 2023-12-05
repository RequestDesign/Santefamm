if (document.querySelectorAll('[data-content-open]')) {
    const btnsOpen = document.querySelectorAll('[data-content-open]');
    const contents = document.querySelectorAll('[data-content-block]');

    btnsOpen.forEach((btnOpen) => {
        btnOpen.addEventListener('click', function () {
            btnsOpen.forEach((btn) => btn.classList.remove('active'));
            this.classList.add('active');

            const attr = this.getAttribute('data-content-open');

            contents.forEach((content) => content.classList.remove('active'));

            contents.forEach((cont) => {
                if (cont.getAttribute('data-content-block') === attr) {
                    cont.classList.add('active');
                }
            });
        });
    });
}

if (document.querySelector('.js-toggles')) {
    const btns = document.querySelector('.js-toggles').querySelectorAll('button');

    btns.forEach((btn) => {
        btn.addEventListener('click', function () {
            btns.forEach((bt) => bt.classList.remove('active'));
            this.classList.add('active');
        });
    });
}
