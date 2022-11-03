import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import UserService from '../../scripts/UserService.js'

const Login = () => {
  return(
    <div className='container'>
      <form>
        <h1>Faça seu login</h1>
        <input
        placeholder='Digite seu email'
        type='email'/>
        <input
        placeholder='Digite sua senha'
        type='password'/>
        <input
        type='submit'
        text='Entrar!'
        />
        <div>
          <p>Não possui conta?</p>
          <p><Link to='/cadastro'>Cadastrar</Link></p>  
        </div>
      </form>
    </div>
  )
}

export default Login;