import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const correctAnswer = {ANS_1: 'SoP241', ANS_2: 'SoP652', ANS_3: 'SoP652', ANS_4: 'SoP252' }
  const [state, setState] = React.useState({
    ANS_1: '',
    ANS_2: '',
    ANS_3: '',
    ANS_4: '',
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
    console.log('Object.entries(correctAnswer).toString():', Object.entries(correctAnswer).toString())
    console.log('Object.entries(state).toString():', Object.entries(state).toString())
    if (Object.entries(correctAnswer).toString() === Object.entries(state).toString()) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct option, foot pain is not a sympton of Covid-19.');
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have chosen an incorrect option, foot pain is not a sympton of Covid-19 while all other options are.');
      
    }
    setError(true);
    props.calScore(Object.entries(correctAnswer).toString() === Object.entries(state).toString() ? 1 : 0, "11");
  };

  return (
    <div className={classed.Ruled}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
      </div>
      <div className={classed.Left}>
        <div className={classed.box}>
        <div className={classed.questText}>Fill in the binding affinities (Kd) you calculated for SoP252, SoP241 and SoP652 at the new receptor.</div>
            <form>
            <label htmlFor="ANS_1">Which drug has the highest binding affinity for the novel receptor?  </label>
                <select name="ANS_1" id="ANS_1" onChange={handleChange.bind(this)} className={classed.Select}>
                    <option value="-----">-----</option>
                    <option value="SoP241">SoP241</option>
                    <option value="SoP252">SoP252</option>
                    <option value="SoP652">SoP652</option>
                    <option value="None">None of the drugs</option>
                </select>
                <br/><br/>
                <label htmlFor="ANS_2">Which drug has the poorest binding affinity for the novel receptor?</label>
                <select name="ANS_2" id="ANS_2" onChange={handleChange.bind(this)} className={classed.Select}>
                    <option value="-----">-----</option>
                    <option value="SoP241">SoP241</option>
                    <option value="SoP252">SoP252</option>
                    <option value="SoP652">SoP652</option>
                    <option value="None">None of the drugs</option>
                </select>
                <br/><br/>
                <label htmlFor="ANS_3">Which drug has the highest binding affinity for the D1 receptor?</label>
                <select name="ANS_3" id="ANS_3" onChange={handleChange.bind(this)} className={classed.Select}>
                    <option value="-----">-----</option>
                    <option value="SoP241">SoP241</option>
                    <option value="SoP252">SoP252</option>
                    <option value="SoP652">SoP652</option>
                    <option value="None">None of the drugs</option>
                </select>
                <br/><br/>
                <label htmlFor="ANS_4">Which drug would produce the most selective responses at the new receptor?</label>
                <select name="ANS_4" id="ANS_4" onChange={handleChange.bind(this)} className={classed.Select}>
                    <option value="-----">-----</option>
                    <option value="SoP241">SoP241</option>
                    <option value="SoP252">SoP252</option>
                    <option value="SoP652">SoP652</option>
                    <option value="None">None of the drugs</option>
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
