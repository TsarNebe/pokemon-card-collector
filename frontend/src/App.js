import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardSearch from './CardSearch';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={CardSearch} />
    </Switch>
  </Router>
);

export default App;
