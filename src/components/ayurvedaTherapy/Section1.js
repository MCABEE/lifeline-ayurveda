import Link from 'next/link'
import React from 'react'

function Section1() {
  return (
    <div className='bg-image-ayurvedaTherapy pb-[64px] sm:pb-[160px] '>
    <h1 className='text-[28px] md:text-[40px] xl:text-[56px] text-white font-semibold text-center pt-[174px] md:pt-[250px] 2xl:pt-[336px]'>
    Ayurveda Therapy
    </h1>
    <p className='text-[20px] md:text-[28px] xl:text-[40px] text-white text-center pb-[25px] sm:pb-[61px]'>
        Embrace Ayurveda,<br className='sm:hidden inline'/>
         Live Well, Live Longer.</p>
    <Link href={"/contact"}>
    <button className='w-[216px] xl:w-[328px] h-[40px] md:h-[64px] mx-auto text-white flex justify-center items-center bg-[#09B438] rounded-[15px] text-[12px] xl:text-[16px] font-semibold'>
    BOOK APPOINTMENT
    </button>
    </Link>


</div>
  )
}

export default Section1