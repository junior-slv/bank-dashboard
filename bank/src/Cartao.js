import React from 'react';  
import { generateCard } from './generateCard.js';
import { newCard } from './generateCard.js';
import { newCc } from './generateCard.js';

function Cartao() {
    return (
      <div className="container">
        <div className='mainMenu'>
              <div className='mainMenuText'>
                  <h1>{}</h1>
              </div>
        </div>
        <div className='card'>
              <p id='cardNumber'> {newCc}</p>
        </div>
      </div>
    );
  }

export default Cartao;

  