import React from 'react'
import {Dialog} from "./Dialogs/Dialog";

export const Message = (props) => {
    return (
        <div>
            {
                props.state.users.map(user => {
                    return <Dialog id={user.id} imgUrl={user.avatar} name={user.name}/>
                })
            }
        </div>
    );
};