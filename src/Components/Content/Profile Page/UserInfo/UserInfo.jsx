import React from "react"
import classes from "./UserInfo.module.css"

export const UserInfo = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.userNameContainer}>
                <div className={classes.userName}>{props.name}</div>
                <div className={classes.online}>{props.online}</div>
                <div className={classes.userStatus}>{props.status}</div>
            </div>
            <div className={classes.infoConstItem}>
                <div className={classes.infoConstItem}>Дата рождения:</div>
                <div className={classes.infoConstItem}>Личные отношения:</div>
                <div className={classes.infoItem}>{props.birthday}</div>
                <div className={classes.infoItem}>{props.relationships}</div>
            </div>
        </div>
    );
};