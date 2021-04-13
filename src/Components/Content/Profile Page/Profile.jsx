import React from 'react'
import {UserPhoto} from "./UserInfo/UserPhoto";
import {UserInfo} from "./UserInfo/UserInfo";
import classes from "./PofilePage.module.css"
import {WritePost} from "../Posts/WritePost";
import {Post} from "../Posts/Post";

export const Profile = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
                <UserPhoto imgUrl={props.info[0].avatar}/>
            </div>
            <div className={classes.info}>
                <UserInfo state={props.info[0]} online={true} upDatePost={""}/>
                <WritePost addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>

                {props.posts.post.map(post => <Post text={post.message} amountLikes={post.amountLikes}
                                                    imgUrl={props.info[0].avatar} info={props.info[0]}
                                                    amountDisLikes={post.amountDisLikes}/>)}
            </div>

        </div>
    );
};
