import React from "react"
import Route from "react-router-dom/es/Route";
import {Profile} from "./Profile Page/Profile";
import {Message} from "./Messages/Message";
import {News} from "./News/News";
import {Friends} from "./Friends/Friends";
import classes from "./Content.module.css"

export const Content = () => {
    return (
        <div className={classes.wrapper}>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/message' component={Message}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/friends' component={Friends}/>
        </div>
    );
};