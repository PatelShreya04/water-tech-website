import React from 'react'
import image1 from '../assets/water-tec-image.jpg'
const HeroSection = () => {
  return (
    <div className='flex md:flex-row flex-col mt-10 p-10' id="about">

      <div className='md:w-1/2 md:pr-3'>
        <p className=' font-bold text-4xl text-blue-900 '>SHREYA WATER TECH LLP</p>
        <p className='font-normal text-ls mt-3 mb-4 '>SHREYA WATER TECH LLP is an ISO 9001:2008 Certified  Company. Which is one of the leading  Manufacturers  of Reverse Osmosis Systems & Its Parts. Company  Established   by Highly qualified and innovative minded two  brothers Mr. Ashok Patel & Mr. Suresh Patel.The company is engaged into manufacturing and marketing of Domestic & Industrial Water Filter Parts of high quality commitments. Our company keeps abreast with market  trends and keep close co-operation with our clients in the field,  which helps us in adapting to our customers need. With continuous R&D, we ensure that new products are developed with precision and perfection and are in accordance with market demands. We have dedicated our all resources to deliver innovative, cost effective, reliable products to our customers across all our India.</p>
        <a href="/about" className='text-blue-500'>Read More</a>
      </div>
      <div className='md:w-1/2'>
        <img src={image1} alt="product-image" />
      </div>
    </div>
  )
}

export default HeroSection
