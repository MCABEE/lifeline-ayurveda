import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='max-w-[1800px] mx-auto'>
          <div className="px-[16px] sm:px-[50px] lg:px-[100px] 2xl:px-[196px]">
      <h1 className="text-[16px] sm:text-[20px] text-[#09B438] font-bold text-center pt-[28px] md:pt-[59px] ">
        TESTIMONIALS
      </h1>
      <h1 className="text-[32px]  xl:text-[42px] text-[#333333] pt-[10px] sm:pt-[13px] font-semibold text-center">
        What they say’s <span className="hidden sm:inline">about us</span>
      </h1>
      <h1 className="text-[14px] sm:text-[16px] xl:text-[20px] pt-[10px] text-[#333333] text-center">
        Real stories of healing and wellness from our satisfied customers
      </h1>
      <div className="w-full pt-[42px] flex overflow-hidden overflow-x-scroll   gap-y-4 gap-x-4  xl:gap-x-8">
        <div className="min-w-[328px] sm:w-1/2 border-[1px] border-[#999999] rounded-[10px] px-6 sm:px-4 lg:ps-9 xl:ps-[66px] lg:pe-[23px]">
          <img
            src="/assets/double-quotes.svg"
            alt="img"
            className="py-[24px] sm:pt-[48px] sm:pb-[19px]"
          />
          <p className="text-[14px] sm:text-[16px] text-[#333333] xl:h-[120px] font-light leading-[140%]">
          I recently visited the newly opened Lifeline Ayurveda center and was genuinely impressed. The environment is welcoming, the staff is very cooperative, and the service quality stands out. A great place to begin your Ayurvedic wellness journey.

          </p>
          <h2 className="text-[16px] text-[#333333] font-semibold pt-[24px] sm:pt-[18px] pb-[4px]">
          Thomas P
          </h2>
          <h3 className="text-[14px] text-[#333333] pb-[25px]">Thodupuzha</h3>
        </div>

        <div className="min-w-[328px] sm:w-1/2 border-[1px] border-[#999999] rounded-[10px] px-6 sm:px-4 lg:ps-9 xl:ps-[66px] lg:pe-[23px]">
          <img
            src="/assets/double-quotes.svg"
            alt="img"
            className="py-[24px] sm:pt-[48px] sm:pb-[19px]"
          />
          <p className="text-[14px] sm:text-[16px] text-[#333333] xl:h-[120px]  font-light leading-[140%]">
          Lifeline Ayurveda offers excellent service with a team that’s truly supportive and professional. I was especially happy with their affordable packages, making quality Ayurvedic care accessible without compromising on comfort or attention. Highly recommend them!

          </p>
          <h2 className="text-[16px] text-[#333333] font-semibold pt-[24px] sm:pt-[18px] pb-[4px]">
          Pradeepkumar G
          </h2>
          <h3 className="text-[14px] text-[#333333] pb-[25px]">Palai</h3>
        </div>
      </div>


     


      <h1 className='text-[32px]  xl:text-[42px] font-semibold text-center text-[#333333] pt-[55px]' >Want to share your experience?</h1>
      <h1 className='text-[16px] sm:text-[20px] font-semibold text-center text-[#333333]' >
      We’d love to hear from you!, Leave a testimonial and share your thoughts!
      </h1>
   <Link href={"/contact"}>
   <button className='w-[280px] sm:w-[384px] h-[40px] sm:h-[48px] mx-auto mt-[21px] sm:mt-[51px] mb-[48px] sm:mb-[74px] flex justify-center items-center text-white text-[14px] sm:text-[16px] font-semibold bg-[#3B7DED] rounded-[10px]'>
      Write now
      </button>
   </Link>

    </div>
    </div>
  )
}

export default page