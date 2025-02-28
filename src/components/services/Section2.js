import Link from 'next/link'
import React from 'react'

function Section2() {
  return (
    <div>
            <div className= 'px-[16px] sm:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[196px] py-[24px] sm:pt-[64px] sm:pb-[32px]'>
    <div className='flex flex-col-reverse md:flex-row border-[1px] border-[#999999] rounded-[30px] md:ps-4 lg:ps-9 xl:ps-[66px] overflow-hidden'> 
      <div className='w-full md:w-1/2 pt-[22px] md:pt-[38px] xl:pt-[68px]  px-[24px] md:px-0'>
          <h1 className='text-[28px] md:text-[32px] xl:text-[42px] font-semibold leading-[120%] text-[#333333]'>Ayurveda <br/> Therapy </h1>
          <p className=' text-[14px] xl:text-[16px] text-black font-light pt-[17px] leading-[140%] md:pe-10'>
          Lifeline Ayurveda is deeply rooted in Kerala’s rich Ayurvedic heritage, carrying forward a tradition that has been preserved and practiced for generations. Our mission is to promote Ayurveda and its healing wisdom across India and abroad, helping more people experience its profound benefits.            </p>
              <p className=' text-[14px] xl:text-[16px] text-black font-light pt-[17px] leading-[140%] md:pe-10'>


              Our journey began in 1980 with the establishment of an Ayurvedic Treatment Centre in Pala, Kerala. Since then, we have been dedicated to providing holistic healing—restoring physical health while fostering a deep connection to the inner self.                   </p>
                  <Link href={"/ayurvedaTherapy"}>
                  <button className='w-[140px] xl:w-[160px] h-[40px] md:h-[48px] bg-[#3674B5] flex justify-center items-center text-white text-[14px] xl:text-[16px] font-semibold rounded-[10px] mt-[30px] mb-[20px] '>
                 Learn More
                  </button>
                  </Link>
      </div>
      <div className='w-full md:w-1/2  round-r-[30px] overflow-hidden'>
          <img src="/assets/ayurveda-therapy-service.svg" alt="ayurveda-therapy-service-img" className='w-full h-full object-cover ' />

      </div>
  </div>
</div>
    </div>
  )
}

export default Section2