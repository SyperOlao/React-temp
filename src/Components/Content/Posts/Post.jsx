import React from "react";
import {Likes} from "./Likes/Likes";
import {DisLikes} from "./Likes/Dislikes";
import classes from "./Posts.module.css";

export const Post = (props) => {
    return (
        <div>
            <div className={classes.containerPost}>
                <div className={classes.text}>
                    {props.text}
                </div>
                <Likes amountLikes={props.amountLikes}/>
                <DisLikes amountDisLikes={props.amountDisLikes}/>
            </div>
        </div>
    );
};