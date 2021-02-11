import React from "react"
import Header from "../Header/Header";
import {NavPage} from "../Navbar/NavPage";
import classes from "./MainPage.module.css"
import {Content} from "../Content/Content";

export const MainPage = () => {
    return (
        <div className={classes.container}>
            <Header className={classes.header}/>
            <NavPage className={classes.navbar}/>
            <Content className={classes.content}/>
        </div>
    );
};