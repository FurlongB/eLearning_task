import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox'

import classed from './MCQ1.css';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
    },
});

const ErrorRadios = (props) => {
  const { classes } = props;
  const [answer, SetAnswer] = useState('1 nM to 100 nM')
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');

  const handleRadioChange = event => {
    setValue(event.target.value);
    setHelperText('');
    setError(null);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value === answer) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct option, foot pain is not a sympton of Covid-19.');
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have chosen an incorrect option, foot pain is not a sympton of Covid-19 while all other options are.');
      
    }
    setError(true);
    setValue('');
  };

  return (
    <div className={classed.Ruled}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
        <div className={classed.Left}>
            <div className={classed.box}>
                <form onSubmit={handleSubmit}>
                <div className={classed.questText}>3.	From the graph you have drawn of B<sub>spec</sub> in question 2, determine the equilibrium dissociation constant (K<sub>d</sub>) of SoP252</div>
                <div className={classed.promptText}>Please select one option, then click <b>Submit</b>.</div>
                    <FormControl component="fieldset" error={error} className={classes.formControl}>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} >
                        <FormControlLabel value="10 nM to 100 nM" control={<Radio />} label="10 nM to 100 nMh" />
                        <FormControlLabel value="10 nM to 50 nM" control={<Radio />} label="10 nM to 50 nM" />
                        <FormControlLabel value="1 nM to 100 nM" control={<Radio />} label="1 nM to 100 nM  - Correct" />
                        <FormControlLabel value="-1 nM to -100 nM" control={<Radio />} label="-1 nM to -100 nM" />
                        </RadioGroup>
                        <br/>
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={value === '' ? true : false}>
                            SUBMIT
                        </Button>
                    </FormControl>
                </form>
            </div>
        </div>
        <div className={classed.Right}>
            <Image />   
        </div>
    </div>
  );
}

ErrorRadios.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ErrorRadios);