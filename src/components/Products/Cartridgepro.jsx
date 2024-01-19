import React from 'react';
import cartridge1 from '../../assets/catridge/mineral-cartridge.jpg';
import cartridge2 from '../../assets/catridge/mineral-cartridge2.jpg';
import cartridge3 from '../../assets/catridge/mineral-2.jpg';
import Nav from '../Nav';
import Footer from '../Footer';

const cartridges = [
  { id: 1, image: cartridge1 },
  { id: 2, image: cartridge2  },
  { id: 3, image: cartridge3  },
];

const Cartridgepro = () => {
  return (
    <div className=''>
      <Nav />
      <h2 className='text-4xl font-bold mb-6 text-primary text-center'>Cartridge</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center pl-10 pr-10 mb-20 md:mb-10">
        {cartridges.map((cartridge) => (
          <div key={cartridge.id} className="bg-white p-4 rounded-lg shadow">
            <img src={cartridge.image} alt={cartridge.title} className="w-full h-auto rounded" />
            <p className="mt-2 text-center text-lg font-semibold">{cartridge.title}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Cartridgepro;
