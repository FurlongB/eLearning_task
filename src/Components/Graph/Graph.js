import React, {useEffect, useContext, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SectContext from '../../Context/sec-context';
import ScoreContext from '../../Context/score-context';
import Image from './Image/page1'

import classed from './Graph.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#29091f',
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
  const[updatedScore, setUpdatedScore] = useState(null)
  const classes = useStyles();
  const setCurve = useContext(SectContext);
  const setCurScore = useContext(ScoreContext);

  useEffect(() =>{
    setUpdatedScore(setCurScore.status.scores)
    return () =>{
        console.log('Clean Up');
    }
  }, []);

  const calcScore = (score) =>{
    let newScores = updatedScore
    console.log('newScores: ',newScores)
    newScores = setCurScore.status.scores;
    newScores[1] = score;
    setCurScore.setScre(updatedScore)
  };

   return (
    <div className={classed.Ruled}>
      <div className={classed.box}>
          <div className={classed.Left}>  
            <div className={classed.questText}>Plot the concentration-occupancy curve of B<sub>tot</sub>, B<sub>spec</sub> and B<sub>ns</sub> on graph paper that is provided and upload an image of the graphs to Canvas.</div>
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
                      <StyledTableCell align="left">{setCurve.status.graph["r"+Number(index+1)+"_c1"]}</StyledTableCell>
                      <StyledTableCell align="left">{setCurve.status.graph["r"+Number(index+1)+"_c2"]}</StyledTableCell>
                      <StyledTableCell align="left">{setCurve.status.graph["r"+Number(index+1)+"_c3"]}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={classed.Right}>
            <Image />   
        </div>
      </div>
    </div>
  );
}

export default CustomizedTables;
