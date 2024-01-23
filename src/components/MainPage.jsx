import React from 'react'
import Nav from './Nav'
import Slider from './Slider'
import HeroSection from './HeroSection'
import Footer from './Footer'
import Brands from './Brands'
import Events from './Events'
import Products from './Products'
import Header from './Header'


const MainPage = () => {
  return (
    <div>
    <Header />
      <Nav />
      <Slider />
      <HeroSection />
      <Brands />
      <Products />
      <Events />
      <Footer />
    </div>
  )
}

export default MainPage
