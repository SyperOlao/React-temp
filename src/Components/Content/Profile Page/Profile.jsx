import React from 'react'
import {UserPhoto} from "./UserInfo/UserPhoto";
import {UserInfo} from "./UserInfo/UserInfo";
import classes from "./PofilePage.module.css"
import {WritePost} from "../Posts/WritePost";
import {Post} from "../Posts/Post";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../state/actionCreators/messageActionCreators/addPostActionCreator";
import {updatePostActionCreator} from "../../../state/actionCreators/messageActionCreators/updatePostActionCreator";
import {addLikeActionCreator} from "../../../state/actionCreators/messageActionCreators/Likes/addLikeActionCreator";

const Profile = (props) => {
    let newPostElem = React.createRef();
    const MapPost = (data) => {
        return data.map(post_elem => <Post text={post_elem.message} amountLikes={post_elem.amountLikes}
                                          imgUrl={props.info[0].avatar} info={props.info[0]} index={data.indexOf(post_elem)}
                                          amountDisLikes={post_elem.amountDisLikes} likeClick={props.like}/>);
    }


    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
                <UserPhoto imgUrl={props.info[0].avatar}/>
            </div>
            <div className={classes.info}>
                <UserInfo state={props.info[0]} online={true} upDatePost={""}/>
                <WritePost onChange={()=>props.updatePost(newPostElem.current.value)} onClick={()=>{props.addPost();newPostElem.current.value = '';}}
                           newPostElem={newPostElem}/>
                {MapPost(props.post)}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("state: \n", state);
    return {
        post: state.messageReducer.post,
        tempPost: state.messageReducer.tempPost,
    };
}

const mapDispatchToProps = {
        addPost: addPostActionCreator,
        updatePost: updatePostActionCreator,
        like: addLikeActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);