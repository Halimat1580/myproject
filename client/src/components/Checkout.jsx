import React from 'react'
import '../styles/checkout.css';
import { FaRegTrashAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className='checkout-wrapper'>
        <h3>Your Order</h3>
        <div className="flex list">
            <p className="text-primary "><span>1</span>Double Grilled Chicken Burger</p>
            <div className='flex'>
            <button className="delete"><FaRegTrashAlt /></button>
            <p>N 12000</p>
            </div>
          </div>

          <div className='price flex'>
            <p>items SubTotal</p>
            <p>N SubTotal</p>
          </div>

         <Link to= '/checkout'> <button className='proceed'>Proceed To Checkout</button></Link>


    </div>
  )
}

export default Checkout