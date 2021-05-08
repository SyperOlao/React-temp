import React from "react";
import classes from "./Posts.module.css"
import {Button} from "../Elements/Button/Button";
import {TextArea} from "../Elements/TextArea/TextArea";

export const WritePost = (props) => {
  /*  let newPostElem = React.createRef();
    const onChange = () => {
        props.updateNewPostText(newPostElem.current.value);

    }
    const onClick = () => {
        props.addPost();
        newPostElem.current.value = '';
        props.setData(props.post);
    }*/

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.text}>Ваш пост:</div>
                <TextArea placeholder="Напишите..." width={500} minHeight={60}
                          onChange={props.onChange} value={props.newPostElem}
                />
                <Button text="Отправить" onClick={props.onClick}/>
            </div>
        </div>
    );
};