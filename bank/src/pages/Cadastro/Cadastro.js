import React, { useState } from 'react';
import './Cadastro.css';

import { Link, useNavigate } from 'react-router-dom'
import UserService from '../../scripts/UserService.js'
import {validarEmail, validarSenha, validarTelefone, validarConfirmarSenha, validarNome} from '../../scripts/validadores';


const userService = new UserService()

const Cadastro = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.cadastrar({
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        password: form.password,
      })
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) 
    && validarSenha(form.password)
    && validarTelefone(form.telefone)
    && validarConfirmarSenha(form.password, form.confirmarPassword)
    && validarNome(form.nome)
  }
  return(
    <div className='container'>
      <form>
        <h1>Faça seu cadastro</h1>
        <input
          name='nome'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />
        <input
          name='telefone'
          placeholder='Digite o seu telefone'
          onChange={handleChange}
          type='number'
        />
        <input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        <input
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
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