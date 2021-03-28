import React from "react";
import {Likes} from "./Likes/Likes";
import {DisLikes} from "./Likes/Dislikes";
import classes from "./Posts.module.css";

export const Post = (props) => {
    const onClick = () => {
        return props.amountLikes++;
    }
    return (
        <div>
            <div className={classes.containerPost}>
                <div className={classes.text}>
                    {props.text}
                </div>
                <Likes onClick={onClick} amountLikes={props.amountLikes}/>
                <DisLikes amountDisLikes={props.amountDisLikes}/>
            </div>
        </div>
    );
};