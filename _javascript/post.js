import { basic, initSidebar, initTopbar } from './modules/layouts';
import {
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  toc
} from './modules/plugins';

function autoAddAltToImages() {
  document.querySelectorAll('img:not([alt])').forEach(img => {
    img.setAttribute('alt', 'figure');
  });
}

initSidebar();
initTopbar();
loadImg();
imgPopup();
initLocaleDatetime();
initClipboard();
toc();
basic();
autoAddAltToImages();