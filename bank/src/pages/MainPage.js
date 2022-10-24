import React from 'react';
import './MainPage.css';




function MainPage() {
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
                <p>Enter</p>
                <button></button>
            </div>                      
      </div>
    </div>
  );
}

export default MainPage;
 



