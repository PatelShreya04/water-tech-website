import React from 'react';
import pump1 from '../../assets/Pumps/pump.jpg';
import Nav from '../Nav';
import Footer from '../Footer';

const Pumps = () => {
  const pumpImages = [pump1]; // Add more pump images if needed

  return (
    <div>
        <Nav />
        <h2 className='text-4xl font-bold mb-6 text-primary text-center'>Pumps</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:mb-20 md-10 pl-10 pr-10">
      {pumpImages.map((image, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <img src={image} alt={`Pump ${index + 1}`} className="w-full h-auto rounded" />
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default Pumps;
