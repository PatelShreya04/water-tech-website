import React from 'react'
import image1 from '../../assets/8ff/8filter.jpg';
import image2 from '../../assets/8ff/8filter2.jpg'
import image3 from '../../assets/8ff/8filter3.jpg'
import image4 from '../../assets/8ff/8filter4.png';
import image5 from '../../assets/8ff/8filter5.jpg';
import image6 from '../../assets/8ff/copper-alk-filter-2.jpg'
import image7 from '../../assets/8ff/copperalkaline8.png';
import image8 from '../../assets/8ff/mineral-2.jpg'
import image9 from '../../assets/8ff/mineral-cartridge.jpg'
import Nav from '../Nav';
import Footer from '../Footer';
import Header from '../Header';
const Filtereight = () => {
    const filterImages = [
        image1, image2, image3, image4, image5, image6, image7, image8, image9
      ];
    
      return (
        <div>
            <Header />
            <Nav/>
            <h2 className='text-5xl font-bold mb-6 text-primary text-center custom-text-shadow transform hover:scale-125 transition-transform duration-300 ease-out '>Filters</h2>
    
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pl-10 pr-10 md:mb-20 mb-10">
          {filterImages.map((image, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <img src={image} alt={`Filter ${index + 1}`} className="w-full h-auto rounded" />
            </div>
          ))}
        </div>
        <Footer/>
        </div>
      );
    };

export default Filtereight
