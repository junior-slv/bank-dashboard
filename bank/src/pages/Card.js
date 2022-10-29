import React from 'react';
import './Card.css';
import { newCc1, newCc2,newCc3, newCc4, newE} from '../scripts/generateCard.js';





function Card() {
  return (
    <div className='container'>
      <h1>Enjoy your new Robby Card :3</h1>
      <div className='card'>
        <div class="card__front card__part">
          <p class="card_numer"><p className='CardNumbers' id='serialOne'>{newCc1}</p>
          <p className='CardNumbers' id='serialTwo'>{newCc2}</p>
          <p className='CardNumbers' id='serialThree'>{newCc3}</p>
          <p className='CardNumbers' id='serialFour'>{newCc4}</p>
          </p>
          <div class="card__space-75">
            <span class="card__label">Card holder</span>
            <p class="card__info">Juninho Silva</p>
          </div>
          <div class="card__space-25">
            <span class="card__label">Expires</span>
                  <p class="card__info">10/30</p>
          </div>
        </div>
        
        <div class="card__back card__part">
          <div class="card__black-line"></div>
          <div class="card__back-content">
            <div class="card__secret">
              <p class="card__secret--last" id='expiration'>{newE}</p>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Card;
 



