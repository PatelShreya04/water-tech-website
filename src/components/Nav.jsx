import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the hamburger icon
import logo from '../assets/logo-removebg-preview.png';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className=' pl-4 pr-4  bg-gray-300'>

            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} className='h-24 md:w-38 w-[180px]' alt='Logo' />
                    
                </div>
                <div className='hidden md:flex md:space-x-10 font-sans text-primary font-semibold text-lg'>
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#brands">Our Brands</a>
                    <a href="#products">Products</a>
                    <a href="#events">Upcoming Events</a>    
                    <a href="#contactus">Contact Us</a>

                </div>
                <div className='md:hidden'>

                    {isNavOpen ? (
                        <FaTimes onClick={toggleNav} className='cursor-pointer h-24' />
                    ) : (
                        <FaBars onClick={toggleNav} className='cursor-pointer h-24' />
                    )}
                </div>

            </div>

            {/* Responsive Navigation */}
            {isNavOpen && (
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


            )}

        </div>
    );
};

export default Nav;
