import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import EasyRhythms from './components/EasyRhythms';
import MediumRhythms from './components/MediumRhythms';
import HardRhythms from './components/HardRhythms';


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/easy-rhythms" component={EasyRhythms} />
          <Route exact path="/medium-rhythms" component={MediumRhythms} />
          <Route exact path="/hard-rhythms" component={HardRhythms} />
        </Switch>
      </Router>

    </>
  )
}
export default App;
