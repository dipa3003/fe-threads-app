export interface IUpdateUser {
    full_name?: string;
    username?: string;
    bio?: string;
    image?: string;
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
    following?: {
        follower: {
            id: number;
        };
    }[];
}
