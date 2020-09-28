import React from 'react';
import {SCORM} from 'pipwerks-scorm-api-wrapper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const closeButton = () =>{
    const handleClose = (cmd) =>{
        let location = window.location.href
        if (cmd==='quit')
        {
            SCORM.quit();
            //window.open(location, '_self').close();
            window.close();
        }   
        ////console.log('Closing the screen')
    }
    return(
        <div>
            <IconButton edge="start" color="inherit" onClick={handleClose.bind(this, "quit")} aria-label="close">
              <CloseIcon />
            </IconButton>
        </div>

    );
}

export default closeButton;