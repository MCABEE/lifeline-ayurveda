import React from 'react'

function Section3() {
  return (
    <div className= 'px-[16px] sm:px-[50px] md:px-[100px] 2xl:px-[196px]'>
        <h1 className='text-[16px] sm:text-[20px] text-[#09B438] font-bold text-center pt-4 sm:pt-0'>TREATMENTS</h1>
        <h1 className='text-[32px]  xl:text-[42px] text-[#333333] font-semibold text-center'>Our Treatments</h1>
        <h1 className='text-[14px] sm:text-[16px] xl:text-[20px] text-[#333333] text-center'>Holistic healing rooted in ancient wisdom, tailored for your well-being</h1>

        <div className='w-full py-[16px] sm:py-[32px]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:grid-cols-4 gap-y-5 xl:gap-0'>
        <div className='w-full xl:w-[262px] border-[1px] border-[#999999] rounded-[10px] col-span-1 overflow-hidden '>
          <img src="/assets/ayurveda-care.svg" alt="ayurveda-care" className='w-full bg-cover' />
          <div className='px-[24px] pt-[25px] pb-[35px]'>
            <h1 className='text-[24px] font-semibold text-[#333333]'>Ayurveda Care</h1>
            <p className='text-[14px] font-light text-[#333333] leading-[120%] pt-[13px] pb-[25px] sm:h-[150px]'>Our Ayurveda Care section offers specialized treatments, including Spine & Joint Care, Geriatric Care, Skin & Hair Care, and more, designed to promote overall well-being and healing.</p>
            <span className='text-[14px] text-[#3674B5] '>Details</span>
          </div>
        </div>

        <div className='w-full xl:w-[262px] border-[1px] border-[#999999] rounded-[10px]  overflow-hidden'>
          <img src="/assets/ayurveda-cure.svg" alt="ayurveda-cure" className='w-full bg-cover'/>
          <div className='px-[24px] pt-[25px] pb-[35px]'>
            <h1 className='text-[24px] font-semibold text-[#333333]'> Ayurveda Cure</h1>
            <p className='text-[14px] font-light text-[#333333] leading-[120%] pt-[13px] pb-[25px] sm:h-[150px]'>Ayurveda Cure section for Neurological Disorders, Musculoskeletal Ailments, Women's Health (PCOD, etc.), Skin Conditions, and more, focusing on holistic healing and long-term wellness.</p>
            <span className='text-[14px] text-[#3674B5] '>Details</span>
          </div>
        </div>

        <div className='w-full xl:w-[262px] border-[1px] border-[#999999] rounded-[10px] overflow-hidden'>
          <img src="/assets/wellness.svg" alt="wellness" className='w-full bg-cover' />
          <div className='px-[24px] pt-[25px] pb-[35px]'>
            <h1 className='text-[24px] font-semibold text-[#333333]'>Wellness</h1>
            <p className='text-[14px] font-light text-[#333333] leading-[120%] pt-[13px] pb-[25px] sm:h-[150px]'>Our Wellness Treatments include Rejuvenation, Anti-Aging, Detox, Immunity Boosting, and more, promoting overall health and vitality.</p>
            <span className='text-[14px] text-[#3674B5] '>Details</span>
          </div>
        </div>

        <div className='w-full xl:w-[262px] border-[1px] border-[#999999] rounded-[10px] overflow-hidden col-start-auto lg:col-start-2 xl:col-start-auto'>
          <img src="/assets/ayurveda-therapy.svg" alt="ayurveda-therapy" className='w-full bg-cover' />
          <div className='px-[24px] pt-[25px] pb-[35px]'>
            <h1 className='text-[24px] font-semibold text-[#333333]'>Ayurveda Therapy</h1>
            <p className='text-[14px] font-light text-[#333333] leading-[120%] pt-[13px] pb-[25px] sm:h-[150px]'>Our Ayurveda Therapies include Shirodhara, Shirovasti, Nasyam, Kizhi, Abhyanga, Pizhichil, and more, offering holistic healing and deep relaxation.</p>
            <span className='text-[14px] text-[#3674B5] '>Details</span>
          </div>
        </div>

       
        </div>
        <button className='w-[160px] md:w-[176px] h-[40px] md:h-[48px] mx-auto mb-[32px] flex  justify-center items-center border-[1px] border-[#999999] rounded-[10px] text-[14px] md:text-[16px] text-[#333333]'>
        More Treatments
        </button>

    </div>
  )
}

export default Section3