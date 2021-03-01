import React from "react";
import {Likes} from "./Likes/Likes";
import {DisLikes} from "./Likes/Dislikes";

export const Post = (props) => {
    return (
        <div>
            <div>
                {props.text}
            </div>
            <Likes amount={props.amount}/>
            <DisLikes  amount={props.amount}/>
        </div>
    );
};