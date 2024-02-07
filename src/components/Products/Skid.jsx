import React from 'react';


import Footer from '../Footer';
import skid1 from '../../assets/skids/1.png'
import skid2 from '../../assets/skids/2.png'
import skid3 from '../../assets/skids/3.png'
import skid4 from '../../assets/skids/4.png'
import skid5 from '../../assets/skids/5.png'
import skid6 from '../../assets/skids/6.png'
import skid7 from '../../assets/skids/7.png'
import skid8 from '../../assets/skids/8.png'
import skid9 from '../../assets/skids/9.png'
import skid10 from '../../assets/mskid/skid-last.jpg'
import Nav from '../Nav';
import Header from '../Header';


const Skid = () => {
  const Skidimages = [skid1, skid2, skid3, skid4, skid5, skid6, skid7, skid8, skid9, skid10]; // Add more membrane images if needed

  return (
    <div>
      <Header />
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
