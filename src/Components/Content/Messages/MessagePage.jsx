import React from 'react'
import {Dialog} from "./Dialogs/Dialog";
import {MessageItem} from "./MessageItem/MessageItem";
import classes from "./MessagePage.module.css"
import {TextArea} from "../Elements/TextArea/TextArea";

export const MessagePage = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                {
                    props.users.map(user => <Dialog id={user.id} imgUrl={user.avatar} name={user.name}/>)
                }
            </div>
            <div className={classes.messages}>
                {
                    props.messages.map(message => <MessageItem id={message.id} text={message.message}/>)
                }
            </div>
            <div className={classes.textMessages}>
                <TextArea placeholder="Напишите сообщение..." width={500} minHeight={60}/>
            </div>

        </div>
    );
};

//TODO:: доделать сообщения