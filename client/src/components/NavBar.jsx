import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { MdRoomService,MdOutlineArrowForwardIos,MdOutlineShoppingBag } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import Guest from './Guest';
import Checkout from './Checkout';

const NavBar = () => {
  const [showGuest, setshowGuest] = useState(false);
  const [showCheckout, setshowCheckout] = useState(false);

  const displayGuest = () => {
    setshowGuest(!showGuest)
    setshowCheckout(false);
  }

  const displayCheckout = () => {
    setshowCheckout(!showCheckout)
    setshowGuest(false)
  }



  return (
    <div>
        <header className= 'flex'>
        <div className='flex logo-wrapper'>
          <Link to= '/'>
            <img src= {Logo} alt="Header Logo" className = 'logo' />
            </Link>
            <p className='location text-primary'><FaLocationDot /> Lagos, Nigeria</p>
        </div>

        <div className='flex user-info'>
        <Link to= '/allproducts'><p className='text-primary all-products flex'><MdRoomService className='dish'/> <span>All Products </span></p></Link>
        <p className='guest flex' onClick={displayGuest}><IoPersonOutline className='icons'/> <span>Hi, Guests </span> <MdOutlineArrowForwardIos className='arrow'/></p>

        <p className='flex bag' onClick={displayCheckout}><MdOutlineShoppingBag className='text-primary icons'/><span className='order-num'>0</span></p>
        </div>
      </header>

      {
        showCheckout && <Checkout />
      }

      {
        showGuest && <Guest />
      }
    </div>
  )
}

export default NavBar