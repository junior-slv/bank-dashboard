import React from 'react';
import './MainPage.css';
import {BrowserRouter, Link, Outlet} from 'react-router-dom';
import { RoutesApp } from '../scripts/Routes';




function MainPage() {
  return (
    <BrowserRouter>
          <><div className="container">
      <div className='mainMenu'>
        <div className='mainMenuText'>
          <h1>Robby bank</h1>
        </div>
        <div className='login'>
          <p>Login</p>
          <input type="email">
          </input>
        </div>
        <div className='password'>
          <p>Password</p>
          <input type="password">
          </input>
        </div>
        <div className='mainButton'>
          <p>Enter</p>
        </div>
        <Link to='/menu'>next</Link>
      </div>
    </div><RoutesApp /></>
    </BrowserRouter>
  );
}

export default MainPage;
 



