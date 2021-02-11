import React from "react"
import classes from "./NavPage.module.css"
import NavElement from "./NavElement/NavElement";
import {BrowserRouter} from "react-router-dom";

const NavPage = () => {
    return (
        <nav className={classes.navList}>
            <BrowserRouter>
            <NavElement pathElem="/profile" text ="Profile"/>
            </BrowserRouter>
        </nav>
    );
};

export default NavPage;