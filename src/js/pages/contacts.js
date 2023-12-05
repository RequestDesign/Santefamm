// Метка для карты контактов
const PLACEMARK_CONTACT = {
    lalitude: 55.803929,
    longitude: 37.582251
};

function removeContent(mainMap) {
    mainMap.controls.remove('geolocationControl');
    mainMap.controls.remove('searchControl');
    mainMap.controls.remove('trafficControl');
    mainMap.controls.remove('typeSelector');
    mainMap.controls.remove('rulesControl');
}

// Код для карты контактов
function initContactsMap() {
    const contactsMap = new ymaps.Map('map', {
        center: [PLACEMARK_CONTACT.lalitude, PLACEMARK_CONTACT.longitude],
        zoom: 12
    });

    const contactsPlacemark = new ymaps.Placemark(
        [PLACEMARK_CONTACT.lalitude, PLACEMARK_CONTACT.longitude],
        {},
        {
            hideIconOnBalloonOpen: false,
            iconLayout: 'default#image',
            iconImageHref: './assets/images/placemark.svg',
            icon_imagesize: [54, 54]
        }
    );

    contactsMap.geoObjects.add(contactsPlacemark);

    removeContent(contactsMap);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('map')) {
        ymaps.ready(initContactsMap);
    }
});
