import React from 'react'
import HeroImg from '../assets/hero-img.svg'
import NavBar from './NavBar';

const Hero = () => {
  return (
    <div>
      <NavBar />
      <div className="hero-img home-container">
        <img src= {HeroImg} alt="hero-Image" />
      </div>
    </div>
  )
}

export default Hero