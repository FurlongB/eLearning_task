import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import classes from './CloseButton.css'

const closeButton = () =>{

    const handleClose = () =>{
        //console.log('Closing the screen')
        window.close();
    }

    return(
        <div>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
        </div>

    );
}

export default closeButton;