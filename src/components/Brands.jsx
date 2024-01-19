// Brands.js
import React from 'react';
import logo1 from '../assets/logo.jpg';
import logo2 from '../assets/logo2.png';

const Brands = () => {
  return (
    <div className="py-10" id="brands">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Our Brands</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Brand 1 */}
          <div className="bg-white p-4 mb-4 md:mb-0 md:mr-4">
            <img src={logo1} alt="Brand 1" className="object-cover h-52 w-54 md:h-64 md:w-54" />
          </div>

          {/* Brand 2 */}
          <div className="bg-white p-4">
            <img src={logo2} alt="Brand 2" className="object-cover h-50 w-54 md:h-54 md:w-54 pt-0 md:pt-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
