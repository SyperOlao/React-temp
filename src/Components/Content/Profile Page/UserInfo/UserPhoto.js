import React from "react";
import classes from "./UserInfo.module.css"

export const UserPhoto = (props) =>{
  return(
      <div className={classes.userPhoto}>
        <img src={props.imgUrl}/>
        <button className={classes.edit}>Edit</button>
      </div>
  )
};