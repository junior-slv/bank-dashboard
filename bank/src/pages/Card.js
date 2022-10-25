import React from 'react';
import './Card.css';
import { newCc } from '../scripts/generateCard.js';





function Card() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='cardNumber'><p>{newCc}</p></div>
        <div className='cardExpiration'><p>04/32</p></div>
        <div className='cardName'>Maria Luiza Gonçalves Pereira</div>
      </div>
    </div>
  );
}

export default Card;
 



