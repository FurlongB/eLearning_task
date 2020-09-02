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

import SectContext from '../../Context/sec-context';
import ScoreContext from '../../Context/score-context';

import classed from './Graph.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  body: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 20,
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
  input: {
    display: 'none',
  },
});

const CustomizedTables = (props) => {
  const classes = useStyles();
  const setCurve = useContext(SectContext);
  const setCurScore = useContext(ScoreContext);

  const setScore = () =>{
    calcScore(0)
  }

  const calcScore = (score) =>{
    let updatedScore = [];
    console.log('setCurScore.status: ',setCurScore.status.scores)
    updatedScore = setCurScore.status.scores;
    updatedScore[1] = score;
    setCurScore.setScre(updatedScore)
  };

   return (
    <div className={classed.Ruled}>
        <div className={classed.box}>
          <div className={classed.questText}>2.	Plot the concentration-occupancy curve of B<sub>tot</sub>, B<sub>spec</sub> and B<sub>ns</sub> on graph paper that is provided and upload an image of the graphs to Canvas.</div>
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
                    <StyledTableCell align="right">{setCurve.status.graph["r"+Number(index+1)+"_c1"]}</StyledTableCell>
                    <StyledTableCell align="right">{setCurve.status.graph["r"+Number(index+1)+"_c2"]}</StyledTableCell>
                    <StyledTableCell align="right">{setCurve.status.graph["r"+Number(index+1)+"_c3"]}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={classed.marginUpload}>
          <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" onClick={setScore.bind(this)}>
          Upload
        </Button>
      </label>
           </div>
     </div>
    </div>
  );
}

export default CustomizedTables;
