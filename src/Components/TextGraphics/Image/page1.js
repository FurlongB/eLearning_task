import React from 'react'

import Logo from '../../../assets/epilsey.jpg'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="epilsey" />
    </div>    
);

export default logo;