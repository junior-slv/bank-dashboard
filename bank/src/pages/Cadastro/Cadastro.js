import React, { useState } from 'react';
import './Cadastro.css';

import { Link, useNavigate } from 'react-router-dom'
import UserService from '../../scripts/UserService.js'
import {validarEmail, validarSenha, validarTelefone, validarConfirmarSenha, validarNome} from '../../scripts/validadores';



const Cadastro = () => {
  return(
    <div className='container'>
      <form>
        <h1>Faça seu cadastro</h1>
        <input
          name='nome'
          placeholder='Digite o seu nome'
          type='text'
        />
        <input
          name='telefone'
          placeholder='Digite o seu telefone'
          type='number'
        />
        <input
          name='email'
          placeholder='Digite o seu e-mail'
          type='email'
        />
        <input
          name='password'
          placeholder='Digite a sua senha'
          type='password'
        />
        <input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          type='password'
        />
        <input
          type='submit'
          text='Efetuar Cadastro!'
        />
        <div>
          <p>Já possui conta?</p>
          <p><Link to='/'>Login</Link></p>  
        </div>
      </form>
    </div>
  )
}

export default Cadastro;