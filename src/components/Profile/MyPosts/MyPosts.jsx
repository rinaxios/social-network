import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, post: 'Hello my friend'},
        {id: 2, post: 'This is my first post'},
    ]

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
                <Post message={postData[0].post}/>
                <Post message={postData[1].post}/>
            </div>
        </div>
    );
};

export default MyPosts;