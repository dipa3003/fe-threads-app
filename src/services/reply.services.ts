import axios from "axios";
import { IReply } from "../interface/reply";

export const getReplies = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/reply");
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const postReply = async (token: string, data: IReply) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/reply/add`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
