import React, {useState, useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import ScoreContext from '../../Context/score-context';

import classed from './Bind_Data.css';

const styles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '8ch',
      },
    },
});

const ErrorRadios = (props) => {
  const { classes } = props;
  const setCurScore = useContext(ScoreContext);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const [questAnswered, setQuestAnswered] = useState(false);
  const correctAnswer = {SoP241: [0.5, 50], SoP652: [0.1, 10]}
  const [state, setState] = useState({
    SoP241: '',
    SoP652: '',
  });
  const handleSubmit = event => {
    event.preventDefault();
    
    if ((Number(state['SoP241']) >= correctAnswer['SoP241'][0] &&  Number(state['SoP241']) <= correctAnswer['SoP241'][1]) && (Number(state['SoP652']) >= correctAnswer['SoP652'][0] &&  Number(state['SoP652']) <= correctAnswer['SoP652'][1]) ) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have plotted the Scatchard plots for SoP241 and SoP652.');
      calcScore(1);
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have not plotted the Scatchard plots for SoP241 and SoP652.');
      calcScore(0);
    }
    setError(true);
    setQuestAnswered(true);
    props.nextBut(true);
  };

  const calcScore = (score) =>{
    let updatedScore = [];
    console.log('setCurScore.status: ',setCurScore.status.scores)
    updatedScore = setCurScore.status.scores;
    updatedScore[8] = score;
    console.log('Table updatedScore: ',updatedScore)
    setCurScore.setScre(updatedScore)
  };

  const inputData = (event) =>{
    console.log(event.target.id)
    const name = event.target.id;
    setState({
      ...state,
      [name]: event.target.value,
    });
    setHelperText('');
    setError(null);
  }

  return (
    <div className={classed.Ruled}>
      <div className={classed.box}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
        <div className={classed.Left}>
            
                <div className={classed.questText}>From the data provided in the tables above, plot the Scatchard plots for SoP241 and SoP652 and calculate the K<sub>d</sub> for each drug:</div>
                <div className={classed.promptText}>Please enter your answer in the spaces provided, then click <b>Submit</b>.</div>
                <div className={classed.InputForm}>
                  <div className={classed.FormLayout}>
                    <div>
                      <b>SoP241:  </b>
                    </div>
                    <div>
                      <form className={classes.root} autoComplete="off">
                        <TextField id="SoP241" variant="outlined" value={state.SoP241} onChange={inputData.bind(this)} disabled={questAnswered}/>
                      </form>
                    </div>
                    <div>
                      <b>&micro;M</b>
                    </div>
                  </div>
                  <div className={classed.FormLayout}>
                    <div>
                      <b>SoP652:  </b>
                    </div>
                    <div>
                      <form className={classes.root} autoComplete="off">
                        <TextField id="SoP652" variant="outlined" value={state.SoP652} onChange={inputData.bind(this)} disabled={questAnswered}/>
                      </form>
                    </div>
                    <div>
                      <b>&micro;M</b>
                    </div>
                  </div>
                  
                
                <div className={classed.questText}><b>Hint:</b> <i>provide answer in nM only/i.e. if necessary, convert to nM</i></div>   
            </div>
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