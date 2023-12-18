import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import '../styles/homepage.css'
import Listing from '../components/Listing'
import Footer from '../components/Footer'

const HomePage = () => {
  useEffect(()=>{
    document.title = HomePage || Page
  })

  return (
    <div>
        <Hero />
        <Listing />

        <Footer />
    </div>
  )
}

export default HomePage