import React, {useEffect, useContext, useState} from 'react';

import Image from './Image/page1';

import { makeStyles } from '@material-ui/core/styles';

import ScoreContext from '../../Context/score-context';

import classes from './TextGraphics_ns.css';

const useStyles = makeStyles({
    input: {
      display: 'none',
    },
  });

const ruled = (props) =>{
    const classed = useStyles();
    const[updatedScore, setUpdatedScore] = useState(null)
    const setCurScore = useContext(ScoreContext);

    useEffect(() =>{
        setUpdatedScore(setCurScore.status.scores);
        props.nextBut(true);
        //calcScore(0)
        return () =>{
            //console.log('Clean Up');
        }
    }, [setCurScore]);

    const calcScore = (score) =>{
        let newScores = updatedScore
        //console.log('newScores: ',newScores)
        newScores = setCurScore.status.scores;
        newScores[1] = score;
        setCurScore.setScre(updatedScore)
    };

    return(
        <div className={classes.Ruled}>
            <div className={classes.box}>
                <div className={classes.Left}>
                    <div className={classed.questText}>Plot a Scatchard plot on the graph paper provided and upload an image of this to canvas.</div>
                </div>
                <div className={classed.Right}>
                    <Image />  
                </div>
               
            </div> 
        </div>
        
    );
};


export default (ruled);


