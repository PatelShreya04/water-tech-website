// Brands.js
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo1 from '../assets/logo.jpg';
import logo2 from '../assets/logo2-removebg-preview.png';

const Brands = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Get the distance between the top of the page and the bottom of the Brands section
      const sectionOffset = document.getElementById('brands').offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the user has scrolled to or past the Brands section
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
    // Animate from left to right with fade-in when the component becomes visible
    if (isVisible) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [isVisible, controls]);
  return (
    <motion.div initial={{ opacity: 0, x: -50 }}
    animate={controls}
    transition={{ duration: 1.5 }}
    className="py-10" id="brands">

    <div className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Our Brands</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Brand 1 */}
          <div className="bg-white p-4 mb-4 md:mb-0 md:mr-4">
            <img src={logo1} alt="Brand 1" className="object-cover h-52 w-54 md:h-64 md:w-54" />
          </div>
          {/* Brand 2 */}
          <div className=" p-4">
            <img src={logo2} alt="Brand 2" className="object-cover h-80 w-54 md:h-64 md:w-54 md:mt-20 mt-0 " />
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Brands;
