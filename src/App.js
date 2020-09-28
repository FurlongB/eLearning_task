import React, {useState} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SectContext from './Context/sec-context';
import ScoreContext from './Context/score-context';
import TrackContext from './Context/track-context';

const App = () =>{
  const [curSect, setCurSect] = useState({});
  const [curScores, setCurScore] = useState({});
  const [curTrack, setCurTrack] = useState({});

    const setTrack = (stat)=> {
      setCurTrack({section: stat.section, page: stat.page, completion: stat.completion})
    }

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
            <TrackContext.Provider value={{status: curTrack, setTrack: setTrack}}>
              {routes}
            </TrackContext.Provider>
           </SectContext.Provider>
         </ScoreContext.Provider>
        
      </div>
    );
}

export default withRouter(App);
