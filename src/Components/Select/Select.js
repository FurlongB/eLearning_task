import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import ScoreContext from '../../Context/score-context';

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
  const setCurScore = useContext(ScoreContext);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const [questAnswered, setQuestAnswered] = useState(false);
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
      setHelperText('Congratulations you have selected the correct units for the X and Y axis.');
      calcScore(1)
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have not selected the correct units for the X and Y axis.');
      calcScore(0)
    }
    setQuestAnswered(true);
    setError(true);
    props.nextBut(true);
  };

  const calcScore = (score) =>{
    let updatedScore = [];
    console.log('setCurScore.status: ',setCurScore.status.scores)
    updatedScore = setCurScore.status.scores;
    updatedScore[4] = score;
    console.log('Table updatedScore: ',updatedScore)
    setCurScore.setScre(updatedScore)
  };

  return (
    <div className={classed.Ruled}>
      <div className={classed.box}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
        <div className={classed.Left}>
        
          <div className={classed.questText}>What are the units for the X and Y axis?</div>
            <form>
            <label htmlFor="xAxis">Units for the X axis:</label>
                <select name="xAxis" id="xAxis" onChange={handleChange.bind(this)} disabled={questAnswered}>
                    <option value="mg/fmol">mg/fmol</option>
                    <option value="mg*fmol">mg*fmol</option>
                    <option value="fmol/mg">fmol/mg</option>
                    <option value="fmol*mg">fmol*mg</option>
                </select>
                <br/><br/>
                <label htmlFor="yAxis">Units for the Y axis:</label>
                <select name="yAxis" id="xAxis" onChange={handleChange.bind(this)} disabled={questAnswered}>
                    <option value="fmol/mg.nm1">fmol/mg.nm&sup1;</option>
                    <option value="fmol/mg.nm-1">fmol/mg.nm&oline;&sup1;</option>
                    <option value="mg.nm/fmol-1">mg.nm/fmol&oline;&sup1;</option>
                    <option value="mg.nm/fmol1">mg.nm/fmol&sup1;</option>
                </select>
            </form>
            <div className={classed.Button}> 
              <Button type="submit" variant="contained" color="secondary" className={classes.button}  onClick={handleSubmit.bind(this)} disabled={questAnswered}>
                SUBMIT
              </Button>
            </div>
        </div>
        <div className={classed.Right}>
              <Image />   
        </div>
      </div>
    </div>
  );
}

export default NativeSelects;
