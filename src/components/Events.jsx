// Events.js
import React, { useState } from 'react';
import '../assets/css/Events.css';

const Events = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='mt-10' id="events">
<h2 className="text-4xl font-bold mb-6 text-center text-primary">Upcoming Events</h2>
    <div className="min-h-screen flex items-center justify-center p-10 md:p-0">
      <div className={`h-96 w-96 perspective-1000px ${isFlipped ? 'flip' : ''}`} onClick={handleCardClick}>
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 transform-style:preserve-3d group-hover:transform:rotateY(180deg)">
          {/* Front of the card */}
          <div className={`absolute inset-0 bg-primary rounded-xl p-6 ${isFlipped ? 'hidden' : ''}`}>
            <h2 className="text-2xl font-bold text-white">Event-1</h2>
            <p className='text-white font-light text-center mt-20'>Click Here!!</p>
          </div>

          {/* Back of the card */}
          <div className={`absolute inset-0 h-full w-full rounded-xl bg-secondary text-center text-white transform:rotateY(180deg) backface-visibility:hidden ${isFlipped ? '' : 'hidden'}`}>
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-3xl font-bold mb-4">Event Name</h1>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, metus id rhoncus consequat.</p>
              <p className="text-sm">Date: January 15, 2024</p>
              <p className="text-sm">Venue: Your Venue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Events;
