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






// "use client"


// import Link from 'next/link';
// import React, { useState } from 'react'

// function Navbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//     document.body.style.overflow = drawerOpen ? 'auto' : 'hidden'; // Prevent scrolling when drawer is open
//   };

//   return (
//     <div className='w-full'>
//       <div className='flex justify-between items-center py-4 px-[15px] sm:px-[50px] xl:px-[100px] 2xl:px-[196px] bg-white drop-shadow-md'>
//        <Link href={"/"}>
//        <img src="/assets/logo.svg" alt="logo" className='w-[80px] sm:w-[150px] xl:w-auto' />
//        </Link>
//         {/* Desktop Navigation */}
//         <div className='hidden lg:flex items-center space-x-[50px] xl:space-x-[105px]'>
//         <div className='flex items-center space-x-6 xl:space-x-12 text-[14px] xl:text-[16px] text-[#333333]'>
//             <span className='font-semibold'>Services</span>
//             <span className='font-semibold'>Treatments</span>
//             <span className='font-semibold'>Our Team</span>
//             <span className='font-semibold'>Testimonials</span>
//             <span className='font-semibold'>About us</span>
//           </div>
//           <Link href={"/contact"}>
//           <button className='w-[120px] h-[40px] text-[16px] font-semibold text-white bg-[#09B438] flex justify-center items-center rounded-[10px]'>
//             Contact
//           </button>
//           </Link>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className='lg:hidden'>
//           <button onClick={toggleDrawer} className='text-black text-xl sm:text-3xl'>
//             {drawerOpen ? '✖' : '☰'}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer Navigation */}
//       <div
//         className={`fixed top-0 right-0 w-[75%] sm:w-[60%] bg-[#ffffff] h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
//           drawerOpen ? 'translate-x-0  overflow-y-scroll' : 'translate-x-full'
//         } z-40`}
//       >
//         <ul className="mt-20 space-y-5 text-[18px] font-normal text-[#333333]">
//           <li className="cursor-pointer hover:text-gray-300">Services</li>
//           <li className="cursor-pointer hover:text-gray-300">Treatments</li>
//           <li className="cursor-pointer hover:text-gray-300">Our Team</li>
//           <li className="cursor-pointer hover:text-gray-300">Testimonials</li>
//           <li className="cursor-pointer hover:text-gray-300">About us</li> 
//         </ul>
//        <Link href={"/contact"}>
//        <button
//           onClick={toggleDrawer}
//           className='w-[100px] h-[40px] text-[14px] mt-16 font-semibold text-white bg-[#09B438] flex justify-center items-center rounded-[10px]'>
//               Contact
//             </button>
//        </Link>
//       </div>

//       {/* Drawer Overlay */}
//       {drawerOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
//           onClick={toggleDrawer}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default Navbar;











"use client"

import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    document.body.style.overflow = drawerOpen ? 'auto' : 'hidden';
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center py-4 px-[15px] sm:px-[50px] xl:px-[100px] 2xl:px-[196px] bg-white drop-shadow-md'>
        <Link href={"/"}>
          <img src="/assets/logo.svg" alt="logo" className='w-[80px] sm:w-[150px] xl:w-auto' />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-[50px] xl:space-x-[105px]'>
          <div className='flex items-center space-x-6 xl:space-x-12 text-[14px] xl:text-[16px] text-[#333333]'>
          <Link href={"/services"}>
            <span className='font-semibold'>Services</span>
            </Link>

            {/* Treatments with Submenu */}
            <div className="relative">
              <button 
                onClick={toggleSubmenu} 
                className="font-semibold flex items-center gap-1 transition-all duration-300 ease-in-out"
              >
                Treatments
                <span className={`transform transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Desktop Submenu */}
              <div className={`absolute left-0 mt-2 w-[220px] bg-white shadow-lg border rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                submenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul onClick={toggleSubmenu}  className="flex flex-col p-2 text-[14px] xl:text-[16px] text-[#333333]">
                  <Link href={"/ayurvedaTherapy"}>
                  <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Ayurveda Therapy</li>
                  </Link>
                  <Link href={"/ayurvedaCare"}>
                  <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Ayurveda Care</li>
                  </Link>
                  <Link href={"/ayurvedaCure"}>
                  <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Ayurveda Cure</li>
                  
                  </Link>
                  <Link href={"/ayurvedaWellness"}>
                  <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Ayurveda Wellness</li>
                  
                  </Link>
                  
                </ul>
              </div>
            </div>

            {/* <span className='font-semibold'>Our Team</span> */}
            <Link href={"/testimonials"}>
            <span className='font-semibold'>Testimonials</span>
            
            </Link>

            <Link href={"/aboutUs"}>
            <span className='font-semibold'>About us</span>
            
            </Link>
            <Link href={"/gallery"}>
            <span className='font-semibold'>Gallery</span>
            
            </Link>
          </div>

          <Link href={"/contact"}>
            <button className='w-[120px] h-[40px] text-[16px] font-semibold text-white bg-[#09B438] flex justify-center items-center rounded-[10px]'>
              Contact
            </button>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleDrawer} className='text-black text-xl sm:text-3xl'>
            {drawerOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`fixed top-0 right-0 w-[75%] sm:w-[60%] bg-[#ffffff] h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
        drawerOpen ? 'translate-x-0 overflow-y-scroll' : 'translate-x-full'
      } z-40`}>
        <ul className="mt-20  text-[18px] font-normal text-[#333333]">
        <Link href={"/services"}>
        <li onClick={toggleDrawer} className="cursor-pointer hover:text-gray-300 pb-6">Services</li>
        </Link>
          {/* Treatments with Submenu for Mobile */}
          <li className="cursor-pointer  hover:text-gray-300 flex justify-between items-center pb-6" onClick={toggleSubmenu}>
            Treatments
            <span className={`transform transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </li>

          {/* Mobile Submenu with Smooth Expand/Collapse */}
          <ul className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
            submenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <Link href={"/ayurvedaTherapy"}>
            <li className="cursor-pointer hover:text-gray-300 p-2" onClick={toggleDrawer} >Ayurveda Therapy</li>
            
            </Link>
              <Link href={"/ayurvedaCare"}>
            <li className="cursor-pointer hover:text-gray-300 p-2" onClick={toggleDrawer}>Ayurveda Care</li>
              </Link>
              <Link href={"/ayurvedaCure"}>
            <li className="cursor-pointer hover:text-gray-300 p-2" onClick={toggleDrawer}>Ayurveda Cure</li>
               </Link>
               <Link href={"/ayurvedaWellness"}>
            <li className="cursor-pointer hover:text-gray-300 p-2 pb-4" onClick={toggleDrawer}>Ayurveda Wellness</li>
               </Link>
          </ul>

          {/* <li className="cursor-pointer hover:text-gray-300">Our Team</li> */}
          <Link href={"/testimonials"}>
          <li onClick={toggleDrawer} className="cursor-pointer hover:text-gray-300 pb-6">Testimonials</li>
          </Link>
          <Link href={"/aboutUs"}>

          <li onClick={toggleDrawer} className="cursor-pointer hover:text-gray-300 pb-6">About us</li>
          </Link>
          <Link href={"/gallery"}>

<li onClick={toggleDrawer} className="cursor-pointer hover:text-gray-300 pb-6">Gallery</li>
</Link>
        </ul>

        <Link href={"/contact"}>
          <button onClick={toggleDrawer} className='w-[100px] h-[40px] text-[14px] mt-16 font-semibold text-white bg-[#09B438] flex justify-center items-center rounded-[10px]'>
            Contact
          </button>
        </Link>
      </div>

      {/* Drawer Overlay */}
      {drawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30" onClick={toggleDrawer}></div>
      )}
    </div>
  );
}

export default Navbar;
