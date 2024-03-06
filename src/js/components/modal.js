import $ from 'jquery';
function bindModal(trigger, modal, close, callback = () => null) {
    if (!document.querySelector('.modal')) return;

    (modal = document.querySelector(modal)), (close = document.querySelector(close));

    const body = document.body;
    const modalBody = modal.querySelector('.modal');

    if (!$(trigger) || !modal || !close || !modalBody) return;

    $(trigger).each(function () {
        $(this).on('click', (e) => {
            e.preventDefault();
            modal.classList.add('--active');
            modalBody.classList.add('--active');
            body.classList.add('locked');
        });
    });
    $(close).on('click', () => {
        modalBody.classList.remove('--active');
        modal.classList.remove('--active');
        body.classList.remove('locked');
    });
    $(modal).on('click', (e) => {
        if (e.target === modal) {
            modalBody.classList.remove('--active');
            modal.classList.remove('--active');
            body.classList.remove('locked');
        }
    });

    callback();
}

bindModal('.request-button', '#request-modal', '#request-modal .modal__close');
bindModal('.appointment-button', '#service-appointment-modal', '#service-appointment-modal .modal__close');
bindModal('.comment-button', '#comment-modal', '#comment-modal .modal__close');

const reviewButtons = document.querySelectorAll('.card-review__link');
reviewButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const modal = $('#comment-modal');
        const modalBody = modal.find('.modal');

        const review = $(event.target).closest('.card-review');
        const reviewText = review.find('.card-review__txt').text();

        const titleText = review.find('.card-review__title').text();
        const dateText = review.find('.card-review__date').text();
        const authorName = review.find('.card-review__name').text();

        const serviceImageSource = review.find('.card-review__site img').attr('src');
        modal.find('.comment__service-logo img').attr('src', serviceImageSource);

        const title = modalBody.find('.comment__text');
        const description = modalBody.find('.comment__description');
        const authorNameText = modalBody.find('.comment__author');
        const date = modalBody.find('.comment__date');

        modal.addClass('--active');
        modalBody.addClass('--active');

        document.body.classList.add('locked');

        title.html(titleText);
        description.html(reviewText);
        authorNameText.html(authorName);
        date.html(dateText);
    });

    $('.modal').each(function (_, modal) {
        const form = $(modal).find('form');

        $(form)
            .find('input')
            .on('change', function () {
                const isChecked = $(this).is(':checked');

                $(form).find('button[type="submit"]').prop('disabled', !isChecked);
            });
    });
});
