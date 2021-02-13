import React from "react"
import Route from "react-router-dom/es/Route";
import {Profile} from "./Profile Page/Profile";
import {Message} from "./Messages/Message";
import {News} from "./News/News";
import {Friends} from "./Friends/Friends";
import classes from "./Content.module.css"

export const Content = (props) => {
    return (
        <div className={classes.wrapper}>
            <Route exact path='/profile' render={Profile}/>
            <Route path='/message' render={() => <Message state = {props.state}/>}/>.
            <Route exact path='/news' render={News}/>
            <Route exact path='/friends' render={Friends}/>
        </div>
    );
};