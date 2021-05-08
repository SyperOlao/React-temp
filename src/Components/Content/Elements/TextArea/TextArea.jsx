import React from "react";
import classes from "./TextArea.module.css";

export const TextArea = (props) =>{

     return <textarea className={classes.textArea}
                      style={{width: props.width, minHeight: props.minHeight}}
                      placeholder={props.placeholder}
                      ref={props.value}
                      onChange={props.onChange}
     />
}