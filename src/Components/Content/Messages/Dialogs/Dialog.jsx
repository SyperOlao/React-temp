import React from "react"
import {User} from "../../User/User";
import {NavLink} from "react-router-dom";
import classes from "./Dialogs.module.css";

export const Dialog = (props) => {
let path = "/message" + "/" + props.id;
    return (
        <div>
           <NavLink to={path} className={classes.linkName} activeClassName={classes.linkNameActive}>
               <User imgUrl ={props.imgUrl} name = {props.name}/>
           </NavLink>
        </div>
    );
};