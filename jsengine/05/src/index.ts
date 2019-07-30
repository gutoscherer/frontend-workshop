import Favicon from "./assets/favicon.ico";
import { Facade } from "./services/Facade";
import { UserList } from "./components/UserList.component";
import { PostList } from "./components/PostList.component";
import { User } from "./components/User.component";
import DomAdapter from "./adapter/Dom.adapter";

(function setFavicon() {
  const favicon: HTMLLinkElement = document.createElement("link");

  favicon.type = "image/x-icon";
  favicon.rel = "shortcut icon";
  favicon.href = Favicon;

  document.getElementsByTagName("head")[0].appendChild(favicon);
})();

(async function show() {
  const facade = new Facade();

  const user = new User(DomAdapter.getInstance(), "user1");
  document.body.appendChild(user.render({ user: null }));

  const users = await facade.getAllUsers();

  document.body.appendChild(new UserList(users).render());

  facade.getAllPosts().then(posts => {
    document.body.appendChild(new PostList(posts).render());
  });
})();
