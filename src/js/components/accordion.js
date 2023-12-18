function accordion(trigger, selector) {
    const items = document.querySelectorAll('.accordion__heading');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;

            if (!parent) return;

            if (parent.classList.contains('--active')) {
                parent.classList.remove('--active');
            } else {
                // document
                //     .querySelectorAll('.accordion__item')
                //     .forEach((children) => children.classList.remove('--active'));
                parent.classList.add('--active');
            }
        });
    });
}

if (document.querySelector('.prices')) {
    accordion();
}
if (document.querySelector('.service-description__info-accordion')) {
    accordion();
}
