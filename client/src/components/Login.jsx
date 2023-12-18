import React from 'react'
import Logo from '../assets/Logo.svg'
import '../styles/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-wrapper flex'>
        <Link to= '/'><img src= {Logo} alt="Logo"className='logo' /></Link>

        <h2>SIGN IN TO YOUR ACCOUNT</h2>

        <form className='flex'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='example@email.com' />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' />
            <label htmlFor="checkbox" className='checkbox-text'><input type="checkbox"/>Keep me signed in</label>
            <button className='login-btn'>Sign In</button>
            <div className="flex">
                <p>Dont have an account?</p>
                <Link to='/signup'>Create One</Link>
            </div>
        </form>
    </div>
  )
}

export default Login