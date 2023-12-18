import React, { useState } from 'react'
import '../styles/listing.css';
import TastyImg from '../assets/tasty.svg'
import FoodImg from '../assets/food.svg'
import CheeseImg from '../assets/cheese.svg'
import OnionImg from '../assets/onion.svg'
import LettuceImg from '../assets/lettuce.svg'
import BreadImg from '../assets/bread.svg'
import EggImg from '../assets/egg.svg'
import { FaRegHeart,FaPlus, FaMinus  } from "react-icons/fa";

const Listing = () => {

  const [count, setCount] = useState(1)
  const IncreaseCount = () => {
    setCount(count + 1)
  }

  const DecreaseCount = () => {
    setCount(count - 1)
  }
  return (
    <div className='listing-wrapper flex'>

      <div className="tasty-img">
          <img src= {TastyImg} alt="tasty-img" />
      </div>

      <div className="foods-wrapper">
        <div className="food">
            <div className="food-img">
              <img src= {FoodImg} alt="product-Img" />
              <FaRegHeart className='heart'/>
            </div>

            <div className="food-text">

          
            <p className='food-name'>Double Beef Burger</p>
            <div className='flex price-container'>
            <div className="food-price">
              <span>Total Price</span>
              <p>N 10500.0</p>
            </div>
            <div className="flex counter">
            <button><FaMinus /></button>
            <p>1</p>
            <button><FaPlus /></button>
          </div>
          </div>

          <div className="ingredients flex">
            <img src= {CheeseImg} alt="cheese" />
            <img src= {OnionImg} alt="onion" />
            <img src= {LettuceImg} alt="lettuce" />
            <img src= {BreadImg} alt="bread" />
            <img src= {EggImg} alt="egg" />
          </div>

          <button className='addcart flex'><FaPlus className='addcartIcon'/> Add To Cart</button>
          </div>

        </div>
        <div className="food">
            <div className="food-img">
              <img src= {FoodImg} alt="product-Img" />
              <FaRegHeart className='heart'/>
            </div>

            <div className="food-text">
            <p className='food-name'>Double Beef Burger</p>
            <div className='flex price-container'>
            <div className="food-price">
              <span>Total Price</span>
              <p>N 10500.0</p>
            </div>
            <div className="flex counter">
            <button onClick={DecreaseCount}><FaMinus /></button>
            <p>{count}</p>
            <button onClick={IncreaseCount}><FaPlus /></button>
          </div>
          </div>

          <div className="ingredients flex">
            <img src= {CheeseImg} alt="cheese" />
            <img src= {OnionImg} alt="onion" />
            <img src= {LettuceImg} alt="lettuce" />
            <img src= {BreadImg} alt="bread" />
            <img src= {EggImg} alt="egg" />
          </div>

          <button className='addcart flex'><FaPlus className='addcartIcon'/> Add To Cart</button>
          </div>
        </div>
        <div className="food">
            <div className="food-img">
              <img src= {FoodImg} alt="product-Img" />
              <FaRegHeart className='heart'/>
            </div>

            <div className="food-text">
            <p className='food-name'>Double Beef Burger</p>
            <div className='flex price-container'>
            <div className="food-price">
              <span>Total Price</span>
              <p>N 10500.0</p>
            </div>
            <div className="flex counter">
            <button onClick={DecreaseCount}><FaMinus /></button>
            <p>{count}</p>
            <button onClick={IncreaseCount}><FaPlus /></button>
          </div>
          </div>

          <div className="ingredients flex">
            <img src= {CheeseImg} alt="cheese" />
            <img src= {OnionImg} alt="onion" />
            <img src= {LettuceImg} alt="lettuce" />
            <img src= {BreadImg} alt="bread" />
            <img src= {EggImg} alt="egg" />
          </div>

          <button className='addcart flex'><FaPlus className='addcartIcon'/> Add To Cart</button>
          </div>
        </div>
        <div className="food">
            <div className="food-img">
              <img src= {FoodImg} alt="product-Img" />
              <FaRegHeart className='heart'/>
            </div>

            <div className="food-text">
            <p className='food-name'>Double Beef Burger</p>
            <div className='flex price-container'>
            <div className="food-price">
              <span>Total Price</span>
              <p>N 10500.0</p>
            </div>
            <div className="flex counter">
            <button onClick={DecreaseCount}><FaMinus /></button>
            <p>{count}</p>
            <button onClick={IncreaseCount}><FaPlus /></button>
          </div>
          </div>

          <div className="ingredients flex">
            <img src= {CheeseImg} alt="cheese" />
            <img src= {OnionImg} alt="onion" />
            <img src= {LettuceImg} alt="lettuce" />
            <img src= {BreadImg} alt="bread" />
            <img src= {EggImg} alt="egg" />
          </div>

          <button className='addcart flex'><FaPlus className='addcartIcon'/> Add To Cart</button>
          </div>
        </div>
        <div className="food">
            <div className="food-img">
              <img src= {FoodImg} alt="product-Img" />
              <FaRegHeart className='heart'/>
            </div>

            <div className="food-text">
            <p className='food-name'>Double Beef Burger</p>
            <div className='flex price-container'>
            <div className="food-price">
              <span>Total Price</span>
              <p>N 10500.0</p>
            </div>
            <div className="flex counter">
            <button><FaMinus /></button>
            <p>1</p>
            <button><FaPlus /></button>
          </div>
          </div>

          <div className="ingredients flex">
            <img src= {CheeseImg} alt="cheese" />
            <img src= {OnionImg} alt="onion" />
            <img src= {LettuceImg} alt="lettuce" />
            <img src= {BreadImg} alt="bread" />
            <img src= {EggImg} alt="egg" />
          </div>

          <button className='addcart flex'><FaPlus className='addcartIcon'/> Add To Cart</button>
          </div>

        </div>
        <div className="food">
            <div className="food-img">
              <img src= {FoodImg} alt="product-Img" />
              <FaRegHeart className='heart'/>
            </div>
            <div className='food-text'>
            <p className='food-name'>Double Beef Burger</p>
            <div className='flex price-container'>
            <div className="food-price">
              <span>Total Price</span>
              <p>N 10500.0</p>
            </div>
            <div className="flex counter">
            <button><FaMinus /></button>
            <p>1</p>
            <button><FaPlus /></button>
          </div>
          </div>

          <div className="ingredients flex">
            <img src= {CheeseImg} alt="cheese" />
            <img src= {OnionImg} alt="onion" />
            <img src= {LettuceImg} alt="lettuce" />
            <img src= {BreadImg} alt="bread" />
            <img src= {EggImg} alt="egg" />
          </div>

          <button className='addcart flex'><FaPlus className='addcartIcon'/> Add To Cart</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Listing