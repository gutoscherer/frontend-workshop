import Favicon from "./assets/favicon.ico";
import { Facade } from "./services/Facade";
import { PostModel } from "./models/Post.model";
import { UserModel } from "./models/User.model";
import { UserList } from "./components/UserList.component";
import { PostList } from "./components/PostList.component";

(function setFavicon() {
  const favicon: HTMLLinkElement = document.createElement("link");

  favicon.type = "image/x-icon";
  favicon.rel = "shortcut icon";
  favicon.href = Favicon;

  document.getElementsByTagName("head")[0].appendChild(favicon);
})();

(function show() {
  const facade = new Facade();

  facade.getAllUsers().then(users => {
    document.body.appendChild(new UserList(users).render());
  });

  facade.getAllPosts().then(posts => {
    document.body.appendChild(new PostList(posts).render());
  });

  // document.body.appendChild(new UserList(users).render());
})();
