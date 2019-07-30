import { UserModel } from "../models/User.model";
import { BaseComponent } from "../components/Base.component";

export class User extends BaseComponent {
  public render(props: { user: UserModel }): HTMLElement {
    const title = this.createChildElement("h1", "Ahhhh muleke doido");

    const root = this.createElement("div", null, null, null, [title]);

    return root;
  }
}
