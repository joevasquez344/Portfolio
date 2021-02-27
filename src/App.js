import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
};

export default App;
