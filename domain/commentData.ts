import {User} from "../models/User";
import {PostData} from "./postData";

export type CommentData = {
    id: number | undefined;
    content?: string;
    created_at?: string | null;
    posted_by?: User | null;
    liked_by?: User[] | null;
    post: PostData | null;
}
