// Slider.js
import React, { useState } from 'react';
import image1 from '../assets/tech2.jpeg'
import image2 from '../assets/tech3.jpeg'
import image3 from '../assets/water-tec-image.jpg'

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
    <div className="slider-container relative overflow-hidden w-full md:h-[400px]">
      <button onClick={prevSlide} className="prev-button  md:block absolute top-1/2 transform -translate-y-1/2 left-4 text-2xl text-gray-700">&#9665;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image w-full h-[400px] md:h-[600px] lg:h-[800px]" />
      <button onClick={nextSlide} className="next-button  md:block absolute top-1/2 transform -translate-y-1/2 right-4 text-2xl text-gray-700">&#9655;</button>
    </div>
  );
};

export default Slider;
