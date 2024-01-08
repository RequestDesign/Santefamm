import IMask from 'imask';

// --------------------------------------------------------------------------

const phoneInputs = document.querySelectorAll('[data-phone-mask]');
if (phoneInputs.length) {
    phoneInputs.forEach((phoneInput) => {
        const options = {
            mask: '+{7} (000) 000 00-00'
        };
        const mask = new IMask(phoneInput, options);
    });
}
