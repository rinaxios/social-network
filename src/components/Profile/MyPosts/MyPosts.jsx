import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, post: 'Hello my friend'},
        {id: 2, post: 'This is my first post'},
    ]
    let newPostData = postData.map(post => <Post message={post.post}/>)

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
                {newPostData}
            </div>
        </div>
    );
};

export default MyPosts;