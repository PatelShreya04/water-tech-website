import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the hamburger icon
import logo from '../assets/logo-removebg-preview.png';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className=' p-2  bg-water'>

               
                <div className=' flex md:space-x-10 space-x-4 font-sans text-white font-semibold md:text-lg text-[8px] text-center justify-center'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/brands">Our Brands</a>
                    <a href="/products">Products</a>
                    <a href="/events">Upcoming Events</a>    
                    <a href="/contact">Contact Us</a>

                </div>
                {/* <div className='md:hidden'>

                    {isNavOpen ? (
                        <FaTimes onClick={toggleNav} className='cursor-pointer h-24' />
                    ) : (
                        <FaBars onClick={toggleNav} className='cursor-pointer h-24' />
                    )}
                </div> */}

            

            {/* Responsive Navigation */}
            {/* {isNavOpen && (
                <div className='md:hidden mt-2 h-screen bg-opacity-20  '>
                    <div className='flex flex-col space-y-2 text-center'>
                        <a href="/">Home</a>
                        <a href="#about">About</a>
                        <a href="#brands">Our Brands</a>
                        <a href="#products">Products</a>
                        <a href="#events">Upcoming Events</a>
                        <a href="#contactus">Contact Us</a>
                    </div>

                </div>


            )} */}

        </div>
    );
};

export default Nav;
