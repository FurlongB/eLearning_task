import React from 'react';

import Image from './Image/page1'

import classes from './TextFull.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.Left}>
                <div className={classes.box}>
                  <h1>{props.pageTitle}</h1>
                  Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures, due to uncontrollable coordinated firing of neurons in the brain.<br/><br/>About 25% of patients do not have fully controlled epilepsy, so new treatments are needed.
                  <ul>
                      <li>You have developed 3 drugs for the treatment of a epilepsy</li>
                      <li>Identify which (may be all/some/none) of the drugs could be considered for further development (and therefore potentially reach the patient)
                          <li>K<sub>d</sub> calculation from Scatchard plot</li>
                          <li>Comparison of data to identify which drug acts best at the receptor</li>
                          <li>Calculation of number of receptors in tissue</li>
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


