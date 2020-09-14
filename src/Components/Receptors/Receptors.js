import React, {useState, useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import ScoreContext from '../../Context/score-context';

import classed from './Receptors.css';

const styles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
});

const ErrorRadios = (props) => {
  const { classes } = props;
  const setCurScore = useContext(ScoreContext);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const correctAnswer = {SoP241: '0.6 to 60 fmol of receptors/mg of tissue', SoP652: '0.6 to 60 fmol of receptors/mg of tissue'}
  const [state, setState] = React.useState({
    SoP241: '',
    SoP652: '',
  });
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
    (Object.entries(correctAnswer).toString() === Object.entries(state).toString()) ? calcScore(1) : calcScore(0);
  };

  const calcScore = (score) =>{
    let updatedScore = [];
    console.log('setCurScore.status: ',setCurScore.status.scores)
    updatedScore = setCurScore.status.scores;
    updatedScore[9] = score;
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
            
                <div className={classed.questText}>Using the scatchard plots you have created for SoP421 and SoP514, Calculate the number of receptors in the tissue.  (Avogadro’s number = 6.02 X 10<sup>23</sup>).</div>
                <div className={classed.promptText}>Please enter your answer in the spaces provided, then click <b>Submit</b>.</div>
                <div className={classed.InputForm}>
                  <div className={classed.FormLayout}>
                    <div>
                      <b>SoP241:  </b>
                    </div>
                    <div>
                      <form className={classes.root} autoComplete="off">
                        <TextField id="SoP241" variant="outlined" value={state.SoP241} onChange={inputData.bind(this)}/>
                      </form>
                    </div>
                  </div>
                  <div className={classed.FormLayout}>
                    <div>
                      <b>SoP652:  </b>
                    </div>
                    <div>
                      <form className={classes.root} autoComplete="off">
                        <TextField id="SoP652" variant="outlined" value={state.SoP652} onChange={inputData.bind(this)}/>
                      </form>
                    </div>
                  </div>
                  
                
                <div className={classed.questText}><b>Hint:</b> <i>provide answer in nM only/i.e. if necessary, convert to nM</i></div>   
            </div>
            <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={state.SoP241 === '' && state.SoP652 === '' ? true : false} onClick={handleSubmit.bind(this)}>
                  SUBMIT
            </Button> 
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