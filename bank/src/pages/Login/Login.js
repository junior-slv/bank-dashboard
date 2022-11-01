import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import UserService from '../../scripts/UserService.js'
import {validarEmail, validarSenha} from '../../scripts/validadores';

const userService = new UserService()

const Login = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      setLoading(true)
      alert('Login')
      setLoading(false)
    }
    catch (err){
      alert('Algo deu errado com o login' + err)
    }
  }
  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)  }
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
        disabled={loading === true || !validadorInput()}
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