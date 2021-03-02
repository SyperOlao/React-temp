import React from "react"
import classes from "./UserInfo.module.css"
import {UserInfoElem} from "./UserInfoElem/UserInfoElem";

export const UserInfo = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.userNameContainer}>
                <div className={classes.userName}>{props.state.name}</div>
                <div className={classes.online}>{props.online}</div>
                <div className={classes.userStatus}>{props.state.status}</div>
            </div>
            <div className={classes.infoConstItem}>
                <UserInfoElem constText={"Дата рождения:"} info={props.state.birthday}/>
                <UserInfoElem constText={"Личные отношения:"} info={props.state.relationships}/>
            </div>
        </div>
    );
};