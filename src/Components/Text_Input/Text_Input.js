import React, {useState, useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import ScoreContext from '../../Context/score-context';

import classed from './Text_Input.css';

const styles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '15ch',
      },
    },
});

const ErrorRadios = (props) => {
  const { classes } = props;
  const setCurScore = useContext(ScoreContext);
  const [answer, SetAnswer] = useState([10, 100])
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const [questAnswered, setQuestAnswered] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    if (Number(value) >= answer[0] && Number(value) <= answer[1]) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have determined the equilibrium dissociation constant (Kd) of SoP252.');
      calcScore(1)
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have not determined the equilibrium dissociation constant (Kd) of SoP252.');
      calcScore(0)
    }
    setError(true);
    setQuestAnswered(true);
    props.nextBut(true);
  };

  const inputData = (event) =>{
    //console.log(event.target.value)
    setValue(event.target.value);
    setHelperText('');
    setError(null);
  }

  const calcScore = (score) =>{
    let updatedScore = [];
    //console.log('setCurScore.status: ',setCurScore.status.scores)
    updatedScore = setCurScore.status.scores;
    updatedScore[2] = score;
    //console.log('Table updatedScore: ',updatedScore)
    setCurScore.setScre(updatedScore)
  };

  return (
    <div className={classed.Ruled}>
      <div className={classed.box}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
        <div className={classed.Left}>
            
                <div className={classed.questText}>From the graph you have drawn of B<sub>spec</sub> in question 2, determine the equilibrium dissociation constant (K<sub>d</sub>) of SoP252. Provide answer in nM only i.e. if necessary, convert to nM</div>
                <div className={classed.promptText}>Please enter your answer in the space provided, then click <b>Submit</b>.</div>
                <div className={classed.InputForm}>
                  <div>
                    <b>Answer:</b>
                  </div>
                  <div>
                    <form className={classes.root} autoComplete="off">
                      <TextField id="userAns" variant="outlined" value={value} onChange={inputData.bind(this)} disabled={questAnswered}/>
                    </form>
                  </div>
                </div>
                <div className={classed.questText}><b>Hint:</b> <i>nM = 10<sup>-9</sup>; &micro;M is 10<sup>-6</sup>; mM = 10<sup>-3</sup></i></div>   
                <div className={classed.Button}>
                  <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={questAnswered} onClick={handleSubmit.bind(this)}>
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

ErrorRadios.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ErrorRadios);