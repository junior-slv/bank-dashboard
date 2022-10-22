import React from 'react';
import './App.css';
import { generateCard } from './Card.js';

function App() {
  return (
    <div className="container">
      <div className='mainMenu'>
            <div className='mainMenuText'>
                <h1>Welcome, $name</h1>
            </div>
            <div className='generateButton'>
                <button className='mainButton' onClick={generateCard} >Generate your new card! </button>
            </div>
      </div>
    </div>
  );
}

export default App;
