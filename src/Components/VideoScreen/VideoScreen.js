import React from 'react';
import classes from './VideoScreen.css'

import Video from './Video/Video';

const videoScreen = (props) =>{
    return(
        <div className={classes.Ruled}>
          <div className={classes.Left}>
            <div className={classes.box}>
              <h1>{props.pageTitle}</h1>
                Click the video to learn more about the specific and non-specific binding.
            </div>
          </div>
          <div className={classes.Right}>
            <Video/>
          </div> 
        </div>
        
    );
};


export default (videoScreen);