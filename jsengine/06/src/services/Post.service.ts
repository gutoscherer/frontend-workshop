import { PostModel } from "../models/Post.model";
import Posts from '../assets/posts.json';

export class PostService {
    private data: PostModel[];

    constructor() {
        this.data = Posts;
    }

    /**
     * getAll
     */
    public getAll(): PostModel[] {
        return this.data;
    }
}