// Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import cartridge from '../assets/catridge/mineral-cartridge.jpg';
import filters from '../assets/filters/uf-filter.jpg';
import membrane from '../assets/Membrane/membrane-1.jpg';
import pump from '../assets/Pumps/pump.jpg';

const Products = () => {
  return (
    <div className='mb-20' id="products">
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
  );
};

export default Products;
