import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "../redux/features/threadSlice";
import detailThreadReducer from "./features/detailThreadSlice";
import allUserSliceReducer from "./features/allUserSlice";

export const store = configureStore({
    reducer: {
        threads: threadReducer,
        detailThread: detailThreadReducer,
        allUser: allUserSliceReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
