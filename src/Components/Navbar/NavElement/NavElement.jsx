import React from "react";
import classes from "./NavElement.module.css"
import {NavLink} from "react-router-dom";

export const NavElement = (props) => {
    return (
        <div className={classes.navElemBlock}>
            <NavLink to={props.pathElem} activeClassName={classes.activeLink} className={classes.navElem}> {props.text} </NavLink>
        </div>
    );
};
