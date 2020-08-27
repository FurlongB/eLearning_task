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
import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox';

import SectContext from '../../Context/sec-context';
import ScoreContext from '../../Context/score-context';
import classed from './Table.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
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
  const setCurve = useContext(SectContext);
  const setCurScore = useContext(ScoreContext);
  const [score, setScore] = useState(0)
  const [answer, SetAnswer] = useState(
    {
      r1_c1:0,
      r1_c2:0,
      r1_c3:0,
      r2_c1:0,
      r2_c2:0,
      r2_c3:0,
      r3_c1:0,
      r3_c2:0,
      r3_c3:0,
      r4_c1:0,
      r4_c2:0,
      r4_c3:0,
      r5_c1:0,
      r5_c2:0,
      r5_c3:0,
      r6_c1:0,
      r6_c2:0,
      r6_c3:0,
      r7_c1:0,
      r7_c2:0,
      r7_c3:0
    })
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const correctAnswer = {
    r1_c1:333,
    r1_c2:18,
    r1_c3:315,
    r2_c1:412,
    r2_c2:22,
    r2_c3:390,
    r3_c1:498,
    r3_c2:27,
    r3_c3:471,
    r4_c1:751,
    r4_c2:53,
    r4_c3:698,
    r5_c1:798,
    r5_c2:73,
    r5_c3:725,
    r6_c1:812,
    r6_c2:88,
    r6_c3:724,
    r7_c1:888,
    r7_c2:112,
    r7_c3:776
  }
  const inputData = (id, value) =>{
    let updateAnswer = answer;
    updateAnswer[id] = value;
    SetAnswer(updateAnswer);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setCurve.setSect(answer);
    if (Object.entries(correctAnswer).toString() === Object.entries(answer).toString()) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct option, foot pain is not a sympton of Covid-19.');
      calcScore(1);
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have chosen an incorrect option, foot pain is not a sympton of Covid-19 while all other options are.');
      calcScore(0);
    }
    setError(true);
    
  };

  const calcScore = (score) =>{
    let updatedScore = setCurScore.status
    updatedScore[0] = score
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
          <div className={classed.questText}>Fill in the table and calculate Bspec from the data provided?</div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>[3H] SoP252 nM</StyledTableCell>
                  <StyledTableCell align="right">Btot</StyledTableCell>
                  <StyledTableCell align="right">Bns</StyledTableCell>
                  <StyledTableCell align="right">Bspec</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right"><Input id={"r"+Number(index+1)+"_c1"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c1"]} char="10"/></StyledTableCell>
                    <StyledTableCell align="right"><Input id={"r"+Number(index+1)+"_c2"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c2"]} char="10"/></StyledTableCell>
                    <StyledTableCell align="right"><Input id={"r"+Number(index+1)+"_c3"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c3"]} char="10"/></StyledTableCell>
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
