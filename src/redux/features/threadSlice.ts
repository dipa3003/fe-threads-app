import { createSlice } from "@reduxjs/toolkit";
import { IThreads } from "../../interface/threads";

const initialState: IThreads = {
    id: 0,
    user: {
        full_name: "",
        username: "",
    },
    username: "",
    full_name: "",
    created_at: "",
    content: "",
    image: "",
    likes_count: 0,
    replies_count: 0,
};

export const threadSlice = createSlice({
    name: "thread",
    initialState,
    reducers: {
        findThreads: (state, action) => {
            state = action.payload;
        },
    },
});

export const { findThreads } = threadSlice.actions;
export default threadSlice.reducer;
