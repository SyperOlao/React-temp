import React from "react";
import classes from "./Button.module.css";

export const Button = (props) =>{
    return (
        <div>
            <input className={classes.button} type="button" value={props.text}/>
        </div>

    );
};