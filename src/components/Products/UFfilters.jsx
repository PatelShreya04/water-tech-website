import React from 'react';

import uv from '../../assets/filters/uf-filter.jpg';
import f4 from '../../assets/filters/alkalinefilter4.png'
import f10 from '../../assets/filters/alkalinefilter10.png'
import f20 from '../../assets/filters/alkalinefilter20.png'
import a8 from '../../assets/filters/aquauf8.png'


import Footer from '../Footer';
import Nav from '../Nav';

const UFFilters = () => {
  const filterImages = [
     uv,f4,f10,f20,a8
  ];

  return (
    <div>
        <Nav />
        <h2 className='text-5xl font-bold mb-6 text-primary text-center custom-text-shadow transform hover:scale-125 transition-transform duration-300 ease-out ' id="filters">Filters</h2>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pl-10 pr-10 md:mb-20 mb-10">
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

export default UFFilters;
