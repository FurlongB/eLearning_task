import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Option from './Option/Option';

import classes from './QuestionOptions.css'

const questOptions = (props) =>{
    const [curOpts, setCurOpts] = useState(null);
    const [submitOpt, setSubmitOpt] = useState(false);
    const [userOpt, setUserOpt] = useState(null);
    useEffect(() =>{
        let options = null; 
        options = props.options.map(titles =>(
            <Option id={titles.id} key={titles.id} text={titles.option_txt} OptClick={optionClick.bind(this)}/>
        ));
        setCurOpts(options);
        return () =>{
            //console.log('Clean Up');
        }
    }, []);

    const optionClick = (id) =>{
        //console.log("id: ", id);
        setUserOpt(id);
        setSubmitOpt(true);
    }

    const submitHandler = () =>{
        props.submitClick(userOpt)
    }

    return(
        <div>
            <div className={classes.OptionIndictor}>
                {curOpts}
            </div>
            <div className={classes.SubmitButton}>
                <Button type="submit" variant="contained" color="secondary" disabled={!submitOpt} onClick={submitHandler.bind(this)}>
                    SUBMIT
                </Button>
            </div>
        </div>
    )
}

export default questOptions;