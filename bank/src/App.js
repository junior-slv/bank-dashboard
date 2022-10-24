import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import { generateCard} from './generateCard';
import { newCard } from './generateCard.js';




function App() {
  return (
    <div className="container">
      <div className='mainMenu'>
            <div className='mainMenuText'>
                <h1>Welcome, $name</h1>
            </div>
            <div className='generateButton'>
                <button className='mainButton' onClick={generateCard, newCard}>Generate new card!</button>
            </div>
      </div>
      <div className='card'>
            <p id='cardNumber'> {}</p>
      </div>
    </div>
  );
}

export default App;
 



