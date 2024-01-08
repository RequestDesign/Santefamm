import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
    Thumbs: {
        showOnStart: false
    },
    Images: {
        zoom: false
    },
    Carousel: {
        Navigation: false,
        transition: 'fade'
    },
    Toolbar: {
        display: {
            left: [''],
            middle: [''],
            right: ['close']
        }
    },
    Html: {
        videoTpl: `<video class="fancybox__html5video" muted  controls controlsList="nodownload" poster="{{poster}}">
  <source  src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
        videoAutoplay: false
    }
});
