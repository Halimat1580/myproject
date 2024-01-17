import React,{useContext, useState} from 'react'
import Logo from '../assets/Logo.svg'
import '../styles/login.css'
import { Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import AuthContext from '../components/context/AuthContext'

const Login = () => {
 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState('')
  const{setLoggedIn} = useContext(AuthContext)
 
  const navigate = useNavigate()
  const handleSignUp = async(e)=>{
    e.preventDefault()
    const signUpData = {
  
      email,
      password
    }
    try {
      const data = await fetch('http://localhost:5757/api/user/login',{
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
        navigate('/')
      }
      if(res.name === "ValidationError"){
        toast.error(res.message)
      }
      if(res.user.token){
        localStorage.setItem('token',res.user.token)
        setLoggedIn(true)
        
      }
    } catch (error) {
      toast.error
    }
  
  }

 

  return (
    <div className='login-wrapper flex'>
        <Link to= '/'><img src= {Logo} alt="Logo"className='logo' /></Link>

        <h2>SIGN IN TO YOUR ACCOUNT</h2>

        <form className='flex' onSubmit={ handleSignUp  } >
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='example@email.com'  value={email} onChange={(e )=>setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password'  value={password} onChange={(e)=>setPassword(e.target.value)} />
            <label htmlFor="checkbox" className='checkbox-text'><input type="checkbox"/>Keep me signed in</label>
            <Link className='text-decoration-none' to='/ForgotPassword'>
              <p className=''>Reset Password</p>

            </Link>
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