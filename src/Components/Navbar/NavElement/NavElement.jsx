import React from "react";
import classes from "./NavElement.module.css"
import {NavLink} from "react-router-dom";

export const NavElement = (props) => {
    return (
        <div className={classes.navElem}>
            <NavLink to={props.pathElem}> {props.text} </NavLink>
        </div>
    );
};
