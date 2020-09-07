import React, {useState, useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Input from '../UI/Input/Input';
import Feedback from '../FeedbackBox/FeedBackBox';
import Image from './Image/page1';

import ScoreContext from '../../Context/score-context';

import classed from './Table_input.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#29091f',
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 16,
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name) {
  return { name};
}

const rows = [
  createData('The slope of the line (m): '),
  createData('X intercept ='),
  createData('Y intercept = '),
  createData('Ka for SoP252: '),
  createData('Kd for SoP252: '),
  createData('Units for Kd: '),
  createData('Bmax: ')
];

const useStyles = makeStyles({
  table: {
   width: '100%',
   borderWidth: 1,
   borderColor: 'black',
   borderStyle: 'solid',
  },
});

const CustomizedTables = (props) => {
  const classes = useStyles();
  const setCurScore = useContext(ScoreContext);
  const [answer, SetAnswer] = useState(
    {
      r1_c1:0,
      r2_c1:0,
      r3_c1:0,
      r4_c1:0,
      r5_c1:0,
      r6_c1:0,
      r7_c1:0,

    });
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const correctAnswer = {
    r1_c1:'-0.01 to -0.1',
    r2_c1:'700 to 850 fmol/mg',
    r3_c1:'40 to 50 fmol/mg.nm-1',
    r4_c1:'0.01 to 0.1 nM-1',
    r5_c1:'10 to 30 nM',
    r6_c1:'nM',
    r7_c1:'700 to 850 fmol/mg',
  }
  const inputData = (id, value) =>{
    let updateAnswer = answer;
    updateAnswer[id] = value;
    SetAnswer(updateAnswer);
  }

  const handleSubmit = event => {
    event.preventDefault();
    let answerValues = []
    const keys = Object.keys(correctAnswer)
    for (const key of keys) {
      console.log(typeof (correctAnswer[key]))
      if(typeof (correctAnswer[key]) === 'object'){

        if((parseFloat(answer[key]).toFixed(1) >= parseFloat(correctAnswer[key][0]).toFixed(1)) &&  (parseFloat(answer[key]).toFixed(1) <= parseFloat(correctAnswer[key][1]).toFixed(1))){
          answerValues.push(true);
        }else{
          answerValues.push(false);
        }
      }else{
        console.log('correctAnswer[key]: ', correctAnswer[key]);
        console.log('answer[key]: ', answer[key]);
        if(correctAnswer[key] === answer[key]){
          answerValues.push(true);
        }else{
          answerValues.push(false);
        }
      }
    } 
   
    let allCorrect = Object.values(answerValues).every(Boolean)
    console.log('allCorrect: ', allCorrect)
    if (allCorrect) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct option, foot pain is not a sympton of Covid-19.');
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have chosen an incorrect option, foot pain is not a sympton of Covid-19 while all other options are.');
      
    }
    //setCurve.setSect(answer)
    setError(true);
    allCorrect ? calcScore(1) : calcScore(0);
  };

  const calcScore = (score) =>{
    let updatedScore = [];
    console.log('setCurScore.status: ',setCurScore.status.scores)
    updatedScore = setCurScore.status.scores;
    updatedScore[6] = score;
    console.log('Table updatedScore: ',updatedScore)
    setCurScore.setScre(updatedScore)
  };

   return (
    <div className={classed.Ruled}>
      <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
      </div>
      <div className={classed.Left}>
        <div className={classed.box}>
            <div className={classed.questText}>
              From the scatchard plot you’ve prepared for SoP252, calculate the following
            </div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Calculate the following</StyledTableCell>
                    <StyledTableCell align="left">Answers</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                      {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="left"><Input id={"r"+Number(index+1)+"_c1"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c1"] } char="25"/></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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

export default CustomizedTables;
