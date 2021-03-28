import React from "react";
import classes from "./Posts.module.css"
import {Button} from "../Elements/Button/Button";
import {TextArea} from "../Elements/TextArea/TextArea";

export const WritePost = () => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.text}>Ваш пост:</div>
                <TextArea placeholder="Напишите..." width={500} minHeight={60} />
                <Button text="Отправить"/>
            </div>
        </div>
    );
};