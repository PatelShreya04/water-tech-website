import React from 'react';

import { motion} from 'framer-motion';
import image1 from '../assets/coverimage.jpg'


const HeroSection = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex md:flex-row flex-col mt-1 pl-2 pr-2'
      id="about"
    >
          <div className=" pl-2 pr-2">
             
          <p className='font-bold md:text-4xl text-2xl text-blue-900 text-center '>WELCOME TO SHREYA WATER TECH LLP</p>
      <div className='flex md:flex-row flex-col mt-8 '>
        <div className='md:w-1/2 md:pr-3'>
          <p className='font-normal md:text-[15px] text-sm mt-3 mb-4 text-justify' style={{ lineHeight: '1.5' }}>SHREYA WATER TECH LLP is an ISO 9001:2008 Certified  Company. Which is one of the leading  Manufacturers  of Reverse Osmosis Systems & Its Parts. Company  Established   by Highly qualified and innovative minded two  brothers Mr. Ashok Patel & Mr. Suresh Patel. The company is engaged into manufacturing and marketing of Domestic & Industrial Water Filter Parts of high quality commitments. Our company keeps abreast with market  trends and keep close co-operation with our clients in the field,  which helps us in adapting to our customers need. With continuous R&D, we ensure that new products are developed with precision and perfection and are in accordance with market demands. We have dedicated our all resources to deliver innovative, cost effective, reliable products to our customers across all our India.</p>
        <a href="/about" className='text-blue-500 text-sm'>Read More</a>
      </div>
      <div className='md:w-1/2'>
        <img src={image1} alt="product-image" />
      </div>
    </div>
          </div>
    </motion.div>
  );
};

export default HeroSection;
