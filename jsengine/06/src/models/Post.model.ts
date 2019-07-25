import { UserModel } from "./User.model";

export interface PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;
    user?: UserModel;
}