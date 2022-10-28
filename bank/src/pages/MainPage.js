import React from 'react';
import './MainPage.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';



function MainPage() {
  return (
        <Router>
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
            <p>Enter</p>
          </div>
          <Link to='menu'>next</Link>
        </div>
    </div>
    
    
        </Router>
  );
}

export default MainPage;
 



