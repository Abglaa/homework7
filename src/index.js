import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Callback from './useCallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Callback/>
  </React.StrictMode>
);
