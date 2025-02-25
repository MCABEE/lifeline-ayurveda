// import React from 'react'

// function Navbar() {
//   return (
//     <div className='flex justify-between items-center py-4 px-[40px] xl:px-[100px]  2xl:px-[196px]'>
//         <img src="/assets/logo.svg" alt="logo" className='w-[150px] xl:w-auto' />
//         <div className='flex items-center space-x-[50px] xl:space-x-[105px]'>
//            <div className='flex items-center space-x-6 xl:space-x-12 text-[14px] xl:text-[16px]'>
//            <span className=' font-semibold'>Services</span>
//             <span className=' font-semibold'>Treatments</span>
//             <span className=' font-semibold'>Our Team</span>
//             <span className=' font-semibold'>Testimonials</span>
//             <span className=' font-semibold'>About us</span>
//            </div>
//            <button className= 'w-[100px] xl:w-[120px] h-[40px] text-[14px] xl:text-[16px] font-semibold text-white bg-[#09B438] flex justify-center items-center rounded-[10px]'>
//            Contact
//            </button>
           



//         </div>
//     </div>
//   )
// }

// export default Navbar






"use client"


import React, { useState } from 'react'

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    document.body.style.overflow = drawerOpen ? 'auto' : 'hidden'; // Prevent scrolling when drawer is open
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center py-4 px-[15px] sm:px-[50px] xl:px-[100px] 2xl:px-[196px] bg-white drop-shadow-md'>
        <img src="/assets/logo.svg" alt="logo" className='w-[80px] sm:w-[150px] xl:w-auto' />
        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-[50px] xl:space-x-[105px]'>
        <div className='flex items-center space-x-6 xl:space-x-12 text-[14px] xl:text-[16px] text-[#333333]'>
            <span className='font-semibold'>Services</span>
            <span className='font-semibold'>Treatments</span>
            <span className='font-semibold'>Our Team</span>
            <span className='font-semibold'>Testimonials</span>
            <span className='font-semibold'>About us</span>
          </div>
          <button className='w-[120px] h-[40px] text-[16px] font-semibold text-white bg-[#09B438] flex justify-center items-center rounded-[10px]'>
            Contact
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleDrawer} className='text-black text-xl sm:text-3xl'>
            {drawerOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed top-0 right-0 w-[75%] sm:w-[60%] bg-[#ffffff] h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0  overflow-y-scroll' : 'translate-x-full'
        } z-40`}
      >
        <ul className="mt-20 space-y-5 text-[18px] font-normal text-[#333333]">
          <li className="cursor-pointer hover:text-gray-300">Services</li>
          <li className="cursor-pointer hover:text-gray-300">Treatments</li>
          <li className="cursor-pointer hover:text-gray-300">Our Team</li>
          <li className="cursor-pointer hover:text-gray-300">Testimonials</li>
          <li className="cursor-pointer hover:text-gray-300">About us</li> 
        </ul>
        <button className='w-[100px] h-[40px] text-[14px] mt-16 font-semibold text-white bg-[#09B438] flex justify-center items-center rounded-[10px]'>
              Contact
            </button>
      </div>

      {/* Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
