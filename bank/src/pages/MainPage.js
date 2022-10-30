import React from 'react';
import './MainPage.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

var name = window.prompt("Insira seu nome")
var surname = window.prompt("Insira seu sobrenome")
export function MainPage() {
  return (
      <div className="container">
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
          <Link to='/home'><p>Enter</p></Link>
          </div>  
        </div>
    </div>
  );
}
export var name, surname;


