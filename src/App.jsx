import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Home from './views/Home';
import Materials from './views/Materials';
import CreatedTraining from './views/CreatedTraining';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/materials" component={Materials} />
        <Route path="/created-training" component={CreatedTraining} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
