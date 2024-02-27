import { createSlice } from "@reduxjs/toolkit";
import { IThreads } from "../../interface/threads";

const data: IThreads[] = [];
const initialState = {
    data,
};

export const threadSlice = createSlice({
    name: "thread",
    initialState,
    reducers: {
        GET_THREADS: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { GET_THREADS } = threadSlice.actions;
export default threadSlice.reducer;
