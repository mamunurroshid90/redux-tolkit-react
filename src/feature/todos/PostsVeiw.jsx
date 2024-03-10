import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostsSlice";

const PostsVeiw = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post, index) => {
            return (
              <article key={index}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsVeiw;
