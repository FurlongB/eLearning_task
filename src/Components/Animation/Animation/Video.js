import React from 'react'

import Video from '../../../assets/scathard_plot.mp4'

const video = (props)=>(
  <div>
    <video controls="controls" width="100%" height="100%">
      <source src={Video} type="video/mp4"/>
      Your browser does not support the HTML5 Video element.
  </video>
  </div>    
);

export default video;