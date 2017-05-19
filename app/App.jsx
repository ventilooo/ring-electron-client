import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './styles/main.scss';

import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/toto' component={NotFound} />
      <Route path='/' component={Home} />
    </Switch>
  </Router>,
  document.getElementById('react-root')
);
