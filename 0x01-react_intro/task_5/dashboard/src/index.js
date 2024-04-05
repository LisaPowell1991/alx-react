import React from 'react';
import { createRoot } from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(document.getElementById('root-notifications')).render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
reportWebVitals();