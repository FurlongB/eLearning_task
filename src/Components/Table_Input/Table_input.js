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

import SectContext from '../../Context/sec-context';

import classed from './Table_input.css'

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
  createData('The slope of the line (m): '),
  createData('K&subA; for SoP252: '),
  createData('Units for Kd: '),
  createData('K<sub>d</sub> for SoP252'),
  createData('Units for Kd'),
  createData('B<sub>max</sub>'),
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
  //const setCurve = useContext(SectContext);
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
    r1_c1:'-0.1 to -0.5',
    r2_c1:'0.1 to 0.5',
    r3_c1:'nM-1',
    r4_c1:'20 to 50 ',
    r5_c1:'nM',
    r6_c1:'580 to 750',
    r7_c1:'fmol/mg of tissue',
  }
  const inputData = (id, value) =>{
    let updateAnswer = answer;
    updateAnswer[id] = value;
    SetAnswer(updateAnswer);
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (Object.entries(correctAnswer).toString().toLowerCase() === Object.entries(answer).toString().toLowerCase()) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct option, foot pain is not a sympton of Covid-19.');
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have chosen an incorrect option, foot pain is not a sympton of Covid-19 while all other options are.');
      
    }
    //setCurve.setSect(answer)
    setError(true);
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
                    <StyledTableCell align="right">Answers</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right"><Input id={"r"+Number(index+1)+"_c1"} changed={inputData.bind(this)} value={answer["r"+Number(index+1)+"_c1"]}/></StyledTableCell>
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
