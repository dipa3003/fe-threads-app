export interface IThreads {
    id: number;
    user: {
        full_name: string;
        username: string;
        image: string;
    };
    username: string;
    full_name: string;
    created_at: string;
    content: string;
    image: string;
    likes_count: number;
    replies_count: number;
    isLiked: boolean;
}
export interface IThreadById {
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
    replies: {
        id: number;
        content: string;
        created_at: string;
        image: string;
        user: {
            id: number;
            username: string;
            full_name: string;
        };
    }[];
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
    follower?: [];
    following?: [];
}

export interface IThread {
    content: string;
    image: string;
}
