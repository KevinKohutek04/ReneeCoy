import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoute from './AppRoute';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);

reportWebVitals();
