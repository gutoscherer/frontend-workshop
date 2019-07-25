import { PostModel } from "../models/Post.model";

export class PostService {
  /**
   * getAll
   */
  public async getAll(): Promise<PostModel[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return (await response.json()) as PostModel[];
  }
}
