import React from 'react'

import Logo from '../../../assets/skincell.jpg'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="Skin Cell" />
    </div>    
);

export default logo;