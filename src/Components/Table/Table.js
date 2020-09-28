import React, {useState, useContext, useEffect} from 'react';
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
  const [questAnswered, setQuestAnswered] = useState(false);
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
  useEffect(() =>{
    setCurve.setSect(answer);
    //console.log('answer: ', answer)
    return () =>{
        //console.log('Clean Up');
    }
}, []);
  
  

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
      setHelperText('Congratulations you have filled in the table correctly and calculated the correct Bspec.');
      calcScore(1);
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have not filled in the table correctly and calculated the correct Bspec.');
      calcScore(0);
    }
    setQuestAnswered(true);
    setError(true);
    props.nextBut(true);
  };

  const calcScore = (score) =>{
    let updatedScore = [];
    updatedScore = setCurScore.status.scores
    //console.log('setCurScore.status.scores: ',updatedScore)
    updatedScore[0] = score
    
    setCurScore.setScre(updatedScore)
  };

  return (
    <div className={classed.Ruled}>
      <div className={classed.box}>
        <div>
              {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
        <div className={classed.Left}>
        
          <div className={classed.questText}>Fill in the table and calculate Bspec from the data provided?</div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>[3H] SoP252 nM</StyledTableCell>
                  <StyledTableCell align="center">Btot</StyledTableCell>
                  <StyledTableCell align="center">Bns</StyledTableCell>
                  <StyledTableCell align="center">Bspec</StyledTableCell>
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
                    <StyledTableCell align="left"><Input id={"r"+Number(index+1)+"_c3"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c3"]} char="10" disabled={questAnswered}/></StyledTableCell>
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
        <div className={classed.Right}>
          <p><b>Experimental data</b><br/>You have performed a number of binding experiments for each compound with radioactive drug (<sup>3</sup>H-labelled also referred to as hot drug) with tissue sample in the presence and absences of large concentrations of unlabelled compound (also referred to as cold drug). The data from these experiments are presented in Tables 1, 2 and 3. Lets begin with Table 1.</p>

          <Image />
        </div>
      </div>
    </div>
  );
}

export default CustomizedTables;
