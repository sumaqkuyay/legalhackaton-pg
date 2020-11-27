import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Home from './views/Home';
import Materials from './views/Materials';
import SubMaterials from './views/SubMaterials';
import CreatedTraining from './views/CreatedTraining';
import FiscalYear from './views/FiscalYear';
import './sass/index.scss';


const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/materials" component={Materials} />
        <Route path="/submaterials" component={SubMaterials} />
        <Route path="/created-training" component={CreatedTraining} />
        <Route path="/fiscalYear" component={FiscalYear} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
