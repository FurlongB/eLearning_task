import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import classes from './MenuHeader.css'

const menuHeader = (props) =>{
    
    return(
        <div className={classes.MenuHeader}>
            <div>
                <h2>Coure Menu</h2>
            </div>
            <div className={classes.CloseButton}>
                <IconButton edge="start" color="inherit" onClick={props.click} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </div>
        </div>
    );

}

export default menuHeader