import React, {useEffect, useState} from 'react'
import {UserPhoto} from "./UserInfo/UserPhoto";
import {UserInfo} from "./UserInfo/UserInfo";
import classes from "./PofilePage.module.css"
import {WritePost} from "../Posts/WritePost";
import {Post} from "../Posts/Post";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../state/actionCreators/messageActionCreators/addPostActionCreator";
import {updatePostActionCreator} from "../../../state/actionCreators/messageActionCreators/updatePostActionCreator";

const Profile = (props) => {
    const [data, setData] = useState(props.post);
    let newPostElem = React.createRef();
    const MapPost = (arr) => {
        return arr.data.map(post => <Post text={post.message} amountLikes={post.amountLikes}
                                          imgUrl={props.info[0].avatar} info={props.info[0]}
                                          amountDisLikes={post.amountDisLikes}/>);
    }

    useEffect(() => {
        setData(props.post);
    }, [props.post]);

    const onChange = () => {
        props.updatePost(newPostElem.current.value);
    }

    const onClick = () => {
        //TODO:: Добавить addPost
        props.addPost();
        newPostElem.current.value = '';
        setData(props.post);
    }

    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
                <UserPhoto imgUrl={props.info[0].avatar}/>
            </div>
            <div className={classes.info}>
                <UserInfo state={props.info[0]} online={true} upDatePost={""}/>
                {/* <WritePost addPost={props.addPost} updateNewPostText={props.updateNewPostText} MapPost={MapPost} setData={setData} post ={props.posts.post}/>*/}
                <WritePost onChange={onChange} onClick={onClick} newPostElem={newPostElem}/>
                <MapPost data={data}/>
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

const mapDispatchToProps = () => {
    return {
        addPost: addPostActionCreator,
        updatePost: updatePostActionCreator,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);