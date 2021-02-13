import React from 'react'
import classes from './User.module.css'

export const User = (props) => {
    return (
        <div className={classes.content}>
            <img src={props.imgUrl} className={classes.avatar}/>
            <div className={classes.name}>{props.name}</div>
        </div>
    );
};