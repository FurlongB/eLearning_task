import React, {useState, useEffect} from 'react';



import classes from './ProgressIndictor.css';

const ProgressIndictor = (props) =>{
    const [loadProgress, setLoadProgress] = useState(0);
    
    useEffect(() =>{
        setLoadProgress(Number(props.complete));
        loadProgressFunction();
        return () =>{
            //console.log('Clean Up');
        }
    }, [loadProgress]);

    const loadProgressFunction = () =>{
        let i = 0;
        if (i === 0) {
            i = 1;
            const elem = document.getElementById(props.title);
            let width = 1;
            const id = setInterval(frame, 10);
            function frame(){
              if (width >= loadProgress) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
         }
    }

    const handleMenuClick = (event)=>{
        event.preventDefault();
        let id = "";
        id = props.id.substr(props.id.lastIndexOf("_")+1, 1);
        //console.log('ID: ', id);
        props.menuClick(id);
    }
    return(
        <div className={classes.ProgressIndictor} onClick={handleMenuClick.bind(this)}>
            <div className={classes.title}>
                {props.title}
            </div>
            <div id="myProgress" className={classes.myProgress}>
                <div id={props.title} className={classes.myBar}><div className={classes.myText}>{props.complete+"%"}</div></div>
            </div>
        </div>
    );
}

export default ProgressIndictor;


