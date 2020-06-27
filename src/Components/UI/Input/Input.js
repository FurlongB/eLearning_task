import React, {useState} from 'react';

import classes from './Input.css'

const input = (props) =>{
   const [value, setValue] = useState(props.value) 
   const [id, setID] = useState(props.id)
    
   const inputData = event =>{
       event.preventDefault();
       setValue(event.target.value);
       setID(event.target.id);
   }

    return(
        <div className={classes.Input}>
            <input type="text" id={props.id} onChange={inputData.bind(this)} value={value} onBlur={props.changed(id, value)} maxlength="10"/>
        </div>
    );
};

export default input;