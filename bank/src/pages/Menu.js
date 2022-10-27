import React from 'react';
import './Menu.css';
import {callCc } from '../scripts/generateCard.js';
import { newCc1, newCc2,newCc3, newCc4} from '../scripts/generateCard.js';


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
            <p id='cardNumber'> {}</p>
      </div>
      </div>

    </div>
  );
}

export default Menu;
 



