import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import director1 from '../assets/skid/1.png'; // Import image for director 1
import director2 from '../assets/skid/1.png'; // Import image for director 2

const About = () => {
  return (
    <div>
      <Header />
      <Nav />

      <div className="container mx-auto mt-5 p-5">
      <p className='font-bold md:text-4xl text-2xl text-blue-900 text-center '>WELCOME TO<b> SHREYA WATER TECH LLP</b></p>
        
        <p className="text-lg pt-3  text-justify">
        <b>SHREYA WATER TECH LLP </b>stands as a pinnacle of excellence in the realm of water purification, bearing the esteemed certification of ISO 9001:2008. Founded by the visionary duo brothers,<b>Mr. Ashok Patel</b>  and <b>Mr. Suresh Patel</b>, our journey is fueled by a fervent commitment to innovation and quality.We specialize in the meticulous crafting of <b>Reverse Osmosis Systems (ROs)</b> and their integral components.

        </p>
        <p className="text-lg pt-3  text-justify">
At <b>SHREYA WATER TECH</b>, we epitomize precision and ingenuity in the manufacturing and marketing of Domestic & Industrial Water Filter Parts. Our best marketed products include UF Filters, Copper Alkaline filters.  Our foundation rests upon a bedrock of expertise.. We remain steadfast in our dedication to meeting the dynamic demands of the market, perpetually staying tuned to emerging trends and customer preferences.
        </p>
        <p className="text-lg pt-3  text-justify">
A cornerstone of our moral lies in fostering close-knit relationships with our clients, facilitating a symbiotic exchange that enables us to tailor our offerings to their exact requirements. Through unwavering dedication to research and development, we continuously push the boundaries of innovation, ensuring that our product portfolio remains at the vanguard of technological advancement.

        </p>
        <p className="text-lg pt-3  text-justify">
Our unwavering commitment extends beyond mere manufacturing; we pledge to deliver solutions that transcend expectations in terms of innovation, cost-effectiveness, and reliability. 
        </p>
        <p className="text-lg  pt-3 text-justify">
<b>SHREYA WATER TECH</b> stands as a beacon of reliability and trust, a testament to our enduring quest for excellence in the realm of water purification.
        </p>
        {/* Add more content as needed */}

        {/* <h3 className="text-2xl font-bold mb-4">Our Team</h3>
        
        <p className="text-lg mb-4">
          Meet the directors who lead our company to success:
        </p> */}

        {/* <div className="flex flex-wrap justify-center mb-8">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img src={director1} alt="Director 1" className="w-full h-auto rounded-md shadow-lg" />
            <p className="text-center mt-2 font-bold">Mr. Ashok Patel </p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img src={director2} alt="Director 2" className="w-full h-auto rounded-md shadow-lg" />
            <p className="text-center mt-2 font-bold"> Mr. Suresh Patel</p>
          </div>
        </div> */}

        {/* Add more content as needed */}
      </div>

      <Footer />
    </div>
  );
};

export default About;
