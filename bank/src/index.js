import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cartao from './Cartao';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Cartao />
  </React.StrictMode>
);
