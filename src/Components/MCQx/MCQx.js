import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Feedback from '../FeedbackBox/FeedBackBox';
import Image from './Image/page1';

import classed from './MCQx.css';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

const CheckboxesGroup = (props) => {
  const { classes } = props;
  const theAnswer = {
      fever:true,
      cough:true,
      tiredness:true,
      footpain:false,
      itchy:false
  }  

  const [title, setTitle] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');

  const [answers, setAnswers] = useState({
    cough: false,
    fever: false,
    tiredness: false,
    footpain: false,
    itchy:false,
  });

  

  const handleChange = event => {
    setAnswers({ ...answers, [event.target.name]: event.target.checked });
    checkSubmit();
  };

  const checkSubmit = () =>{
    let checked = false;
    const checkOptions = answers;
    for (const key in checkOptions ){
      if(checkOptions[key]){
          checked = true;
      };
    };
    if(checked){
      setChecked(true)
    }else{
      setChecked(false)
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    let correctAnswers = 0;
    console.log('answers: ', Object.keys(theAnswer).length)
    for (const key in answers ){
      if(answers[key] === theAnswer[key]){
          correctAnswers++;
      };
    };
    console.log('correctAnswers: ', correctAnswers)
    if (correctAnswers === Object.keys(theAnswer).length) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct options, fever, cough and tiredness are symptons of Covid-19.');
    }else if(correctAnswers === 0){
      setTitle('Icorrect')
      setHelperText('Incorrect you have not chosen the correct options, fever, cough and tiredness are symptons of Covid-19.');
    } else {
      setTitle('Partially Correct')
      setHelperText('Incorrect you have chosen some of the correct options, fever, cough and tiredness are symptons of Covid-19.');
      
    }
    setError(true);
    setChecked(false);
  };

  

  return (
    <div className={classed.Ruled}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
        <div className={classed.Left}>
           <div className={classed.box}>
                <div className={classes.root}>
                <form onSubmit={handleSubmit}> 
                <h1>{props.pageTitle}</h1>
                <div className={classed.questText}>Which of the below options are symptons of Covid-19?</div>
                <div className={classed.promptText}>Please select all the correct options, then click <b>Submit</b>.</div>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={answers.fever} onChange={handleChange} name="fever" />}
                            label="Fever - Correct"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={answers.footpain} onChange={handleChange} name="footpain" />}
                            label="Foot Pain"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={answers.tiredness} onChange={handleChange} name="tiredness" />}
                            label="Tiredness - Correct"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={answers.cough} onChange={handleChange} name="cough" />}
                            label="Cough - Correct"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={answers.itchy} onChange={handleChange} name="itchy" />}
                            label="Itchy"
                        />
                        </FormGroup>
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={!checked ? true : false}>
                            SUBMIT
                        </Button>
                    </FormControl>
                </form> 
                </div>
            </div>
        </div>
        <div className={classed.Right}>
            <Image />   
        </div>
    </div>
  );
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(CheckboxesGroup);