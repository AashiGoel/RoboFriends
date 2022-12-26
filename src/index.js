import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App.js';
import { Helmet } from 'react-helmet';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Helmet>
      <title>RoboFriends</title>
    </Helmet>
    <App />
    </>
  </React.StrictMode>
);

reportWebVitals();
