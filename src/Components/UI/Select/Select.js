import React, {useState} from 'react';

import classes from './Select.css'

const input = (props) =>{
    
   const handleChange = event =>{
       event.preventDefault();
       props.handleSelect(event.target.id, event.target.value)
   }

    return(
        <div className={classes.Select}>
            <select name={props.Name} id={props.Name} onChange={handleChange.bind(this)} disabled={props.qAns}>
                <option value="----">----</option>
                <option value="fmol/mg">fmol/mg</option>
                <option value="nM-1">nM&oline;&sup1;</option>
                <option value="fmol/mg.nm-1">fmol/mg.nm&oline;&sup1;</option>
                <option value="nM">nM</option>
            </select>
        </div>
    );
};

export default input;