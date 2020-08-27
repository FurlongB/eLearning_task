import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Page from '../Navigation/Navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import  {jsonResponse}  from '../../utility/Json';

import classes from './HomeScreen.css'

import Spinner from '../UI/Spinner/Spinner'

const homeScreen = (props) => {
   // const getSection = useContext(SectContext);
    const [title, setTitle] = useState('');
    const [sectTitle, setSectTitle] = useState('')
    const [pages, setPages] = useState(null);
    const [curPage, setCurPage] = useState(1);
    const [curSection, setCurSection] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pgToLoad, setPgToLoad] = useState(null);
    
    useEffect(() =>{
        setTitle(jsonResponse.title);
        setPgToLoad(null);
        const courseSections = jsonResponse.sections;
        //setTotalSections(Object.keys(courseSections).length)
        axios.get(`https://adaptscenario.firebaseio.com/${jsonResponse.title}.json`)
        .then(res => {
            //console.log(res)
            let setSectProgress = [];
            let setPgProgress = [];
            let setCompletion = [];
            if(res.data === null){
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
                        
                    }
                    setPgProgress.push(curSectPages);
                }
                
            }else{
                setSectProgress = res.data.section;
                setPgProgress = res.data.page;
                setCompletion = res.data.completion
            }
            //console.log("setCompletion: ", setCompletion)
            /*const setData = {
                section: setSectProgress,
                page: setPgProgress,
                completion: setCompletion
            } */
            //getSection.setSect(setData)
            loadcourseData();
        })
        .catch(err =>{
            //console.log(err)

        });
       
        return () =>{
            ////console.log('Clean Up');
        }
    }, [curSection]);

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
        setPgToLoad(pages[crPage-1]);
    }

    const updateProgressHandler = (curPg, totalPg) =>{
        setPgToLoad(null);
       // let setSectProgress = getSection.status.section;
       // let setPgProgress = getSection.status.page;
        //let setCompletion = getSection.status.completion;
        let complete = 0;
       /* for(let i = 0; i < Object.keys(jsonResponse.sections).length; i++){
            if(Number(i+1) === Number(curSection)){
                complete = Math.round(Number(curPg/totalPg) * 100)
                if(complete > Number(getSection.status.completion[i])){
                    setCompletion[i] = complete;
                }
                if(complete === 100){
                    setSectProgress[i] = 2;
                }else{
                    setSectProgress[i] = 1;
                }
            }
            for (let j = 0; j < Object.keys(jsonResponse.sections["Section_"+curSection].pages).length; j++){
                if(Number(i+1) === Number(curSection) && curPg === Number(j+1)){
                    setPgProgress[i][j] = 1
                }
            }
        }*/
        const setData = {
           // section: setSectProgress,
           // page: setPgProgress,
           // completion: setCompletion
        } 
       // getSection.setSect(setData);
        let url = `https://adaptscenario.firebaseio.com/${jsonResponse.title}.json`
        axios.put(url, setData)
        .then(res => {
            loadContent(curPg);
        })
        .catch(err =>{
            //console.log(err)

        });
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
    }

    const handleCurSect = (curSect) =>{
        setCurPage(1);
        setCurSection(curSect);
    }

   return (
    <div> 
        <Header coursetitle={title +" - "+sectTitle}/>
        <div className={classes.HomeScreen}>
            {pgToLoad !== null  ? <Page page={pgToLoad}/> : <Spinner />}
        </div>
        <Footer courseTitle={jsonResponse.title} sections={jsonResponse.sections} curPage={curPage} totalPages={totalPages} prevPage={handlePrev.bind(this)} nextPage={handleNext.bind(this)} updateCurSect={handleCurSect.bind(this)}/>
    </div>
      
    )
};

export default homeScreen;