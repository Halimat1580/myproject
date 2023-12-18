import React from 'react'
import '../styles/guest.css'
import { Link } from 'react-router-dom';
import { TbBellSchool } from "react-icons/tb";
import { RxEnter } from "react-icons/rx";

const Guest = () => {
  return (
    <div className='guest-wrapper'>
        <Link to= '/login'><button className='login'><RxEnter /> Login In</button></Link>
       <Link to='/signup'><button className='signup'><TbBellSchool /> Sign Up</button></Link> 
    </div>
  )
}

export default Guest