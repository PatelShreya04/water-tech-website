import React from 'react'
import image1 from '../../assets/4FF/4filter1.jpg'
import image2 from '../../assets/4FF/4filter2.jpg'
import image3 from '../../assets/4FF/4filter3.jpg'
import image4 from '../../assets/4FF/4filter4.jpg'
import image5 from '../../assets/4FF/4filter11.jpg'
import image6 from '../../assets/4FF/4filter21.jpg'
// import image6 from '../../assets/4FF/alkalinefilter4.png'
import image7 from '../../assets/4FF/aquauf8.png'
// import image8 from '../../assets/4FF/ca4.png'
// import image9 from '../../assets/4FF/carbonfilter4.png'
// import image10 from '../../assets/4FF/copper-3.jpg'
// import image11 from '../../assets/4FF/copper-alk-filter-1.jpg'
// import image12 from '../../assets/4FF/mineral-filter.jpg'
// import image13 from '../../assets/4FF/mineralfilter4.png'
// import image14 from '../../assets/4FF/uf-filter.jpg'
import Nav from '../Nav'
import Footer from '../Footer'
import Header from '../Header'

const Filterfour = () => {
    const filterImages = [
        image1, image2, image3, image4,image5
      ];
    
      return (
        <div>
          <Header />
            <Nav />
            <h2 className='text-5xl font-bold mb-6 text-primary text-center custom-text-shadow transform hover:scale-125 transition-transform duration-300 ease-out '>4'' Filters</h2>
    
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

export default Filterfour
