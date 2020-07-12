import React from "react";
import { Post } from "../../models/Post";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

interface IProps {
  post: Post;
}

const PostCard: React.FC<IProps> = ({ post }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardHeader title={post.title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PostCard;
