import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "../redux/features/threadSlice";
import detailThreadReducer from "./features/detailThreadSlice";
import allUserSliceReducer from "./features/allUserSlice";
import userLoginReducer from "./features/userLoginSlice";

export const store = configureStore({
    reducer: {
        threads: threadReducer,
        detailThread: detailThreadReducer,
        allUser: allUserSliceReducer,
        userLogin: userLoginReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
