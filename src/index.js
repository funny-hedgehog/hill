import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';

// basename={process.env.PUBLIC_URL}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

