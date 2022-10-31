import React from 'react';
import './Card.css';
import {name, surname} from './MainPage.js'
import { copyText } from '../scripts/copyText.js';
var number1,number2,number3,number4,number5,number6
,number7,number8,number9,number10,number11,number12,number13
,number14,number15,number16, eNumber1, eNumber2, eNumber3;

function Card() {
  number1 = Math.floor(Math.random() * 10)
  number2 = Math.floor(Math.random() * 10)
  number3 = Math.floor(Math.random() * 10)
  number4 = Math.floor(Math.random() * 10)
  number5 = Math.floor(Math.random() * 10)
  number6 = Math.floor(Math.random() * 10)
  number7 = Math.floor(Math.random() * 10)
  number8 = Math.floor(Math.random() * 10)
  number9 = Math.floor(Math.random() * 10)
  number10 = Math.floor(Math.random() * 10)
  number11 = Math.floor(Math.random() * 10)
  number12 = Math.floor(Math.random() * 10)
  number13 = Math.floor(Math.random() * 10)
  number14 = Math.floor(Math.random() * 10)
  number15 = Math.floor(Math.random() * 10)
  number16 = Math.floor(Math.random() * 10)
  eNumber1 = Math.floor(Math.random() * 10)
  eNumber2 = Math.floor(Math.random() * 10)
  eNumber3 = Math.floor(Math.random() * 10)
  var cc = [number1, number2, number3, number4 ,]
  var cc2 = [number5, number6, number7, number8 ,]
  var cc3 = [number9, number10, number11, number12 ,]
  var cc4 = [number13, number14, number15, number16 ,]
  var e = [eNumber1, eNumber2, eNumber3,]
  var newCc1 = cc.join('')
  var newCc2 = cc2.join('')
  var newCc3 = cc3.join('')
  var newCc4 = cc4.join('')
  var newE = e.join('')
  var fullN = [number1, number2,number3,number4,number5,number6,number7,number8,number9,number10,number11,number12,number13,number14,number15,number16]
  var FullNS = fullN.join('')
  return(
    <div className='container'>
      <h1>Enjoy your new Robby Card :3</h1>
      <button className='textbutton' onClick={copyText}>COPY NUMBERS</button>
      <input className='textinput' type="text" value={FullNS} id="myInput"/>

      <div className='card'>
        <div class="card__front card__part">
          <p class="card_numer"><p className='CardNumbers' id='serialOne' >{newCc1}</p>
          <p className='CardNumbers' id='serialTwo' >{newCc2}</p>
          <p className='CardNumbers' id='serialThree'>{newCc3}</p>
          <p className='CardNumbers' id='serialFour'>{newCc4}</p>
          </p>
          <div class="card__space-75">
            <span class="card__label">Card holder</span>
            <p class="card__info">{name} {surname}</p>
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
    
  )
  
}
export default Card;
export var FullNs
 



