import axios from "axios";
import { IAuth, IRegister } from "../interface/auth";
import { IUpdateUser } from "../interface/user";

export const getLoginUser = async (id: number) => {
    try {
        const user = await axios.get(`http://localhost:5000/api/users/${id}`);
        return user.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllUsers = async () => {
    try {
        const users = await axios.get(`http://localhost:5000/api/users`);
        return users.data;
    } catch (error) {
        console.log(error);
    }
};

export const getSuggestUser = async (token: string) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/suggestUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateProfile = async (token: string, data: IUpdateUser) => {
    try {
        const response = await axios.patch(`http://localhost:5000/api/users`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });

        return response;
    } catch (error) {
        console.log("error updateProfile:", error);
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

export const authLogin = async (data: IAuth) => {
    try {
        const response = await axios.post("http://localhost:5000/api/login", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        // cb(response.status, response.data.token);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
// export const authLogin = async (data: IAuth, cb: (status: number, token: string) => void) => {
//     try {
//         const response = await axios.post("http://localhost:5000/api/login", data, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         cb(response.status, response.data.token);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
