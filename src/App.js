import React, {useState} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SectContext from './Context/sec-context';

const App = () =>{
  const [curSect, setCurSect] = useState({});

  const setSection = (stat)=> {
    setCurSect({graph: stat})
  }

    let routes = (
      <Switch>
        <Route path="/" component={HomeScreen}/>
        <Redirect to="/" /> 
      </Switch>
    );
    return (
      <div className="App">
        <SectContext.Provider value={{status: curSect, setSect: setSection}}>
          {routes}
        </SectContext.Provider>
      </div>
    );
}

export default withRouter(App);
