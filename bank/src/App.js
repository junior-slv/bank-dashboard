import React from 'react';
import './App.css';
import { generateCard} from './generateCard.js';
import { newCard } from './generateCard.js';
import { newCc } from './generateCard.js';
import { test } from './generateCard.js';





function App() {
  return (
    <div className="container">
      <div className='mainMenu'>
            <div className='mainMenuText'>
                <h1>Welcome, $name</h1>
            </div>
            <div className='generateButton'>
                <button id='mainButton' className='mainButton' onClick={test}>Generate new card!</button>
            </div>
            <div className='card'>
            <p id='cardNumber'> {newCc}</p>
      </div>
      </div>

    </div>
  );
}

export default App;
 



