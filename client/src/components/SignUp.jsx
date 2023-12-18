import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup-wrapper flex'>
        <Link to='/'><img src= {Logo} alt="Logo" className='logo' /></Link>
        <h2>CREATE YOUR ACCOUNT</h2>
        <form className='flex'>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder='First Name' />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder='Password' />
            <label htmlFor="password">Email</label>
            <input type="email" placeholder='example@email.com' />
            <label htmlFor="phonenumber">Phone Number</label>
            <div className='phone flex'><span>+234</span><input type="number" /></div>
            <label htmlFor="password">Password (8 minimum characters)</label>
            <input type="password" placeholder='Password' />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" placeholder='Password' />
            <label htmlFor="checkbox" className='checkbox-text'><input type="checkbox"/>Keep me signed in</label>
            <button className='login-btn'>Create account</button>
            <div className="flex account">
                <p>Dont have an account?</p>
                <Link to='/login'>Sign In</Link>
            </div>
        </form>
        <p className='terms'>By Creating your Quickmunch account, you agree to the <a href="#">Terms of use</a>  and <a href="#"> Privacy Policy</a></p>
    </div>
  )
}

export default SignUp