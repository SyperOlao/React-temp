import React from 'react'
import {UserPhoto} from "./UserInfo/UserPhoto";
import {UserInfo} from "./UserInfo/UserInfo";



export const Profile = (props) => {
    return (
        <div>
            <UserPhoto imgUrl={props.state.info.avatar}/>
            <div>
                <UserInfo state={props.state.info} online={true}/>
            </div>
        </div>
    );
};
