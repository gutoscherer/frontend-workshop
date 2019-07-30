import { PostModel } from "../models/Post.model";
import { BaseService } from "./Base.service";

export class PostService extends BaseService<PostModel> {
  /**
   * getAll
   */
  public getAll(): Promise<PostModel[]> {
    return this.httpAdapter.Get("https://jsonplaceholder.typicode.com/posts");
  }
}
