import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics_bs.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.box}>
                <div className={classes.Left}>
                    <h1>{props.pageTitle}</h1>
                    <p>You are a scientist working on a project to identify novel drugs for the treatment of epilepsy. You have identified three novel compounds: SoP252, SoP241 and SoP652, which you believe may bind to and activate a newly discovered receptor, which is involved in the regulation of normal brain activity. This could therefore be a potential candidate for a new epilepsy treatment.</p>
                    <p>Radioligand binding experiments allow the determination of the drug equilibrium dissociation constant (K<sub>d</sub>), which is one component of the drug development process. The K<sub>d</sub> provides useful information about the drug and its properties.</p>
                    <p>Not all drugs in development will reach the patient. Based on the experimental data that you must decide which of the three drugs appears the most promising and the data from the radioligand binding assay will help you to determine which is the most promising candidate.</p>
                    <p><u>For all numeric values you are only required to fill to 2 decimal places for example 5.03</u></p>
                    <p><i>When you are ready select the <b>next</b> button to begin the task</i></p>
                    </div>  
                <div className={classes.Right}>
                    <Image />   
                </div>
            </div>
        </div>
        
    );
};


export default (ruled);


