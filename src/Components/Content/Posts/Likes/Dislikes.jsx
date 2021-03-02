import React from "react";
import classes from "./Like.module.css"

export const DisLikes = (props) =>{
    return (
        <div className={classes.dislike}>
            {props.amountDisLikes}
        </div>

    );
};