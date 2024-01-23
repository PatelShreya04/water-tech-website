import React, { useEffect, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';
import image1 from '../assets/water-tec-image.jpg'
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Get the distance between the top of the page and the bottom of the HeroSection
      const sectionOffset = document.getElementById('about').offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the user has scrolled to or past the HeroSection
      if (scrollPosition > sectionOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animate when the component becomes visible
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);
  return (
    <motion.dev  initial={{ opacity: 0, y: -50 }}
    animate={controls}
    transition={{ duration: 0.5 }}
    className='flex md:flex-row flex-col mt-1 pl-2 pr-2'
    id="about">

    <div className='flex md:flex-row flex-col mt-8 md:p-10 p-2 '>

      <div className='md:w-1/2 md:pr-3'>
        <p className=' font-bold md:text-4xl text-2xl text-blue-900 '>SHREYA WATER TECH LLP</p>
        <p className='font-normal md:text-[15px] text-sm mt-3 mb-4 text-justify' style={{ lineHeight: '1.5' }}>SHREYA WATER TECH LLP is an ISO 9001:2008 Certified  Company. Which is one of the leading  Manufacturers  of Reverse Osmosis Systems & Its Parts. Company  Established   by Highly qualified and innovative minded two  brothers Mr. Ashok Patel & Mr. Suresh Patel. The company is engaged into manufacturing and marketing of Domestic & Industrial Water Filter Parts of high quality commitments. Our company keeps abreast with market  trends and keep close co-operation with our clients in the field,  which helps us in adapting to our customers need. With continuous R&D, we ensure that new products are developed with precision and perfection and are in accordance with market demands. We have dedicated our all resources to deliver innovative, cost effective, reliable products to our customers across all our India.</p>
        {/* <a href="/about" className='text-blue-500'>Read More</a> */}
      </div>
      <div className='md:w-1/2'>
        <img src={image1} alt="product-image" />
      </div>
    </div>
    </motion.dev>
  )
}

export default HeroSection
