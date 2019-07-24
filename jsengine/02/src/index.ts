import Favicon from "./assets/favicon.ico";
import { Facade } from "./services/Facade";

(function setFavicon() {
  const favicon: HTMLLinkElement = document.createElement("link");

  favicon.type = "image/x-icon";
  favicon.rel = "shortcut icon";
  favicon.href = Favicon;

  document.getElementsByTagName("head")[0].appendChild(favicon);
})();

(function show() {
  const facade = new Facade();
  console.log(facade.getAllUsers());
  console.log(facade.getAllPosts());
})();
