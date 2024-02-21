export interface IThreads {
    id: number;
    user: {
        full_name: string;
        username: string;
    };
    username: string;
    full_name: string;
    created_at: string;
    content: string;
    image: string;
    likes?: object[];
    likes_count: number;
    replies_count: number;
}

export interface IUser {
    id: number;
    bio: string;
    username: string;
    full_name: string;
    image: string;
    following_count: number;
    follower_count: number;
}
