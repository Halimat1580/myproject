import React, { useContext } from 'react'
import { FaRegTrashAlt,FaPlus, FaMinus } from "react-icons/fa";
import CartContext from './context/CartContext';
import '../styles/receipt.css'
import binPic from '../assets/binPic.svg'

const Receipt = () => {
  const {cart, handleIncrease,
    handleDecrease,
    totalPrice,
    removeItem} = useContext(CartContext)
  return (
    <div className=''>
           <section className='col-lg-5 border border-3 rounded p-4 w-100 '>
            <h5>Your order form</h5>
            {cart.length === 0 && <><h2>No items </h2> </>}
            <hr />
            {cart.map((cartItem) => {
              const { quantity, title, price, _id } = cartItem;
              return (
                <div
                  className="row justify-content-between align-items-center "
                  key={_id}
                >
                  {/* <hr /> */}

                  <div className='col-5  '>
                  <h2 className="fs-6 text-danger"> {title}... </h2>
                  <p className="">  </p>
                  <div className='bg-secondary w-100 '>
                    <button className="btn btn-lg" onClick={()=>handleIncrease(cartItem)}>
                      +
                    </button>
                    {quantity}
                    <button className="btn btn-lg" onClick={()=>handleDecrease(cartItem)}>
                      -
                    </button>
                  </div>
                  </div>
                  <p className="col-4">
                    
                    
                   <div className="d-flex gap-3">
                   <span role="button" onClick={() => removeItem(_id)}>
                     <img src={binPic} alt="" />
                    </span>
                    {price}
                   </div>
                  </p>
                  {/* <div className=''>
                        </div> */}
                </div>
              );
            })}
             <div>
            {totalPrice === 0 ? (
              ""
            ) : (
              <div className="d-flex justify-content-between">
                <p> Items Subtotal </p>
                  <p># {totalPrice} </p>
                {/* <div>
                </div> */}
              </div>
            )}
            <hr />
          </div>
        </section>
    </div>
  )
}

export default Receipt