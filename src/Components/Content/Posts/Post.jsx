import React from "react";
import {Likes} from "./Likes/Likes";
import {DisLikes} from "./Likes/Dislikes";
import classes from "./Posts.module.css";
import {User} from "../User/User";

export const Post = (props) => {
    const onClick = () => {
        //debugger;
        let a = props.amountLikes;
        return a+1;
    }
    return (
        <div>
            <div className={classes.containerPost}>
                <div>
                    <User imgUrl={props.imgUrl} name={props.info.name}/>
                </div>
                <div className={classes.text}>
                    {props.text}
                </div>
                <div className={classes.like}>
                    <Likes onClick={onClick} amountLikes={props.amountLikes}/>
                </div>
                <div className={classes.dislike}>
                    <DisLikes amountDisLikes={props.amountDisLikes}/>
                </div>
            </div>
        </div>
    );
};