import React from "react"
import Route from "react-router-dom/es/Route";
import Profile from "./Profile Page/Profile";
import {MessagePage} from "./Messages/MessagePage";
import {News} from "./News/News";
import {Friends} from "./Friends/Friends";
import classes from "./Content.module.css"
import {Redirect} from "react-router";

export const Content = (props) => {
    return (
        <div className={classes.wrapper}>
            <Route exact path="/">
               <Redirect to="/profile" />}
            </Route>
            <Route exact path='/profile' render={() => <Profile info={props.state.info}
                                                                posts={props.state.profilePagePost}
                                                                addPost={props.addPost}
                                                                updateNewPostText={props.updateNewPostText}
                                                                />}/>
            <Route path='/message' render={() => <MessagePage users={props.state.users} messages={props.state.messages}/>}/>
            <Route exact path='/news' render={() => <News/>}/>
            <Route exact path='/friends' render={() => <Friends/>}/>
        </div>
    );
};