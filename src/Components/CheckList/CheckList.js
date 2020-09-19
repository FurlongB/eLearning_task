import React, {useState, useContext, useEffect} from 'react';
import ThumbsDownIcon from '@material-ui/icons/ThumbDownAltRounded';
import ThumbsUpIcon from '@material-ui/icons/ThumbUpAltRounded';

import Image from './Image/page1';

import ScoreContext from '../../Context/score-context';

import classed from './CheckList.css';


const CheckList = (props) => {
  const setCurScore = useContext(ScoreContext);
  const [finalScore, setfinalScore]  = useState([]);
  console.log('setCurScore.status: ', setCurScore.status.scores)
  useEffect(() =>{
    let loadscore = []
    loadscore = setCurScore.status.scores;
    props.nextBut(false);
    if (loadscore === undefined || loadscore === null){
        loadscore = [0,0,0,0,0,0,0,0,0,0,0,0]
    }

    setfinalScore(loadscore)
    return () =>{
        console.log('Clean Up');
    }
  }, [setCurScore]);
 

  return (
    <div className={classed.Ruled}>
        <div className={classed.box}>
            <div className={classed.Left}>
            
                <div className={classed.questText}>Based on your answers to each of the questions here are your Learning Outcomes: </div>
                <div className={classed.promptText}>If you have a <ThumbsDownIcon/> to any of these statements, please get in touch with me by email <u>f.furlong@qub.ac.uk</u></div>
                <div className={classed.CheckList}>
                    <div>a) Do you know how to calculate B<sub>specific</sub>?</div>
                    <div>{finalScore[0] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>b) Do you know how to draw a dose response curve for B<sub>specific</sub>?</div>
                    <div>{finalScore[1] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>c) Do you know the labels and units of the x and y axis for a dose response curve of B<sub>specific</sub>?</div>
                    <div>{finalScore[2] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>d) Do you know what to plot on X and Y axis of a Scatchard plot?</div>
                    <div>{finalScore[3] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>e) Do you know the labels and units of the X and Y axis for a Scatchard plot?</div>
                    <div>{finalScore[4] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>f) Do you know how to calculate K<sub>a</sub> of a compound from the Scatchard plot?</div>
                    <div>{finalScore[5] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>g) Do you know how to calculate K<sub>d</sub> of a compound from the Scatchard plot?</div>
                    <div>{finalScore[6] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>h) Do you know the units of K<sub>a</sub> and K<sub>d</sub> or how to get this information from a Scatchard plot?</div>
                    <div>{finalScore[7] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>i) Do you know how to calculate B<sub>max</sub> from a Scatchard plot and do you know what this figure refers to?</div>
                    <div>{finalScore[8] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>j) Do you know how to calculate the number of receptors in a tissue from information provided in a Scatchard plot?</div>
                    <div>{finalScore[9] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>k) Do you know the units of the receptor calculation using a Scatchard plot?</div>
                    <div>{finalScore[10] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div>l) Do you understand the difference between specific and Selective binding?</div>
                    <div>{finalScore[11] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>

            </div>
            <div className={classed.Right}>
                  <Image />   
            </div>
        </div>
    </div>
  );
}

  
export default CheckList;