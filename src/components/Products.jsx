// Products.js
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import cartridge from '../assets/catridge/mineral-cartridge.jpg';
import filters from '../assets/filters/uf-filter.jpg';
import membrane from '../assets/Membrane/membrane-1.jpg';
import pump from '../assets/Pumps/pump.jpg';

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Get the distance between the top of the page and the bottom of the Products section
      const sectionOffset = document.getElementById('products').offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the user has scrolled to or past the Products section
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
    // Animate from right to left with fade-in when the component becomes visible
    if (isVisible) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div  initial={{ opacity: 0, x: 50 }}
    animate={controls}
    transition={{ duration: 1.5 }}
    className='mb-20' id="products">

    <div className='mb-20' >
      <h2 className="text-4xl font-bold mb-6 text-primary text-center">Our Products</h2>

      <div className="flex flex-wrap justify-center gap-10 pl-10 pr-10">
        {/* Cartridge Product */}
        <Link to="/products/cartridge" className="product-card">
          <img src={cartridge} alt="Cartridge" className="object-cover w-72  h-auto" />
          {/* <p className="mt-2">Cartridge</p> */}
        </Link>

        {/* Filters Product */}
        <Link to="/products/filters" className="product-card">
          <img src={filters} alt="Filters" className="object-cover w-72  h-auto" />
          {/* <p className="mt-2">Filters</p> */}
        </Link>

        {/* Membrane Product */}
        <Link to="/products/membrane" className="product-card">
          <img src={membrane} alt="Membrane" className="object-cover w-72  h-auto" />
          {/* <p className="mt-2">Membrane</p> */}
        </Link>

        {/* Pumps Product */}
        <Link to="/products/pumps" className="product-card">
          <img src={pump} alt="Pumps" className="object-cover w-72  h-auto" />
          {/* <p className="mt-2">Pumps</p> */}
        </Link>
      </div>
    </div>
    </motion.div>
  );
};

export default Products;
