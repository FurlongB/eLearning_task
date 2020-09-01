import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import classed from './CheckList.css';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        
    },
});

const ErrorRadios = (props) => {
  const { classes } = props;
  const [answers, setAnswers] = useState({a:null,b:null,c:null,d:null,e:null,f:null,g:null,h:null,i:null,j:null,k:null,l:null})
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const handleRadioChange = event => {
     let newAnswers = answers;
     /*let thisAns = 'No'
     if(event.target.value.indexOf('1') > -1){
        thisAns = 'Yes'
     }*/
    newAnswers[event.target.name] =  event.target.value;
    console.log('newAnswers@ ', newAnswers)
    //setHelperText('');
    setValue(event.target.value);
    setAnswers(newAnswers);
    setError(null);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setError(true);
    setValue('');
  };

  return (
    <div className={classed.Ruled}>
        <div className={classed.Left}>
            <div className={classed.box}>
                
                <div className={classed.questText}>Review your knowledge and provide Yes/No to the following statements: </div>
                <div className={classed.promptText}>If you have answer no to any of these statements, please get in touch with me by email <u>f.furlong@qub.ac.uk</u></div>
                <form action={handleSubmit}>
                    <FormControl component="fieldset" name="a_grp" error={error} className={classes.formControl}>
                        <RadioGroup row aria-label="position" name="a_grp" value={answers.a} onChange={handleRadioChange} >
                            <b>a) Do you know how to calculate B<sub>specific</sub>?</b>
                            <FormControlLabel value="a1" name="a" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="a0"  name="a" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>

                        <br/>
  
                        <RadioGroup row aria-label="position" name="b_grp" value={answers.b} onChange={handleRadioChange} >
                            <b>b) Do you know how to draw a dose response curve for B<sub>specific</sub>?</b>
                            <FormControlLabel value="b1" name="b" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="b0"  name="b" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                      
                        <br/>
                        <RadioGroup row aria-label="position" name="c_grp" value={answers.c} onChange={handleRadioChange} >
                            <b>c) Do you know the labels and units of the x and y axis for a dose response curve of B<sub>specific</sub>?</b>
                            <FormControlLabel value="c1" name="c" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="c0"  name="c" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="d_grp" value={answers.d} onChange={handleRadioChange} >
                            <b>d) Do you know what to plot on X and Y axis of a Scatchard plot?</b>
                            <FormControlLabel value="d1" name="d" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="d0"  name="d" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="e_grp" value={answers.e} onChange={handleRadioChange} >
                            <b>e) Do you know the labels and units of the X and Y axis for a Scatchard plot?</b>
                            <FormControlLabel value="e1" name="e" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="e0"  name="e" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="f_grp" value={answers.f} onChange={handleRadioChange} >
                            <b>f) Do you know how to calculate K<sub>a</sub> of a compound from the Scatchard plot?</b>
                            <FormControlLabel value="f1" name="f" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="f0"  name="f" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="g_grp" value={answers.g} onChange={handleRadioChange} >
                            <b>g) Do you know how to calculate K<sub>d</sub> of a compound from the Scatchard plot?</b>
                            <FormControlLabel value="g1" name="g" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="g0"  name="g" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="h_grp" value={answers.h} onChange={handleRadioChange} >
                            <b>h) Do you know the units of K<sub>a</sub> and K<sub>d</sub> or how to get this information from a Scatchard plot?</b>
                            <FormControlLabel value="h1" name="h" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="h0"  name="h" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="i_grp" value={answers.i} onChange={handleRadioChange} >
                            <b>i) Do you know how to calculate B<sub>max</sub> from a Scatchard plot and do you know what this figure refers to?</b>
                            <FormControlLabel value="i1" name="i" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="i0"  name="i" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="j_grp" value={answers.j} onChange={handleRadioChange} >
                            <b>j) Do you know how to calculate the number of receptors in a tissue from information provided in a Scatchard plot?</b>
                            <FormControlLabel value="j1" name="j" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="j0"  name="j" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="k_grp" value={answers.k} onChange={handleRadioChange} >
                            <b>k) Do you know the units of the receptor calculation using a Scatchard plot?</b>
                            <FormControlLabel value="k1" name="k" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="k0"  name="k" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <RadioGroup row aria-label="position" name="l_grp" value={answers.l} onChange={handleRadioChange} >
                            <b>l) Do you understand the difference between specific and Selective binding?</b>
                            <FormControlLabel value="l1" name="l" control={<Radio />} label="Yes" labelPlacement="top"/>
                            <FormControlLabel value="l0"  name="l" control={<Radio />} label="No" labelPlacement="top"/>
                        </RadioGroup>
                        <br/>
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={value === '' ? true : false}>
                            SUBMIT
                        </Button>
                    </FormControl>  
                </form>
            </div>
        </div>
    </div>
  );
}

ErrorRadios.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ErrorRadios);