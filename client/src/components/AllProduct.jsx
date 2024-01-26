import React, { useContext, useEffect, useState} from "react";
import "../styles/allproduct.css";
import FoodImg from "../assets/food.svg";
import CheeseImg from "../assets/cheese.svg";
import OnionImg from "../assets/onion.svg";
import LettuceImg from "../assets/lettuce.svg";
import BreadImg from "../assets/bread.svg";
import EggImg from "../assets/egg.svg";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart, FaPlus } from "react-icons/fa";
import {ToastContainer, toast} from "react-toastify"
import CartContext from "../components/context/CartContext"


const AllProduct = () => {
  const [data,setData] = useState([])

  const {handleAddToCart} = useContext (CartContext)

  const notify = () => {
    toast("An item has been added",{
      position:toast.POSITION.TOP_CENTER
    });
  };


  const getData = async ()=>{
    try {
      let data = await fetch('http://localhost:5757/api/products');
      let response = await data.json();
      setData(response.products)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()

  },[])


  return (
    <div >
      <h2 className="h2">Most popular near you</h2>
<div className="allproduct-container">
{data.map((datum)=>{
  const {title,_id,image,price,description} = datum
  return(
    <div className="allproduct-cart">
      
      <div key={_id} >
      <img src={image} alt="title" />
      <h6 > {title} </h6>
      <h5 className="heading-5">{description.slice(0,50)}</h5>
      <p>Ingredients:</p>
          <div className="flex ingredient-img">
            <img src={CheeseImg} alt="cheese" />
            <img src={OnionImg} alt="onion" />
            <img src={LettuceImg} alt="lettuce" />
            <img src={BreadImg} alt="bread" />
            <img src={EggImg} alt="egg" />
          </div>
          <div className="rating flex">
            <div>
              <div className="stars flex">
                <FaRegStar className="icon" />
                <FaRegStar className="icon" />
                <FaRegStar className="icon" />
                <FaRegStar className="icon" />
                <FaRegStar className="icon" />
              </div>
              <p className="rating">0 ratings</p>
            </div>
            <p className="" style={{color:"red"}}> {price} </p>
          </div>
          <button className="addcart flex" >
            <FaPlus className="addcartIcon" /> Add To Cart
          </button>
      
      </div>

    </div>
  )
})}
</div>

     
      
    </div>
  );
};

export default AllProduct;
