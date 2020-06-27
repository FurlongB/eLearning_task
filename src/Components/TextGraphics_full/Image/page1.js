import React from 'react'

import Logo from '../../../assets/epilsey.png'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="Covid Advice Scene" />
    </div>    
);

export default logo;