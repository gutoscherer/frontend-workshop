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

  public getAllUsers(): UserModel[] {
    return this.userService.getAll().map(user => {
      return { ...user, posts: this.getPostsByUser(user) };
    });
  }

  public getAllPosts(): PostModel[] {
    return this.postService.getAll().map(post => {
      return { ...post, user: this.getPostUser(post) };
    });
  }

  private getPostUser(post: PostModel): UserModel {
    return this.userService.getAll().find(user => user.id === post.userId);
  }

  private getPostsByUser(user: UserModel): PostModel[] {
    return this.postService.getAll().filter(post => post.userId === user.id);
  }
}
