import axios from "axios";

export const getReplies = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/reply");
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
