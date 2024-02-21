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
export const getThreadById = async (id: number) => {
    try {
        const threads = await axios.get(`http://localhost:5000/api/threads/${id}`);
        return threads.data;
    } catch (error) {
        console.log("error getThreadById:", error);
        throw error;
    }
};
