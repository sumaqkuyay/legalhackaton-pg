import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Home from './views/Home';
import Materials from './views/Materials';
import './sass/index.scss';
import FiscalYear from './views/FiscalYear';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/materials" component={Materials} />
        <Route path="/fiscalYear" component={FiscalYear} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
