import React from "react";
import "../styles/allproduct.css";
import FoodImg from "../assets/food.svg";
import CheeseImg from "../assets/cheese.svg";
import OnionImg from "../assets/onion.svg";
import LettuceImg from "../assets/lettuce.svg";
import BreadImg from "../assets/bread.svg";
import EggImg from "../assets/egg.svg";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart, FaPlus } from "react-icons/fa";

const AllProduct = () => {
  return (
    <div className="allproduct-container">
      <h2>Most popular near you</h2>

      <div className="allproduct-wrapper">
        <div className="products">
          <div className="products-img">
            <img src={FoodImg} alt="food-img" />
            <FaRegHeart className="heart" />
          </div>

          <p className="food-name">Double Beef Burger</p>
          <p className="food-desc">
            Our “Double Beef Burger” is prepared with the best quality of jazzy
            buns
          </p>
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

            <p className="product-price">
              <span className="naira">N</span> 10500.0
            </p>
          </div>
          <button className="addcart flex">
            <FaPlus className="addcartIcon" /> Add To Cart
          </button>
        </div>
        <div className="products">
          <div className="products-img">
            <img src={FoodImg} alt="food-img" />
            <FaRegHeart className="heart" />
          </div>

          <p className="food-name">Double Beef Burger</p>
          <p className="food-desc">
            Our “Double Beef Burger” is prepared with the best quality of jazzy
            buns
          </p>
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

            <p className="product-price">
              <span className="naira">N</span> 10500.0
            </p>
          </div>
          <button className="addcart flex">
            <FaPlus className="addcartIcon" /> Add To Cart
          </button>
        </div>
        <div className="products">
          <div className="products-img">
            <img src={FoodImg} alt="food-img" />
            <FaRegHeart className="heart" />
          </div>

          <p className="food-name">Double Beef Burger</p>
          <p className="food-desc">
            Our “Double Beef Burger” is prepared with the best quality of jazzy
            buns
          </p>
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

            <p className="product-price">
              <span className="naira">N</span> 10500.0
            </p>
          </div>
          <button className="addcart flex">
            <FaPlus className="addcartIcon" /> Add To Cart
          </button>
        </div>
        <div className="products">
          <div className="products-img">
            <img src={FoodImg} alt="food-img" />
            <FaRegHeart className="heart" />
          </div>

          <p className="food-name">Double Beef Burger</p>
          <p className="food-desc">
            Our “Double Beef Burger” is prepared with the best quality of jazzy
            buns
          </p>
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

            <p className="product-price">
              <span className="naira">N</span> 10500.0
            </p>
          </div>
          <button className="addcart flex">
            <FaPlus className="addcartIcon" /> Add To Cart
          </button>
        </div>
        <div className="products">
          <div className="products-img">
            <img src={FoodImg} alt="food-img" />
            <FaRegHeart className="heart" />
          </div>

          <p className="food-name">Double Beef Burger</p>
          <p className="food-desc">
            Our “Double Beef Burger” is prepared with the best quality of jazzy
            buns
          </p>
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

            <p className="product-price">
              <span className="naira">N</span> 10500.0
            </p>
          </div>
          <button className="addcart flex">
            <FaPlus className="addcartIcon" /> Add To Cart
          </button>
        </div>
        <div className="products">
          <div className="products-img">
            <img src={FoodImg} alt="food-img" />
            <FaRegHeart className="heart" />
          </div>

          <p className="food-name">Double Beef Burger</p>
          <p className="food-desc">
            Our “Double Beef Burger” is prepared with the best quality of jazzy
            buns
          </p>
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

            <p className="product-price">
              <span className="naira">N</span> 10500.0
            </p>
          </div>
          <button className="addcart flex">
            <FaPlus className="addcartIcon" /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
