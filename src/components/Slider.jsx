// Slider.js
import React, { useState } from 'react';
import image1 from '../assets/Pumps/pump.jpg'
import image2 from '../assets/filters/uf-filter.jpg'
import image3 from '../assets/product3.jpg'

const images = [
  image1, image2, image3
  // Add more image URLs as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container relative overflow-hidden w-full md:h-[400px] flex items-center justify-center">
      <button onClick={prevSlide} className="prev-button md:block absolute top-1/2 transform -translate-y-1/2 left-4 text-2xl text-gray-700">&#9665;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image w-[400px] h-[400px] md:h-[600px] lg:h-[800px] p-3" />
      <button onClick={nextSlide} className="next-button md:block absolute top-1/2 transform -translate-y-1/2 right-4 text-2xl text-gray-700">&#9655;</button>
    </div>
  );
};

export default Slider;
