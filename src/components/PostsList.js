import React from "react";
import Post from "./Post";
import "./Table.module.css";

const PostsList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {props.posts.map((post) => (
          <Post
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PostsList;
