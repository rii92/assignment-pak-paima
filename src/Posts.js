import React, {useEffect, useState } from "react";

import "./App.css";
import PostsList from "./components/PostsList";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const url =`https://jsonplaceholder.typicode.com/${props.urlEnd}`;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          url
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
  
        const data = await response.json();
  
        const transformedPosts = data.map((postData) => {
          return {
            userId: postData.userId,
            id: postData.id,
            title: postData.title,
            body: postData.body,
          };
        });
        setPosts(transformedPosts.splice(0, 5));
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  });

  let content = <p>Found no posts.</p>;

  if (posts.length > 0) {
    content = <PostsList posts={posts} />;
  }

  return (
    <React.Fragment>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default Posts;
