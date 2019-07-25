import { UserModel } from "../models/User.model";

export class UserService {
  /**
   * getAll
   */
  public async getAll(): Promise<UserModel[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return (await response.json()) as UserModel[];
  }
}
