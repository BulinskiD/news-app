import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../models/Post";
import { getData } from "./firebase/firebaseActions";

const initialState: Post[] = [];

export const getPosts = createAsyncThunk(
  "posts/fetch",
  async (params: void, { dispatch }) => {
    const posts = await getData<Post[]>("posts");
    dispatch(postsSlice.actions.setPosts(posts));
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state: Post[], action: PayloadAction<Post[]>) => action.payload,
  },
});

export default postsSlice.reducer;
