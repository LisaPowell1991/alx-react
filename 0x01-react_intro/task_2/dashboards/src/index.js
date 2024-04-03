import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root-notifications')).render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

reportWebVitals();