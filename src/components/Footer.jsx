import React from 'react';

const Footer = () => {
    // Updated latitude and longitude values for a new location
    const newLatitude = 23.159362504362317; // Replace with the new latitude
    const newLongitude = 72.6654679605087; // Replace with the new longitude

    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d${newLongitude}!3d${newLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU3JzA4LjAiTiA3MsKwMzknNTguOSJF!5e0!3m2!1sen!2sus!4v1642662791234!5m2!1sen!2sus`;




    return (
        <div>
            <div className='flex md:flex-row flex-col md:space-x-20 md:space-y-0 space-y-6 bg-water text-white p-5'>
                <div className='space-y-2'>
                    <p className='text-xl font-bold' id="contactus">Location</p>
                    <p>Office:</p>
                    <p>22, vrindavan residency behind  Dwarkesh Haveli</p>
                    <p>Nikol, Ahmedabad, 382350</p>
                    <br></br>
                    <p>Factory:</p>
                    <p>Plot 1  Prince Industrial Hub-1 Kothiya road</p>
                    <p>Kuha, Ahmedabad, 380001</p>
                   
                    
                    {/* <p>Gujarat, India</p> */}
                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-bold' id="contactus">Contact</p>
                    <p> 9898228284</p>
                    <p>9898406504</p>
                    <p>patelashok7056@gmail.com </p>
                    <p>patelsuresh921@gmail.com </p>


                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-bold'>Quick Links</p>
                    <p href="/">Home</p>
                    <p href="#about">About</p>
                    <p>Events</p>
                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-bold'>Brand</p>
                    <p>Sea Pure  </p>
                    <p>S-Pure</p>

                </div>
                {/* Google Map Embed at the right end */}
                {/* <div className='md:pl-24 pl-0'>
                    <iframe
                        title='Google Map'
                        className='w-full h-64'
                        loading='lazy'
                        allowFullScreen
                        src={mapUrl}
                    ></iframe>
                </div> */}
            </div>

            <div className='bg-black text-white text-center p-2'>
            Designed and Managed By Infolanze
            </div>
        </div>
    );
};

export default Footer;
