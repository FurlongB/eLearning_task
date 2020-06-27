import React from 'react';

import Logo from '../Logo/Logo';
import Close from './CloseButton/CloseButton'

import classes from './header.css'


const header = props => {
    return (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div >
            <h1 className={classes.DesktopOnly}>{props.coursetitle}</h1>
        </div>
        <div>
            <Close />
        </div>

    </header> 
    )
};

export default header;