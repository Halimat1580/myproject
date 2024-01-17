import React,{useEffect, useState} from 'react'
import Logo from '../assets/Logo.svg'
import { Link ,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

const SignUp = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState('')
  const [verifypassword, setVerifyPassword] = useState('')
  const [phonenumber,setPhoneNumber] = useState('')
  const navigate = useNavigate()

  const handlSignUp = async(e)=>{
    e.preventDefault()
    const signUpData = {
      firstname,
      lastname,
      email,
      phonenumber,
      password,
      verifypassword
    }
    try {
      const data = await fetch('http://localhost:5757/api/user/registration',{
        method:"POST",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      const res = await data.json();
      console.log(res);
      if(res.success === false){
        toast.error(res.message)
      }
      if(res.success === true){
        toast.success(res.message)
        navigate('/Login')
      }
      if(res.name === "ValidationError"){
        toast.error(res.message)
      }
    } catch (error) {
      toast.error
    }
  
  }


   
  
  return (
    <div className='signup-wrapper flex'>
        <Link to='/'><img src= {Logo} alt="Logo" className='logo' /></Link>
        <h2>CREATE YOUR ACCOUNT</h2>
        <form className='flex' onSubmit={handlSignUp}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder='First Name' 
            value={firstname}
            onChange={(e)=>setFirstName(e.target.value)}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder='Lastname'  value={lastname}
            onChange={(e)=>setLastName(e.target.value)}/>

            <label htmlFor="password">Email</label>
            <input type="email" placeholder='example@email.com' value={email}
            onChange={(e)=>setEmail(e.target.value)} />

            <label htmlFor="phonenumber">Phone Number</label>
            <div className='phone flex'><span>+234</span><input type="number"  value={phonenumber}
            onChange={(e)=>setPhoneNumber(e.target.value)} /></div>

            <label htmlFor="password">Password (8 minimum characters)</label>
            <input type="password" placeholder='Password'  value={password}
            onChange={(e)=>setPassword(e.target.value)}/>

            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" placeholder='Password'  value={verifypassword}
            onChange={(e)=>setVerifyPassword(e.target.value)}/>

            <label htmlFor="checkbox" className='checkbox-text'><input type="checkbox"/>Keep me signed in</label>
           
            <button className='login-btn' onClick={handlSignUp}>Create account</button>
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