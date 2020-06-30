import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import classed from './Select.css'

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
  const correctAnswer = {xAxis: 'fmol/mg', yAxis: 'fmol/mg.nm-1'}
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
        <div className={classed.questText}>What are the units for the X and Y axis?</div>
            <form>
            <label htmlFor="xAxis">Units for the X axis:</label>
                <select name="xAxis" id="xAxis" onChange={handleChange.bind(this)}>
                    <option value="mg/fmol">mg/fmol</option>
                    <option value="mg*fmol">mg*fmol</option>
                    <option value="fmol/mg">fmol/mg - Correct</option>
                    <option value="fmol*mg">fmol*mg</option>
                </select>
                <br/><br/>
                <label htmlFor="yAxis">Units for the Y axis:</label>
                <select name="yAxis" id="xAxis" onChange={handleChange.bind(this)}>
                    <option value="fmol/mg.nm1">fmol/mg.nm&sup1;</option>
                    <option value="fmol/mg.nm-1">fmol/mg.nm&oline;&sup1; - Correct</option>
                    <option value="mg.nm/fmol-1">mg.nm/fmol&oline;&sup1;</option>
                    <option value="mg.nm/fmol1">mg.nm/fmol&sup1;</option>
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
