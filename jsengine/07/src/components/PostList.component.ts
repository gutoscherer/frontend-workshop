import { PostModel } from "../models/Post.model";

export class PostList {
  private posts: PostModel[];

  constructor(posts: PostModel[]) {
    this.posts = posts;
  }

  public render(): HTMLDivElement {
    const root: HTMLDivElement = document.createElement("div");

    const userTitle: HTMLHeadingElement = document.createElement("h2");
    userTitle.innerHTML = "Dados de Usuários";

    root.appendChild(userTitle);
    const container2: HTMLDivElement = document.createElement("div");
    root.appendChild(container2);

    this.posts.forEach(({ title, body, user }) => {
      const p: HTMLParagraphElement = document.createElement("p");
      p.innerHTML = `Título: ${title} | Conteúdo: ${body} | Autor: ${
        user.name
      }`;
      container2.appendChild(p);
    });

    return root;
  }
}
