import axios from "axios";
import { IAuth, IRegister } from "../interface/auth";

export const getLoginUser = async (id: number) => {
    try {
        const user = await axios.get(`http://localhost:5000/api/user/${id}`);
        return user.data;
    } catch (error) {
        console.log(error);
    }
};

export const authRegister = async (data: IRegister, cb: (status: number) => void) => {
    try {
        const response = await axios.post("http://localhost:5000/api/register", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        cb(response.status);
        return response;
    } catch (error) {
        console.log("error while register user:", error);
    }
};

export const authLogin = async (data: IAuth, cb: (status: number, token: string) => void) => {
    try {
        const response = await axios.post("http://localhost:5000/api/login", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        cb(response.status, response.data.token);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
