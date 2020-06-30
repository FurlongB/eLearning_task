import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics_bs.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.Left}>
                <div className={classes.box}>
                  <h1>{props.pageTitle}</h1>
                  <p>You are working on a project to identify novel drugs for the treatment of epilepsy. You have identified three novel compounds: SoP252, SoP421 and SoP514, which you believe may bind to and activate a newly discovered receptor, which is involved in the regulation of normal brain activity.  This could therefore be a potential candidate for a new epilepsy treatment.</p>
                  <p>Radioligand binding experiments allow the determination of the drug equilibrium dissociation constant (K<sub>d</sub>), which is one component of the drug development process.  The K<sub>d</sub> provides useful information about the drug and its properties.</p>
                  <p>Not all drugs in development will reach the patient.  Based on the experimental data that you have, decide which of the three drugs appears the most promising.  You must give full reasons for your decision.</p>
                </div>  
            </div>
            <div className={classes.Right}>
                <Image />   
            </div>
        </div>
        
    );
};


export default (ruled);


