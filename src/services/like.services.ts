import axios from "axios";

export const postLike = async (threadId: number, token: string) => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/likes/add",
            { threadId },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response;
    } catch (error) {
        console.log("erro while postLike:", error);
    }
};
