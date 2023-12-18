import React from "react";
import "../styles/order.css";
import Receipt from "./Receipt";
import { Link } from "react-router-dom";


const Order = () => {
  return (
    <div className="order-container flex">
      <div className="order-placement">
        <h2>Review and place order</h2>
        <p>
          Review / Add address and fulfill payments to complete your purchase
        </p>
        <div className="recipient">
          <h3>Recipient information</h3>
          <Link to= '/updaterecipient'><button>Add Recipient</button></Link>
        </div>
        <div className="delivery">
          <h3>Delivery Address</h3>
          <Link to= '/addaddress'><button>Add Delivery Address</button></Link>
        </div>
        <button className="order-btn">Place Your Order</button>
      </div>
    <Receipt />
      
    </div>
  );
};

export default Order;
