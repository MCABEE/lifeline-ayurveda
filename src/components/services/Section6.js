import Link from 'next/link'
import React from 'react'

function Section6() {
  return (
    <div className= 'px-[16px] sm:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[196px] py-[24px] sm:py-[32px]'>
    <div className='flex flex-col-reverse md:flex-row border-[1px] border-[#999999] rounded-[30px] md:ps-4 lg:ps-9 xl:ps-[66px] overflow-hidden'> 
      <div className='w-full md:w-1/2 pt-[22px] md:pt-[38px] xl:pt-[68px]  px-[24px] md:px-0'>
          <h1 className='text-[28px] md:text-[32px] xl:text-[42px] font-semibold leading-[120%] text-[#333333]'>Ayurveda Wellness <br/>Treatments</h1>
          <p className=' text-[14px] xl:text-[16px] text-black font-light pt-[17px] leading-[140%] md:pe-10'>Post-pregnancy, a woman’s body undergoes significant physical and emotional changes, often leading to discomforts such as digestive issues (constipation, piles), lower back pain, varicose veins, depression, weight gain, and stretch marks.</p>
              <p className=' text-[14px] xl:text-[16px] text-black font-light pt-[17px] leading-[140%] md:pe-10'>
              Our rejuvenating treatments include herbal oil massages, skin exfoliation with herbal powders, hair care rituals, and revitalizing face packs, all designed to support hormone balance, promote healing, and restore the body’s natural glow.
                  </p>
                  <Link href={"/ayurvedaWellness"}>
                  <button className='w-[140px] xl:w-[160px] h-[40px] md:h-[48px] bg-[#3674B5] flex justify-center items-center text-white text-[14px] xl:text-[16px] font-semibold rounded-[10px] mt-[30px] mb-[20px] '>
                 Learn More
                  </button>
                  </Link>
      </div>
      <div className='w-full md:w-1/2  round-r-[30px] overflow-hidden'>
          <img src="/assets/ayurveda-wellness-service.svg" alt="ayurveda-wellness-service" className='w-full h-full object-cover  ' />


      </div>
  </div>
</div>
  )
}

export default Section6