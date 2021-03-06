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

import ScoreContext from '../../Context/score-context';

import classed from './Table_bspec.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#29091f',
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 14,
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
  createData(' '),
  createData('10'),
  createData('20'),
  createData('30'),
  createData('100'),
  createData('150'),
  createData('200'),
  createData('300'),
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
  const [questAnswered, setQuestAnswered] = useState(false);
  const [answer, SetAnswer] = useState(
    {
      r1_c1:'Enter the Label Name',
      r1_c2:'Enter the Label Name',
      r2_c1:'0',
      r2_c2:'0',
      r3_c1:'0',
      r3_c2:'0',
      r4_c1:'0',
      r4_c2:'0',
      r5_c1:'0',
      r5_c2:'0',
      r6_c1:'0',
      r6_c2:'0',
      r7_c1:'0',
      r7_c2:'0',
      r8_c1:'0',
      r8_c2:'0',
    });
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const correctAnswer = {
    r1_c1:'Bspec',
    r1_c2:'B/D*',
    r2_c1:'315',
    r2_c2:'31.50',
    r3_c1:'390',
    r3_c2:'19.50',
    r4_c1:'471',
    r4_c2:'15.70',
    r5_c1:'698',
    r5_c2:'6.98',
    r6_c1:'725',
    r6_c2:'4.83',
    r7_c1:'724',
    r7_c2:'3.62',
    r8_c1:'776',
    r8_c2:'2.59'
  }
  const inputData = (id, value) =>{
    let updateAnswer = answer;
     updateAnswer[id] = String(value);
    SetAnswer(updateAnswer);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const corAns = Object.entries(correctAnswer).toString().trim();
    const myAns = Object.entries(answer).toString().trim();
    if (corAns.toLowerCase() === myAns.toLowerCase()) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have entered the values needed to plot the Scatchard plot for SoP252.');
      calcScore(1)
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have not entered the values needed to plot the Scatchard plot for SoP252.');
      calcScore(0)
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
    updatedScore[3] = score;
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
        
            <div className={classed.questText}>Input the data in the table provided of the data required to plot the Scatchard plot for SoP252 for the x and y axis values needed to plot the Scatchard plot for SoP252. You also need to add the labels for the table. 
            </div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>[<sup>3</sup>H] SoP252 nM</StyledTableCell>
                    <StyledTableCell align="left">X-axis</StyledTableCell>
                    <StyledTableCell align="left">Y-axis</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="left"><Input id={"r"+Number(index+1)+"_c1"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c1"]} char="10" disabled={questAnswered}/></StyledTableCell>
                      <StyledTableCell align="left"><Input id={"r"+Number(index+1)+"_c2"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c2"]} char="10" disabled={questAnswered}/></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={classed.Button}>          
              <Button type="submit" variant="contained" color="secondary" className={classes.button}  onClick={handleSubmit.bind(this)} disabled={questAnswered}>
                SUBMIT
              </Button>  
            </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizedTables;
