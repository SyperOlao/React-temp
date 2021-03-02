import React from "react";
import classes from "./Like.module.css"

export const Likes = (props) =>{
    return (
        <div className={classes.like}>
            {props.amountLikes}
        </div>
    );
};