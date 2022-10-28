import React from 'react';
import './Menu.css';
import {generateCard} from '../scripts/generateCard.js';


function Menu() {
  return (

          <div className="container">
      <div className='mainMenu'>
            <div className='mainMenuText'>
                <h1>Welcome, $name</h1>
            </div>
            <div className='generateButton'>
                <button id='mainButton' className='mainButton' onClick={generateCard}>Generate new card!</button>
            </div>
            <div className='card'>
            <p id='cardNumber'> {}</p>
      </div>
      </div>

    </div>
  );
}

export default Menu;
 



