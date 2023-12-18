import React from 'react'
import '../styles/recipient.css'

const Receipient = () => {
  return (
    <div>
        <div className="recipient-wrapper flex">
            <div className='update-form'>
            <h2>Update Recipient</h2>
            <form>
                <label htmlFor="firstname">First Name</label>
                <input type="text" placeholder='First Name' />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" placeholder='Last Name' />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='example@email.com' />
                <label htmlFor="phonenumber">Phone number</label>
                <div className='phone'><span>+234</span><input type="number" placeholder='818 000 000' maxLength='10'/></div>
                <button className='update'>Submit</button>
            </form>
            </div>
                <div className="receipt">
            <div className='subtotal'>
          <div className="item-total flex">
            <p>Item Total :</p>
            <p>N 12000</p>
          </div>
          <div className="item-total flex">
            <p>Discount :</p>
            <p>N 0</p>
          </div>
          <div className="item-total flex">
            <p>Delivery Charge:</p>
            <p>N 0</p>
          </div>
        </div>

        <div className="flex total">
          <p>Total: </p>
          <p>N 12000</p>
        </div>
      </div>

        </div>
    </div>
    
  )
}

export default Receipient