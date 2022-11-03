import React from 'react';
import { Link } from "react-router-dom";
import './MainApp.css';
var name = window.prompt("Insira seu nome")
var surname = window.prompt("Insira seu sobrenome")
export default function MainApp(){

  return(
    <div className='container'>
      <form>
          <h1>BEM VINDO, {name}</h1>
          <Link to='/card'><button className='textbutton'>PRÓXIMO &gt;</button></Link>
      </form>
    </div>
  )
}
export var name, surname;