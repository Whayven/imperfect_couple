import { UserData } from '../domain/userData';

export class User implements UserData {
    id: number | undefined;
    username: string | null;
    email: string | null;
    name: string | null;
    phone?: string | null;
    city?: string | null;
    state?: string | null;
    status: string | null;
    profile_picture?: string | null;

    constructor(data?: Partial<UserData>) {
        this.id = data?.id || undefined;
        this.username = data?.username || null;
        this.email = data?.email || null;
        this.name = data?.name || null;
        this.phone = data?.phone || null;
        this.city = data?.city || null;
        this.state = data?.state || null;
        this.status = data?.status || null;
        if (data?.profile_picture) {
            this.profile_picture = data?.profile_picture;
        }
    }
}
