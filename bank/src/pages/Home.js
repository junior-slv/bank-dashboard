import React from 'react';
import './Menu.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';


export function Home (){
  return(
    <div className="container">
      <p id='serialOne'></p>
      <div className='mainMenu'>
            <div className='mainMenuText'>
                <h1>Welcome, $name</h1>
            </div>
            <div className='generateButton'>
              <button id='mainButton' className='mainButton' ><Link to='/card'>Generate new card!</Link></button>
            </div>
    </div>
  </div>
  )
}


