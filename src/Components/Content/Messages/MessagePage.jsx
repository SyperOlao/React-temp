import React from 'react'
import {Dialog} from "./Dialogs/Dialog";
import {MessageItem} from "./MessageItem/MessageItem";
import classes from "./MessagePage.module.css"

export const MessagePage = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                {
                    props.state.users.map(user => {
                        return <Dialog id={user.id} imgUrl={user.avatar} name={user.name}/>
                    })
                }
            </div>
            <div className={classes.messages}>
                {
                    props.state.messages.map(message => {
                        return <MessageItem id={message.id} text = {message.message}/>
                    })
                }
            </div>
        </div>
    );
};

//TODO:: доделать сообщения