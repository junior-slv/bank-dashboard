import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { RoutesApp } from './scripts/Routes';
import MainPage from './pages/MainPage';
import Home from './pages/Home';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
        <Home/>
      </React.StrictMode>
);
