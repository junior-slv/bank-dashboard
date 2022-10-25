import React from 'react';
import './Menu.css';
import { newCc, callCc } from '../scripts/generateCard.js';
import { BrowserRouter } from 'react-router-dom';

function Menu() {
  return (

          <div className="container">
      <div className='mainMenu'>
            <div className='mainMenuText'>
                <h1>Welcome, $name</h1>
            </div>
            <div className='generateButton'>
                <button id='mainButton' className='mainButton' onClick={callCc}>Generate new card!</button>
            </div>
            <div className='card'>
            <p id='cardNumber'> {newCc}</p>
      </div>
      </div>

    </div>
  );
}

export default Menu;
 



