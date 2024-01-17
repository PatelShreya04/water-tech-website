import React from 'react'
import image1 from '../assets/water-tec-image.jpg'
const HeroSection = () => {
  return (
    <div className='flex md:flex-row flex-col mt-10 p-10'>

      <div className='md:w-1/2 md:pr-3'>
        <p className=' font-bold text-5xl text-blue-900 '>SHREYA</p>
        <p className='font-normal text-lg mt-3 mb-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper nisi, non sagittis mi molestie eu. Vivamus bibendum scelerisque turpis eu sagittis. Duis ipsum nulla, luctus nec rutrum at. mi molestie eu. Vivamus bibendum scelerisque turpis eu sagittis. Duis ipsum nulla. uctus nec rutrum at. mi molestie eu. Vivamus bibendum scelerisque turpis eu sagittis. Duis ipsum nulla.uctus nec rutrum at. mi molestie eu. Vivamus bibendum scelerisque turpis eu sagittis. Duis ipsum nulla.</p>
        <a href="/about" className='text-blue-500'>Read More</a>
      </div>
      <div className='md:w-1/2'>
        <img src={image1} alt="product-image" />
      </div>
    </div>
  )
}

export default HeroSection
