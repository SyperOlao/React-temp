import React from "react";
import classes from "./TextArea.module.css";

export const TextArea = (props) =>{

     return <textarea className={classes.textArea} ref={props.ref}
                      placeholder={props.placeholder}
                      style={{width: props.width, minHeight: props.minHeight}}
                      onChange={props.onChange}
     />
}