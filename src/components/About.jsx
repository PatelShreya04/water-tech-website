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

      <div className="container mx-auto mt-10 p-5">
      <p className='font-bold md:text-4xl text-2xl text-blue-900 text-center '>WELCOME TO<b> SHREYA WATER TECH LLP</b></p>
        
        <p className="text-lg mb-4 pt-3">
        SHREYA WATER TECH LLP is an ISO 9001:2008 Certified  Company. Which is one of the leading  Manufacturers  of Reverse Osmosis Systems & Its Parts. Company  Established   by Highly qualified and innovative minded two  brothers Mr. Ashok Patel & Mr. Suresh Patel. The company is engaged into manufacturing and marketing of Domestic & Industrial Water Filter Parts of high quality commitments. Our company keeps abreast with market  trends and keep close co-operation with our clients in the field,  which helps us in adapting to our customers need. With continuous R&D, we ensure that new products are developed with precision and perfection and are in accordance with market demands. We have dedicated our all resources to deliver innovative, cost effective, reliable products to our customers across all our India.
        </p>

        {/* Add more content as needed */}

        {/* <h3 className="text-2xl font-bold mb-4">Our Team</h3>
        
        <p className="text-lg mb-4">
          Meet the directors who lead our company to success:
        </p> */}

        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img src={director1} alt="Director 1" className="w-full h-auto rounded-md shadow-lg" />
            <p className="text-center mt-2 font-bold">Mr. Ashok Patel </p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img src={director2} alt="Director 2" className="w-full h-auto rounded-md shadow-lg" />
            <p className="text-center mt-2 font-bold"> Mr. Suresh Patel</p>
          </div>
        </div>

        {/* Add more content as needed */}
      </div>

      <Footer />
    </div>
  );
};

export default About;
