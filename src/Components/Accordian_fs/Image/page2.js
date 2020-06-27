import React from 'react'

import Logo from '../../../assets/step_2.png'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="Membrane Cell" />
    </div>    
);

export default logo;