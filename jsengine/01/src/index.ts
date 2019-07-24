import Favicon from './assets/favicon.ico';

(function setFavicon() {
  const favicon : HTMLLinkElement = document.createElement("link");

  favicon.type = "image/x-icon";
  favicon.rel = "shortcut icon";
  favicon.href = Favicon;

  document.getElementsByTagName('head')[0].appendChild(favicon);
})();