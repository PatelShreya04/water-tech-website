import React from 'react';
import Logo from '../assets/logo-removebg-preview.png'

const Header = () => {
  return (
    <div className=' flex items-center justify-between p-4'>
      {/* Logo on the left */}
      <div className='flex items-center'>
        {/* Replace 'YourLogo.png' with the actual path to your logo image */}
        <img src={Logo} alt='Logo' className=' mr-2 h-14 md:w-30 w-[80px]' />
        <span className='text-white text-lg font-bold'></span>
      </div>

      {/* Email and Contact Number on the right */}
      <div className='flex-col items-center md:text-sm text-[10px] font-medium '>
        <p className='text-black mr-4'>shreyawatertechllp@gmail.com</p>
        <p className='text-black'> +91 9898650485 </p>
      </div>
    </div>
  );
};

export default Header;
