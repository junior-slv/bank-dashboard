import React from 'react';
import './App.css';

const number1 = Math.floor(Math.random() * 10)
const number2 = Math.floor(Math.random() * 10)
const number3 = Math.floor(Math.random() * 10)
const number4 = Math.floor(Math.random() * 10)
const number5 = Math.floor(Math.random() * 10)
const number6 = Math.floor(Math.random() * 10)
const number7 = Math.floor(Math.random() * 10)
const number8 = Math.floor(Math.random() * 10)
const number9 = Math.floor(Math.random() * 10)
const number10 = Math.floor(Math.random() * 10)
const number11 = Math.floor(Math.random() * 10)
const number12 = Math.floor(Math.random() * 10)
const number13 = Math.floor(Math.random() * 10)
const number14 = Math.floor(Math.random() * 10)
const number15 = Math.floor(Math.random() * 10)
const number16 = Math.floor(Math.random() * 10)

function App() {
  return (
    <div className="container">
      <div className='mainMenu'>
            <div className='mainMenuText'>
                <h1>Welcome, $name</h1>
            </div>
            <div className='generateButton'>
                <button className='mainButton' onClick={generateCard}>Generate new card! </button>
            </div>
      </div>
    </div>
  );
}

function generateCard(){
var 
cc = [number1, number2, number3, number4, 
  number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16]
console.log(cc)
}

export default App;
