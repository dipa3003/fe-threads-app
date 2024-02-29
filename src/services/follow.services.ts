import axios from "axios";

export const getFollows = async (userId: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/follow?userId=${userId}`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postFollow = async (idToFollow: number, token: string) => {
    try {
        const response = await axios.post(
            `http://localhost:5000/api/follow/${idToFollow}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
