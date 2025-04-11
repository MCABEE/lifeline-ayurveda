// import React from 'react'

// const page = () => {
//   return (
    
//     <div className='max-w-[1800px] mx-auto'>
//     <div className="px-[16px] sm:px-[50px] lg:px-[100px] 2xl:px-[196px]">
// <h1 className="text-[16px] sm:text-[20px] text-[#09B438] font-bold text-center pt-[28px] md:pt-[59px] ">
// GALLERY
// </h1>
// <h1 className="text-[32px]  xl:text-[42px] text-[#333333] pt-[10px] sm:pt-[13px] font-semibold text-center">
// Moments of Healing 
// </h1>
// <h1 className="text-[14px] sm:text-[16px] xl:text-[20px] pt-[10px] text-[#333333] text-center">
// Explore glimpses of our center, heartfelt experiences, and the serene<br/> moments that define our journey in holistic wellness.
// </h1>
// <div className='w-full border border-[#999999] rounded-[10px] px-[71px] py-[32px] my-[40px] relative'>
//     <img src="/assets/left-arrow.svg" alt="left-arrow" className='absolute left-4 top-1/2' />
//     <img src="/assets/right-arrow.svg" alt="right-arrow" className='absolute right-4 top-1/2' />

// <div className='w-full h-[600px]  rounded-[10px] overflow-hidden flex justify-center items-center bg-[#03761844]'>
// <img src="/assets/gallery1.jpg" className='w-full min-h-full rounded-[10px]' alt="" />
// {/* <img src="/assets/gallery2.jpg" className=' min-h-full rounded-[10px] ' alt="" /> */}
// {/* <img src="/assets/gallery3.jpg" className=' min-h-full rounded-[10px]' alt="" /> */}
// {/* <img src="/assets/gallery4.jpg" className=' min-h-full rounded-[10px]' alt="" /> */}
// {/* <img src="/assets/05.jpg" className=' min-h-full rounded-[10px]' alt="" /> */}
// {/* <img src="/assets/06.jpg" className=' min-h-full rounded-[10px]' alt="" /> */}
// {/* <img src="/assets/07.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/08.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/09.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/10.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/11.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/12.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/13.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/14.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/15.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/16.jpg" className=' min-h-full rounded-[10px]' alt="" /> */}




// </div>
// </div>
// <div>
//     <div className="w-full h-[120px] flex justify-center overflow-hidden overflow-x-scroll gap-4 mt-[20px] mb-[50px]">
// <img src="/assets/gallery1.jpg" className='min-h-fullrounded-[10px]' alt="" />
// <img src="/assets/gallery2.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/gallery3.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/gallery4.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/05.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/06.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/07.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/08.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/09.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/10.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/11.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/12.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/13.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/14.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/15.jpg" className=' min-h-full rounded-[10px]' alt="" />
// <img src="/assets/16.jpg" className=' min-h-full rounded-[10px]' alt="" />





        
//     </div>
// </div>







// </div>
// </div>
//   )
// }

// export default page

























// 'use client'
// import React, { useEffect, useRef, useState } from 'react'

// const images = [
//   '/assets/gallery1.jpg',
//   '/assets/gallery2.jpg',
//   '/assets/gallery3.jpg',
//   '/assets/gallery4.jpg',
//   '/assets/05.jpg',
//   '/assets/06.jpg',
//   '/assets/07.jpg',
//   '/assets/08.jpg',
//   '/assets/09.jpg',
//   '/assets/10.jpg',
//   '/assets/11.jpg',
//   '/assets/12.jpg',
//   '/assets/13.jpg',
//   '/assets/14.jpg',
//   '/assets/15.jpg',
//   '/assets/16.jpg',
// ]

// const GalleryPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const intervalRef = useRef(null)
//   const thumbnailsRef = useRef(null)

//   const nextImage = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length)
//   }

//   const prevImage = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
//   }

//   const scrollToThumbnail = (index) => {
//     const thumbnail = thumbnailsRef.current?.children[index]
//     if (thumbnail) {
//       thumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center' })
//     }
//   }

//   useEffect(() => {
//     scrollToThumbnail(currentIndex)

//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }

//     intervalRef.current = setInterval(() => {
//       nextImage()
//     }, 4000)

//     return () => clearInterval(intervalRef.current)
//   }, [currentIndex])

//   return (
//     <div className='max-w-[1800px] mx-auto'>
//       <div className="px-[16px] sm:px-[50px] lg:px-[100px] 2xl:px-[196px]">
//         <h1 className="text-[16px] sm:text-[20px] text-[#09B438] font-bold text-center pt-[28px] md:pt-[59px]">GALLERY</h1>
//         <h1 className="text-[32px] xl:text-[42px] text-[#333333] pt-[10px] sm:pt-[13px] font-semibold text-center">Moments of Healing</h1>
//         <h1 className="text-[14px] sm:text-[16px] xl:text-[20px] pt-[10px] text-[#333333] text-center">
//           Explore glimpses of our center, heartfelt experiences, and the serene<br />
//           moments that define our journey in holistic wellness.
//         </h1>

//         <div className='w-full border border-[#999999] rounded-[10px] px-[71px] py-[32px] my-[40px] relative'>
//           <img
//             src="/assets/left-arrow.svg"
//             alt="left-arrow"
//             className='absolute left-4 top-1/2 cursor-pointer'
//             onClick={prevImage}
//           />
//           <img
//             src="/assets/right-arrow.svg"
//             alt="right-arrow"
//             className='absolute right-4 top-1/2 cursor-pointer'
//             onClick={nextImage}
//           />

//           <div className='w-full h-[600px] rounded-[10px] overflow-hidden flex justify-center items-center bg-[#03761844]'>
//             <img
//               src={images[currentIndex]}
//               className='max-h-full max-w-full object-contain'
//               alt="Gallery"
//             />
//           </div>
//         </div>

//         <div className="w-full h-[140px] flex justify-center overflow-x-auto gap-4 mt-[20px] mb-[50px] scroll-smooth" ref={thumbnailsRef}>
//           {images.map((src, idx) => (
//             <img
//               key={idx}
//               src={src}
//               onClick={() => setCurrentIndex(idx)}
//               className={`h-full cursor-pointer border-4 ${idx === currentIndex ? 'border-green-600' : 'border-transparent'} object-contain`}
//               alt={`Thumbnail ${idx}`}
//               style={{ height: '100%', width: 'auto' }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GalleryPage











// "use client"

// import React, { useEffect, useState } from 'react';

// const GalleryPage = () => {
//   const images = [
//     "/assets/gallery1.jpg",
//     "/assets/gallery2.jpg",
//     "/assets/gallery3.jpg",
//     "/assets/gallery4.jpg",
//     "/assets/05.jpg",
//     "/assets/06.jpg",
//     "/assets/07.jpg",
//     "/assets/08.jpg",
//     "/assets/09.jpg",
//     "/assets/10.jpg",
//     "/assets/11.jpg",
//     "/assets/12.jpg",
//     "/assets/13.jpg",
//     "/assets/14.jpg",
//     "/assets/15.jpg",
//     "/assets/16.jpg"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleNext = () => {
//     setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className='max-w-[1800px] mx-auto'>
//       <div className="px-[16px] sm:px-[50px] lg:px-[100px] 2xl:px-[196px]">
//         <h1 className="text-[16px] sm:text-[20px] text-[#09B438] font-bold text-center pt-[28px] md:pt-[59px]">
//           GALLERY
//         </h1>
//         <h1 className="text-[32px] xl:text-[42px] text-[#333333] pt-[10px] sm:pt-[13px] font-semibold text-center">
//           Moments of Healing
//         </h1>
//         <h1 className="text-[14px] sm:text-[16px] xl:text-[20px] pt-[10px] text-[#333333] text-center">
//           Explore glimpses of our center, heartfelt experiences, and the serene<br />
//           moments that define our journey in holistic wellness.
//         </h1>

//         {/* Main Image Display */}
//         <div className='w-full border border-[#999999] rounded-[10px] px-[11px] sm:px-[40px] xl:px-[71px] py-[8px] sm:py-[32px] my-[14px] sm:my-[40px] relative'>
//           <img
//             src="/assets/left-arrow.svg"
//             alt="left-arrow"
//             className='absolute -left-3 sm:left-2 xl:left-4 top-1/2 cursor-pointer z-10 size-4 sm:size-6 xl:size-auto'
//             onClick={handlePrev}
//           />
//           <img
//             src="/assets/right-arrow.svg"
//             alt="right-arrow"
//             className='absolute -right-3 sm:right-2 xl:right-4 top-1/2 cursor-pointer z-10 size-4 sm:size-6 xl:size-auto'
//             onClick={handleNext}
//           />

//           <div className='w-full h-[184px] sm:h-[400px] xl:h-[600px] rounded-[10px] overflow-hidden flex justify-center items-center bg-[#03761844]'>
//             <img
//               src={images[currentIndex]}
//               className=' rounded-[10px] transition-all duration-500'
//               alt={`gallery-${currentIndex}`}
//             />
//           </div>
//         </div>

//         {/* Thumbnails */}
//         <div className="w-full h-[48px] sm:h-[120px] flex justify-start overflow-x-auto gap-[2px] sm:gap-4  sm:mt-[20px] mb-[20px] sm:mb-[50px] pl-4">
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-full w-auto rounded-[10px] cursor-pointer border-4 transition-all duration-300 ${
//                 currentIndex === index ? 'border-[#09B438]' : 'border-transparent'
//               }`}
//               alt={`thumb-${index}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;









"use client"

import React, { useEffect, useState } from 'react';

const GalleryPage = () => {
  const images = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
    "/assets/05.jpg",
    "/assets/06.jpg",
    "/assets/07.jpg",
    "/assets/08.jpg",
    "/assets/09.jpg",
    "/assets/10.jpg",
    "/assets/11.jpg",
    "/assets/12.jpg",
    "/assets/13.jpg",
    "/assets/14.jpg",
    "/assets/15.jpg",
    "/assets/16.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className='max-w-[1800px] mx-auto'>
      <div className="px-[16px] sm:px-[50px] lg:px-[100px] 2xl:px-[196px]">
        <h1 className="text-[16px] sm:text-[20px] text-[#09B438] font-bold text-center pt-[28px] md:pt-[59px]">
          GALLERY
        </h1>
        <h1 className="text-[32px] xl:text-[42px] text-[#333333] pt-[10px] sm:pt-[13px] leading-[120%] font-semibold text-center">
          Moments of <br className="sm:hidden inline" />Healing
        </h1>
        <h1 className="text-[14px] sm:text-[16px] xl:text-[20px] pt-[10px] pb-[10px] sm:pb-0 text-[#333333] px-4 sm:px-0 text-center">
          Explore glimpses of our center, heartfelt experiences, and the serene<br className="hidden sm:inline" />
          moments that define our journey in holistic wellness.
        </h1>

        {/* Main Image Display */}
        <div className='w-full border border-[#999999] rounded-[10px] px-[11px] sm:px-[40px] xl:px-[71px] py-[8px] sm:py-[32px] my-[14px] sm:my-[40px] relative'>
          <img
            src="/assets/left-arrow.svg"
            alt="left-arrow"
            className='absolute -left-3 sm:left-2 xl:left-4 top-1/2 cursor-pointer z-10 size-4 sm:size-6 xl:size-auto'
            onClick={handlePrev}
          />
          <img
            src="/assets/right-arrow.svg"
            alt="right-arrow"
            className='absolute -right-3 sm:right-2 xl:right-4 top-1/2 cursor-pointer z-10 size-4 sm:size-6 xl:size-auto'
            onClick={handleNext}
          />

          <div className='w-full h-[184px] sm:h-[400px] xl:h-[600px] rounded-[10px] overflow-hidden flex justify-center items-center bg-[#03761844]'>
            <img
              src={images[currentIndex]}
              className='max-h-full max-w-full object-contain rounded-[10px] transition-all duration-500'
              alt={`gallery-${currentIndex}`}
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="w-full h-[48px] sm:h-[120px] flex justify-start overflow-x-auto gap-[2px] sm:gap-4  sm:mt-[20px] mb-[20px] sm:mb-[50px] pl-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setCurrentIndex(index)}
              className={`h-full w-auto rounded-[10px] cursor-pointer border-4 transition-all duration-300 ${
                currentIndex === index ? 'border-[#09B438]' : 'border-transparent'
              }`}
              alt={`thumb-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
