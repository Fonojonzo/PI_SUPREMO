import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { UserProvider } from 'context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);
