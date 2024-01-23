import React from 'react';

import Nav from '../Nav';
import Footer from '../Footer';
import skid1 from '../../assets/skid/1.png'
import skid2 from '../../assets/skid/2.png'
import skid3 from '../../assets/skid/3.png'
import skid4 from '../../assets/skid/4.png'
import skid5 from '../../assets/skid/5.png'
import skid6 from '../../assets/skid/6.png'
import skid7 from '../../assets/skid/7.png'
import skid8 from '../../assets/skid/8.png'



const Skid = () => {
  const Skidimages = [skid1, skid2, skid3, skid4, skid5, skid6, skid7, skid8]; // Add more membrane images if needed

  return (
    <div>
        <Nav />
        <h2 className='text-5xl font-bold mb-6 text-primary text-center custom-text-shadow transform hover:scale-125 transition-transform duration-300 ease-out '>MS Skid</h2>




        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pl-10 pr-10 md:mb-20 mb-10">
      {Skidimages.map((image, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <img src={image} alt={`Filter ${index + 1}`} className="w-full h-auto rounded" />
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default Skid;
