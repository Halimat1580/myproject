import React, { useState, useEffect, useContext } from "react";
import "../styles/listing.css";
import TastyImg from "../assets/tasty.svg";
import FoodImg from "../assets/food.svg";
import CheeseImg from "../assets/cheese.svg";
import OnionImg from "../assets/onion.svg";
import LettuceImg from "../assets/lettuce.svg";
import BreadImg from "../assets/bread.svg";
import EggImg from "../assets/egg.svg";
import { FaRegHeart, FaPlus, FaMinus, FaRegStar } from "react-icons/fa";
import CartContext from "../components/context/CartContext";
import { ToastContainer, toast } from "react-toastify";

const Listing = () => {
  const { handleAddToCart } = useContext(CartContext);

  const notify = () => {
    toast("An item has been added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const DecreaseCount = () => {
    setCount(count - 1);
  };

  const getData = async () => {
    try {
      let data = await fetch("http://localhost:5757/api/products");
      let response = await data.json();
      setData(response.products);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className="container  ">
        <div className="listing-wrapper">
          <img src={TastyImg} alt="TastyImg" className="img1" />
          

          <div className="foods-wrapper">
            {data.map((datum) => {
              const { title, _id, image, price, description } = datum;
              return (
                <div id="items">
                  <div key={_id} className="allproduct-cart" >
                    <img src={image} alt="" />
                    <h6> {title} </h6>
                    <p>{description.slice(0, 50)}</p>
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

                      <p className="" >
                        {" "}
                        {price}{" "}
                      </p>
                    </div>
                    <button
                      className="addcart flex"
                      onClick={() => {
                        handleAddToCart(datum);
                        notify();
                      }}
                    >
                      <FaPlus className="addcartIcon" /> Add To Cart
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Listing;
