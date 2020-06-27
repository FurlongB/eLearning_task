import React from 'react'

import classes from './Video.css';

const video = (props)=>{

  return(
    <div className={classes.Video}>
      <video controls="controls" width="320" height="240" >
        <source src={require(`../../../assets/scenarios/${props.vidToPlay}`)} type="video/mp4"/>
        Your browser does not support the HTML5 Video element.
      </video>
    </div>  
  )  
};

export default video;