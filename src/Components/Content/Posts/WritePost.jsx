import React from "react";
import classes from "./Posts.module.css"
import {Button} from "../Elements/Button/Button";
import {TextArea} from "../Elements/TextArea/TextArea";

export const WritePost = (props) => {
    let newPostElem = React.createRef();
    const onChange=()=>{
        props.updateNewPostText(newPostElem.current.value);
    }

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.text}>Ваш пост:</div>
                <textArea placeholder="Напишите..." width={500} minHeight={60} ref={newPostElem}
                          onChange={onChange} value={newPostElem}
                           />
                <Button text="Отправить" onClick={props.addPost}/>
            </div>
        </div>
    );
};