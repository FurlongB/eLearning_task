import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import classed from './Sentence.css'

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
  const correctAnswer = {ANS_1: 'specific', ANS_2: 'high', ANS_3: 'selective', ANS_4: 'concentration', ANS_5: 'selective', }
  const [state, setState] = React.useState({
    ANS_1: '',
    ANS_2: '',
    ANS_3: '',
    ANS_4: '',
    ANS_5: '',
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
    props.calScore(Object.entries(correctAnswer).toString() === Object.entries(state).toString() ? 1 : 0, "12");
  };

  return (
    <div className={classed.Ruled}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
      </div>
      <div className={classed.Left}>
        <div className={classed.box}>
        <div className={classed.questText}>Complete the following statement</div>
        <div className={classed.sentence}>
          Most drugs are  { <select name="ANS_1" id="ANS_1" onChange={handleChange.bind(this)} className={classed.Select}>
                            <option value="-----">-----</option>
                            <option value="selective">selective</option>
                            <option value="specific">specific</option>
                            <option value="efficacious">efficacious</option>
                            <option value="potent">potent</option>
          </select>} which means the drug binds with {<select name="ANS_2" id="ANS_2" onChange={handleChange.bind(this)} className={classed.Select}>
                            <option value="-----">-----</option>
                            <option value="low">low</option>
                            <option value="high">high</option>
                            <option value="loose">loose</option>
                            <option value="positive">positive</option>
                        </select>} chemical affinity to a receptor. Drugs are seldom {<select name="ANS_3" id="ANS_3" onChange={handleChange.bind(this)} className={classed.Select}>
                            <option value="-----">-----</option>
                            <option value="selective">selective</option>
                            <option value="specific">specific</option>
                            <option value=" efficacious"> efficacious</option>
                            <option value="potent">potent</option>
                        </select>}. It is the {<select name="ANS_4" id="ANS_4" onChange={handleChange.bind(this)} className={classed.Select}>
                            <option value="-----">-----</option>
                            <option value="size">size</option>
                            <option value="concentration">concentration</option>
                            <option value="shape">shape</option>
                            <option value="affinity">affinity</option>
          </select>},  at which a drug is administered that dictates if the drug is {<select name="ANS_5" id="ANS_5" onChange={handleChange.bind(this)} className={classed.Select}>
                            <option value="-----">-----</option>
                            <option value="selective">selective</option>
                            <option value="specific">specific</option>
                            <option value="efficacious">efficacious</option>
                            <option value="potent">potent</option>
          </select>} for a particular receptor.  
        </div>
                
            
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
