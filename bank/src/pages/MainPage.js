import React, { useState } from 'react';
import './MainPage.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
function Login(){
  const [loading, setLoading] = useState()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      setLoading(true)
    }
    catch{

    }
  }
  const handleChange = (event) => {

  }
  return(
    <div className='container'>
      <form>
        <h1>Faça seu login</h1>
        <input
        placeholder='Digite seu email'
        onChange={handleChange}
        type='email'/>
        <input
        placeholder='Digite sua senha'
        onChange={handleChange}
        type='password'/>
        <input
        type='submit'
        text='Entrar!'
        onClick={handleSubmit}
        // disabled={loading === true || !validadorInput()}
        />
        <div>
          <p>Não possui conta?</p>
          <p>Cadastrar</p>
        </div>
      </form>
    </div>
  )
}

export default Login;