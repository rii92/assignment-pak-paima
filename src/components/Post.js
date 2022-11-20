import React from "react";

const Post = (props) => {
  return (
    <tr>
      <td>{props.userId}</td>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.body}</td>
    </tr>
  );
};

export default Post;
