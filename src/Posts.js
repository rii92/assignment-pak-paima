import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import PostsList from "./components/PostsList";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com" + props.urlEnd
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
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPostsHandler();
  }, [fetchPostsHandler]);

  let content = <p>Found no movies.</p>;

  if (posts.length > 0) {
    content = <PostsList posts={posts} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchPostsHandler}>Fetch Posts</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default Posts;
