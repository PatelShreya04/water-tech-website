// Events.js
import React, { useState } from 'react';
import image from '../assets/event.jpg';

const Events = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='mt-10 mb-12' id="events">
      <h2 className="text-4xl font-bold  text-center text-primary mb-6">Upcoming Events</h2>
      <div className=" flex items-center justify-center ">
        <div className={`w-96 h-[450px] perspective-1000px ${isFlipped ? 'flip' : ''}`} onClick={handleCardClick}>
          <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 transform-style:preserve-3d group-hover:transform:rotateY(180deg)`}>
            {/* Front of the card */}
            <div className={`absolute bg-secondary p-2 inset-0 rounded-xl ${isFlipped ? 'hidden' : ''}`}>
              <img src={image} className="w-full h-full object-contain rounded-xl" alt="Event" />
              <div className="absolute bottom-0 left-0 right-0 bg-secondary p-2 text-center">
                <p className="text-white cursor-pointer hover:underline">Click Here</p>
              </div>
            </div>

            {/* Back of the card */}
            <div className={`absolute inset-0 h-full w-full rounded-xl bg-secondary text-center text-white transform:rotateY(180deg) backface-visibility:hidden ${isFlipped ? '' : 'hidden'}`}>
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl font-bold mb-4">8<sup>th</sup> EDITION WAPTAG WATER EXPO 2024</h1>
                {/* <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, metus id rhoncus consequat.</p> */}
                <p className="text-sm">Date: 29<sup>th</sup> February  2024 to 2<sup>nd</sup> March 2024</p>
                <a href="https://maps.app.goo.gl/iy8S6mFc2ohCWzW8A" className="text-sm hover:underline">Venue: Mahatma Mandir, Gandhinagar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
