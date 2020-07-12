import { combineReducers } from "redux";
import posts from "./postsDuck";
import { Post } from "../models/Post";

const reducers = combineReducers({
  posts,
});

export interface State {
  posts: Post[];
}

export default reducers;
