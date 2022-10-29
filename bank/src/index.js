import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App, { RoutesApp } from './scripts/Routes';
import {MainPage} from './pages/MainPage';
import {Home} from './pages/Home';
import Card from './pages/Card';
import router from './scripts/Routes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
