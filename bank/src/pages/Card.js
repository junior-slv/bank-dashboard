import React from 'react';
import './Card.css';
import { newCc1, newCc2,newCc3, newCc4} from '../scripts/generateCard.js';





function Card() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='cardNumber'>
          <span ><p className='CardNumbers' id='serialOne'>{newCc1}</p></span>
          <span ><p className='CardNumbers' id='serialTwo'>{newCc2}</p></span>
          <span ><p className='CardNumbers' id='serialThree'>{newCc3}</p></span>
          <span ><p className='CardNumbers' id='serialFour'>{newCc4}</p></span>
        </div>
        <div className='cardExpiration'><p>04/32</p></div>
        <div className='cardName'>Maria Luiza Gonçalves Pereira</div>
      </div>
    </div>
  );
}
// {newCc1, newCc2, newCc3, newCc4}
export default Card;
 



