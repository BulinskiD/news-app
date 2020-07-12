import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/postsDuck";
import { State } from "../../store";
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: State) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grid spacing={4} container>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Grid>
  );
};

export default Posts;
