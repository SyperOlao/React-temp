import React from "react";
import classes from "../UserInfo.module.css";

export const UserInfoElem = (props) => {
    return(
        <div>
            <div className={classes.infoItemContainer}>
                <div className={classes.infoConstItem}>{props.constText}</div>
                <div className={classes.infoItem}>{props.info}</div>
            </div>
        </div>
    );
};