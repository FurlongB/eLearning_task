import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics_fs.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.Left}>
                <div className={classes.box}>
                  <h1>{props.pageTitle}</h1>
                  Why analyse? (check it is the correct compound!)<br/><br/>Why determine binding affinity? – check that the drug actually binds, check it binds well so could be administered at a sensible concentration (impacts formulation, side effects, etc.)
                </div>  
            </div>
            <div className={classes.Right}>
                <Image />   
            </div>
        </div>
        
    );
};


export default (ruled);


