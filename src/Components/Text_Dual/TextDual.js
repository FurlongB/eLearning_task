import React, {useState, useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import ScoreContext from '../../Context/score-context';

import classed from './TextDual.css';

const styles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
});

const TextDual = (props) => {
  const { classes } = props;
  const setCurScore = useContext(ScoreContext);
  const [answer, SetAnswer] = useState('0.6 to 60 fmol receptors/mg of tissue')
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
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
    value === answer ? calcScore(1) : calcScore(0);
  };

  const calcScore = (score) =>{
    let updatedScore = [];
    console.log('setCurScore.status: ',setCurScore.status.scores)
    updatedScore = setCurScore.status.scores;
    updatedScore[7] = score;
    console.log('Table updatedScore: ',updatedScore)
    setCurScore.setScre(updatedScore)
  };

  const inputData = (event) =>{
    console.log(event.target.value)
    setValue(event.target.value);
    setHelperText('');
    setError(null);
  }

  return (
    <div className={classed.Ruled}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
        <div className={classed.Left}>
            <div className={classed.box}>
                <div className={classed.questText}>Calculate the number of receptors in the tissue.  (Avogadro’s number = 6.02 X 10<sup>23</sup> ).</div>
                <div className={classed.promptText}>Please enter your answer in the space provided, then click <b>Submit</b>.</div>
                <div className={classed.InputForm}>
                  <div>
                    <b>Answer:</b>
                  </div>
                  <div>
                    <form className={classes.root} autoComplete="off">
                      <TextField id="userAns" variant="outlined" value={value} onChange={inputData.bind(this)}/>
                    </form>
                  </div>
                </div>
                <div className={classed.questText}><b>Hint:</b> <i>Bmax is the maximum concentration of drug bound to receptor</i></div>   
            </div>
            <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={value === '' ? true : false} onClick={handleSubmit.bind(this)}>
                  SUBMIT
            </Button> 
        </div>
        <div className={classed.Right}>
            <Image />   
        </div>
    </div>
  );
}

TextDual.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(TextDual);