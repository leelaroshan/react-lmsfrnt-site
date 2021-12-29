import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Counter from './Components/Counter';
import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/counter" component={Counter} />

  </Switch>
);

export default App;
