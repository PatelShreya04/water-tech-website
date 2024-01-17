import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the hamburger icon
// import logo from '../assets/logo.png';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className='p-6'>
            <div className='flex justify-between items-center'>
                <div>
                    {/* <img src={logo} className='h-12 md:w-40 w-[150px]' alt='Logo' /> */}
                    <p className=' text-xl'>logo</p>
                </div>
                <div className='hidden md:flex md:space-x-8 font-sans'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/brands">Our Brands</a>
                    <a href="/events">Events</a>
                    <a href="/awards">Awards</a>
                    <a href="/contactus">Contact Us</a>

                </div>
                <div className='md:hidden'>

                    {isNavOpen ? (
                        <FaTimes onClick={toggleNav} className='cursor-pointer' />
                    ) : (
                        <FaBars onClick={toggleNav} className='cursor-pointer' />
                    )}
                </div>

            </div>

            {/* Responsive Navigation */}
            {isNavOpen && (
                <div className='md:hidden mt-2 h-screen bg-opacity-20  '>
                    <div className='flex flex-col space-y-2 text-center'>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/brands">Our Brands</a>
                        <a href="/events">Events</a>
                        <a href="/awards">Awards</a>
                        <a href="/contactus">Contact Us</a>
                    </div>

                </div>


            )}

        </div>
    );
};

export default Nav;
