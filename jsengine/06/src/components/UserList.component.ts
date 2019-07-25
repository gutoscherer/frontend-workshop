import { UserModel } from "../models/User.model";

export class UserList {
  private users: UserModel[];

  constructor(users: UserModel[]) {
    this.users = users;
  }

  public render(): HTMLDivElement {
    const root: HTMLDivElement = document.createElement("div");

    const userTitle: HTMLHeadingElement = document.createElement("h2");
    userTitle.innerHTML = "Dados de Usuários";

    root.appendChild(userTitle);
    const container2: HTMLDivElement = document.createElement("div");
    root.appendChild(container2);

    this.users.forEach(({ name, email, posts }) => {
      const p: HTMLParagraphElement = document.createElement("p");
      p.innerHTML = `Nome: ${name} | Email: ${email} | Number of Posts: ${
        posts.length
      }`;
      container2.appendChild(p);
    });

    return root;
  }
}
