import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.Left}>
                <div className={classes.box}>
                  <h1>{props.pageTitle}</h1>
                  <ul>
                    <li>Contextualise radioligand binding assays</li>
                    <li> Group discussion</li>   
                    <li>Recap of binding assays</li>
                    <li>Decide which drug is best based on the Kd</li>
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


