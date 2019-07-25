import { UserModel } from "../models/User.model";
import Users from "../assets/users.json";

export class UserService {
  private data: UserModel[];

  constructor() {
    this.data = Users;
  }

  /**
   * getAll
   */
  public getAll(): UserModel[] {
    return this.data;
  }
}
