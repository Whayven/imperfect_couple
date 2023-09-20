import {User} from "../models/User";

export type PostData = {
    id: number | undefined;
    posted_by: User | null;
    content: string;
    created_at: string | null;
    liked_by: User[] | null;
}
