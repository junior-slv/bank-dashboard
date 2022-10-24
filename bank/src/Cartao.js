import React from 'react';
var newCc = 1
function Cartao() {
    return (
      <div className="container">
        <div className='mainMenu'>
              <div className='mainMenuText'>
                  <h1>`${newCc}`</h1>
              </div>
        </div>
        <div className='card'>
              <p id='cardNumber'> {}</p>
        </div>
      </div>
    );
  }

export default Cartao;

  