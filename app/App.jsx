import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './styles/main.scss';

import Home from './pages/Home.jsx';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='*' component={Home} />
    </div>
  </Router>,
  document.getElementById('react-root')
);
