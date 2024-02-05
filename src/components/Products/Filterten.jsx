import React from 'react'
import image1 from '../../assets/10ff/10filter.jpg'
import image2 from '../../assets/10ff/alkalinefilter10.png'
import image3 from '../../assets/10ff/alkalinefilter20.png'
import image4 from '../../assets/10ff/ca10.png'
import image5 from '../../assets/10ff/copper-alk-filter4.jpg'
import image6 from '../../assets/10ff/copperalkaline10.png'
import image7 from '../../assets/10ff/filterscollage.jpg'
import image8 from '../../assets/10ff/membrane-1.jpg'
import Nav from '../Nav'
import Footer from '../Footer'
import Header from '../Header'

const Filterten = () => {
    const filterImages = [
        image1, image2, image3, image4, image5, image6, image7, image8
      ];
    
      return (
        <div>
            <Header />
            <Nav />
            <h2 className='text-5xl font-bold mb-6 text-primary text-center custom-text-shadow transform hover:scale-125 transition-transform duration-300 ease-out '>Filters</h2>
    
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
export default Filterten
