import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics_ns.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.Left}>
                <div className={classes.box}>
                  <h1>{props.pageTitle}</h1>
                  <ul>
                      <li>Determination of affinity constant (K<sub>A</sub>) using radio-labelled drug (D*)
                        <li>Commonly used radiolabel = tritium, (<super>3</super>H), t<sub>½</sub>=12.3yr</li>
                      </li>
                      <li>Incubate tissue/cells with D*, wash away excess drug &amp; measure levels of radioactivity in sample</li>
                      <li>Detect 
                          <li>Specific binding: drug bound to receptor<br/> - High affinity</li>
                          <li>Non-specific binding: drug remaining stuck to other parts of tissue/apparatus<br/> - Low affinity</li>
                      </li>
                  </ul>
                </div>  
            </div>
            <div className={classes.Right}>
                <Image />   
            </div>
        </div>
        
    );
};


export default (ruled);


