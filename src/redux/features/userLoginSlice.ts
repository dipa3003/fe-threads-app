import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interface/user";

const data: IUser = {
    id: 0,
    bio: "",
    username: "",
    full_name: "",
    image: "",
    following_count: 0,
    follower_count: 0,
};

const initialState = {
    data,
};

export const userLoginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        GET_LOGIN_USER: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { GET_LOGIN_USER } = userLoginSlice.actions;
export default userLoginSlice.reducer;
