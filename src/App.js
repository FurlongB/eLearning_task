import React, {useState} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SectContext from './Context/sec-context';
import ScoreContext from './Context/score-context';

const App = () =>{
  const [curSect, setCurSect] = useState({});
  const [curScores, setCurScore] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);

  const setSection = (stat)=> {
    setCurSect({graph: stat})
  }

  const setScore = (stat)=> {
    //console.log('App.js stat: ', stat)
    setCurScore({scores: stat});
  }

    let routes = (
      <Switch>
        <Route path="/" component={HomeScreen}/>
        <Redirect to="/" /> 
      </Switch>
    );
    return (
      <div className="App">
         <ScoreContext.Provider value={{status: curScores, setScre: setScore}}>
           <SectContext.Provider value={{status: curSect, setSect: setSection}}>
              {routes}
           </SectContext.Provider>
         </ScoreContext.Provider>
        
      </div>
    );
}

export default withRouter(App);
