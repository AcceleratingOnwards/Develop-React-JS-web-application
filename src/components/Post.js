import React from "react";
import Comment from "./Comment";

export default function Post({username, isAdmin}){
    return(
        <div>
            {isAdmin && <button>Delete</button>}
            <h2>Exmaple Post Title</h2>
            <p>THis is an example post content</p>
            <Comment username = {username} isAdmin ={isAdmin}></Comment>
        </div>
    );
}