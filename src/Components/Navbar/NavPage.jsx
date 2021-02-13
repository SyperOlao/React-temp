import React from "react"
import classes from "./NavPage.module.css"
import {NavElement} from "./NavElement/NavElement";

export const NavPage = () => {
    return (
        <nav className={classes.navList}>
                <NavElement pathElem="/profile" text="Profile"/>
                <NavElement pathElem="/message" text="Message"/>
                <NavElement pathElem="/news" text="News"/>
                <NavElement pathElem="/friends" text="Friends"/>
        </nav>
    );
};

