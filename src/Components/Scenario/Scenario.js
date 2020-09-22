import React, {useState, useEffect} from 'react';

import Video from './Video/Video';
import Options from './QuestionOptions/QuestionOptions';
import Spinner from '../UI/Spinner/Spinner';

import  {scenario}  from './Scenarios';

import classes from './Scenario.css';

const scenarioQuestions = (props) =>{
    const [nextQ, setNextQ] = useState(1);
    const [vidToPlay, setVidToPlay] = useState(null);
    const [feedback, setFeedback] = useState(null);
    let correctPath = [];
    let yourPath = [];
    const allScenarios = scenario.Sceanarios;
    correctPath = scenario.correct_path.split(",");
    useEffect(() =>{
         if(nextQ !== "end"){
            yourPath.push(nextQ)
            setVidToPlay(allScenarios["Scenario_"+nextQ].video_file);
        }else{
            setVidToPlay(null);
            const feedback = allScenarios["Scenario_"+nextQ].options
            //console.log("feedback: ",feedback)
            //console.log("CorrectPain: ",Object.entries(correctPath).toString())
            if(Object.entries(correctPath).toString() === Object.entries(yourPath).toString()){
                //console.log("feedback: ",feedback[0].option_correct)
                setFeedback(feedback[0].option_correct)
            }
                
        }

        ////console.log("vidToPlay: ",allScenarios["Scenario_"+nextQ].video_file);
        return () =>{
            ////console.log('Clean Up');
        }
    }, [nextQ]);

    const setNextScenario = (nQuest) =>{
        setVidToPlay(null);
        setNextQ(nQuest);
    }
    return(
        <div className={classes.Ruled}>
            <div className={classes.box}>
                <h1>{props.pageTitle}</h1>
                Please look at the video and select the next step for the situation.
            </div>
            <div>
                {feedback === null && vidToPlay !== null ? <Video vidToPlay={vidToPlay}/>: <Spinner/>}
            </div>
            <div>
                {feedback === null && vidToPlay !== null ? <Options options={allScenarios["Scenario_"+nextQ].options} submitClick={setNextScenario.bind(this)}/>: null}
            </div>
        </div>
          
        
    );
};
export default (scenarioQuestions);