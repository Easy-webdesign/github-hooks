import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import AlertState from './components/alert/alert-state';
import GithubState from './components/github-context/github-state';

import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <GithubState>
      <AlertState>
        <Router>
          <App />
        </Router>
      </AlertState>
    </GithubState>
  </React.StrictMode>,
  document.getElementById('root')
);
