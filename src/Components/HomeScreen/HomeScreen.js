import React, {useState, useEffect, useContext} from 'react';
import {SCORM} from 'pipwerks-scorm-api-wrapper';

import Page from '../Navigation/Navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import  {jsonResponse}  from '../../utility/Json';

import classes from './HomeScreen.css';

import Spinner from '../UI/Spinner/Spinner';

import ScoreContext from '../../Context/score-context';
import TrackContext from '../../Context/track-context';


const homeScreen = (props) => {
    const getSection = useContext(TrackContext);
    const setCurScore = useContext(ScoreContext);
    const [title, setTitle] = useState('');
    const [sectTitle, setSectTitle] = useState('')
    const [pages, setPages] = useState(null);
    const [curPage, setCurPage] = useState(1);
    const [curSection, setCurSection] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pgToLoad, setPgToLoad] = useState(null);
    const [qFinished, setQFinished] = useState(false);
    SCORM.init();
    useEffect(() =>{
        setTitle(jsonResponse.title);
        setPgToLoad(null);
        const courseStatus = SCORM.get('cmi.core.lesson_status');
        console.log('courseStatus: ', courseStatus);
        const courseSections = jsonResponse.sections;
        let setSectProgress = [];
        let setPgProgress = [];
        let setCompletion = [];
        let score = [];
        let curPage = 0
        if(courseStatus !== 'not attempted'){
            SCORM.set('cmi.core.lesson_status', 'incomplete');
            for(let i = 0; i < Object.keys(courseSections).length; i++){
                if(i === Number(curSection-1)){
                    setSectProgress.push(1);
                }else{
                    setSectProgress.push(0);
                }
                 setCompletion.push(0);
                let curSectPages = [];
                   
                for (let j = 0; j < Object.keys(courseSections["Section_"+Number(i+1)].pages).length; j++){
                    if(i === Number(curSection-1) && j === 0){
                        curSectPages.push(1);
                    }else{
                        curSectPages.push(0);
                    }
                    if(courseSections["Section_"+Number(i+1)].pages[j].type === 'quest'){
                        score.push(0);
                    }
                    
  
                }
                setPgProgress.push(curSectPages);
            }
            setCurScore.setScre(score);
            curPage = 1;
        }else{
            const status = SCORM.get('cmi.suspend_data');
            let overAllStatus = [];
            overAllStatus = status.split("*");
            console.log('overAllStatus: ',overAllStatus);
            setSectProgress = overAllStatus[0];
            setPgProgress = overAllStatus[1];
            setCompletion = overAllStatus[2];
            score = overAllStatus[3];
            curPage = Number(overAllStatus[4]);
            setCurScore.setScre(score);
            console.log('setPgProgress: ',setPgProgress)
        }
            const setData = {
                section: setSectProgress,
                page: setPgProgress,
                completion: setCompletion
            } 
            const setAllData = setSectProgress+"*"+setPgProgress+"*"+setCompletion+"*"+score+"*"+curPage;
            console.log('setData: ',setData);
            getSection.setTrack(setData)
            //setCurPage(curPage);
            SCORM.set('cmi.suspend_data', setAllData);
            SCORM.save();
            loadcourseData();
        return () =>{
            //console.log('Clean Up');
        }
    }, []);

    const finishQ = (data)=>{
        //console.log('data: ',data)
        setQFinished(data);
    }

    const loadcourseData = () =>{
        const courseSections = jsonResponse.sections;
        const coursePages = courseSections["Section_"+curSection].pages;
        const loadPages = [];
        for (const key in coursePages){
            loadPages.push({id: key, name: coursePages[key].name, pageSrc: coursePages[key].pageSrc, type: coursePages[key].type})
                
        }
        setTotalPages(Object.keys(coursePages).length)
        setSectTitle(courseSections["Section_"+curSection].title);
        setPages(loadPages);
        setPgToLoad(loadPages[curPage-1]);
    }

    const loadContent = (crPage)=>{
        const status = SCORM.get('cmi.core.lesson_status')
        console.log('SCORM.get(cmi.core.lesson_status): ',status);
        setPgToLoad(pages[Number(crPage)-1]);
    }

    const updateProgressHandler = (curPg, totalPg) =>{
        setPgToLoad(null);
        let setSectProgress = [];
        let setPgProgress = [];
        let setCompletion = [];
        setSectProgress = getSection.status.section;
        setPgProgress = getSection.status.page;
        setCompletion = getSection.status.completion;
        let complete = 0;
        for(let i = 0; i < Object.keys(jsonResponse.sections).length; i++){
            if(Number(i+1) === Number(curSection)){
                complete = Math.round(Number(curPg/totalPg) * 100)
                if(complete > Number(getSection.status.completion[i])){
                    setCompletion[i] = complete;
                }
                if(complete === 100){
                    setSectProgress[i] = "2"
                    SCORM.set('cmi.core.lesson_status', 'completed');
                    SCORM.save();
                }else{
                    setSectProgress[i] = "1";
                }
            }
            for (let j = 0; j < Object.keys(jsonResponse.sections["Section_"+curSection].pages).length; j++){
                if(Number(i+1) === Number(curSection) && Number(curPg) === Number(j+1)){
                    setPgProgress[j] = "1";
                }
            }
        } 
        const setData = {
            section: setSectProgress,
            page: setPgProgress,
            completion: setCompletion
        } 
        /*const setAllData = {
            section: setSectProgress,
            page: setPgProgress,
            completion: setCompletion,
            scores: setCurScore.status.scores
        }*/
        const setAllData = setSectProgress+"*"+setPgProgress+"*"+setCompletion+"*"+setCurScore.status.scores+"*"+curPg;
        getSection.setTrack(setData);
        SCORM.set('cmi.suspend_data', setAllData);
        SCORM.save();
        loadContent(curPg);
    };

    const handlePrev = (event) =>{
        event.preventDefault();
        let crPage = 0
        if(curPage > 1){
            crPage = curPage - 1
            setCurPage(crPage);
            loadContent(crPage);
        }
    }

    const handleNext = (event) =>{
        event.preventDefault();
        let crPage = 0
        if(curPage< totalPages){
            crPage = curPage + 1
            setCurPage(crPage);
            updateProgressHandler(crPage, totalPages);
        }
        setQFinished(false);
    }

    const handleCurSect = (curSect) =>{
        setCurPage(1);
        setCurSection(curSect);
    }

   return (
    <div> 
        <Header coursetitle={title +" - "+sectTitle}/>
        <div className={classes.HomeScreen}>
            {pgToLoad !== null && curPage !== 0 ? <Page page={pgToLoad} pageNext={finishQ.bind(this)}/> : <Spinner />}
        </div>
        {curPage !== 0 ? <Footer courseTitle={jsonResponse.title} sections={jsonResponse.sections} prevBut={jsonResponse.sections['Section_1']} curPage={curPage} totalPages={totalPages} prevPage={handlePrev.bind(this)} nextPage={handleNext.bind(this)} updateCurSect={handleCurSect.bind(this)} questfinished={qFinished}/>: null}
    </div>
      
    )
};

export default homeScreen;