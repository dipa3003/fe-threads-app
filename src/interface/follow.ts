export interface IFollower {
    id: number;
    created_at?: string;
    follower: {
        id: number;
        full_name: string;
        username: string;
        image: string;
    };
}

export interface IFollowing {
    id: number;
    created_at: string;
    following: {
        id: number;
        full_name: string;
        username: string;
        image: string;
    };
}
