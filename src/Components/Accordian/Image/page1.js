import React from 'react'

import Logo from '../../../assets/structure.jpg'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="Covid Cell" />
    </div>    
);

export default logo;