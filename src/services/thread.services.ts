import axios from "axios";
import { IThread } from "../interface/threads";

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

export const postThread = async (data: IThread, token: string) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/threads/add`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (error) {
        console.log("error postThread:", error);
        throw error;
    }
};
