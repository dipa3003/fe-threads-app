import axios from "axios";

export const getThreads = async () => {
    try {
        const threads = await axios.get("http://localhost:5000/api/threads");
        return threads.data;
    } catch (error) {
        console.log("error getThread:", error);
        throw error;
    }
};
