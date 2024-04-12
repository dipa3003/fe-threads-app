import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interface/user";

const data: IUser[] = [];

const initialState = {
    data,
};

export const allUserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        GET_ALL_USER: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { GET_ALL_USER } = allUserSlice.actions;
export default allUserSlice.reducer;
