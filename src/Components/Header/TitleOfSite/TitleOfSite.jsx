import React from 'react'
import classes from './title.module.css'

export const TitleOfSite = (props) => (<span className={classes.titleOfSite}>{props.appTitle}</span>);