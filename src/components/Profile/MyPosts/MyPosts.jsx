import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts  = () => {
  return (
    <div>
      My post
      <div>
        New post
      </div>
      <div className={s.posts}>
        <Post message="Hello my friend"/>
        <Post message="This is my first post"/>
      </div> 
    </div>
  );
};

export default MyPosts;