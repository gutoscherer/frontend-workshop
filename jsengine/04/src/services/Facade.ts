import { UserService } from "./User.service";
import { PostService } from "./Post.service";
import { UserModel } from "../models/User.model";
import { PostModel } from "../models/Post.model";

export class Facade {
  private userService: UserService;
  private postService: PostService;

  constructor() {
    this.userService = new UserService();
    this.postService = new PostService();
  }

  public async getAllUsers(): Promise<UserModel[]> {
    const posts: PostModel[] = await this.postService.getAll();
    return (await this.userService.getAll()).map(user => {
      return {
        ...user,
        posts: posts.filter(post => {
          post.userId === user.id;
        })
      };
    });
  }

  public async getAllPosts(): Promise<PostModel[]> {
    const users: UserModel[] = await this.userService.getAll();
    return (await this.postService.getAll()).map(post => {
      return { ...post, user: users.find(user => user.id === post.userId) };
    });
  }
}
