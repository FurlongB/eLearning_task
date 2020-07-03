import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import classed from './SelectPlot.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const NativeSelects = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const correctAnswer = {ANS: '1 X 1011 to 10 X 1011', Units: 'fmol/mg of tissue'}
  const [state, setState] = React.useState({
    xAxis: '',
    yAxis: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (Object.entries(correctAnswer).toString() === Object.entries(state).toString()) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct option, foot pain is not a sympton of Covid-19.');
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have chosen an incorrect option, foot pain is not a sympton of Covid-19 while all other options are.');
      
    }
    setError(true);
  };

  return (
    <div className={classed.Ruled}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
      </div>
      <div className={classed.Left}>
        <div className={classed.box}>
        <div className={classed.questText}>8.	Calculate the number of receptors in the tissue.  (Avogadro’s number = 6.02 X 10<sup>23</sup>)?</div>
            <form>
            <label htmlFor="ANS">ANS:</label>
                <select name="ANS" id="ANS" onChange={handleChange.bind(this)}>
                    <option value="1 X 10-11 to 10 X 1011">1 X 10<sup>-11</sup> to 10 X 10<sup>11</sup></option>
                    <option value="1 X 1011 to 10 X 10-11">1 X 10<sup>11</sup> to 10 X 10<sup>-11</sup></option>
                    <option value="1 X 1011 to 10 X 1011">1 X 10<sup>11</sup> to 10 X 10<sup>11</sup> - Correct</option>
                    <option value="1 X 10-11 to 1 X 1011">1 X 10<sup>11</sup> to 1 X 10<sup>-11</sup></option>
                </select>
                <br/><br/>
                <label htmlFor="Units">Units:</label>
                <select name="Units" id="Units" onChange={handleChange.bind(this)}>
                    <option value="fmol/mg of tissue">fmol/mg of tissue - Correct</option>
                    <option value="fmol/mmg of tissue">fmol/mmg of tissue</option>
                    <option value="fmols/mmg of tissue">fmols/mmg of tissue</option>
                    <option value="fmols/mg of tissue">fmols/mg of tissue</option>
                </select>
            </form>
         </div> 
        <Button type="submit" variant="contained" color="secondary" className={classes.button}  onClick={handleSubmit.bind(this)}>
          SUBMIT
        </Button>
      </div>
      <div className={classed.Right}>
            <Image />   
      </div>
    </div>
  );
}

export default NativeSelects;
