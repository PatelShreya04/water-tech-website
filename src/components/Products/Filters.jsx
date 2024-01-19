import React from 'react';
import copper1 from '../../assets/filters/copper-alk-filter-1.jpg';
import copper2 from '../../assets/filters/copper-alk-filter-2.jpg';
import copper3 from '../../assets/filters/copper-alk-filter4.jpg';
import copper4 from '../../assets/filters/copper-3.jpg';
import mineral from '../../assets/filters/mineral-filter.jpg';
import uv from '../../assets/filters/uf-filter.jpg';
import Footer from '../Footer';
import Nav from '../Nav';

const Filters = () => {
  const filterImages = [
    copper1, copper2, copper3, copper4, mineral, uv
  ];

  return (
    <div>
        <Nav />
        <h2 className='text-4xl font-bold mb-6 text-primary text-center'>Filters</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pl-10 pr-10 md:mb-20 mb-10">
      {filterImages.map((image, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <img src={image} alt={`Filter ${index + 1}`} className="w-full h-auto rounded" />
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default Filters;
