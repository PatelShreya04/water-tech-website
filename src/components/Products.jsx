import React from 'react';

import image1 from '../assets/4FF/4filter1.jpg'
import image2 from '../assets/8ff/8filter.jpg'
import image3 from '../assets/10ff/10filter.jpg'
import image4 from '../assets/mskid/1.png'

const Products = () => {
  return (
    <div className='mb-20' id="products">
      <div className='mb-20'>
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">Our Products</h2>

        <div className="flex md:flex-row flex-col justify-center md:gap-12 gap-10 pl-10 pr-10">
          {/* Cartridge Product */}
          <a href="/4ff" className="product-card">
            <img
              src={image1}
              alt="Cartridge"
              className="object-cover w-72 h-auto shadow-lg shadow-gray-600 border-5 border-solid border-gray-300 transform transition-transform duration-300 ease-out hover:scale-110"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2 text-center text-primary font-bold md:text-2xl lg:text-[22px] text-[20px] transform hover:scale-125 transition-transform duration-300 ease-out">4'' Filter</p>
          </a>

          {/* Filters Product */}
          <a href="/8ff" className="product-card">
            <img
              src={image2}
              alt="Filters"
              className="object-cover w-72 h-auto shadow-lg shadow-gray-600 border-5 border-solid border-gray-300 transform transition-transform duration-300 ease-out hover:scale-110"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2 text-center text-primary font-bold md:text-2xl lg:text-[22px] text-[20px]transform hover:scale-125 transition-transform duration-300 ease-out ">8'' Filter</p>
          </a>

          {/* Membrane Product */}
          <a href="/10ff" className="product-card">
            <img
              src={image3}
              alt="Membrane"
              className="object-cover w-72 h-auto shadow-lg shadow-gray-600 border-5 border-solid border-gray-300 transform transition-transform duration-300 ease-out hover:scale-110"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2 text-center text-primary font-bold md:text-2xl lg:text-[22px] text-[20px] transform hover:scale-125 transition-transform duration-300 ease-out">10'' Filter</p>
          </a>

          <a href="/skid" className="product-card">
            <img
              src={image4}
              alt="Membrane"
              className="object-cover w-72 h-auto shadow-lg shadow-gray-600 border-5 border-solid border-gray-300 transform transition-transform duration-300 ease-out hover:scale-110"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2 text-center text-primary font-bold md:text-2xl lg:text-[22px] text-[20px] transform hover:scale-125 transition-transform duration-300 ease-out">MS/SS Skid</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
