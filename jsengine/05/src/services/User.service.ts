import { UserModel } from "../models/User.model";
import { BaseService } from "./Base.service";

export class UserService extends BaseService<UserModel> {
  /**
   * getAll
   */
  public getAll(): Promise<UserModel[]> {
    return this.httpAdapter.Get("https://jsonplaceholder.typicode.com/users");
  }
}
