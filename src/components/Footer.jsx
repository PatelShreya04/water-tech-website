import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col md:space-x-20 md:space-y-0 space-y-6 bg-secondary text-white p-5'>
                <div className='space-y-2'>
                    <p className='text-xl font-bold' id="contactus">Contact</p>
                    <p>123 Tech Street, Cyberland,  </p>
                    <p>Ahmedabad, 380001</p>
                    <p>Gujarat, India</p>
                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-bold'>Quick Links</p>
                    
                    <a >Home</a>
                    <a href="#about">About</a>
                    <p>Events</p>


                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-bold'>Brand</p>
                    <p>XYZ  </p>
                    <p>ABC</p>
                    <p>PQR</p>
                </div>

            </div>
            <div className='bg-black text-white text-center'>
                &copy;{new Date().getFullYear()} ABC Corp. All rights reserved.
            </div>
        </div>
    )
}
export default Footer
