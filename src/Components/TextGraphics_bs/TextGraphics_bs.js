import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics_bs.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.Left}>
                <div className={classes.box}>
                  <h1>{props.pageTitle}</h1>
                  Xs non-radioactive – displaces specific binding because it binds with same high intermolecular forces – rem the non-static binding (binds, interacts, released – binding site now free for more drug/endog ligand).  No endog ligand in a piece of tissue so non-radioactive competes with radioactive for binding, it is in xs so washes out radioactive.  All spec sites are bound by non-radioactive, so can measure what is left (non-spec)
                </div>  
            </div>
            <div className={classes.Right}>
                <Image />   
            </div>
        </div>
        
    );
};


export default (ruled);


