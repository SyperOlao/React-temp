import React, {useState} from 'react'
import {UserPhoto} from "./UserInfo/UserPhoto";
import {UserInfo} from "./UserInfo/UserInfo";
import classes from "./PofilePage.module.css"
import {WritePost} from "../Posts/WritePost";
import {Post} from "../Posts/Post";
import {updateNewPostTextAction} from "../../../state/actionCreators/postActions/updateNewPostTextAction";
import {addPostAction} from "../../../state/actionCreators/postActions/addPostAction";

export const Profile = (props) => {
    const [data, setData] = useState(props.posts.post);

    let newPostElem = React.createRef();

    const MapPost = (arr) => {
        return arr.map(post => <Post text={post.message} amountLikes={post.amountLikes}
                                      imgUrl={props.info[0].avatar} info={props.info[0]}
                                      amountDisLikes={post.amountDisLikes}/>)
    }

    const onChange = () => {
        props.dispatch(updateNewPostTextAction(newPostElem.current.value));

    }

    const onClick = () => {
        props.dispatch(addPostAction());
        newPostElem.current.value = '';
        setData(props.posts.post);
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
                {MapPost(data)}
            </div>

        </div>
    );
};
