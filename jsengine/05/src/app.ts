import icon from "./assets/favicon.ico";
import { AppFacade } from "./services/app.facade";
import { User } from "./model/user.model";
import { Post } from "./model/post.model";
import DomAdapter from "./components/dom.adapter";
import RootComponent from "./components/root/root.component";
import PostsComponent from "./components/posts/posts.component";
import UsersComponent from "./components/users/users.component";

function setFavIcon() {
  const link: HTMLLinkElement =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = icon;
  document.getElementsByTagName("head")[0].appendChild(link);
}

// function UsersComponent(users: User[]): HTMLDivElement {
//   const wrapper: HTMLDivElement = document.createElement("div");
//   const title: HTMLElement = document.createElement("h1");
//   title.innerHTML = "Dados de usuários";
//   wrapper.appendChild(title);

//   const usersData: HTMLDivElement = document.createElement("div");

//   users.forEach(user => {
//     const el: HTMLParagraphElement = document.createElement("p");
//     el.innerHTML = `Nome: ${user.name} | Email: ${
//       user.email
//     } | Number of posts: ${user.posts.length}`;
//     usersData.appendChild(el);
//   });

//   wrapper.appendChild(usersData);

//   return wrapper;
// }

// function PostsComponent(data: Post[]): HTMLDivElement {
//   const wrapper: HTMLDivElement = document.createElement("div");
//   const title: HTMLElement = document.createElement("h1");
//   title.innerHTML = "Dados de Posts";
//   wrapper.appendChild(title);

//   const dataWrapper: HTMLDivElement = document.createElement("div");

//   data.forEach(item => {
//     const el: HTMLParagraphElement = document.createElement("p");
//     el.innerHTML = `Titulo: ${item.title} | Conteudo: ${item.body} | Autor: ${
//       item.user.name
//     }`;
//     dataWrapper.appendChild(el);
//   });

//   wrapper.appendChild(dataWrapper);

//   return wrapper;
// }

function bootstrap() {
  const domAdapter = new DomAdapter();
  const appFacade = new AppFacade();
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

  Promise.all([appFacade.getUsers(), appFacade.getPosts()]).then(data => {
    const usersData = data[0];
    const postsData = data[1];
    const rootComponent = new RootComponent(domAdapter, "blog");
    body.appendChild(
      rootComponent.render([
        new UsersComponent(domAdapter, "users").render({ usersData }),
        new PostsComponent(domAdapter, "posts").render({ postsData })
      ])
    );
  });
  setFavIcon();
}

bootstrap();
