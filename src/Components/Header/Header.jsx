import React, {Components} from 'react'
import Logo from './Logo/Logo'
import TitleOfSite from './TitleOfSite/TitleOfSite'
import classes from './header.module.css'
const Header = () => {
     return (
         <div className={classes.header}>
            <Logo />
            <TitleOfSite appTitle="В одноклассниках" />
         </div>
     );
}

export default Header;