import React, {Components} from 'react'
import classes from './title.module.css'

const TitleOfSite = (props) => {
    return( <span className={classes.titleOfSite}>{props.appTitle}</span> );
}
export default TitleOfSite