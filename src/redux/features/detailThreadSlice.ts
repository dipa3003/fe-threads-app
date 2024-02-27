import { createSlice } from "@reduxjs/toolkit";
import { IThreadById } from "../../interface/threads";

const data: IThreadById = {
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
    replies: [],
    likes_count: 0,
    replies_count: 0,
};
const initialState = {
    data,
};

export const detailThreadSlice = createSlice({
    name: "detailThread",
    initialState,
    reducers: {
        GET_DETAIL_THREAD: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { GET_DETAIL_THREAD } = detailThreadSlice.actions;
export default detailThreadSlice.reducer;
