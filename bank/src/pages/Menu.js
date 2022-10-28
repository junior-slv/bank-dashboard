import React from 'react';
import './Menu.css';
import {generateCard} from '../scripts/generateCard.js';
import {BrowserRouter as Router, Link} from 'react-router-dom';


function Menu() {
  return (
    <Router>
                    <div className="container">
      <div className='mainMenu'>
            <div className='mainMenuText'>
                <h1>Welcome, $name</h1>
            </div>
            <div className='generateButton'>
              <button id='mainButton' className='mainButton' onClick={generateCard}>Generate new card!</button>
            </div>
      </div>

    </div>
    </Router>
  );
}

export default Menu;
 



