import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import PostReducer from "../feature/todos/PostsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: PostReducer,
  },
});

export default store;
