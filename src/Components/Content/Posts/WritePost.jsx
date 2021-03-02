import React from "react";
import classes from "./Posts.module.css"
import {Button} from "../Elements/Button/Button";

export const WritePost = (props) => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.text}>Ваш пост:</div>
                <textarea className={classes.textArea} placeholder="Напишите..."/>
                <Button text="Отправить"/>
            </div>

        </div>
    );
};