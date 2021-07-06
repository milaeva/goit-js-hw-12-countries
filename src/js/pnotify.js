import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const { error } = require('@pnotify/core');

const pnotify = text => {
  const options = {
    text,
    styling: 'brighttheme',
    icons: 'brighttheme',
    animation: 'fade',
    animateSpeed: 'slow',
    delay: 3000,
    width: '350px',
    sticker: false,
    maxTextHeight: null,
  };
  error(options);
};

export default pnotify;