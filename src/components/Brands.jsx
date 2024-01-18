// Brands.js
import React from 'react';
import image1 from '../assets/product1.jpg';
import image2 from '../assets/product2p.png';
import image3 from '../assets/product3.jpg';

const Brands = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-primary">Our Brands</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Brand 1 */}
            <div className="flex items-center justify-center bg-white w-40 h-40 p-4 rounded-full shadow-md">
              <img src={image1} alt="Brand 1" className="w-32 h-32 object-cover rounded-full" />
            </div>

            {/* Brand 2 */}
            <div className="flex items-center justify-center bg-white p-4 w-40 h-40 rounded-full shadow-md">
              <img src={image2} alt="Brand 2" className="w-32 h-32 object-cover rounded-full" />
            </div>

            {/* Brand 3 */}
            <div className="flex items-center justify-center bg-white p-4 w-40 h-40 rounded-full shadow-md">
              <img src={image3} alt="Brand 3" className="w-32 h-32 object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
