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
        width: '8ch',
      },
    },
});

const Receptors = (props) => {
  const { classes } = props;
  const setCurScore = useContext(ScoreContext);
  const [answer, SetAnswer] = useState([0.1, 50, 0.1, 50]);
  const [powerOf, setPowerOf] = useState([11, 11]);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [value_1, setValue_1] = useState('');
  const [power, setPower] = useState('');
  const [power_1, setPower_1] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const handleSubmit = event => {
    event.preventDefault();

    if (((parseFloat(value) >= answer[0] && parseFloat(value) <= answer[1]) && Number(power) === powerOf[0]) && ((parseFloat(value_1) >= answer[2] && parseFloat(value_1) <= answer[3]) && Number(power_1) === powerOf[1])) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have entered the correct data for calculating the number of receptors in the tissue.');
      calcScore(1)
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have not entered the correct data for calculating the number of receptors in the tissue.');
      calcScore(0);
    }
    setError(true);
    setValue('');
    setPower('');
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

    console.log(event.target.id)
    if(event.target.id === 'userAns'){
      setValue(event.target.value);
    }else if(event.target.id === 'userAns_1'){
      setValue_1(event.target.value);
    }else if(event.target.id === 'powerAns'){
      setPower(event.target.value);
    }else{
      setPower_1(event.target.value);
    }
    
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
            
                <div className={classed.questText}>Using the scatchard plots you have created for SoP421 and SoP514, Calculate the number of receptors in the tissue. (Avogadro’s number = 6.02 X 10<sup>23</sup>).</div>
                <div className={classed.promptText}>Please enter your answer in the space provided, then click <b>Submit</b>.</div>
                <div className={classed.InputForm}>
                  <div>
                    <b>SoP241:</b>
                  </div>
                  <div>
                    <form className={classes.root} autoComplete="off">
                      <TextField id="userAns" variant="outlined" value={value} onChange={inputData.bind(this)}/>
                    </form>
                  </div>
                  <div>
                    <b>X 10 </b>
                  </div>
                  <div className={classed.supText}>
                     <form className={classes.root} autoComplete="off">
                     <TextField id="powerAns" variant="outlined" value={power} onChange={inputData.bind(this)}/>
                    </form>
                  </div>
                  <div>
                    <b>receptors/mg of tissue  </b>
                  </div>
                </div>
                <div className={classed.InputForm}>
                  <div>
                    <b>SoP652:</b>
                  </div>
                  <div>
                    <form className={classes.root} autoComplete="off">
                      <TextField id="userAns_1" variant="outlined" value={value_1} onChange={inputData.bind(this)}/>
                    </form>
                  </div>
                  <div>
                    <b>X 10 </b>
                  </div>
                  <div className={classed.supText}>
                     <form className={classes.root} autoComplete="off">
                     <TextField id="powerAns_1" variant="outlined" value={power_1} onChange={inputData.bind(this)}/>
                    </form>
                  </div>
                  <div>
                    <b>receptors/mg of tissue  </b>
                  </div>
                </div>
                <div className={classed.Button}>
                  <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={(value === '' && power === '' && value_1 === '' && power_1 === '') ? true : false} onClick={handleSubmit.bind(this)}>
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

Receptors.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Receptors);