import React from 'react'
import Receipt from './Receipt'

const Address = () => {
  return (
    <div className="address-wrapper flex">
        <div className="address-form">
            <h2>Add Address</h2>

            <form>
                <label htmlFor="city">Select City</label>
                <input type="text" />

                <label htmlFor="housenumber">House Number</label>
                <input type="number" />

                <label htmlFor="street">Street</label>
                <input type="text" />

                <button className='update'>Use this address</button>
            </form>
        </div>

        <Receipt />
    </div>
  )
}

export default Address