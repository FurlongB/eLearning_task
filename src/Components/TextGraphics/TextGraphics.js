import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.box}>
                <div className={classes.Left}>
                    <h1>{props.pageTitle}</h1>
                    Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures, due to uncontrollable co-ordinated firing of neurons in the brain.  The basis of drug treatment is to normalize neuronal firing in the brain, and therefore prevent seizures from occurring.  With drug treatment, however, about 25% of patients do not have fully controlled epilepsy, and therefore new treatments are needed.
                </div>
                <div className={classes.Right}>
                    <Image />   
                </div>
            </div> 
        </div>
        
    );
};


export default (ruled);


