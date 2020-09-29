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
import Select from '../UI/Select/Select'
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
  createData('Bmax: '),
  createData('What are the units for Bmax: ')
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
      r8_c1:0,
    });
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const [questAnswered, setQuestAnswered] = useState(false);
  const correctAnswer = {
    r1_c1:[-0.01, -0.1],
    r2_c1:[700, 850],
    r3_c1:[35, 55],
    r4_c1:[0.01, 0.1],
    r5_c1:[1, 45],
    r6_c1:'nM',
    r7_c1:[700, 850],
    r8_c1:'fmol/mg',
  };
  const needSelect = {
    r1_c1:false,
    r2_c1:true,
    r3_c1:true,
    r4_c1:true,
    r5_c1:true,
    r6_c1:false,
    r7_c1:false,
    r8_c1:false,
  };
  const inputData = (id, value) =>{
    let updateAnswer = answer;
    updateAnswer[id] = value;
    SetAnswer(updateAnswer);
  }

  const cortAnswer = {r2_c1: 'fmol/mg', r3_c1: 'fmol/mg.nM-1', r4_c1: 'nM-1', r5_c1: 'nM'}
  const [state, setState] = useState({
    r2_c1: '',
    r3_c1: '',
    r4_c1: '',
    r5_c1: '',
  });

  

  const selectData = (id, value) =>{
    const name = id;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    let answerValues = []
    const keys = Object.keys(correctAnswer)
    for (const key of keys) {
      //console.log(typeof (correctAnswer[key]))
      if(typeof (correctAnswer[key]) === 'object'){
        
        if((parseFloat(answer[key]).toFixed(2) >= parseFloat(correctAnswer[key][0]).toFixed(2)) &&  (parseFloat(answer[key]).toFixed(2) <= parseFloat(correctAnswer[key][1]).toFixed(2))){
          answerValues.push(true);
        }else{
          answerValues.push(false);
        }
      }else{
        if(correctAnswer[key] === answer[key]){
          answerValues.push(true);
        }else{
          answerValues.push(false);
        }
      }
    } 
   
    let allCorrect = Object.values(answerValues).every(Boolean)
    let allSelect = false;
    //console.log('Object.entries(state).toString(): ', Object.entries(state).toString())

    if (Object.entries(cortAnswer).toString() === Object.entries(state).toString()) {
      allSelect = true;
    }

    if (allCorrect && allSelect) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have completed the table correctly.');
      calcScore(1);
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have not completed the table correctly.');
      calcScore(0);
    }
    //setCurve.setSect(answer)
    setQuestAnswered(true);
    setError(true);
    props.nextBut(true);
  };

  const calcScore = (score) =>{
    let updatedScore = [];
    //console.log('setCurScore.status: ',setCurScore.status.scores)
    updatedScore = setCurScore.status.scores;
    updatedScore[6] = score;
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
       
            <div className={classed.questText}>
              From the Scatchard plot you’ve prepared for SoP252, calculate the following:
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
                      <StyledTableCell align="left"><div className={classed.tabCell}>
                          <div className={classed.tabInput}><Input id={"r"+Number(index+1)+"_c1"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c1"]} char="7" disabled={questAnswered}/></div><div>{needSelect["r"+Number(index+1)+"_c1"] ? <Select Name={"r"+Number(index+1)+"_c1"} handleSelect={selectData.bind(this)} qAns={questAnswered}/> : null}</div>
                          </div></StyledTableCell> 
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
         
            <div className={classed.Button}>
                  <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={handleSubmit.bind(this)} disabled={questAnswered}>
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

export default CustomizedTables;
