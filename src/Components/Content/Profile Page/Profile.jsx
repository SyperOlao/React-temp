import React from 'react'
import {UserPhoto} from "./UserInfo/UserPhoto";
import {UserInfo} from "./UserInfo/UserInfo";
import classes from  "./PofilePage.module.css"

export const Profile = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
                <UserPhoto imgUrl={props.state.info[0].avatar}/>
            </div>
            <div className={classes.info}>
                <UserInfo state={props.state.info[0]} online={true}/>
            </div>
        </div>
    );
};
