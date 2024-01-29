import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import uf from '../assets/filters/uf-filter.jpg';
import copper1 from '../assets/filters/copper-alk-filter-1.jpg';
import skid1 from '../assets/skid/1.png';

const Products = () => {
  return (
    <div className='mb-20' id="products">
      <div className='mb-20'>
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">Our Products</h2>

        <div className="flex md:flex-row flex-col justify-center md:gap-12 gap-10 pl-10 pr-10">
          {/* Cartridge Product */}
          <Link to="/uffilters" className="product-card">
            <img
              src={uf}
              alt="Cartridge"
              className="object-cover w-72 h-auto shadow-lg shadow-gray-600 border-5 border-solid border-gray-300 transform transition-transform duration-300 ease-out hover:scale-110"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2 text-center text-primary font-bold md:text-2xl lg:text-[22px] text-[20px] transform hover:scale-125 transition-transform duration-300 ease-out">UF Filters</p>
          </Link>

          {/* Filters Product */}
          <Link to="/filters" className="product-card">
            <img
              src={copper1}
              alt="Filters"
              className="object-cover w-72 h-auto shadow-lg shadow-gray-600 border-5 border-solid border-gray-300 transform transition-transform duration-300 ease-out hover:scale-110"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2 text-center text-primary font-bold md:text-2xl lg:text-[22px] text-[20px]transform hover:scale-125 transition-transform duration-300 ease-out ">Copper Alkaline Filters</p>
          </Link>

          {/* Membrane Product */}
          <Link to="/skid" className="product-card">
            <img
              src={skid1}
              alt="Membrane"
              className="object-cover w-72 h-auto shadow-lg shadow-gray-600 border-5 border-solid border-gray-300 transform transition-transform duration-300 ease-out hover:scale-110"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2 text-center text-primary font-bold md:text-2xl lg:text-[22px] text-[20px] transform hover:scale-125 transition-transform duration-300 ease-out">Skid</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
