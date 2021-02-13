import React from "react"
import {User} from "../../User/User";
import classes from "./MessageItem.module.css"

export const MessageItem = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.userContainer}>
                <User imgUrl={props.imgUrl} name={props.name}/>
            </div>
            <div className={classes.messageText}>{props.text}</div>
        </div>
    );
};
