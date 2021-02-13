import React from 'react'
import Logo from './Logo/Logo'
import {TitleOfSite} from './TitleOfSite/TitleOfSite'
import classes from './header.module.css'

export const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.title}>
                <TitleOfSite appTitle="В одноклассниках"/>
            </div>
        </div>
    );
};
