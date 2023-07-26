import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <input type="text"/>
            </div>
            <div>
                <button>Add</button>
            </div>
            <div className={s.posts}>
                <Post message="Hello my friend"/>
                <Post message="This is my first post"/>
            </div>
        </div>
    );
};

export default MyPosts;