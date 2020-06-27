import React, {useState} from 'react';
import classes from './Option.css'

const option = (props) =>{
    const [active, setActive] = useState(false);
    const clickThis = (id) =>{
        props.OptClick(id);
        setActive(!active);
    }
    return(
        <div className={!active ? classes.Option: classes.Selected} onClick={clickThis.bind(this, props.id)}>
            {props.text}
        </div>
    )
}
export default option;