import React from "react"
import {Header} from "../Header/Header";
import {NavPage} from "../Navbar/NavPage";
import classes from "./MainPage.module.css"
import {Content} from "../Content/Content";

export const MainPage = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header/>
            </div>
            <div className={classes.navBar}>
                <NavPage/>
            </div>
            <div className={classes.content}>
                <Content state={props.state}
                         dispatch={props.dispatch}
                />
            </div>
            <div className={classes.footer}>

            </div>
        </div>
    );
};