import React, {useState, useContext, useEffect} from 'react';
import ThumbsDownIcon from '@material-ui/icons/ThumbDownTwoTone';
import ThumbsUpIcon from '@material-ui/icons/ThumbUpTwoTone';

import ScoreContext from '../../Context/score-context';

import classed from './CheckList.css';


const CheckList = (props) => {
  const setCurScore = useContext(ScoreContext);
  const [finalScore, setfinalScore]  = useState([]);
  console.log('setCurScore.status: ', setCurScore.status.scores)
  useEffect(() =>{
    let loadscore = []
    loadscore = setCurScore.status.scores;
    setfinalScore(loadscore)
    return () =>{
        console.log('Clean Up');
    }
  }, []);
 

  return (
    <div className={classed.Ruled}>
        <div className={classed.Left}>
            <div className={classed.box}>
                <div className={classed.questText}>Review your knowledge and provide Yes/No to the following statements: </div>
                <div className={classed.promptText}>If you have answer no to any of these statements, please get in touch with me by email <u>f.furlong@qub.ac.uk</u></div>
                <div className={classed.CheckList}>
                    <div><b>a) Do you know how to calculate B<sub>specific</sub>?</b></div>
                    <div>{finalScore[0] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>b) Do you know how to draw a dose response curve for B<sub>specific</sub>?</b></div>
                    <div>{finalScore[1] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>c) Do you know the labels and units of the x and y axis for a dose response curve of B<sub>specific</sub>?</b></div>
                    <div>{finalScore[2] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>d) Do you know what to plot on X and Y axis of a Scatchard plot?</b></div>
                    <div>{finalScore[3] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>e) Do you know the labels and units of the X and Y axis for a Scatchard plot?</b></div>
                    <div>{finalScore[4] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>f) Do you know how to calculate K<sub>a</sub> of a compound from the Scatchard plot?</b></div>
                    <div>{finalScore[5] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>g) Do you know how to calculate K<sub>d</sub> of a compound from the Scatchard plot?</b></div>
                    <div>{finalScore[6] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>h) Do you know the units of K<sub>a</sub> and K<sub>d</sub> or how to get this information from a Scatchard plot?</b></div>
                    <div>{finalScore[7] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>i) Do you know how to calculate B<sub>max</sub> from a Scatchard plot and do you know what this figure refers to?</b></div>
                    <div>{finalScore[8] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>j) Do you know how to calculate the number of receptors in a tissue from information provided in a Scatchard plot?</b></div>
                    <div>{finalScore[9] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>k) Do you know the units of the receptor calculation using a Scatchard plot?</b></div>
                    <div>{finalScore[10] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>
                <div className={classed.CheckList}>
                    <div><b>l) Do you understand the difference between specific and Selective binding?</b></div>
                    <div>{finalScore[11] === 1 ? <ThumbsUpIcon/> : <ThumbsDownIcon/>}</div>
                </div>

            </div>
        </div>
    </div>
  );
}

  
export default CheckList;