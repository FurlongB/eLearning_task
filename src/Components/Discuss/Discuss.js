import React from 'react';

import Image from './Image/page1'

import classes from './Discuss.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.Left}>
                <div className={classes.box}>
                  <h1>{props.pageTitle}</h1>
                    Discuss in groups (5 mins):
                    <ul>
                        <li>What is the relationship between K<sub>d</sub> and drug-receptor affinity?</li>
                        <li>What does a high/low K<sub>d</sub> signify?</li>
                        <li>What does this tell us about the concentration needed:
                            <ul>
                                <li>For a drug with high K<sub>d</sub>?</li>
                                <li>For a drug with low K<sub>d</sub>?</li>
                            </ul>
                        </li>
                        <li>What information about a drug can we gain by comparing the K<sub>d</sub> at different receptors?</li>
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


